import { createClient } from '@libsql/client';

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation — ensure sab fields filled hain
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Pehli baar table create karne ke liye ye query chalayein,
    // ek baar table ban jaaye, to is line ko comment ya hata den.
    await turso.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        message TEXT
      )
    `);

    // Insert the contact form data into the table
    await turso.execute(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Server error' }),
      { status: 500 }
    );
  }
}

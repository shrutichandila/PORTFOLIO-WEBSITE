"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to send message");

      setStatus({ loading: false, success: data.message, error: null });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      <label className="flex flex-col text-sm font-semibold">
        <span>
          Name<span className="text-red-500 ml-1">*</span>
        </span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className="mt-1 p-3 rounded-lg bg-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </label>

      <label className="flex flex-col text-sm font-semibold">
        <span>
          Email<span className="text-red-500 ml-1">*</span>
        </span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="mt-1 p-3 rounded-lg bg-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </label>

      <label className="flex flex-col text-sm font-semibold">
        <span>
          Message<span className="text-red-500 ml-1">*</span>
        </span>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message here..."
          className="mt-1 p-3 rounded-lg bg-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
        />
      </label>

      <button
        type="submit"
        disabled={status.loading}
        className="mt-4 bg-[#1e3a8a] hover:bg-[#162e6c] transition text-white font-semibold py-3 rounded-lg shadow-sm"
      >
        {status.loading ? "Sending..." : "Send Message"}
      </button>

      {status.success && <p className="mt-4 text-green-400 font-semibold">{status.success}</p>}
      {status.error && <p className="mt-4 text-red-400 font-semibold">Error: {status.error}</p>}
    </form>
  );
}

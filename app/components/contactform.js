"use client";

import { useState } from "react";
import styles from "./contactform.module.css";

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        <span>
          Name<span className={styles.required}>*</span>
        </span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        <span>
          Email<span className={styles.required}>*</span>
        </span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        <span>
          Message<span className={styles.required}>*</span>
        </span>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message here..."
          className={`${styles.input} ${styles.textarea}`}
        />
      </label>

      <button
        type="submit"
        disabled={status.loading}
        className={styles.button}
      >
        {status.loading ? "Sending..." : "Send Message"}
      </button>

      {status.success && <p className={styles.success}>{status.success}</p>}
      {status.error && <p className={styles.error}>Error: {status.error}</p>}
    </form>
  );
}

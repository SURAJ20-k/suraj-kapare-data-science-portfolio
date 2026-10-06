"use client";

import { useEffect, useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Email copied.");
    } catch {
      setMessage("Copy unavailable. Select the email address above.");
    }
    timer.current = setTimeout(() => setMessage(""), 4500);
  }

  return <div className="copy-email"><button className="text-button" onClick={copy}>Copy email address</button><span role="status" aria-live="polite">{message}</span></div>;
}

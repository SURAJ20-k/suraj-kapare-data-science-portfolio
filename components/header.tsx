"use client";

import { useEffect, useRef, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

const links = [["Work", "work"], ["About", "about"], ["Experience", "experience"], ["Skills", "skills"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme !== "light");
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    setDark(next);
    try { localStorage.setItem("suraj-theme", next ? "dark" : "light"); } catch { /* Storage is optional. */ }
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#top" className="brand" aria-label="Suraj Kapare, back to top" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">s<span>k</span>.</span>
          <span className="brand-name">Suraj Kapare<span>Data Scientist</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
            {dark ? <SunIcon/> : <MoonIcon/>}
          </button>
          <a href="#contact" className="contact-nav">Let’s connect</a>
          <button ref={menuButton} className="icon-button menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
            <span className={open ? "menu-lines open" : "menu-lines"}><span/><span/></span>
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {links.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Let’s connect</a>
      </nav>
    </header>
  );
}

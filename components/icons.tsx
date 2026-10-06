import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;
export function SunIcon(props: Props) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>;
}
export function MoonIcon(props: Props) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>;
}
export function DownloadIcon(props: Props) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}><path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/></svg>;
}
export function MailIcon(props: Props) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>;
}
export function LinkedInIcon(props: Props) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M5.4 3.5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM3.8 9h3.3v11.5H3.8V9Zm5.6 0h3.2v1.6h.1c.5-.9 1.5-1.9 3.4-1.9 3.6 0 4.1 2.3 4.1 5.3v6.5h-3.3v-5.8c0-1.5 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.9H9.4V9Z"/></svg>;
}

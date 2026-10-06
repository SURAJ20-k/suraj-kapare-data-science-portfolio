import Link from "next/link";

export default function NotFound() {
  return <main className="not-found shell"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>A missing data point.</h1><p>This page isn’t here. My projects and contact details are on the homepage.</p><Link className="button button-primary" href="/">Return to the portfolio</Link></main>;
}

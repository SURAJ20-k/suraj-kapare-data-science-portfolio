import { Header } from "@/components/header";
import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { CopyEmail } from "@/components/copy-email";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { profile, projects, skillGroups } from "@/lib/content";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header/>
      <main id="main">
        <section className="hero shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">DATA SCIENTIST <span aria-hidden="true">/</span> WASHINGTON, DC</p>
            <h1 id="hero-title">Messy data.<br/><span>Clear decisions.</span></h1>
            <p className="hero-description">I’m Suraj. I connect analytical thinking with machine learning to find the signals that matter—and explain what they mean.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work</a><a className="button button-secondary" href={profile.resume} download><DownloadIcon/>Download résumé</a></div>
            <a className="hero-github" href={profile.github} target="_blank" rel="noopener noreferrer"><GitHubIcon/>Find me on GitHub<span className="sr-only"> (opens in a new tab)</span></a>
            <p className="hero-footnote">M.S. Data Science, George Washington University <span>’26</span></p>
          </div>
          <figure className="profile-portrait"><Image src={profile.photo} alt="Suraj Kapare wearing a suit and blue tie" width={1254} height={1254} sizes="(max-width: 850px) 90vw, 440px" preload/><figcaption><div><strong>Suraj Kapare</strong><span>Data Scientist · M.S. at GWU</span></div><span className="portrait-monogram" aria-hidden="true">sk.</span></figcaption></figure>
        </section>

        <div className="proof-strip shell" aria-label="Project highlights">
          <div><strong>129K<span>+</span></strong><p>passenger records analyzed</p></div>
          <div><strong>800</strong><p>images in an aesthetics study</p></div>
          <div><strong>2,518</strong><p>repeat buyers identified for outreach</p></div>
          <p className="proof-context">From raw data<br/>to a sharper question.</p>
        </div>

        <section className="section shell" id="work" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="eyebrow section-eyebrow"><span>01</span> SELECTED WORK</p><h2 id="work-title">Questions worth exploring.</h2></div><p className="section-intro">Four graduate team projects.<br/>The questions, the methods, and the evidence.</p></div>
          <div className="project-grid">{projects.map(project => <ProjectCard project={project} key={project.id}/>)}</div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="shell about-grid">
            <div><p className="eyebrow section-eyebrow"><span>02</span> THE WAY I THINK</p><h2 id="about-title">An engineer’s curiosity.<br/><span>A data scientist’s toolkit.</span></h2></div>
            <div className="about-copy"><p className="large-copy">I started with mechanical systems. Now I work with the patterns hidden inside data.</p><p>My engineering background taught me to break down a problem, test assumptions, and pay attention to how the pieces fit. A master’s in Data Science at GWU brought that approach to predictive modeling, visual analysis, and cloud workflows.</p><p>I’m especially interested in work where a strong model and a clear explanation matter equally. My projects span customer behavior, passenger satisfaction, and the way people perceive places.</p><div className="about-principles"><span>Start with the question.</span><span>Test the baseline.</span><span>Make the result useful.</span></div></div>
          </div>
        </section>

        <section className="section shell" id="experience" aria-labelledby="experience-title">
          <div className="section-heading"><div><p className="eyebrow section-eyebrow"><span>03</span> EXPERIENCE & FOUNDATIONS</p><h2 id="experience-title">A practical path into data.</h2></div></div>
          <div className="experience-layout">
            <div className="experience-list">
              <article className="experience-item"><div className="timeline-mark" aria-hidden="true"/><div className="experience-top"><span className="eyebrow">ETLHIVE · PUNE, INDIA</span><span className="date">Jan–May 2024</span></div><h3>Data Analyst Intern</h3><p>Made customer-shopping data usable for segmentation and business recommendations.</p><ul><li>Prepared and engineered features from 3,900 shopping records with Python and Pandas, then loaded the analysis dataset into PostgreSQL.</li><li>Used SQL window functions, CTEs, and conditional logic to surface 2,518 repeat buyers without subscriptions—a focused audience for subscription outreach.</li><li>Built a Power BI dashboard bringing revenue, product, discounts, and subscription trends into a single analytical view.</li></ul><div className="experience-result"><span>Key finding</span><strong>Repeat customers. Untapped subscription potential.</strong></div></article>
              <article className="experience-item"><div className="timeline-mark muted-mark" aria-hidden="true"/><div className="experience-top"><span className="eyebrow">STES ROCKETRY · UNIVERSITY TEAM</span><span className="date">Sep 2020–Aug 2021</span></div><h3>Propulsion Design Team Member</h3><p>Combined MATLAB and ANSYS simulations with test data to assess propulsion performance for a university team competing in the Spaceport America Cup.</p></article>
            </div>
            <aside className="education-card" aria-label="Education and credentials"><p className="eyebrow">EDUCATION</p><div><span className="education-year">2024 — 2026</span><h3>M.S. Data Science</h3><p>The George Washington University</p><span className="gpa">3.64 GPA</span></div><div><span className="education-year">2018 — 2022</span><h3>B.E. Mechanical Engineering</h3><p>Savitribai Phule Pune University</p></div><div className="credentials"><p className="eyebrow">CERTIFICATIONS</p><ul><li>Data Scientist Associate</li><li>AI Engineer for Data Scientists Associate</li></ul></div></aside>
          </div>
        </section>

        <section className="section shell skills-section" id="skills" aria-label="Skills">
          <SectionHeading number="04" label="THE TOOLKIT" title="From exploration to execution.">Tools organized around the work they help me do.</SectionHeading>
          <div className="skills-grid">{skillGroups.map(group => <article className="skill-card" key={group.number}><span className="skill-number">{group.number}</span><h3>{group.title}</h3><p>{group.summary}</p><ul className="skill-tags">{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
        </section>

        <section className="contact-section shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-card"><div><p className="eyebrow">05 / LET’S CONNECT</p><h2 id="contact-title">A good question<br/>is a great place to start.</h2><p>Have a data science opportunity or an interesting problem?<br className="desktop-break"/> I’d like to hear about it.</p></div><div className="contact-links"><a className="email-link" href={`mailto:${profile.email}`}><MailIcon/><span>{profile.email}</span></a><CopyEmail email={profile.email}/><div className="contact-secondary"><a href={profile.github} target="_blank" rel="noopener noreferrer"><GitHubIcon/>GitHub<span className="sr-only"> (opens in a new tab)</span></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon/>LinkedIn<span className="sr-only"> (opens in a new tab)</span></a><a href={profile.resume} download><DownloadIcon/>Data science résumé</a><a href={profile.analystResume} download><DownloadIcon/>Data analyst résumé</a></div><span className="contact-location">{profile.location}</span></div></div>
        </section>
      </main>
      <footer className="shell footer"><span>© {new Date().getFullYear()} {profile.fullName}</span><span>Curiosity. Evidence. Clarity.</span><a href="#top">Back to top</a></footer>
    </>
  );
}

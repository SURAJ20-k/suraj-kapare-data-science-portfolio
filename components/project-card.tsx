import type { Project } from "@/lib/content";
import { GitHubIcon } from "./icons";
import { ProjectGallery } from "./project-gallery";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" id={project.id}>
      <ProjectGallery projectId={project.id} images={project.images}/>
      <div className="project-content">
        <div className="project-meta"><span>{project.number} / {project.category}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-stat"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
        <ul className="tag-list" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        {project.githubUrl && <a className="project-repo" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><GitHubIcon/>View project on GitHub<span className="sr-only"> (opens in a new tab)</span></a>}
        <details className="case-study">
          <summary>Explore the case study<span className="plus" aria-hidden="true"/></summary>
          <div className="case-body">
            <p className="case-date">{project.dates} · GWU</p>
            <h4>The question</h4><p>{project.question}</p>
            <h4>Project work</h4><p>{project.approach}</p>
            <h4>The outcome</h4><p>{project.result}</p>
            <p className="scope-note">{project.scope}</p>
          </div>
        </details>
      </div>
    </article>
  );
}

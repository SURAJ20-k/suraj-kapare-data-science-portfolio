import type { Project } from "@/lib/content";

function ProjectVisual({ id }: { id: string }) {
  if (id === "urban-aesthetics") return (
    <div className="project-visual vision-visual" aria-label="800 images analyzed through 15 visual properties and compared with human ratings">
      <span className="eyebrow">THEORY MEETS MACHINE LEARNING</span>
      <div className="property-display"><strong>15<span>visual properties</span></strong><div className="property-grid" aria-hidden="true">{Array.from({ length: 15 }, (_, i) => <span key={i}/>)}</div></div>
      <div className="visual-footer"><span>Claude + SAM</span><span>Human-rated reference</span></div>
    </div>
  );
  if (id === "passenger-satisfaction") return (
    <div className="project-visual prediction-visual">
      <span className="eyebrow">FROM BASELINE TO BOOSTING</span>
      <div className="accuracy-comparison"><div><strong>88<span>%</span></strong><span>Logistic regression</span></div><span className="comparison-line" aria-hidden="true"/><div><strong>96<span>%</span></strong><span>LightGBM</span></div></div>
      <div className="visual-footer"><span>Reported accuracy</span><span>5-fold cross-validation</span></div>
    </div>
  );
  return (
    <div className="project-visual cloud-visual">
      <span className="eyebrow">A COMPLETE INFERENCE PATH</span>
      <div className="cloud-flow" aria-label="New comments enter API Gateway, pass through Lambda, and are classified by SageMaker">
        {["API Gateway", "Lambda", "SageMaker"].map((step, i) => <div key={step}><span className="flow-node">0{i + 1}</span><strong>{step}</strong></div>)}
      </div>
      <div className="visual-footer"><span>REST API</span><span>Positive / Neutral / Negative</span></div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" id={project.id}>
      <ProjectVisual id={project.id}/>
      <div className="project-content">
        <div className="project-meta"><span>{project.number} / {project.category}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-stat"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
        <ul className="tag-list" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        <details className="case-study">
          <summary>Explore the case study<span className="plus" aria-hidden="true"/></summary>
          <div className="case-body">
            <p className="case-date">{project.dates} · GWU</p>
            <h4>The question</h4><p>{project.question}</p>
            <h4>My contribution</h4><p>{project.approach}</p>
            <h4>The outcome</h4><p>{project.result}</p>
            <p className="scope-note">{project.scope}</p>
          </div>
        </details>
      </div>
    </article>
  );
}

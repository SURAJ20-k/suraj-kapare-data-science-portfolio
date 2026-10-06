export function ModelChart({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={`model-chart ${compact ? "compact" : ""}`}>
      <div className="chart-topline"><span className="eyebrow">MODEL COMPARISON</span><span className="chart-badge">+8 pp</span></div>
      <figcaption>Better predictions.<br/><span>Measured against a baseline.</span></figcaption>
      <div className="chart-plot" role="img" aria-label="Reported passenger satisfaction accuracy: logistic regression 88 percent, LightGBM 96 percent. Difference: eight percentage points.">
        <div className="chart-grid" aria-hidden="true"><span>100%</span><span>50%</span><span>0%</span></div>
        <div className="chart-bars">
          <div className="bar-column"><div className="chart-bar baseline" style={{ height: "88%" }}><strong>88<span>%</span></strong></div><span className="bar-label">Logistic regression</span></div>
          <div className="bar-column"><div className="chart-bar selected" style={{ height: "96%" }}><strong>96<span>%</span></strong></div><span className="bar-label">LightGBM</span></div>
        </div>
      </div>
      <div className="chart-footer"><span>Passenger satisfaction</span><span>5-fold CV</span></div>
      {!compact && <p className="chart-note">Reported graduate-project accuracy · 129K+ survey records</p>}
    </figure>
  );
}

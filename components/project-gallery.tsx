"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/lib/content";
import { ExpandIcon } from "./icons";

export function ProjectGallery({ projectId, images }: { projectId: string; images: ProjectImage[] }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const active = images[selected];

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function enlarge() {
    dialog.current?.showModal();
    setOpen(true);
  }

  function close() { dialog.current?.close(); }

  return (
    <div className="project-gallery">
      <figure>
        <button ref={trigger} className={`gallery-cover ${projectId === "urban-aesthetics" ? "dark-figure" : ""}`} onClick={enlarge} aria-label={`Enlarge project image: ${active.alt}`} aria-haspopup="dialog">
          <Image src={active.src} alt={active.alt} width={active.width} height={active.height} sizes="(max-width: 850px) 100vw, 50vw"/>
          <span className="enlarge-label"><ExpandIcon/>Enlarge image</span>
        </button>
        <figcaption className="gallery-caption" aria-live="polite">{active.caption}</figcaption>
      </figure>
      <div className="gallery-controls">
        <div className="gallery-thumbnails" role="group" aria-label="Choose project image">
          {images.map((item, index) => <button key={item.src} type="button" className="gallery-thumb" onClick={() => setSelected(index)} aria-pressed={selected === index} aria-label={`Show image ${index + 1}: ${item.caption}`}><Image src={item.src} alt="" width={84} height={52} sizes="60px"/></button>)}
        </div>
        <span className="gallery-count">{selected + 1} / {images.length}</span>
      </div>
      <dialog ref={dialog} className="image-dialog" aria-labelledby={`${projectId}-image-title`} aria-describedby={`${projectId}-image-caption`} onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) close(); }} onKeyDown={event => {
        if (event.key === "ArrowRight") { event.preventDefault(); setSelected((selected + 1) % images.length); }
        if (event.key === "ArrowLeft") { event.preventDefault(); setSelected((selected + images.length - 1) % images.length); }
      }}>
        {open && <div className="image-dialog-panel">
          <div className="image-dialog-header"><h3 id={`${projectId}-image-title`}>Project figure <span>{selected + 1} / {images.length}</span></h3><button className="dialog-close" onClick={close} aria-label="Close image viewer" autoFocus>Close <span aria-hidden="true">×</span></button></div>
          <Image className="dialog-image" src={active.src} alt={active.alt} width={active.width} height={active.height} sizes="100vw" unoptimized/>
          <div className="image-dialog-footer"><div><p id={`${projectId}-image-caption`}>{active.caption}</p><p className="image-source">{active.source}</p></div><div className="dialog-navigation"><button onClick={() => setSelected((selected + images.length - 1) % images.length)} aria-label="Previous project image">Previous</button><button onClick={() => setSelected((selected + 1) % images.length)} aria-label="Next project image">Next</button></div></div>
        </div>}
      </dialog>
    </div>
  );
}

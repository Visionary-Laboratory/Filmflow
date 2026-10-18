(() => {
  "use strict";
  const content = window.FILMFLOW_CONTENT;
  if (!content) return;
  const text = (tag, className, value) => {
    const el = document.createElement(tag);
    el.className = className;
    el.textContent = value;
    return el;
  };
  document.getElementById("authors").textContent = content.authors;
  document.getElementById("affiliations").textContent = content.affiliations;

  function renderGallery(target, items) {
    const grid = document.getElementById(target);
    items.forEach(item => {
      const card = document.createElement("article");
      card.className = "demo-card";
      card.id = item.id;
      const frame = document.createElement("div");
      frame.className = "demo-frame";
      if (item.src) {
        const video = document.createElement("video");
        video.controls = true;
        video.playsInline = true;
        video.preload = "none";
        video.setAttribute("aria-label", item.title);
        if (item.poster) video.poster = item.poster;
        video.src = item.src;
        video.addEventListener("play", () => {
          document.querySelectorAll("video").forEach(other => { if (other !== video) other.pause(); });
        });
        video.addEventListener("error", () => {
          if (frame.querySelector(".media-error")) return;
          const error = text("div", "media-error", "Video unavailable. Please check the media file.");
          error.setAttribute("role", "status");
          frame.append(error);
        });
        frame.append(video);
      } else {
        const inner = document.createElement("div");
        inner.className = "placeholder-inner";
        const icon = text("span", "frame-icon", "");
        icon.setAttribute("aria-hidden", "true");
        inner.append(icon, text("span", "placeholder-label", "VIDEO COMING SOON"));
        frame.append(text("span", "slot-corner", item.id.toUpperCase()), inner, text("span", "aspect-label", "16:9"));
        frame.setAttribute("role", "img");
        frame.setAttribute("aria-label", `${item.title}: empty video slot`);
      }
      const meta = document.createElement("div");
      meta.className = "demo-meta";
      meta.append(text("h3", "", item.title));
      if (!item.src) meta.append(text("span", "demo-state", "To be added"));
      card.append(frame, meta);
      if (item.caption) card.append(text("p", "demo-caption", item.caption));
      grid.append(card);
    });
  }
  renderGallery("long-grid", content.longTakes);
  renderGallery("short-grid", content.shortShots);
  renderGallery("v2v-grid", content.v2v);

  for (const [id, url] of [["code-resource", content.codeUrl], ["dataset-resource", content.datasetUrl]]) {
    if (!url) continue;
    try {
      const parsed = new URL(url);
      if (!["https:", "http:"].includes(parsed.protocol)) continue;
      const el = document.getElementById(id);
      const link = document.createElement("a");
      link.className = el.className;
      link.href = parsed.href;
      link.target = "_blank";
      link.rel = "noopener";
      link.append(el.firstElementChild, text("span", "", "↗"));
      if (id === "code-resource") link.querySelector("p").textContent = "Explore the implementation.";
      el.replaceWith(link);
    } catch { /* Leave the resource unavailable until a valid URL is supplied. */ }
  }
  const links = [...document.querySelectorAll(".demo-nav a")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach(link => {
          const active = link.hash === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
    }, {rootMargin: "-10% 0px -55% 0px", threshold: 0});
    document.querySelectorAll(".gallery-section").forEach(section => observer.observe(section));
  }
})();

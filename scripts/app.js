const state = {
  reviews: window.PC_RUSH_REVIEWS || [],
  activeId: "",
};

const elements = {
  nav: document.querySelector("#review-nav"),
  panel: document.querySelector("#review-panel"),
  searchInput: document.querySelector("#search-input"),
  readingToggle: document.querySelector("#reading-toggle"),
  resetSession: document.querySelector("#reset-session"),
  resultsPanel: document.querySelector("#results-panel"),
  resultsList: document.querySelector("#results-list"),
  resultsCount: document.querySelector("#results-count"),
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderTags(tags) {
  if (!Array.isArray(tags) || tags.length === 0) {
    return "";
  }

  return `
    <ul class="tag-list" aria-label="Tags">
      ${tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
    </ul>
  `;
}

function renderChecklist(review) {
  return `
    <section class="session-checklist" aria-label="Trame express">
      <div class="section-title">
        <div>
          <p class="section-kicker">Pendant la séance</p>
          <h3>Trame express</h3>
        </div>
        <span id="check-progress">0/${review.checklist.length}</span>
      </div>
      <div class="check-grid">
        ${review.checklist
          .map(
            (item, index) => `
              <label class="check-item">
                <input type="checkbox" data-check-index="${index}">
                <span data-reading>${escapeHtml(item)}</span>
              </label>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderBlocks(review) {
  return review.blocks
    .map((block) => {
      const id = `${review.id}-${slugify(block.title)}`;
      const commands = block.commands
        ? `<pre><code>${escapeHtml(block.commands)}</code></pre>`
        : "";
      const questions = Array.isArray(block.questions) && block.questions.length
        ? `
          <div class="question-group">
            <h4>Questions à poser</h4>
            <ul>
              ${block.questions.map((line) => `<li data-reading>${escapeHtml(line)}</li>`).join("")}
            </ul>
          </div>
        `
        : "";
      const tests = Array.isArray(block.tests) && block.tests.length
        ? `
          <div class="test-group">
            <h4>Tests utiles</h4>
            <ul>
              ${block.tests.map((line) => `<li data-reading>${escapeHtml(line)}</li>`).join("")}
            </ul>
          </div>
        `
        : "";
      const alert = block.alert
        ? `<p class="alert" data-reading>${escapeHtml(block.alert)}</p>`
        : "";
      const tutorNote = block.tutorNote
        ? `<p class="tutor-note" data-reading>${escapeHtml(block.tutorNote)}</p>`
        : "";

      return `
        <article class="review-block" id="${escapeHtml(id)}">
          <div class="block-heading">
            <h3>${escapeHtml(block.title)}</h3>
            <span>${escapeHtml(block.kind)}</span>
          </div>
          ${renderTags(block.tags)}
          ${block.body.map((line) => `<p data-reading>${escapeHtml(line)}</p>`).join("")}
          ${commands}
          <div class="block-columns">
            ${questions}
            ${tests}
          </div>
          ${alert}
          ${tutorNote}
        </article>
      `;
    })
    .join("");
}

function updateProgress() {
  const checks = [...elements.panel.querySelectorAll("[data-check-index]")];
  const done = checks.filter((input) => input.checked).length;
  const progress = document.querySelector("#check-progress");
  if (progress) {
    progress.textContent = `${done}/${checks.length}`;
  }
}

function renderNav() {
  elements.nav.innerHTML = state.reviews
    .map((review) => {
      const current = review.id === state.activeId ? ' aria-current="page"' : "";
      return `
        <button type="button" data-review-id="${escapeHtml(review.id)}"${current}>
          <span class="nav-number">${escapeHtml(review.number)}</span>
          <span class="nav-copy">
            <strong>${escapeHtml(review.shortTitle)}</strong>
            <span>${escapeHtml(review.focus)}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderReview(reviewId, blockId = "") {
  const review = state.reviews.find((item) => item.id === reviewId) || state.reviews[0];
  if (!review) {
    elements.panel.innerHTML = '<p class="empty-state">Aucune catégorie à afficher.</p>';
    return;
  }

  state.activeId = review.id;
  renderNav();
  elements.panel.innerHTML = `
    <article class="review-page">
      <p class="review-kicker">${escapeHtml(review.focus)}</p>
      <h2>${escapeHtml(review.title)}</h2>
      <p class="summary" data-reading>${escapeHtml(review.summary)}</p>
      <ul class="meta-list" aria-label="Informations">
        <li>${review.blocks.length} fiches</li>
        <li>${escapeHtml(review.duration)}</li>
        <li>${escapeHtml(review.goal)}</li>
      </ul>
      ${renderChecklist(review)}
      <section class="review-map" aria-label="Plan de la catégorie">
        <h3>Plan de review</h3>
        <ol>
          ${review.blocks.map((block) => `<li>${escapeHtml(block.title)}</li>`).join("")}
        </ol>
      </section>
      ${renderBlocks(review)}
    </article>
  `;

  window.readingAssist.refresh(document);
  updateProgress();

  if (blockId) {
    document.getElementById(blockId)?.scrollIntoView({ block: "start" });
  } else {
    elements.panel.scrollIntoView({ block: "start" });
  }
}

function getSearchText(review, block) {
  return [
    review.title,
    review.shortTitle,
    review.focus,
    review.summary,
    block.title,
    block.kind,
    ...(block.tags || []),
    ...(block.body || []),
    ...(block.questions || []),
    ...(block.tests || []),
    block.commands || "",
    block.alert || "",
    block.tutorNote || "",
  ]
    .join(" ")
    .toLowerCase();
}

function search(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    elements.resultsPanel.hidden = true;
    return;
  }

  const results = [];
  state.reviews.forEach((review) => {
    review.blocks.forEach((block) => {
      if (getSearchText(review, block).includes(normalized)) {
        results.push({ review, block });
      }
    });
  });

  elements.resultsPanel.hidden = false;
  elements.resultsCount.textContent = `${results.length} résultat${results.length > 1 ? "s" : ""}`;

  if (results.length === 0) {
    elements.resultsList.innerHTML = '<li class="empty-state" data-reading>Aucun résultat.</li>';
    window.readingAssist.refresh(document);
    return;
  }

  elements.resultsList.innerHTML = results
    .map(({ review, block }) => {
      const targetId = `${review.id}-${slugify(block.title)}`;
      return `
        <li>
          <button type="button" class="result-button" data-review-id="${escapeHtml(review.id)}" data-block-id="${escapeHtml(targetId)}">
            <strong>${escapeHtml(block.title)}</strong>
            <span>${escapeHtml(review.title)}</span>
            <span data-reading>${escapeHtml(block.body[0])}</span>
          </button>
        </li>
      `;
    })
    .join("");
  window.readingAssist.refresh(document);
}

elements.nav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-review-id]");
  if (!button) {
    return;
  }
  elements.searchInput.value = "";
  elements.resultsPanel.hidden = true;
  renderReview(button.dataset.reviewId);
});

elements.searchInput.addEventListener("input", (event) => {
  search(event.target.value);
});

elements.resultsList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-review-id][data-block-id]");
  if (!button) {
    return;
  }
  renderReview(button.dataset.reviewId, button.dataset.blockId);
});

elements.panel.addEventListener("change", (event) => {
  if (event.target.matches("[data-check-index]")) {
    updateProgress();
  }
});

elements.readingToggle.addEventListener("click", () => {
  const enabled = elements.readingToggle.getAttribute("aria-pressed") !== "true";
  elements.readingToggle.setAttribute("aria-pressed", String(enabled));
  window.readingAssist.setEnabled(enabled, document);
});

elements.resetSession.addEventListener("click", () => {
  elements.panel.querySelectorAll("[data-check-index]").forEach((input) => {
    input.checked = false;
  });
  updateProgress();
  elements.searchInput.value = "";
  elements.resultsPanel.hidden = true;
});

state.activeId = state.reviews[0]?.id || "";
renderNav();
renderReview(state.activeId);

const readingEnabled = window.readingAssist.isEnabled();
elements.readingToggle.setAttribute("aria-pressed", String(readingEnabled));
window.readingAssist.setEnabled(readingEnabled, document);

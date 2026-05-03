// =================================================================
//  DARK-MODE THEME
// =================================================================

const THEME_KEY = "TODO_LIST_THEME";

const sunIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun w-4 h-4 text-yellow-400">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>`;

const moonIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon w-4 h-4 text-slate-200">
    <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 0 0 12 21a9 9 0 0 0 9-8.21z"></path>
  </svg>`;

function updateThemeIcon(isDark) {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;
  themeToggle.innerHTML = isDark ? moonIcon : sunIcon;
  themeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
}

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  updateThemeIcon(isDark);
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
}

function initTheme() {
  const isDark = localStorage.getItem(THEME_KEY) === "dark";
  applyTheme(isDark);
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(!document.body.classList.contains("dark"));
    });
  }
}

initTheme();

const overlay = document.getElementById("overlay");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const cancelModal = document.getElementById("cancelModal");
const titleInput = document.getElementById("titleInput");
const noteBody = document.getElementById("noteBody");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const colorRow = document.getElementById("colorRow");
const tagInput = document.getElementById("tagInput");
const addTag = document.getElementById("addTag");
const tagChipRow = document.getElementById("tagChipRow");
const form = document.getElementById("noteForm");
const categorySelect = document.querySelector(".category-select");
const cardsContainer = document.querySelector(".cards");
const noteCountDisplay = document.querySelector(".note-count");
const statsNotes = document.querySelector(".stats span:first-child");
const emptyState = document.querySelector(".empty-state");

function showModal() {
  resetModal();
  overlay.style.display = "grid";
  setTimeout(() => titleInput.focus(), 50);
}

function hideModal() {
  overlay.style.display = "none";
}

function updateCounts() {
  const text = noteBody.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  charCount.textContent = `${noteBody.value.length} chars`;
  wordCount.textContent = `${words} words`;
}

function getSelectedColor() {
  const activeDot = colorRow.querySelector(".color-dot.active");
  return activeDot ? activeDot.style.backgroundColor : "#475569";
}

function getTagValues() {
  return Array.from(tagChipRow.children).map((chip) =>
    chip.textContent.replace(/^◇\s*/, "").trim(),
  );
}

function updateNoteCount() {
  const noteCards = cardsContainer.querySelectorAll(".card");
  const count = noteCards.length;
  if (noteCountDisplay) {
    noteCountDisplay.textContent = `☷ ${count} ${count === 1 ? "note" : "notes"}`;
  }
  if (statsNotes) {
    statsNotes.textContent = `▣ ${count} ${count === 1 ? "note" : "notes"}`;
  }

  if (emptyState) {
    emptyState.style.display = count === 0 ? "block" : "none";
  }
}

function createNoteCard({ title, body, category, color, tags }) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.borderColor = color;
  card.innerHTML = `
    <div class="two-button">
      <div class="pill">
        <span>${category}</span>
      </div>
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-ellipsis"></i>
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item edit-note" id="editNote"><i class="fa-solid fa-marker"></i>Edit</button></li>
          <li><button class="dropdown-item duplicate-note" id="duplicateNote"><i class="fa-regular fa-copy"></i>Duplicate</button></li>
          <li><button class="dropdown-item pin-note" id="pinNote"><i class="fa-solid fa-thumbtack"></i>Pin To Top</button></li>
          <li><button class="dropdown-item archive-note" id="archiveNote"><i class="fa-solid fa-archive"></i>Archive</button></li>
          <li><button class="dropdown-item delete-note" id="deleteNote"><i class="fa-solid fa-trash"></i>Delete</button></li>
        </ul>
      </div>
    </div>
    <h2>${title}</h2>
    <p>${body.replace(/\n/g, "<br />")}</p>
    <div class="tags">${tags.map((tag) => `<span class="tag">◇ ${tag}</span>`).join("")}</div>
    <div class="time">◷ just now</div>
  `;
  return card;

  if (!cardsContainer) {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Add your first note or your To-Do list.";
    errorMsg.style.color = "red";
    document.body.appendChild(errorMsg);
    return null;
  }
}

function resetModal() {
  titleInput.value = "";
  noteBody.value = "";
  tagInput.value = "";
  tagChipRow.innerHTML = "";
  updateCounts();
  const defaultColor = colorRow.querySelector(".color-dot");
  if (defaultColor) {
    colorRow
      .querySelectorAll(".color-dot")
      .forEach((dot) => dot.classList.remove("active"));
    defaultColor.classList.add("active");
  }
}

function addTagChip() {
  const value = tagInput.value.trim();
  if (!value) return;

  const chip = document.createElement("span");
  chip.className = "tag";
  chip.textContent = `◇ ${value}`;
  tagChipRow.appendChild(chip);
  tagInput.value = "";
}

openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);
cancelModal.addEventListener("click", hideModal);
noteBody.addEventListener("input", updateCounts);
addTag.addEventListener("click", addTagChip);

tagInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTagChip();
  }
});

colorRow.addEventListener("click", (event) => {
  if (!event.target.classList.contains("color-dot")) return;
  document
    .querySelectorAll(".color-dot")
    .forEach((dot) => dot.classList.remove("active"));
  event.target.classList.add("active");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideModal();
});

// Event delegation for card actions
cardsContainer.addEventListener("click", (event) => {
  const target = event.target.closest(".dropdown-item");
  if (!target) return;

  const card = target.closest(".card");
  if (!card) return;

  if (target.classList.contains("delete-note")) {
    card.remove();
    updateNoteCount();
  } else if (target.classList.contains("edit-note")) {
    editNote(card);
  } else if (target.classList.contains("duplicate-note")) {
    // Implement duplicate functionality
    duplicateNoteCard(card);
  } else if (target.classList.contains("pin-note")) {
    // Implement pin functionality
    pinNoteToTop(card);
  } else if (target.classList.contains("archive-note")) {
    // Implement archive functionality
    archiveNoteCard(card);
  }
});

function editNote(card) {
  let editingCard = null;
  const target = event.target.closest(".dropdown-item");
  editingCard = card;

  const title = card.querySelector("h2").textContent;
  const body = card.querySelector("p").innerHTML.replace(/<br\s*\/?>/g, "\n");
  const category = card.querySelector(".pill span").textContent;
  const color = card.style.borderColor;
  const tags = Array.from(card.querySelectorAll(".tags .tag")).map((tag) =>
    tag.textContent.replace(/^◇\s*/, "").trim(),
  );

  titleInput.value = title;
  noteBody.value = body;
  updateCounts();
  categorySelect.value = category;

  document
    .querySelectorAll(".color-dot")
    .forEach((dot) => dot.classList.remove("active"));
  const activeColorDot = Array.from(
    document.querySelectorAll(".color-dot"),
  ).find((dot) => dot.style.backgroundColor === color);
  if (activeColorDot) {
    activeColorDot.classList.add("active");
  }

  tagChipRow.innerHTML = "";
  tags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "tag";
    chip.textContent = `◇ ${tag}`;
    tagChipRow.appendChild(chip);
  });

  showModal();
  updateCounts();
}

function duplicateNoteCard(card) {
  const clone = card.cloneNode(true);
  const time = clone.querySelector(".time");

  if (time) {
    time.textContent = "◷ duplicated just now";
  }

  card.after(clone);
  updateNoteCount();
}

function pinNoteToTop(card) {
  if (!cardsContainer) return;

  card.classList.toggle("pinned");

  const time = card.querySelector(".time");

  if (card.classList.contains("pinned")) {
    cardsContainer.prepend(card);
    if (time) time.textContent = "▴ pinned";
  } else {
    if (time) time.textContent = "◷ just now";
  }
}

function archiveNoteCard(card) {
  card.classList.add("archived");
  card.style.opacity = "0.45";
  card.style.pointerEvents = "none";

  const time = card.querySelector(".time");
  if (time) {
    time.textContent = "▾ archived";
  }

  setTimeout(() => {
    card.remove();
    updateNoteCount();
  }, 300);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let editingCard = null;
  const title = titleInput.value.trim() || "Untitled note";
  const body = noteBody.value.trim();
  const category = categorySelect ? categorySelect.value : "Ideas";
  const color = getSelectedColor();
  const tags = getTagValues();

  if (!title && !body) {
    return;
  }

  if (editingCard) {
    const updatedCard = createNoteCard({ title, body, category, color, tags });
    editingCard.replaceWith(updatedCard);
    editingCard = null;
  } else {
    const noteCard = createNoteCard({ title, body, category, color, tags });
    if (cardsContainer) {
      cardsContainer.appendChild(noteCard);
    }
  }

  hideModal();
  updateNoteCount();
  resetModal();
});

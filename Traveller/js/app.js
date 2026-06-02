const appState = {
  search: "",
  category: "all",
  region: "all",
  state: "all",
  sort: "name",
  saved: JSON.parse(localStorage.getItem("travellerSaved") || "[]")
};

const destinations = TRAVELLER_DESTINATIONS;

const elements = {
  destinationGrid: document.querySelector("#destinationGrid"),
  searchInput: document.querySelector("#searchInput"),
  categoryFilter: document.querySelector("#categoryFilter"),
  regionFilter: document.querySelector("#regionFilter"),
  stateFilter: document.querySelector("#stateFilter"),
  sortFilter: document.querySelector("#sortFilter"),
  resultCount: document.querySelector("#resultCount"),
  emptyState: document.querySelector("#emptyState"),
  plannerList: document.querySelector("#plannerList"),
  resetFilters: document.querySelector("#resetFilters"),
  destinationCount: document.querySelector("#destinationCount"),
  stateCount: document.querySelector("#stateCount"),
  savedCount: document.querySelector("#savedCount"),
  modalTitle: document.querySelector("#destinationModalTitle"),
  modalMeta: document.querySelector("#destinationModalMeta"),
  modalBody: document.querySelector("#destinationModalBody")
};

const modal = new bootstrap.Modal(document.querySelector("#destinationModal"));

function uniqueValues(key) {
  return [...new Set(destinations.map((destination) => destination[key]))].sort();
}

function populateSelect(selectElement, values) {
  values.forEach((value) => {
    selectElement.insertAdjacentHTML("beforeend", `<option value="${value}">${value}</option>`);
  });
}

function populateFilters() {
  populateSelect(elements.categoryFilter, uniqueValues("category"));
  populateSelect(elements.regionFilter, uniqueValues("region"));
  populateSelect(elements.stateFilter, uniqueValues("state"));
}

function matchesDestination(destination) {
  const searchableText = [
    destination.name,
    destination.state,
    destination.region,
    destination.category,
    destination.summary,
    destination.bestTime,
    ...destination.highlights
  ].join(" ").toLowerCase();

  const matchesSearch = searchableText.includes(appState.search.toLowerCase());
  const matchesCategory = appState.category === "all" || destination.category === appState.category;
  const matchesRegion = appState.region === "all" || destination.region === appState.region;
  const matchesState = appState.state === "all" || destination.state === appState.state;

  return matchesSearch && matchesCategory && matchesRegion && matchesState;
}

function isSaved(id) {
  return appState.saved.includes(id);
}

function imageFallback(event) {
  event.target.src = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80";
}

window.travellerImageFallback = imageFallback;

function cardTemplate(destination) {
  const saved = isSaved(destination.id);

  return `
    <article class="destination-card">
      <img src="${destination.image}" alt="${destination.name}, ${destination.state}" loading="lazy" onerror="travellerImageFallback(event)">
      <div class="destination-card-body">
        <div class="destination-meta">
          <span>${destination.category}</span>
          <span>${destination.duration}</span>
        </div>
        <h3>${destination.name}</h3>
        <p class="destination-state">${destination.state} &middot; ${destination.region}</p>
        <p>${destination.summary}</p>
        <div class="tag-list">
          ${destination.highlights.map((highlight) => `<span>${highlight}</span>`).join("")}
        </div>
        <div class="card-actions">
          <button class="btn btn-success" type="button" data-action="details" data-id="${destination.id}">
            Details
          </button>
          <button class="btn ${saved ? "btn-dark" : "btn-outline-success"}" type="button" data-action="save" data-id="${destination.id}">
            ${saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderDestinations() {
  const filteredDestinations = destinations
    .filter(matchesDestination)
    .sort((first, second) => first[appState.sort].localeCompare(second[appState.sort]));

  elements.resultCount.textContent = filteredDestinations.length;
  elements.emptyState.classList.toggle("d-none", filteredDestinations.length > 0);
  elements.destinationGrid.innerHTML = filteredDestinations.map(cardTemplate).join("");
}

function renderStats() {
  elements.destinationCount.textContent = destinations.length;
  elements.stateCount.textContent = uniqueValues("state").length;
  elements.savedCount.textContent = appState.saved.length;
}

function renderPlanner() {
  const savedDestinations = destinations.filter((destination) => isSaved(destination.id));

  if (!savedDestinations.length) {
    elements.plannerList.innerHTML = `
      <div class="planner-empty">
        <h3>No places saved yet</h3>
        <p>Choose a destination and press Save to build your trip plan.</p>
      </div>
    `;
    return;
  }

  elements.plannerList.innerHTML = savedDestinations.map((destination, index) => `
    <div class="planner-item">
      <span class="planner-number">${index + 1}</span>
      <div>
        <h3>${destination.name}</h3>
        <p>${destination.state} &middot; ${destination.category} &middot; Best time: ${destination.bestTime}</p>
      </div>
      <button class="btn btn-sm btn-outline-danger" type="button" data-action="remove" data-id="${destination.id}">
        Remove
      </button>
    </div>
  `).join("");
}

function persistSaved() {
  localStorage.setItem("travellerSaved", JSON.stringify(appState.saved));
}

function toggleSaved(id) {
  appState.saved = isSaved(id)
    ? appState.saved.filter((savedId) => savedId !== id)
    : [...appState.saved, id];

  persistSaved();
  renderStats();
  renderDestinations();
  renderPlanner();
}

function openDetails(id) {
  const destination = destinations.find((item) => item.id === id);
  if (!destination) return;

  elements.modalTitle.textContent = destination.name;
  elements.modalMeta.textContent = `${destination.state} - ${destination.region} - ${destination.category}`;
  elements.modalBody.innerHTML = `
    <img class="modal-image" src="${destination.image}" alt="${destination.name}" loading="lazy" onerror="travellerImageFallback(event)">
    <p class="lead mt-4">${destination.summary}</p>
    <div class="detail-grid">
      <div>
        <h3 class="h6">Best time</h3>
        <p>${destination.bestTime}</p>
      </div>
      <div>
        <h3 class="h6">Suggested duration</h3>
        <p>${destination.duration}</p>
      </div>
    </div>
    <h3 class="h6 mt-3">Highlights</h3>
    <ul class="modal-highlights">
      ${destination.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
    </ul>
    <button class="btn btn-success mt-2" type="button" data-action="save" data-id="${destination.id}">
      ${isSaved(destination.id) ? "Remove from planner" : "Save to planner"}
    </button>
  `;

  modal.show();
}

function handleDocumentClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const { action, id } = button.dataset;

  if (action === "details") {
    openDetails(id);
  }

  if (action === "save" || action === "remove") {
    toggleSaved(id);
  }
}

function resetFilters() {
  appState.search = "";
  appState.category = "all";
  appState.region = "all";
  appState.state = "all";
  appState.sort = "name";
  elements.searchInput.value = "";
  elements.categoryFilter.value = "all";
  elements.regionFilter.value = "all";
  elements.stateFilter.value = "all";
  elements.sortFilter.value = "name";
  renderDestinations();
}

function bindEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    appState.search = event.target.value.trim();
    renderDestinations();
  });

  elements.categoryFilter.addEventListener("change", (event) => {
    appState.category = event.target.value;
    renderDestinations();
  });

  elements.regionFilter.addEventListener("change", (event) => {
    appState.region = event.target.value;
    renderDestinations();
  });

  elements.stateFilter.addEventListener("change", (event) => {
    appState.state = event.target.value;
    renderDestinations();
  });

  elements.sortFilter.addEventListener("change", (event) => {
    appState.sort = event.target.value;
    renderDestinations();
  });

  elements.resetFilters.addEventListener("click", resetFilters);
  document.addEventListener("click", handleDocumentClick);
}

populateFilters();
bindEvents();
renderStats();
renderDestinations();
renderPlanner();

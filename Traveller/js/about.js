const aboutStats = document.querySelector("#aboutStats");
const skillsList = document.querySelector("#skillsList");

const uniqueStates = new Set(TRAVELLER_DESTINATIONS.map((destination) => destination.state));
const uniqueCategories = new Set(TRAVELLER_DESTINATIONS.map((destination) => destination.category));

aboutStats.innerHTML = `
  <div><span class="metric">${TRAVELLER_DESTINATIONS.length}</span><span class="metric-label">destinations</span></div>
  <div><span class="metric">${uniqueStates.size}</span><span class="metric-label">states and UTs</span></div>
  <div><span class="metric">${uniqueCategories.size}</span><span class="metric-label">travel moods</span></div>
`;

skillsList.innerHTML = [
  "Shared JavaScript data across pages",
  "Live filtering by search, category, region, and state",
  "Dynamic route cards and statistics",
  "Saved trip planner with localStorage",
  "Responsive Bootstrap layout with custom CSS"
].map((skill) => `<li>${skill}</li>`).join("");

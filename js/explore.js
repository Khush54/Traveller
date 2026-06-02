const routes = [
  {
    title: "Heritage India",
    label: "Heritage Route",
    duration: "7 days",
    states: ["Delhi", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"],
    description: "A route through forts, old capitals, temple towns, Mughal landmarks, and museum-rich cities.",
    category: "Heritage"
  },
  {
    title: "Coastal India",
    label: "Coastal Route",
    duration: "8 days",
    states: ["Goa", "Kerala", "Odisha", "Puducherry", "Andaman and Nicobar Islands", "Lakshadweep"],
    description: "A relaxed beach and backwater plan for seafood, lagoons, old towns, islands, and slow travel.",
    category: "Beach"
  },
  {
    title: "Himalayan North",
    label: "Mountain Route",
    duration: "10 days",
    states: ["Himachal Pradesh", "Uttarakhand", "Jammu and Kashmir", "Ladakh", "Sikkim"],
    description: "A high-altitude route for valleys, monasteries, passes, lakes, treks, and mountain stays.",
    category: "Mountain"
  },
  {
    title: "North East Discovery",
    label: "Culture Route",
    duration: "9 days",
    states: ["Assam", "Meghalaya", "Manipur", "Mizoram", "Nagaland", "Arunachal Pradesh", "Tripura"],
    description: "A green, cultural route through wildlife parks, hill towns, lake landscapes, valleys, and craft markets.",
    category: "Culture"
  },
  {
    title: "Central Nature Loop",
    label: "Nature Route",
    duration: "6 days",
    states: ["Chhattisgarh", "Jharkhand", "Madhya Pradesh", "Telangana"],
    description: "A quieter loop for waterfalls, forests, plateaus, heritage towns, and city breaks.",
    category: "Nature"
  },
  {
    title: "Urban Weekender",
    label: "City Route",
    duration: "5 days",
    states: ["Maharashtra", "Telangana", "Delhi", "Chandigarh", "Gujarat"],
    description: "A city-led route for food, architecture, markets, museums, nightlife, and fast weekend planning.",
    category: "City"
  }
];

const routeGrid = document.querySelector("#routeGrid");
const exploreStats = document.querySelector("#exploreStats");
const stateGrid = document.querySelector("#stateGrid");

function findImageForRoute(route) {
  const match = TRAVELLER_DESTINATIONS.find((destination) => route.states.includes(destination.state));
  return match?.image || TRAVELLER_DESTINATIONS[0].image;
}

function matchingDestinationLinks(route) {
  return TRAVELLER_DESTINATIONS
    .filter((destination) => route.states.includes(destination.state))
    .slice(0, 6)
    .map((destination) => `<span>${destination.name}</span>`)
    .join("");
}

function routeTemplate(route) {
  return `
    <article class="route-card">
      <img src="${findImageForRoute(route)}" alt="${route.title}" loading="lazy" onerror="travellerImageFallback(event)">
      <div>
        <p class="destination-meta"><span>${route.label}</span><span>${route.duration}</span></p>
        <h3>${route.title}</h3>
        <p>${route.description}</p>
        <div class="tag-list">${matchingDestinationLinks(route)}</div>
        <a class="btn btn-success mt-3" href="index.html#destinations">Open destination finder</a>
      </div>
    </article>
  `;
}

function renderExplore() {
  const states = new Set(TRAVELLER_DESTINATIONS.map((destination) => destination.state));
  const regions = new Set(TRAVELLER_DESTINATIONS.map((destination) => destination.region));
  exploreStats.innerHTML = `
    <div><span class="metric">${TRAVELLER_DESTINATIONS.length}</span><span class="metric-label">destinations</span></div>
    <div><span class="metric">${states.size}</span><span class="metric-label">states and UTs</span></div>
    <div><span class="metric">${regions.size}</span><span class="metric-label">regions</span></div>
  `;
  routeGrid.innerHTML = routes.map(routeTemplate).join("");
  stateGrid.innerHTML = [...states].sort().map((state) => {
    const places = TRAVELLER_DESTINATIONS.filter((destination) => destination.state === state);

    return `
      <article class="state-card">
        <div class="state-card-head">
          <h3>${state}</h3>
          <span>${places.length} places</span>
        </div>
        <ul>
          ${places.map((place) => `<li>${place.name} <span>${place.category}</span></li>`).join("")}
        </ul>
        <a class="btn btn-outline-success btn-sm" href="index.html#destinations">Explore ${state}</a>
      </article>
    `;
  }).join("");
}

window.travellerImageFallback = function travellerImageFallback(event) {
  event.target.src = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80";
};

renderExplore();

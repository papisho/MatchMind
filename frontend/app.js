
const API_BASE = "http://localhost:8000";

const LEAGUES = [
  { id: 39,  name: "Premier League" },
  { id: 140, name: "La Liga"        },
  { id: 135, name: "Serie A"        },
  { id: 78,  name: "Bundesliga"     },
  { id: 61,  name: "Ligue 1"        },
  { id: 2,   name: "UEFA Champions League" },
];

const SEASON = 2024;

// Format a UTC date string to readable "Mon DD" format
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
}

// Build a single fixture card element
function buildFixtureCard(fixture) {
  const home = fixture.teams.home.name;
  const away = fixture.teams.away.name;
  const date = formatDate(fixture.fixture.date);

  const card = document.createElement("div");
  card.className = "fixture-card";
  card.innerHTML = `
    <div class="team-home"><span class="team-name">${home}</span></div>
    <div class="fixture-meta">
      <span class="fixture-vs">vs</span>
      <span class="fixture-date">${date}</span>
    </div>
    <div class="team-away"><span class="team-name">${away}</span></div>
  `;
  return card;
}

// Build a league strip with its fixtures
function buildLeagueStrip(leagueName, fixtures) {
  const strip = document.createElement("div");
  strip.className = "league-strip";

  const header = document.createElement("div");
  header.className = "league-header";
  header.innerHTML = `
    <div class="league-dot"></div>
    <span class="league-name">${leagueName}</span>
  `;

  const list = document.createElement("div");
  list.className = "fixture-list";

  //Filter for upcoming fixtures (status "NS") and show only the first 3
  //const upcoming = fixtures.filter(f => f.fixture.status.short === "NS");
  //upcoming.slice(0, 3).forEach(f => list.appendChild(buildFixtureCard(f)));

  const upcoming = fixtures.filter(f => f.fixture.status.short === "FT");
  const recent = upcoming.slice(-3); // Get the last 3 finished matches
  recent.forEach(f => list.appendChild(buildFixtureCard(f)));

  strip.appendChild(header);
  strip.appendChild(list);
  return strip;
}

// Fetch fixtures for one league and render its strip
async function loadLeague(league) {
  const container = document.getElementById("leagues-container");

  // Placeholder while loading
  const placeholder = document.createElement("div");
  placeholder.className = "loading";
  placeholder.textContent = `Loading ${league.name}...`;
  container.appendChild(placeholder);

  try {
    const res = await fetch(`${API_BASE}/fixtures/${league.id}?season=${SEASON}`);
    const data = await res.json();

    const fixtures = data.response;
    if (!fixtures || fixtures.length === 0) {
      placeholder.className = "error";
      placeholder.textContent = `No fixtures found for ${league.name}.`;
      return;
    }

    const strip = buildLeagueStrip(league.name, fixtures);
    container.replaceChild(strip, placeholder);

  } catch (err) {
    placeholder.className = "error";
    placeholder.textContent = `Failed to load ${league.name}. Is the backend running?`;
    console.error(err);
  }
}

// Load all leagues
LEAGUES.forEach(league => loadLeague(league));
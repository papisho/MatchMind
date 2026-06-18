
from football_service import get_fixtures, get_standings
import time 

leagues = {
    "PL": 39,
    "La Liga": 140,
    "Serie A": 135,
    "Bundesliga": 78,
    "Ligue 1": 61,
    "UCL": 2
}

season = 2024

for name, league_id in leagues.items():
    print(f"\n--- {name} fixtures ---")
    data = get_fixtures(league_id, season)
    print(data)
    time.sleep(1)  # Sleep to avoid hitting API rate limits
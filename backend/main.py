
from fastapi import FastAPI
from football_service import get_fixtures, get_standings
from fastapi.middleware.cors import CORSMiddleware # CORS middleware to allow cross-origin requests

app = FastAPI()

# CORS configuration to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# this allows requests from any origin for now. 
# in production (week 7), I'll lock it down to my specific frontend URL.

@app.get("/fixtures/{league_id}")
def get_fixtures_route(league_id: int, season: int = 2024):
    return get_fixtures(league_id, season)

@app.get("/standings/{league_id}")
def get_standings_route(league_id: int, season: int = 2024):
    return get_standings(league_id, season)


import httpx
from dotenv import load_dotenv
import os
import time
import json

load_dotenv()

API_KEY = os.getenv("API_FOOTBALL_KEY")
BASE_URL = os.getenv("API_FOOTBALL_BASE_URL")

CACHE_DIR = "../cache"
CACHE_TTL = 6 * 60 * 60  # 6 hours in seconds

def is_cache_valid(file_path):
    if not os.path.exists(file_path):
        return False
    age = time.time() - os.path.getmtime(file_path)
    return age < CACHE_TTL

def get_fixtures(league_id, season):
    cache_file = f"{CACHE_DIR}/fixtures_{league_id}_{season}.json"
    
    if is_cache_valid(cache_file):
        with open(cache_file, "r") as f:
            return json.load(f)

    headers = {
        "x-apisports-key": API_KEY
    }
    params = {
        "league": league_id,
        "season": season
    }
    response = httpx.get(f"{BASE_URL}/fixtures", headers=headers, params=params)
    data = response.json()

    with open(cache_file, "w") as f:
        json.dump(data, f)
   
    return data


def get_standings(league_id, season):
    cache_file = f"{CACHE_DIR}/standings_{league_id}_{season}.json"
    
    if is_cache_valid(cache_file):
        with open(cache_file, "r") as f:
            return json.load(f)

    headers = {
        "x-apisports-key": API_KEY
    }
    params = {
        "league": league_id,
        "season": season
    }
    response = httpx.get(f"{BASE_URL}/standings", headers=headers, params=params)
    data = response.json()

    with open(cache_file, "w") as f:
        json.dump(data, f)

    return data



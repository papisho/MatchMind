# MatchMind

MatchMind is an AI-powered football analytics dashboard built with Python, FastAPI, Claude API, and API-Football. The project is still in early development, currently around week 1 of 8, so this repository contains the first working backend and frontend foundation rather than a finished product.

## Project Overview

The goal of MatchMind is to bring football data and AI-assisted analysis into a single dashboard. So far, the project includes a FastAPI backend that fetches fixtures and standings from API-Football, a simple caching layer, CORS support for local frontend development, and a plain HTML/CSS/JavaScript frontend shell that renders fixture cards from the backend.

What is built now:

- Backend routes for fixtures and standings
- API-Football request handling in a small service layer
- Local file-based caching for API responses
- CORS enabled for frontend requests during development
- A static frontend shell that loads fixture data for several leagues

What is not built yet:

- Claude-powered analysis
- User authentication
- Production deployment setup
- Completed analytics and prediction features

## Tech Stack

- Python
- FastAPI
- httpx for API-Football requests
- python-dotenv for environment variables
- API-Football for live fixtures and standings data
- Plain HTML, CSS, and JavaScript for the frontend
- Claude API planned for future analysis features

## Project Structure

```text
MatchMind/
├── backend/
│   ├── main.py            # FastAPI app, CORS, fixtures/standings routes
│   └── football_service.py# API-Football fetch logic and caching
├── cache/                 # Cached API responses
├── frontend/
│   ├── index.html         # Static frontend shell
│   ├── style.css          # UI styling
│   └── app.js             # Frontend fetch/render logic
├── requirements.txt
└── README.md
```

## Setup Instructions

### 1. Create and activate a virtual environment

On Windows PowerShell:

```powershell
py -m venv venv
.\venv\Scripts\Activate.ps1
```

If PowerShell blocks script execution, you may need to adjust the execution policy for your local environment.

### 2. Install dependencies

Once the virtual environment is active, install the project dependencies:

```powershell
pip install -r requirements.txt
```

If you need to install manually, the backend currently relies on `fastapi`, `uvicorn`, `httpx`, and `python-dotenv`.

### 3. Configure environment variables

Create a `.env` file in the project root and add your API credentials and config values.

Example:

```env
API_FOOTBALL_KEY=your_api_football_key
API_FOOTBALL_BASE_URL=https://api-football-v1.p.rapidapi.com/v3
```

If you add Claude integration later, you can extend this file with the matching API key and any model settings.

### 4. Run the backend

From the `backend` folder, start the FastAPI app with Uvicorn:

```powershell
uvicorn main:app --reload
```

You can also run `python main.py`, which now starts Uvicorn when the file is executed directly.

### 5. Open the frontend

Open `frontend/index.html` in a browser or serve the `frontend` folder with a local static server. The page fetches fixture data from `http://localhost:8000`.

## Roadmap

Week 1 days 1-4 are focused on the foundation:

- Football service
- Caching
- FastAPI routes
- Frontend shell
- CORS

Planned next steps are still high-level and may change as implementation continues:

- Claude-powered analysis endpoints
- Better league and match views
- More robust cache handling
- UI improvements and layout cleanup
- Testing and deployment prep

This roadmap is intentionally lightweight and will evolve as the project grows.

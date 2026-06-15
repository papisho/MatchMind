# MatchMind

MatchMind is an AI-powered football analytics dashboard built with Python, FastAPI, Claude API, and API-Football. The project is in early development, currently at week 1 of 8, so this repository is still a foundation rather than a finished product.

## Project Overview

The goal of MatchMind is to bring football data and AI-assisted analysis into a single dashboard. The backend is planned to handle data ingestion, API integration, and AI-powered insights, while the frontend is a lightweight HTML/CSS/JavaScript interface.

What exists right now is the project scaffold and initial setup. Core product features, polished UI, and advanced analytics are still in progress.

## Tech Stack

- Python
- FastAPI
- Claude API
- API-Football for live fixtures and standings data
- Plain HTML, CSS, and JavaScript for the frontend

## Project Structure

```text
MatchMind/
├── backend/       # Python API and analytics logic
├── frontend/      # Plain HTML/CSS/JS user interface
├── cache/         # Temporary or cached data
└── README.md
```

The folders are intentionally simple at this stage. As development continues, the backend and frontend code will be organized inside these directories.

## Setup Instructions

### 1. Create and activate a virtual environment

On Windows PowerShell:

```powershell
py -m venv venv
.\venv\Scripts\Activate.ps1
```

If activation is blocked by PowerShell execution policy, run PowerShell as needed for your environment or use the direct Python executable from the virtual environment.

### 2. Install dependencies

Once the virtual environment is active, install the project dependencies:

```powershell
pip install -r requirements.txt
```

If `requirements.txt` is not yet finalized, install the packages you need manually and update the file after the environment is stable.

### 3. Configure environment variables

Create a `.env` file in the project root and add your API credentials and config values.

Example:

```env
CLAUDE_API_KEY=your_claude_api_key
API_FOOTBALL_KEY=your_api_football_key
```

Add any additional settings your backend needs as the project grows.

### 4. Run the app

The application entry points are still being built, so exact run commands may change. Once the backend is ready, it will likely be started with a FastAPI server such as Uvicorn.

## Roadmap

Week 1 of 8 is focused on project setup, API integration planning, and building the first backend/frontend foundation.

Planned milestones:

- Backend FastAPI skeleton
- API-Football data fetching and caching
- Claude-powered analysis endpoints
- Basic frontend dashboard layout
- Match and standings views
- Insight generation and response formatting
- UI refinement and usability improvements
- Testing, cleanup, and deployment preparation

This roadmap is intentionally high-level and will evolve as implementation progresses.

export interface Project {
	title: string;
	description: string;
	tags: string[];
	repoUrl?: string;
	liveUrl?: string;
}

// Ordered by overall strength as a portfolio signal (scope, technical depth, and
// measurable impact) — strongest first.
export const projects: Project[] = [
	{
		title: 'SWETrack',
		description:
			'Personalized ML platform for new-grad SWE job search, architected as a modular monolith with a FastAPI backend, SQLAlchemy/SQLite persistence, and pytest coverage across every module. Opportunity Intelligence ranks job postings against a candidate profile with both a scikit-learn TF-IDF baseline and Hugging Face sentence-transformer embeddings, while Bayesian Knowledge Tracing estimates per-skill mastery from practice history to surface readiness gaps and drive an adaptive study-recommendation engine. Job Radar polls live Greenhouse/Lever/Ashby ATS boards, deduplicates postings, and generates truth-gated, evidence-backed resumes rendered to PDF via LaTeX — with ranking experiments tracked and compared in MLflow.',
		tags: ['Python', 'FastAPI', 'scikit-learn', 'Hugging Face', 'SQLAlchemy', 'MLflow', 'pytest'],
		repoUrl: 'https://github.com/RickyDas999/swetrack',
		liveUrl: '',
	},
	{
		title: 'FridgeFit',
		description:
			"Personal meal-planning app, deployed live, that answers what to cook from what's already in the fridge — ranking recipes by ingredient availability, expiry urgency, nutrition-goal macro fit, and past enjoyment, and explaining every ranking. A FastAPI service with SQLAlchemy models and Alembic-managed migrations (PostgreSQL in production, SQLite locally) backs a React + TypeScript + Vite dashboard; meal confirmations are idempotency-keyed and each request runs in its own transaction, so retries and partial failures can't double-log a meal or corrupt inventory. A guardrailed AI meal planner sequences several meals ahead with Claude through a bounded, read-only tool-calling loop — selecting only from existing recipes, never inventing them — backed by deterministic validation with a one-shot correction and a deterministic fallback plan whenever the AI result doesn't hold up; every run is instrumented for token usage, latency, and cost, and evaluated against that deterministic baseline on plan validity and constraint compliance rather than trusted by default. Deployed as three Render services — static frontend, API, and PostgreSQL — defined in a Render Blueprint and gated on CI, which runs Ruff + pytest on Python 3.11/3.12, pytest again against PostgreSQL, and a frontend type-check/build, with an opt-in Claude-powered PR reviewer wired into GitHub Actions.",
		tags: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'React', 'TypeScript', 'Anthropic API', 'Render'],
		repoUrl: 'https://github.com/RickyDas999/FridgeFit',
		liveUrl: 'https://fridgefit-3f2a.onrender.com',
	},
	{
		title: 'Capital One — Fraud Detection (Capstone)',
		description:
			'End-to-end fraud detection service reaching 99.3%+ accuracy. Trained a scikit-learn Random Forest model on 1M+ simulated credit card transactions, then served real-time fraud scoring through a Flask API deployed on AWS Lambda with DynamoDB for transaction storage and Twilio SMS alerts on flagged transactions.',
		tags: ['Python', 'Flask', 'scikit-learn', 'AWS Lambda', 'DynamoDB', 'Twilio'],
		repoUrl: 'https://github.com/RickyDas999/CapitalOneCapstone',
		liveUrl: '',
	},
	{
		title: 'DecisionForge',
		description:
			'Cost-controlled multi-agent system that routes decision-oriented questions to specialized AI agents, built with FastAPI and Pydantic-validated schemas on top of the Anthropic API. An orchestrator classifies each query into research, comparison, or briefing, then dispatches a single specialist agent for a structured answer — capped at exactly 2 LLM calls per request, with SQLite persisting transparent per-request cost tracking.',
		tags: ['Python', 'FastAPI', 'Pydantic', 'Anthropic API', 'SQLite'],
		repoUrl: 'https://github.com/RickyDas999/DecisionForge',
		liveUrl: '',
	},
	{
		title: 'Soundscape',
		description:
			'Multi-screen Android app, built in Kotlin with Jetpack Compose and backed by Firebase, that logs and visualizes real-time campus noise levels from 5,000+ geo-tagged sound events per week. Renders a Google Maps heatmap with spatial binning and EWMA smoothing to surface quiet and high-traffic areas with sub-250ms query latency.',
		tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Google Maps'],
		repoUrl: 'https://github.com/RickyDas999/SoundScape',
		liveUrl: '',
	},
	{
		title: 'LeetCoach',
		description:
			'Full-stack Next.js and TypeScript app for learning LeetCode patterns through reflection instead of grinding. Logs attempts, classifies mistakes, and schedules reviews with a spaced-repetition algorithm so patterns actually stick, running entirely on an AWS Lambda and DynamoDB backend with a Tailwind CSS UI.',
		tags: ['Next.js', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Tailwind CSS'],
		repoUrl: 'https://github.com/RickyDas999/LeetCoach',
		liveUrl: '',
	},
	{
		title: 'EuroTrip Planner',
		description:
			'React and JavaScript travel itinerary planner built around an interactive Google Maps API view of Europe. Users click cities to browse photos and activities, build a real-time itinerary in a side panel, and save completed trips with notes and reviews under a Past Destinations archive.',
		tags: ['React', 'JavaScript', 'Google Maps API'],
		repoUrl: 'https://github.com/RickyDas999/EuroTrip-Planner',
		liveUrl: '',
	},
	{
		title: 'Support Ticket Triage',
		description:
			"Python and Streamlit app demonstrating the Anthropic API's structured output and self-correction. Compares naive JSON parsing against Claude's tool-use feature across three validation layers — shape, allowed-value, and content-sense — with automatic retries that feed validation errors back into the next API call, logging every attempt to SQLite.",
		tags: ['Python', 'Streamlit', 'Anthropic API', 'SQLite'],
		repoUrl: 'https://github.com/RickyDas999/ticket-triage',
		liveUrl: '',
	},
	{
		title: 'MadGrades Enrollment Assistant',
		description:
			"Python automation script for UW-Madison course search and enrollment. Pulls grade distributions from MadGrades.com for every course in a user's enrollment cart, surfacing historical grade data to make course selection easier.",
		tags: ['Python', 'Automation'],
		repoUrl: 'https://github.com/RickyDas999/MadGrades-App',
		liveUrl: '',
	},
	{
		title: 'LiftMax',
		description:
			'iOS workout-tracking app built with Swift in Xcode, organized around a modular Features architecture for logging lifts and progress over time.',
		tags: ['Swift', 'iOS', 'Xcode'],
		repoUrl: 'https://github.com/RickyDas999/LiftMax',
		liveUrl: '',
	},
	{
		title: 'Brick Breaker',
		description:
			'Classic Brick Breaker game built entirely in Three.js and JavaScript, with animated gameplay and randomized brick generation for a different layout every playthrough.',
		tags: ['JavaScript', 'Three.js'],
		repoUrl: 'https://github.com/RickyDas999/Brick-Breaker-Game',
		liveUrl: '',
	},
];

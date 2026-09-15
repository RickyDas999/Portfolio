export interface Project {
	title: string;
	description: string;
	tags: string[];
	repoUrl?: string;
	liveUrl?: string;
}

export const projects: Project[] = [
	{
		title: 'SWETrack',
		description:
			'Personalized ML platform helping new-grad software engineers cut through inconsistent job titles and long descriptions to find roles that actually fit. Its Opportunity Intelligence engine ranks postings against a candidate\'s skills and preferences using TF-IDF and sentence-transformer embeddings.',
		tags: ['Python', 'FastAPI', 'scikit-learn', 'Hugging Face', 'MLflow'],
		repoUrl: 'https://github.com/RickyDas999/swetrack',
		liveUrl: '',
	},
	{
		title: 'Capital One — Fraud Detection (Capstone)',
		description:
			'End-to-end full-stack fraud detection service with 99.3%+ accuracy. Trained a Random Forest model on 1M+ simulated credit card transactions, and built a Flask API on AWS for real-time fraud scoring with Twilio SMS alerts on flagged transactions.',
		tags: ['Python', 'Flask', 'AWS', 'DynamoDB', 'Lambda', 'Twilio'],
		repoUrl: 'https://github.com/RickyDas999/CapitalOneCapstone',
		liveUrl: '',
	},
	{
		title: 'Soundscape',
		description:
			'Multi-screen Android app that logs and visualizes real-time campus noise levels from 5,000+ geo-tagged sound events per week. Built a Google Maps heatmap with spatial binning and EWMA smoothing to surface quiet and high-traffic areas with sub-250ms query latency.',
		tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Google Maps'],
		repoUrl: 'https://github.com/RickyDas999/SoundScape',
		liveUrl: '',
	},
	{
		title: 'EuroTrip Planner',
		description:
			'Travel itinerary planner built around an interactive Google Maps view of Europe. Users click cities to browse photos and activities, build a real-time itinerary in a side panel, and save completed trips with notes and reviews under a Past Destinations archive.',
		tags: ['React', 'JavaScript', 'Google Maps API'],
		repoUrl: 'https://github.com/RickyDas999/EuroTrip-Planner',
		liveUrl: '',
	},
	{
		title: 'DecisionForge',
		description:
			'Cost-controlled multi-agent system that routes decision-oriented questions to specialized AI agents. An orchestrator classifies each query into research, comparison, or briefing, then dispatches a single specialist agent for a structured answer — capped at exactly 2 LLM calls per request with transparent cost tracking.',
		tags: ['Python', 'FastAPI', 'Pydantic', 'Anthropic API', 'SQLite'],
		repoUrl: 'https://github.com/RickyDas999/DecisionForge',
		liveUrl: '',
	},
	{
		title: 'LeetCoach',
		description:
			'Full-stack app for learning LeetCode patterns through reflection instead of grinding. Logs attempts, classifies mistakes, and schedules reviews with spaced repetition so patterns actually stick. Runs entirely on an AWS backend.',
		tags: ['Next.js', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Tailwind CSS'],
		repoUrl: 'https://github.com/RickyDas999/LeetCoach',
		liveUrl: '',
	},
	{
		title: 'Support Ticket Triage',
		description:
			"Educational Streamlit app demonstrating Claude's structured output and self-correction. Compares naive JSON parsing against Claude's tool-use feature across three validation layers — shape, allowed-value, and content-sense — with automatic retries that feed validation errors back into the next API call.",
		tags: ['Python', 'Streamlit', 'Anthropic API', 'SQLite'],
		repoUrl: 'https://github.com/RickyDas999/ticket-triage',
		liveUrl: '',
	},
	{
		title: 'MadGrades Enrollment Assistant',
		description:
			'Automation tool for UW-Madison course search and enrollment. Pulls grade distributions from MadGrades.com for every course in a user\'s enrollment cart, surfacing historical grade data to make course selection easier.',
		tags: ['Python', 'Automation'],
		repoUrl: 'https://github.com/RickyDas999/MadGrades-App',
		liveUrl: '',
	},
	{
		title: 'LiftMax',
		description:
			'iOS workout-tracking app built with Swift, organized around a modular Features architecture for logging lifts and progress over time.',
		tags: ['Swift', 'iOS', 'Xcode'],
		repoUrl: 'https://github.com/RickyDas999/LiftMax',
		liveUrl: '',
	},
	{
		title: 'Brick Breaker',
		description:
			'Classic Brick Breaker game built entirely in Three.js, with animated gameplay and randomized brick generation for a different layout every playthrough.',
		tags: ['JavaScript', 'Three.js'],
		repoUrl: 'https://github.com/RickyDas999/Brick-Breaker-Game',
		liveUrl: '',
	},
];

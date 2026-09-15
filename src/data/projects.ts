export interface Project {
	title: string;
	description: string;
	tags: string[];
	repoUrl?: string;
	liveUrl?: string;
}

export const projects: Project[] = [
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
		title: 'Encore',
		description:
			'Full-stack event discovery app that surfaces AI-recommended concerts, sports, and comedy shows nearby. Users bookmark favorite artists and teams, build simple itineraries, and browse past and upcoming events in one place.',
		tags: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express'],
		repoUrl: 'https://github.com/RickyDas999/Encore',
		liveUrl: '',
	},
	{
		title: 'Portfolio Tracker',
		description:
			'Application for tracking a personal investment portfolio — adding assets, pulling live prices, and recomputing portfolio value — with a Python backend and infrastructure-as-code deployment.',
		tags: ['Python', 'Backend', 'Infra as Code'],
		repoUrl: 'https://github.com/RickyDas999/Portfolio-Tracker',
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

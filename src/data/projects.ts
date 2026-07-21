export interface Project {
	title: string;
	description: string;
	tags: string[];
	repoUrl?: string;
	liveUrl?: string;
}

export const projects: Project[] = [
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
		title: 'LeetCoach',
		description:
			'Full-stack app for learning LeetCode patterns through reflection instead of grinding. Logs attempts, classifies mistakes, and schedules reviews with spaced repetition so patterns actually stick. Runs entirely on an AWS backend.',
		tags: ['Next.js', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Tailwind CSS'],
		repoUrl: 'https://github.com/RickyDas999/LeetCoach',
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
		title: 'MadGrades Enrollment Assistant',
		description:
			'Automation tool for UW-Madison course search and enrollment. Pulls grade distributions from MadGrades.com for every course in a user\'s enrollment cart, surfacing historical grade data to make course selection easier.',
		tags: ['Python', 'Automation'],
		repoUrl: 'https://github.com/RickyDas999/MadGrades-App',
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

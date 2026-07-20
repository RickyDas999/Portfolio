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
];

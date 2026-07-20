export interface Project {
	title: string;
	description: string;
	tags: string[];
	repoUrl?: string;
	liveUrl?: string;
}

export const projects: Project[] = [
	{
		title: 'PROJECT_1_TITLE',
		description: 'PROJECT_1_DESCRIPTION — what it does, and the problem it solves.',
		tags: ['TAG_1', 'TAG_2', 'TAG_3'],
		repoUrl: 'https://github.com/RickyDas999/PROJECT_1_REPO',
		liveUrl: '',
	},
	{
		title: 'PROJECT_2_TITLE',
		description: 'PROJECT_2_DESCRIPTION — what it does, and the problem it solves.',
		tags: ['TAG_1', 'TAG_2'],
		repoUrl: 'https://github.com/RickyDas999/PROJECT_2_REPO',
		liveUrl: '',
	},
	{
		title: 'PROJECT_3_TITLE',
		description: 'PROJECT_3_DESCRIPTION — what it does, and the problem it solves.',
		tags: ['TAG_1', 'TAG_2', 'TAG_3'],
		repoUrl: 'https://github.com/RickyDas999/PROJECT_3_REPO',
		liveUrl: '',
	},
];

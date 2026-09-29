export interface ProfileInfo {
  name: string;
  role: string;
  status: string;
  college: string;
  careerGoal: string;
  bio: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
}

export interface SkillItem {
  name: string;
  level: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  demoType: 'voter' | 'atm' | 'grade';
  pythonCode: string;
  keyLearnings: string[];
}

export interface RoadmapGoal {
  title: string;
  description: string;
  status: 'currently-learning' | 'next-goal';
  category: string;
}

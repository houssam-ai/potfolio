export type ExperienceType = {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: string;
  responsibilities: string[];
  technologies: string;
};

export type EducationType = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
};

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
};

export type SkillType = {
  id: number;
  category: string;
  items: string[];
};

export type MessageType = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: number;
};
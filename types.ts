
export interface Solution {
  id: string;
  title: string;
  description: string;
  industrialImpact: string;
  humanImpact: string;
  icon: string;
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem?: string;
  solution?: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  category: 'leadership' | 'engineering' | 'staff';
}

export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
}

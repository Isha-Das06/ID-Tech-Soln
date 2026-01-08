
import { Solution, Metric, CaseStudy, Testimonial, TeamMember, JobOpening } from './types';

export const COLORS = {
  bg: '#0A1E3F',
  bgAccent: '#0D2B55',
  neon: '#00D6FF',
};

export const SOLUTIONS: Solution[] = [
  {
    id: 'ai-analytics',
    title: 'AI-Driven Analytics',
    description: 'High-performance computing models processing massive datasets for real-time industrial optimization and strategic foresight.',
    industrialImpact: '99.9% prediction accuracy for enterprise workflows and logistics.',
    humanImpact: 'Intuitive dashboards that reduce cognitive load for machine operators.',
    icon: 'BrainCircuit'
  },
  {
    id: 'adaptive-learning',
    title: 'Adaptive Training',
    description: 'Personalized AI mentors for corporate workforce upskilling and community-based technical education.',
    industrialImpact: '40% reduction in training lifecycle costs through precision education.',
    humanImpact: 'Tailored learning paths that empower individual career growth and confidence.',
    icon: 'GraduationCap'
  },
  {
    id: 'autonomous-robotics',
    title: 'Autonomous Systems',
    description: 'Next-gen robotics for complex logistics, sustainable agriculture, and smart manufacturing environments.',
    industrialImpact: '3x throughput increase in high-scale logistics and warehouse operations.',
    humanImpact: 'Removing humans from high-risk environments while ensuring collaborative safety.',
    icon: 'Cpu'
  },
  {
    id: 'smart-civic',
    title: 'Civic Infrastructure',
    description: 'Smart city monitoring systems focusing on sustainability, air quality, and public resource management.',
    industrialImpact: 'Optimized energy grid distribution and waste control protocols.',
    humanImpact: 'Enhanced air quality and safer public urban environments for all citizens.',
    icon: 'Building2'
  },
  {
    id: 'iot-safety',
    title: 'IoT Human Safety',
    description: 'Sensor networks designed to monitor structural integrity and worker vitals in mission-critical environments.',
    industrialImpact: 'Seamless connectivity for industrial device meshes and predictive maintenance.',
    humanImpact: 'Zero-accident vision via proactive health and safety alerts for personnel.',
    icon: 'ShieldCheck'
  }
];

export const METRICS: Metric[] = [
  { label: 'Enterprises Served', value: 450, suffix: '+', description: 'Global corporate partners relying on ID-Mesh architecture for their core operations.' },
  { label: 'Projects Completed', value: 15, suffix: 'k+', description: 'Successful deployments across 4 continents, from smart cities to remote industrial hubs.' },
  { label: 'Efficiency Gains', value: 85, suffix: '%', description: 'Average increase in operational throughput for our industrial and logistics clients.' },
  { label: 'Humans Empowered', value: 25, suffix: 'k+', description: 'Individuals trained through our community education scholarships and open-source initiatives.' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'auto-logistics',
    title: 'Precision Logistics 2.0',
    subtitle: 'Global Supply Chain Overhaul',
    description: 'A transformative integration of autonomous robotics within legacy warehouse environments that redefined fulfillment speed.',
    problem: 'Our client, a tier-1 global retailer, faced a 15% annual increase in workplace strain injuries and a bottlenecked fulfillment cycle that could not meet 1-hour delivery demands in urban hubs.',
    solution: 'We deployed a swarm of 400 ID-Mesh autonomous units equipped with real-time spatial awareness and collaborative logic. This allowed them to work safely alongside human pickers, handling heavy lifting while humans focused on high-precision sorting and quality control.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Robotics', 'Logistics', 'Safety']
  },
  {
    id: 'smart-agriculture',
    title: 'The Green Mesh',
    subtitle: 'Sustainable Resource Management',
    description: 'A community-led IoT initiative protecting rural water cycles and crop resilience through high-resolution data nodes.',
    problem: 'Agricultural run-off was contaminating local watersheds while irrigation systems were wasting up to 40% of their water supply due to inaccurate soil data and legacy mechanical timers.',
    solution: 'ID Tech installed over 1,000 sub-surface moisture and chemical sensors across 5,000 hectares, creating a real-time "Soil Health Map." Our AI irrigation controller automated distribution only where needed, reducing water waste by 60% and chemical run-off by 45%.',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80',
    tags: ['IoT', 'Sustainability', 'Farming']
  },
  {
    id: 'civic-safety',
    title: 'Urban SafeNode',
    subtitle: 'Privacy-First Civic Security',
    description: 'Reducing emergency response times without compromising citizen privacy via decentralized Edge AI processing.',
    problem: 'City leaders in major metropolitan areas needed faster incident detection for public transit hubs but faced heavy backlash regarding facial recognition and mass data surveillance concerns.',
    solution: 'We implemented "Edge-only" AI nodes that detect movement anomalies and emergency sounds locally. No video or personal data ever leaves the node; only an encrypted alert signal is sent to emergency services if an incident is verified, ensuring 100% citizen privacy.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80',
    tags: ['Smart City', 'Privacy', 'Safety']
  },
  {
    id: 'renewable-grid',
    title: 'The Resilient Grid',
    subtitle: 'Smart Energy Optimization',
    description: 'Managing intermittent renewable energy flows across decentralized power nodes to stabilize regional grids.',
    problem: 'A European power consortium struggled with "surge waste"—where excess wind energy was lost during peaks because the legacy grid could not distribute it to battery storage fast enough.',
    solution: 'We deployed the ID-Energy Mesh, an AI-driven switching layer that predicts local consumption 15 minutes in advance. It automatically reroutes excess power to micro-storage units, reducing grid loss by 22% and powering 50,000 additional homes with existing infrastructure.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Energy', 'AI', 'Sustainability']
  },
  {
    id: 'healthcare-biomesh',
    title: 'BioMesh Diagnostics',
    subtitle: 'High-Scale Health Monitoring',
    description: 'Implementing non-invasive vital tracking for industrial workers in high-heat and high-altitude environments.',
    problem: 'Mining operations in the Andes reported a high rate of silent hypoxia among workers, where symptoms went unnoticed until critical failure, leading to frequent emergency evacuations.',
    solution: 'Our wearable SafeNode sensors monitor blood oxygen and core temperature in real-time. The system flags early-stage physiological stress to the worker and their shift lead 30 minutes before physical symptoms manifest, achieving a zero-evacuation quarter for the first time in the site\'s history.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    tags: ['Healthcare', 'IoT', 'Industrial']
  },
  {
    id: 'edu-equity-node',
    title: 'Global Literacy Nodes',
    subtitle: 'Bridging the Digital Divide',
    description: 'Delivering offline-first adaptive learning platforms to remote regions with limited connectivity.',
    problem: 'Educational initiatives in rural Southeast Asia were failing because standard cloud-based learning tools required high-speed internet that was unavailable for 80% of the students.',
    solution: 'ID Tech installed solar-powered "Learning Nodes" that host local instances of our adaptive AI mentor. Students sync their devices via local Wi-Fi, allowing 24/7 access to personalized curricula. Literacy rates in participating villages increased by 35% within the first six months.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
    tags: ['Education', 'Impact', 'Social']
  },
  {
    id: 'industrial-integrity',
    title: 'Zero-Harm Infrastructure',
    subtitle: 'Structural Anomaly Detection',
    description: 'Predictive monitoring of heavy industrial assets to prevent catastrophic structural failures.',
    problem: 'A major port facility was spending $2M annually on manual inspections of crane supports, yet still faced "micro-fracture" risks that traditional visual inspections could not detect.',
    solution: 'We wrapped the infrastructure in a mesh of high-frequency acoustic emission sensors. Our AI listens for the "sound of stress" in steel, identifying structural fatigue 6 months before it is visible to the human eye. This shifted their maintenance from reactive to 100% predictive.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80',
    tags: ['Infrastructure', 'Safety', 'Sensors']
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Isha Das',
    role: 'Founder & Managing Director',
    bio: 'A high-impact tech enthusiast and the visionary force behind Lumina Tech. With a career anchored in over 22 patents and 20+ published research papers, Isha bridges the gap between academic rigor and industrial application. Her foundation in tech was forged through elite interning experiences at global leaders like Nestlé, and she now brings over 5 years of expertise to the forefront of innovation. Isha is driven by the philosophy that technology should be a seamless extension of human potential, rather than a replacement for it.',
    image: 'https://i.ibb.co.com/ccpMbRwd/IMG-20251129-WA0015-1.jpg',
    category: 'leadership'
  }
];

export const JOBS: JobOpening[] = [
  {
    id: 'j1',
    title: 'Robotics Software Engineer (Motion Control)',
    type: 'Full-time',
    location: 'San Francisco / Remote',
    description: 'Help build our core path-finding algorithms for autonomous warehouse swarms. You will focus on real-time obstacle avoidance and collaborative swarm intelligence in highly dynamic industrial environments.'
  },
  {
    id: 'j2',
    title: 'UX Architect (Industrial UI)',
    type: 'Full-time',
    location: 'London / Berlin',
    description: 'Design intuitive control layers for complex data meshes. Your work will directly reduce operator stress and cognitive fatigue in mission-critical roles, focusing on neuro-ergonomic interface design.'
  },
  {
    id: 'j3',
    title: 'Sustainability Data Analyst',
    type: 'Contract',
    location: 'Remote',
    description: 'Analyze industrial sensor data to quantify and optimize energy consumption profiles across our client mesh. You will be responsible for creating carbon-reduction roadmaps for Fortune 500 manufacturing partners.'
  },
  {
    id: 'j4',
    title: 'Edge AI Firmware Engineer',
    type: 'Full-time',
    location: 'Tokyo / Remote',
    description: 'Develop low-level C++ drivers and neural network optimization kernels for our SafeNode hardware. Experience with FPGA and ARM architectures is highly preferred.'
  },
  {
    id: 'j5',
    title: 'Ethical AI Compliance Officer',
    type: 'Full-time',
    location: 'Dhaka / Berlin / Remote',
    description: 'Lead the internal auditing of our algorithmic deployment. Ensure all ID Tech products adhere to our Ethical AI Charter, focusing on privacy-preserving models and social impact metrics.'
  },
  {
    id: 'j6',
    title: 'Distributed Systems Architect',
    type: 'Full-time',
    location: 'Singapore / Remote',
    description: 'Scale the ID-Mesh infrastructure to handle 10B+ annual industrial events. Deep expertise in low-latency networking, decentralized consensus, and edge-computing security is required.'
  },
  {
    id: 'j7',
    title: 'Human-Machine Interaction Specialist',
    type: 'Full-time',
    location: 'Dhaka Hub / Remote',
    description: 'Study and design the interaction loops between industrial workers and autonomous swarms. Focus on neuro-ergonomics and emotional safety in high-stakes operational environments.'
  },
  {
    id: 'j8',
    title: 'Lead Cybersecurity Architect (Mesh Security)',
    type: 'Full-time',
    location: 'San Francisco / Remote',
    description: 'Engineer the zero-trust security layer for our global sensor network. You will be responsible for end-to-end encryption protocols that protect sensitive industrial data from external interference.'
  },
  {
    id: 'j9',
    title: 'Smart City Infrastructure Planner',
    type: 'Contract',
    location: 'London / Tokyo',
    description: 'Coordinate with civic leaders to integrate ID-SafeNode clusters into public urban environments. Focus on sustainability, air quality monitoring, and privacy-first public resource management.'
  },
  {
    id: 'j10',
    title: 'Technical Education Program Manager',
    type: 'Full-time',
    location: 'Global Hubs / Remote',
    description: 'Manage our community outreach and scholarship programs. Bridge the gap between our corporate engineering goals and our social mission of providing technical education to underserved sectors.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'Nexus Manufacturing',
    content: 'ID Tech didn\'t just sell us a solution; they transformed our workforce culture. Our employees feel more capable and safer than ever before, leading to a 30% boost in morale and a 50% drop in downtime.',
    image: 'https://i.pravatar.cc/100?u=sarah_jenkins'
  }
];

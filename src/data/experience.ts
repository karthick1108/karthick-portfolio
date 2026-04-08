export interface Job {
  role: string
  company: string
  location: string
  period: string
  color: string
  description: string
  technologies: string[]
}

export const experience: Job[] = [
  {
    role: 'Software Developer',
    company: 'Nukon',
    location: 'Brisbane',
    period: 'Sep 2022 – Present',
    color: 'teal',
    description:
      'Building and maintaining full-stack web applications for industrial clients. Working across the entire stack from Vue.js to Java Spring Boot with a strong focus on workflow automation using Camunda.',
    technologies: [
      'Vue.js',
      'Vuetify',
      'TypeScript',
      'Spring Boot',
      'SQL Server',
      'jHipster',
      'Liquibase',
      'Camunda',
      'AWS',
      'Datadog',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'The Spec Sheet',
    location: 'Sydney',
    period: 'May 2022 – Aug 2022',
    color: '#8a63db',
    description:
      'Worked on a platform that centralises advertising specifications for agencies, creatives and media owners. Contributed to UI/UX development using React and TypeScript, helping streamline how ad specs are managed and shared across teams.',
    technologies: ['React', 'TypeScript', 'MobX', 'react-query', 'Playwright'],
  },
  {
    role: 'Software Developer',
    company: 'Enablo',
    location: 'Brisbane',
    period: 'Nov 2020 – May 2022',
    color: '#2196F3',
    description:
      'Developed custom integrations and automations for Workplace from Meta, helping businesses streamline internal communications. Built full-stack features, maintained CI/CD pipelines and managed cloud infrastructure on AWS and Azure.',
    technologies: ['Node.js','Express.js', 'React', 'Sequelize', 'Docker', 'Terraform', 'CloudFormation'],
  },
  {
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    location: 'Chennai',
    period: 'Oct 2015 – Aug 2018',
    color: '#d4be66',
    description:
      'Provided production support for large-scale enterprise web applications, ensuring system stability and performance. Conducted root-cause analysis for incidents, performed database maintenance and mentored junior associates.',
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'Dynatrace', 'Splunk'],
  },
]

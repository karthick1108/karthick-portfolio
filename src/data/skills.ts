export interface SkillItem {
  name: string
  icon: string
}

export interface SkillGroup {
  category: string
  items: SkillItem[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'C#', icon: 'devicon-csharp-plain colored' },
    ],
  },
  {
    category: 'Frameworks & Runtime',
    items: [
      { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
      { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    ],
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'jHipster', icon: 'devicon-jhipster-plain colored' },
      { name: 'Liquibase', icon: 'devicon-liquibase-plain colored' },
      { name: 'Camunda', icon: 'fa-solid fa-diagram-project' },
      { name: 'Cypress', icon: 'devicon-cypressio-plain colored' },
      { name: 'Playwright', icon: 'devicon-playwright-plain colored' },
      { name: 'Jest', icon: 'devicon-jest-plain colored' },
    ],
  },
  {
    category: 'AWS Cloud',
    items: [
      { name: 'EC2', icon: 'devicon-amazonwebservices-plain colored' },
      { name: 'RDS', icon: 'devicon-amazonwebservices-plain colored' },
      { name: 'Lambda', icon: 'devicon-amazonwebservices-plain colored' },
      { name: 'S3', icon: 'devicon-amazonwebservices-plain colored' },
      { name: 'ELB', icon: 'devicon-amazonwebservices-plain colored' },
      { name: 'Route 53', icon: 'devicon-amazonwebservices-plain colored' },
      { name: 'CloudFormation', icon: 'devicon-amazonwebservices-plain colored' },
      { name: 'IoT Core', icon: 'devicon-amazonwebservices-plain colored' },
    ],
  },
  {
    category: 'Monitoring & Viz',
    items: [
      { name: 'Datadog', icon: 'devicon-datadog-plain colored' },
      { name: 'Grafana', icon: 'devicon-grafana-plain colored' },
      { name: 'Ignition', icon: 'fa-solid fa-fire' },
      { name: 'Dynatrace', icon: 'devicon-dynatrace-plain colored' },
      { name: 'Splunk', icon: 'devicon-splunk-original-wordmark colored' },
    ],
  },
]

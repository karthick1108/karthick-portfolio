export interface Education {
  degree: string
  school: string
  location: string
  years: string
  icon: string
  description: string
}

export const education: Education[] = [
  {
    degree: 'Masters in Information Technology',
    school: 'Monash University',
    location: 'Melbourne, Australia',
    years: '2018 – 2020',
    icon: 'fa-solid fa-graduation-cap',
    description:
      'Data visualisation, big data, databases, networking, security, operating systems, mobile computing, software engineering and project management.',
  },
  {
    degree: 'Bachelors in Computer Science and Engineering',
    school: 'Anna University',
    location: 'Chennai, India',
    years: '2011 – 2015',
    icon: 'fa-solid fa-graduation-cap',
    description:
      'Data structures, algorithms, database management, Artificial Intelligence, operating systems, computer networks, Java programming and web technology.',
  },
]

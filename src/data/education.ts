export interface Education {
  degree: string
  school: string
  location: string
  years: string
  icon: string
  verifiedBy?: string
  verifiedLink?: string
}

export const education: Education[] = [
  {
    degree: 'Masters in Information Technology',
    school: 'Monash University',
    location: 'Melbourne, Australia',
    years: '2018 – 2020',
    icon: '🎓',
    verifiedBy: 'World Education Services (WES)',
    verifiedLink: 'https://www.credly.com/earner/earned/badge/ced1f68a-d51c-46c2-be1f-dcce1f9951c8',
  },
  {
    degree: 'Bachelors in Computer Science and Engineering',
    school: 'Anna University',
    location: 'Chennai, India',
    years: '2011 – 2015',
    icon: '🎓',
  },
]

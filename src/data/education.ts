export interface Education {
  degree: string
  school: string
  location: string
  years: string
  icon: string
}

export const education: Education[] = [
  {
    degree: 'Masters in Information Technology',
    school: 'Monash University',
    location: 'Melbourne',
    years: '2018 – 2020',
    icon: 'fa-solid fa-graduation-cap',
  },
  {
    degree: 'Bachelors in Computer Science and Engineering',
    school: 'Anna University',
    location: 'Chennai',
    years: '2011 – 2015',
    icon: 'fa-solid fa-graduation-cap',
  },
]

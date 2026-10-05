export interface Certification {
  name: string
  issuer: string
  year: string
  icon: string
  link: string
}

export const certifications: Certification[] = [
  {
    name: 'AWS AI Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
    icon: 'devicon-amazonwebservices-plain colored',
    link: 'https://www.credly.com/badges/33e8a5a7-8b21-426c-9688-8a87a82f6cfb/public_url',
  },
  {
    name: 'Espresso Extraction & Latte Art',
    issuer: 'Barista Training',
    year: '2026',
    icon: '☕',
    link: 'https://vastosoft.com/docauth/check.php?vcode=ybeWpKdoZmxsbGZq',
  },
]

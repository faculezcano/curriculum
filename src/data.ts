type Contact = {
  text: string
  icon?: string
  link?: string
  target?: '_blank' | '_self'
}

export type Education = {
  title: string
  institution: string
  from: string
  to?: string
}

type Technology = {
  name: string
  description?: string
}

type Experience = {
  company: string
  link?: string
  position: string
  from: string
  to?: string
  description?: string
  achivements?: string[]
}

const contact: Contact[] = [
  {
    icon: 'faGlobe',
    text: document.location.hostname,
    link: document.location.href,
    target: '_self'
  },
  {
    icon: 'faEnvelope',
    text: 'facu.lezca@gmail.com',
    link: 'mailto:facu.lezca@gmail.com',
    target: '_self'
  },
  {
    icon: 'faLinkedin',
    text: '@facundolezcano',
    link: 'https://www.linkedin.com/in/facundolezcano/'
  }
]

const education: Education[] = [
  {
    title: 'Software Engineer',
    institution: 'Universidad Nacional del Sur',
    from: '2014'
  },
  {
    title: 'Automation technician',
    institution: 'Escuela Técnica Los Andes',
    from: '2006',
    to: '2012'
  }
]

const skills: string[] = [
  'Communication',
  'Project management',
  'Requirements Engineering',
  'Business logic',
  'Time management',
  'Agile learning',
  'Dora metrics',
  'OKR based management',
  'Critical thinking',
  'Technical recruiting'
]

const technologies: Technology[] = [
  {
    name: 'Micro frontends'
  },
  {
    name: 'AWS'
  },
  {
    name: 'Module federation'
  },
  {
    name: 'Atomic design'
  },
  {
    name: 'CI/CD'
  },
  {
    name: 'Micro services'
  },
  {
    name: 'Docker'
  },
  {
    name: 'Clean architecture'
  }
]

const experience: Experience[] = [
  {
    company: 'Bdeo',
    link: 'https://bdeo.io',
    position: 'Senior Full stack developer',
    description:
      'Participate in technological stack modernization. Design and develop new product features. Lead and follow company OKRs',
    from: 'abr 2022'
  },
  {
    company: 'Utrace',
    link: 'https://utrace.tech',
    position: 'CTO and Co-founder',
    description:
      'Leading design, planning and development of highly scalable, highly reliable and challenging cloud platform using top trending technologies and practices. Benefiting of containerization, continuous integration / continuous delivery, automated testing and automated deployment.',
    from: 'oct 2019',
    to: 'abr 2022'
  },
  {
    company: 'Iupik',
    position: 'Head of Engineering',
    description:
      'Development of a Platform that enables customers to repair their cars in a simple and smart way saving money and guaranteeing result top quality',
    from: 'ene 2019',
    to: 'oct 2019'
  },
  {
    company: 'WEARE',
    link: 'https://weare.com.ar',
    position: 'Software Team Lead',
    description:
      'Development Lead of various software projects including Selfmanaged systems, applications, E-commerce like Apurate.com.ar',
    from: 'abr 2014',
    to: 'dic 2018'
  },
  {
    company: 'INVAP',
    link: 'https://www.invap.com.ar/en/',
    position: 'Electronic Engineering',
    description:
      'Setup, testing and development of satellite and military radar modules. Development of SAOCOM payload central electronic modules on engineering stage.',
    from: 'oct 2012',
    to: 'mar 2014'
  }
]

const data = {
  name: 'Facundo Lezcano',
  title: 'Senior Software Developer',
  about:
    'Experienced software developer with over 8 years of designing, implementing, and maintaining large-scale web solutions. A responsible, agile, and committed professional in pursuit of continuous improvement, quality, and best practices. My principles include transparency, intellectual responsibility, and humility as key aspects in a collaborative work environment.',
  contact,
  education,
  skills,
  technologies,
  experience
}

export default data

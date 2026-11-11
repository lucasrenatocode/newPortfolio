import lash from '../assets/preview/lash-designer.webp'
import dental from '../assets/preview/dentalClinic.webp'
import dolce from '../assets/preview/dolceFemme.webp'
import fernando from '../assets/preview/drFernando.webp'
import eloyze from '../assets/preview/eloyze.png'
import portacu from '../assets/preview/portacu.webp'
import dental1500 from '../assets/preview/dental1500.png'
import orlandofamily from '../assets/preview/orlandofamily.png'
export interface Skill {
  name: string
  level: string
  iconKey: 'react' | 'typescript' | 'javascript' | 'html5' | 'css3' | 'git' | 'github' | 'vite'
}

export interface Project {
  tag: string
  title: string
  description: string
  tech: string[]
  demoUrl: string
  previewImage: string
}

export interface Service {
  index: string
  name: string
  description: string
}

export interface Pillar {
  title: string
  description: string
  iconKey: 'code' | 'performance' | 'responsive' | 'ux'
}

export const skills: Skill[] = [
  { name: 'React', level: 'UI LIBRARY', iconKey: 'react' },
  { name: 'TypeScript', level: 'LANGUAGE', iconKey: 'typescript' },
  { name: 'JavaScript', level: 'LANGUAGE', iconKey: 'javascript' },
  { name: 'HTML5', level: 'MARKUP', iconKey: 'html5' },
  { name: 'CSS3', level: 'STYLING', iconKey: 'css3' },
  { name: 'Git', level: 'VERSION CONTROL', iconKey: 'git' },
  { name: 'GitHub', level: 'COLLABORATION', iconKey: 'github' },
  { name: 'Vite', level: 'BUILD TOOL', iconKey: 'vite' },
]

export const pillars: Pillar[] = [
  {
    title: 'Clean Code',
    description: 'Readable, maintainable architecture built to scale with your product.',
    iconKey: 'code',
  },
  {
    title: 'Performance',
    description: 'Lean bundles, optimized renders, and fast load times by default.',
    iconKey: 'performance',
  },
  {
    title: 'Responsive Design',
    description: 'Pixel-considered layouts that adapt beautifully to every screen.',
    iconKey: 'responsive',
  },
  {
    title: 'User Experience',
    description: 'Interactions designed around how people actually behave.',
    iconKey: 'ux',
  },
]

export const projects: Project[] = [
  {
    tag: 'Landing Page',
    title: 'Lash Designer Studio',
    description:
      'A booking-focused page for a lash design studio, featuring real service pricing and a clean, feminine visual identity.',
    tech: ['React', 'TypeScript', 'CSS Modules'],
    demoUrl: 'https://lashsoft.vercel.app/',
    previewImage: lash,
  },
  {
    tag: 'Landing Page',
    title: 'Super Port Acu',
    description:
      'Premium domain available for sale. Secure a memorable, valuable domain name to strengthen your brand, attract more visitors, and build a trusted online presence.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://superportacu.com.br/',
    previewImage: portacu,
  },
  {
    tag: 'Landing Page',
    title: 'Eloyze Braids',
    description:
      'Modern landing page for a hair braider, designed to showcase braiding styles, highlight services, strengthen online presence, and attract new clients through an elegant, responsive design.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    demoUrl: 'https://eloyzebraids.vercel.app/',
    previewImage: eloyze,
  },
  {
    tag: 'Web Application',
    title: 'Dental Clinic',
    description:
      'An elegant, conversion-focused landing page for a premium aesthetics clinic, with refined motion design and a soft rosé palette.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    demoUrl: 'https://odontoviva.vercel.app/',
    previewImage: dental,
  },
  {
    tag: 'Web Application',
    title: 'Dolce Femme',
    description:
      'At Dolce Femme, we believe beauty starts with confidence. Our personalized aesthetic treatments are designed to enhance your natural features with care, elegance, and modern techniques.',
    tech: ['React', 'TypeScript', 'Css3'],
    demoUrl: 'https://dolcefemme.vercel.app/',
    previewImage: dolce,
  },
  {
    tag: 'Landing Page',
    title: 'Dr. Fernando website',
    description:
      'Professional legal services with integrity and dedication. Protecting your rights with trusted legal solutions.',
    tech: ['React', 'TypeScript', 'Vite'],
    demoUrl: 'https://projectadvogado.vercel.app/',
    previewImage: fernando,
  },
  {
    tag: 'Landing Page',
    title: '1500 Dental',
    description:
      'Quality dental care for healthy, confident smiles.',
    tech: ['React', 'TypeScript', 'Vite'],
    demoUrl: 'https://1500dental.vercel.app/',
    previewImage: dental1500,
  },
  {
    tag: 'Landing Page',
    title: 'Orlando Family Dental',
    description:
      'Your smile deserves expert care and personalized dental solutions.',
    tech: ['React', 'TypeScript'],
    demoUrl: 'https://orlandofamily.vercel.app/',
    previewImage: orlandofamily,
  },
]

export const services: Service[] = [
  { index: '01', name: 'Landing Pages', description: 'High-converting pages designed to turn visitors into clients.' },
  { index: '02', name: 'Responsive Websites', description: 'Sites that look and feel native on any device, every time.' },
  { index: '03', name: 'Front-end Development', description: 'React/TypeScript builds from design files to production code.' },
  { index: '04', name: 'UI Implementation', description: 'Faithful, pixel-considered translation of Figma into real UI.' },
  { index: '05', name: 'Performance Optimization', description: 'Faster load times, leaner bundles, higher Lighthouse scores.' },
]

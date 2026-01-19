import { 
  MonitorPlay, 
  Network, 
  Headset, 
  Home, 
  Building2, 
  Handshake,
  Cpu,
  Mic,
  Video
} from 'lucide-react';
import { ServiceItem, VerticalItem, NavItem, PartnerLogo } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Servicios', href: '#services' },
  { label: 'Sectores', href: '#verticals' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'workspace',
    title: 'Workspace Collaboration',
    description: 'Diseño y concepto de espacios Open Office, Huddle Rooms y adaptación acústica para maximizar la productividad.',
    icon: Handshake,
  },
  {
    id: 'unified-it',
    title: 'Unified IT & Cloud',
    description: 'Consultoría en inversiones tecnológicas, cableado estructurado, IoT y seguridad para un entorno eficiente.',
    icon: Network,
  },
  {
    id: 'managed-services',
    title: 'Managed Services',
    description: 'Soporte personalizado, analíticas de uso y capacitación on-demand para asegurar la continuidad operativa.',
    icon: Headset,
  },
  {
    id: 'entertainment',
    title: 'Home Entertainment',
    description: 'Cine en casa, audio HiFi, control domótico (Alexa/Google Home) y seguridad residencial inteligente.',
    icon: Home,
  },
  {
    id: 'verticals',
    title: 'Vertical Solutions',
    description: 'Soluciones escalables por industria: Casinos, Shopping Malls, Educación, Salud y Gobierno.',
    icon: Building2,
  },
  {
    id: 'partnership',
    title: 'Professional Partnership',
    description: 'Colaboración con arquitectos y diseñadores desde la concepción del proyecto (Open Work Space).',
    icon: Cpu,
  },
];

export const VERTICALS: VerticalItem[] = [
  {
    id: 'corp',
    title: 'Corporativo & Oficinas',
    description: 'Transformamos espacios de trabajo en hubs de colaboración híbrida con tecnología de videoconferencia fluida.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    features: ['Salas de Zoom/Teams', 'Reserva de salas', 'Acústica arquitectónica']
  },
  {
    id: 'hospitality',
    title: 'Hotelería & Turismo',
    description: 'Experiencias inmersivas para huéspedes, desde el lobby hasta la habitación, con control integrado.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    features: ['Digital Signage', 'Audio distribuido', 'Control de iluminación']
  },
  {
    id: 'entertainment',
    title: 'Casinos & Bingos',
    description: 'Soluciones de alto impacto visual y sonoro para mantener la energía y el engagement del cliente.',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1200&auto=format&fit=crop',
    features: ['Video Walls gigantes', 'Audio de alta fidelidad', 'Sistemas de seguridad CCTV']
  },
];

export const PARTNERS: PartnerLogo[] = [
  { name: 'Crestron', url: 'https://logo.clearbit.com/crestron.com' },
  { name: 'Zoom', url: 'https://logo.clearbit.com/zoom.us' },
  { name: 'Microsoft Teams', url: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Logitech', url: 'https://logo.clearbit.com/logitech.com' },
  { name: 'Jabra', url: 'https://logo.clearbit.com/jabra.com' },
];
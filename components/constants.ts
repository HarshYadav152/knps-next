import { NavLink, SchoolData } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Students', href: '#students' },
  { label: 'Events', href: '#events' },
  { label: 'Teachers', href: '#teachers' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Campus', href: '#campus' },
  { label: 'Contact', href: '#contact' },
];

export const SCHOOL_DATA: SchoolData = {
  name: "KNPS",
  tagline: "Empowering Future Leaders Through Knowledge & Character",
  description: "Empowering Future Leaders Through Knowledge & Character. At KNPS, we nurture academic excellence and holistic development in a supportive environment.",
  founded: 2023,
  contact: {
    address: "Near Fauji restaurant, Dhannapur Bharatpur Road, Mathura, Uttar Pradesh 281004",
    phone: "+91 8077640656",
    email: "knps.work@gmail.com"
  }
};

export const MAPS_URL = "https://www.google.com/maps?q=27.443849,77.655257&hl=en&z=15&output=embed";

export const FACULTY = [
  {
    name: "Dr. Eleanor Vance",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2776&auto=format&fit=crop",
    bio: "Ph.D. in Education Leadership with 20 years of experience shaping young minds."
  },
  {
    name: "Prof. Arthur Pendelton",
    role: "Head of Sciences",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    bio: "Award-winning physicist passionate about practical experimentation."
  },
  {
    name: "Mrs. Sarah Jenkins",
    role: "Arts & Humanities",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop",
    bio: "Inspiring creativity through visual arts and classical literature."
  },
  {
    name: "Mr. David Chen",
    role: "Mathematics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "Making complex calculus accessible and fun for every student."
  }
];

export const EVENTS = [
  {
    day: "15",
    month: "OCT",
    title: "Annual Science Fair",
    time: "09:00 AM - 04:00 PM",
    description: "Showcasing student innovations in robotics, biology, and physics."
  },
  {
    day: "22",
    month: "OCT",
    title: "Parent-Teacher Conference",
    time: "10:00 AM - 02:00 PM",
    description: "Discussing student progress and setting goals for the next semester."
  },
  {
    day: "05",
    month: "NOV",
    title: "Winter Sports Meet",
    time: "08:00 AM - 05:00 PM",
    description: "Inter-school athletic competitions and football championship."
  }
];

export const CAMPUS_IMAGES = [
  {
    title: "Front Gate",
    image: "infrastructure/school-front-1.jpg",
    category: "Campus"
  },
  {
    title: "Campus View",
    image: "infrastructure/school-front-2.jpg",
    category: "Campus"
  },
  {
    title: "Campus View 2",
    image: "infrastructure/school-front-3.jpg",
    category: "Campus"
  },
  {
    title: "Campus View 3",
    image: "infrastructure/school-front-4.jpg",
    category: "Campus"
  }
];
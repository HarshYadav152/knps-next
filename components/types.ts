export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface SchoolData {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  contact: ContactInfo;
}
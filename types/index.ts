export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'bim' | 'it';
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TechStackItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface Salle {
  id: number;
  nom: string;
  description: string;
  capacite: number;
  prix: number;
  images: string[];
  equipements: string[];
  disponibilites: string[]; // Dates disponibles au format YYYY-MM-DD
}
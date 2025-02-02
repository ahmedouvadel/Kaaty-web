export interface Invite {
  nom: string;
  email: string;
  qrCode?: string;
}

export interface Reservation {
  id: number;
  salleId: number;
  userId: string;
  date: string;
  nombreInvites: number;
  invites: Invite[];
  servicesOptionnels: {
    cameraman: boolean;
    buvette: boolean;
    decoration: boolean;
  };
  statut: 'en_attente' | 'confirme' | 'annule';
  paiementStatus: 'en_attente' | 'complete' | 'rembourse';
  montantTotal: number;
  dateCreation: string;
}
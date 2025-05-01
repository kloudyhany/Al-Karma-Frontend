export interface Offer {
    id: number;
    providerName: string;
    providerImageUrl: string;
    price: number;
    deliveryTime: string; 
    message: string;
    status: 'Pending' | 'Accepted' | 'Rejected';
  }
export interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    offers: Offer[]; 
}
export interface Order {
    id: number;
    serviceId: number;
    userId: number;
    status: string; // 'pending', 'completed', 'canceled'
    createdAt: Date;
    updatedAt: Date;
    offerId: number; 
}
export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string; // 'client ' or  'technician'
    imageUrl: string;
}
export interface Profile {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    role: string;
    rating?: number;
    experience?: number;
    tasksCompleted?: number;
    imageUrl?: string;
    user: string;
  }
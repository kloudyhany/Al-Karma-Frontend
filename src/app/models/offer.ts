export interface Offer {
    id: number;
    providerName: string;
    providerImageUrl: string;
    price: number;
    deliveryTime: string; 
    message: string;
    status: 'Pending' | 'Accepted' | 'Rejected';
    requestId: number;
    technicianId: string;
    isAccepted: boolean;
    isRejected: boolean;
    createdAt: Date;
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
  export interface Service {
    id: number;
    name: string;
    category: string;
    price: number;
    status: string;
    rating: number;
    orders: number;
  }
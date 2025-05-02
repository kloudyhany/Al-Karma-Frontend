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
    details: any;
    serviceId?: number;
    userId?: number;
    updatedAt?: Date;
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
  status: 'Pending' | 'Accepted' | 'Rejected';
  details: any;
  createdAt: Date;
  updatedAt: Date;
  service?: Service; // Optional, if you want to include service details
  price?: number;
  providerName?: string; // Optional, if you want to include provider name
  title?: string; // Optional, if you want to include service title

  
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
    id: number;
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
    requestCount: number;
    joinedDate: string;
    
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
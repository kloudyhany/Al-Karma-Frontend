export interface Offer {
    providerImageUrl: string;
    providerName: string;
    title: string;
    description: string;
    price: number;
    estimatedTime: string;
    rating: number;
}
export interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    offers: Offer[]; // إضافة هذا السطر
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

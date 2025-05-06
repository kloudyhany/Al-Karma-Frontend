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
    details?: any;
    serviceType?: number;
    userId?: number;
  }
  export interface FinantialTransaction
  {
    id: number;
    TransactionDate: string;
    Amount: number;
    offerId?: number;
    transactionType: PaymentMethod;
    offer?:Offer

  }
    export enum PaymentMethod{
       Cash,
       VodafoneCash,
       InstaPay
   }
  

  export interface OfferResponse {
    TimeToFinish: string;  // ISO string
    StartTime: string;
    Price: number;         // enum int value (e.g. pricing tier or range)
    OfferStatus: number;   // 0 = pending, etc.
    Notes: string;
    OfferDescription: string;  // base64 string
    RequestID: number;
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
  serviceType: number;
  userId: number;
  status: 'Pending' | 'Accepted' | 'Rejected';
  details: any;
  createdAt: Date;
  price: number;

  
}
export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string; 

}

export interface Profile {
    id: number;
    name: string;
    phone: string;
    email: string;
    location: string;
    role: string;
    rating?: number;
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
  export interface RatingRequest {
    role: string; 
    ratings: { [key: string]: number }; 
    comment?: string; 
  }
  
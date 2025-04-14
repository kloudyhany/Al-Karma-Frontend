export interface Offer {
    id: string;
    taskId: string;               
    providerId: string;           
    providerName: string;
    providerImageUrl?: string;    
    title: string;
    description: string;
    price: number;
    estimatedTime: string;        
    rating?: number;              
    createdAt: Date;
    status: 'pending' | 'accepted' | 'rejected';
  }
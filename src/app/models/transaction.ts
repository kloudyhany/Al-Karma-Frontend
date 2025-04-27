import e from "express";

export enum PaymentMethod {
    Cash = 0,
    VodafoneCash = 1,
    InstaPay = 2
  }
  
  export interface Offer {
    id: number;
    title: string;
  }
  
  export interface FinancialTransaction {
    id: number;
    amount: number;
    transactionDate: string; // ISO 8601 format (e.g., "2023-10-01T12:00:00Z")
    transactionType: PaymentMethod;
    offer: Offer;
  }
  export interface Transaction {
    id: string;
    amount: number;
    paymentMethod: string; // Cash, VodafoneCash, InstaPay
    status: string; 
    date: string; 
    userId: string; 
  }
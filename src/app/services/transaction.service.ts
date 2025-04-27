import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinancialTransaction ,Offer,PaymentMethod} from '../models/transaction'; 


@Injectable({
  providedIn: 'root'
})
export class TransactionService {



  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Fake API for testing

  constructor(private http: HttpClient) {}
  getTransactions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTransactionById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createTransaction(transaction: any): Observable<any> {
    return this.http.post(this.apiUrl, transaction);
  }

  updateTransaction(id: string, transaction: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, transaction);
  }

  deleteTransaction(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

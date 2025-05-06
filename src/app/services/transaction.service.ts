import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'https://localhost:7245/transaction'; 


  constructor(private http: HttpClient) {}

  
 GetAllFinancialTransactions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetAllFinancialTransactions`);
  }
  getTransactionById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  CreateFinancialTransaction(transaction: any): Observable<any> {
    return this.http.post(this.apiUrl, transaction);
  }

  UpdateFinancialTransaction(id: string, transaction: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, transaction);
  }

  deleteFinancialTransaction(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

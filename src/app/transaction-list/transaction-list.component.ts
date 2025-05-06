import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service'; 
import { FinancialTransaction, Offer, PaymentMethod, Transaction } from '../models/transaction'; 
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-transaction-list',
  imports: [CommonModule,FormsModule,],
  standalone: true,
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})

export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.GetAllFinancialTransactions().subscribe(
      (data) => {
        this.transactions = data;
      },
      (error) => {
        console.error('Error loading transactions:', error);
      }
    );
  }
  deleteTransaction(id: string): void {
    this.transactionService.deleteFinancialTransaction(id).subscribe(
      () => {
        this.loadTransactions(); 
      },
      (error) => {
        console.error('Error deleting transaction:', error);
      }
    );
  }
  getPaymentMethodName(paymentMethod: PaymentMethod): string {
    switch (paymentMethod) {
      case PaymentMethod.Cash:
        return 'Cash';
      case PaymentMethod.VodafoneCash:
        return 'Vodafone Cash';
      case PaymentMethod.InstaPay:
        return 'InstaPay';
      default:
        return 'Unknown';
    }
  }
  getTransactionStatus(transaction: Transaction): string {
    if (transaction.amount > 0) {
      return 'Success';
    } else if (transaction.amount < 0) {
      return 'Failed';
    } else {
      return 'Pending';
    }
  }
  getTransactionDate(transaction: Transaction): string {
    const date = new Date(transaction.date);
    return date.toLocaleDateString(); 
  }
  getTransactionType(transaction: Transaction): string {
    switch (transaction.paymentMethod) {
      case 'Cash':
        return 'Cash Transaction';
      case 'VodafoneCash':
        return 'Vodafone Cash Transaction';
      case 'InstaPay':
        return 'InstaPay Transaction';
      default:
        return 'Unknown Transaction Type';
    }
  }
  getTransactionOffer(transaction: Transaction): string {
    const offer: Offer = { id: 1, title: 'Special Offer' }; 
    return offer.title; 
  }
  getTransactionById(transaction: Transaction): string {
    return transaction.id.toString(); 
  }

  viewTransaction(transaction: Transaction): void { 
    alert(`Transaction Details:
    ID: ${transaction.id}
    Amount: ${transaction.amount}
    Date: ${this.getTransactionDate(transaction)}
    Payment Method: ${this.getPaymentMethodName(transaction.paymentMethod as unknown as PaymentMethod)}
    Status: ${this.getTransactionStatus(transaction)}
    Type: ${this.getTransactionType(transaction)}
    Offer: ${this.getTransactionOffer(transaction)}`);
    console.log('Viewing transaction:', transaction);
  }



}

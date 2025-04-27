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
    this.transactionService.getTransactions().subscribe(
      (data) => {
        this.transactions = data;
      },
      (error) => {
        console.error('Error loading transactions:', error);
      }
    );
  }
  deleteTransaction(id: string): void {
    this.transactionService.deleteTransaction(id).subscribe(
      () => {
        this.loadTransactions(); // Reload transactions after deletion
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
    // Assuming the status is determined by the payment method and amount
    if (transaction.amount > 0) {
      return 'Success';
    } else if (transaction.amount < 0) {
      return 'Failed';
    } else {
      return 'Pending';
    }
  }
  getTransactionDate(transaction: Transaction): string {
    // Assuming the date is in ISO format and needs to be formatted
    const date = new Date(transaction.date);
    return date.toLocaleDateString(); // Format as needed
  }
  getTransactionType(transaction: Transaction): string {
    // Assuming the type is determined by the payment method
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
    //  offer is determined by the transaction ID or some other logic
    const offer: Offer = { id: 1, title: 'Special Offer' }; 
    return offer.title; 
  }
  getTransactionId(transaction: Transaction): string {
    //  ID is a unique identifier for the transaction
    return transaction.id;
  }

  viewTransaction(transaction: Transaction): void { 
    // Logic to view transaction details
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

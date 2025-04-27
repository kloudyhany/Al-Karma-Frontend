import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../services/transaction.service';
import { FinancialTransaction, Offer, PaymentMethod, Transaction } from '../models/transaction';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-detail',
  imports: [],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css'
})
export class TransactionDetailComponent implements OnInit {
  transaction: Transaction | null = null;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    const transactionId = this.route.snapshot.paramMap.get('id')!;
    this.loadTransaction(transactionId);
  }

  loadTransaction(id: string): void {
    this.transactionService.getTransactionById(id).subscribe(
      (data) => {
        this.transaction = data;
      },
      (error) => {
        console.error('Error loading transaction:', error);
      }
    );
  }
}

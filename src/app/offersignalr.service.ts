import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class OffersignalrService {

  constructor() { }
  // ضع التوكن الخاص بك هنا أو استخرجه من localStorage
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOGFjMGQxNi1jMjJmLTRkODAtYWY0NC03N2RmODFlNzg2YzAiLCJlbWFpbCI6Im1pZG9AZ21haWwuY29tIiwicGhvbmVfbnVtYmVyIjoiMDEwMTc3NzAyNjAiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtaWRvIiwianRpIjoiNGQ1MGMzZmQtNzMyYy00YmM4LThjODAtNjQ5MWRlYTMyZTAxIiwiUm9sZSI6IlRlY2huaWNpYW4iLCJleHAiOjE3NDY1NDYxMzcsImlzcyI6IkFsa2FybWFBcHAiLCJhdWQiOiJBbGthcm1hQXBwIFVzZXJzIn0.Nskx6O-iBOdjJ1PQujeecNCMOVWEq-SdrhIm-08AHmU";

  // إنشاء الاتصال بالـ hub

  /*
    https://localhost:7245/hubs/offer
    https://localhost:7245/hubs/request
    https://localhost:7245/hubs/review
  */
   connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7245/hubs/offer", {
      accessTokenFactory: () => this.token,
      transport: signalR.HttpTransportType.WebSockets,
      withCredentials: false,
    })
    .configureLogging(signalR.LogLevel.Information)
    .withAutomaticReconnect()
    .build();

  // بدء الاتصال
  connectionstart(): any {
    this.connection.start()
      .then(() => {
        console.log("✅ Connected to SignalR hub");
      })
      .catch((err) => {
        console.error("❌ Connection failed:", err);
      });
  }

  ///ANCHOR -  onSubmit => Offer
  sendMessage() {
  const offer = {
    TimeToFinish: new Date(Date.now() + 2 * 3600000).toISOString(), // 2 hours later
    StartTime: new Date().toISOString(),
    Price: 150, // enum int value
    OfferStatus: 0,
    Notes: "this is a test offer",
    OfferDescription: "" /*base64*/,
    RequestID: 2003,
  };

  this.connection.invoke("CreateOffer", offer).then(() => {
    console.log("Offer sent successfully!");
    alert("تم ارسال العرض الخاص بك بنجاح");
  });
}

 clientReview = {
  ServiceDetailsCommitment: 1,
  UserBehavior: 1,
  PriceCommitment: 1,
  RatingComment: "From Service Provider",
  OfferID: 1,
};

async sendClientReview() {
  await this.connection.invoke("ReviewClient", this.clientReview).then(() => {
    console.log("Client review sent successfully!");
    alert("تم ارسال تقييمك بنجاح");
  });
}

async  OnServiceCompleted() {
  var offerId = 5;
  await this.connection.invoke("ServiceCompleted", offerId).then(() => {
    console.log("Service Provider perform their service");
  });
}
async  OnOfferAccepted() {
  var offerId = 5;
  await this.connection.invoke("OfferAccepted", offerId).then(() => {
    console.log("Offer accepted by client");
    
  });
}

async  OnOfferCanceled() {
  await this.connection.invoke("OfferCanceled", this.clientReview).then(() => {
    console.log("The sender cancel the current offer ");
  });
}
receivereview() {
  this.connection.on("ReceiveReview", (message) => {
  console.log("Received message from server:", message);
});
}

// استماع لرسائل الخادم (في حال وجود method اسمها "ReceiveMessage")
 onReceiveMessage(): any {
  this.connection.on("ReceiveRequest", (message: any) => {
    console.log("Received message from server:", message);
   
  });
}
onReceiveNotification(): any {
  this.connection.on("ReceiveNotification", (message: any) => {
    console.log("Received message from server:", message);
  });
}
}

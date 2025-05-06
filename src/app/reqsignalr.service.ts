import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ReqsignalrService {

  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMWNmMzcxOC05NTFhLTQyNDYtOWYxNS1kYmI4ODFhYzYwYzMiLCJlbWFpbCI6Im1hcmlvQGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjAxMDA3Nzg3MzkzIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibWFyaW8iLCJqdGkiOiJhZmFkOWU3NC05N2IzLTRiZmItOTgzOC00NDA4ZjBlYWMxM2EiLCJSb2xlIjoiVXNlciIsImV4cCI6MTc0NjU0NjA1OCwiaXNzIjoiQWxrYXJtYUFwcCIsImF1ZCI6IkFsa2FybWFBcHAgVXNlcnMifQ.lU32MQntTEjl_LjMili2YuTirRtDexlNO0fPGLc309k";
  // إنشاء الاتصال بالـ hub
  connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7245/hubs/request", {
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

  async sendMessage() {
    const fileInput = document?.getElementById("fileInput");
    const file = (fileInput as HTMLInputElement)?.files?.[0];
    const reader = new FileReader();

    reader.onload = async () => {
      const base64 = typeof reader.result === "string" ? reader.result.split(",")[1] : ""; // remove "data:...;base64,"

      const request = {
        requestDescription: (document?.getElementById("desc") as HTMLInputElement)?.value,
        taskDateTime: new Date().toISOString(),
        paymentType: 0, // enum int value CAsh/Online
        requstStatus: 0,
        serviceType: 0,
        taskLocation: "Cairo",
        expectedPrice: 200,
        expectedTimeToFinish: new Date(
          Date.now() + 2 * 3600000
        ).toISOString(), // 2 hours later
        attachment: base64,
      };

      await this.connection.invoke("CreateRequest", request);
      alert("تم ارسال الطلب بنجاح");
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      console.error("No file selected");
      alert("يرجى اختيار ملف");
    }
  }

  onReceiveNotification(): any {
    this.connection.on("ReceiveNotification", (message: any) => {
      console.log("Received message:", message);
    });
  }
  onreceiveOffer(): any {
    this.connection.on("ReceiveOffer", (request: any) => {
      console.log("Received request:", request);
      
    });
  }

  //NOTE -  Client Review a Service Provider
  ServiceProviderReview = {
    ServiceDetailsCommitment: 4,
    UserBehavior: 5,
    PriceCommitment: 4,
    ServiceQuality: 5,
    DateTimeCommitment: 4,
    RatingComment: "From Client",
    OfferID: 1,
  };
  //NOTE - Client invokes the method to send the review to the server
  async sendClientReview() {
    await this.connection
      .invoke("ReviewServiceProvider", this.ServiceProviderReview)
      .then(() => {
        console.log("تم ارسال تقييم الخدمة بنجاح!");
      });
  }
  receivereview() {
    this.connection.on("ReceiveReview", (message: any) => {
      console.log("Received message from server:", message);
    });
  }
}

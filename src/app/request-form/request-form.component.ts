import { Component, Inject, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import{ CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-request-form',
  imports: [ FormsModule, CommonModule],
  standalone: true,
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.css'
})
export class RequestFormComponent {
  private router = inject(Router);
  request = {
    serviceType: '',
    description: '',
    image: null,
    voice: null,
    location: '',
    serviceTime: ''
  };

  onFileSelected(event: any) {
    this.request.image = event.target.files[0];
  }

  onVoiceSelected(event: any) {
    this.request.voice = event.target.files[0];
  }

  onSubmit() {
    this.router.navigate(['/offers']); // Redirect to the transactions page after payment
    console.log(this.request);
    localStorage.setItem('requestData', JSON.stringify(this.request));
  }
  mediaRecorder!: MediaRecorder;
  audioChunks: Blob[] = [];
  audioUrl: string | null = null;
  isRecording = false;

  async startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(stream);
    this.audioChunks = [];

    this.mediaRecorder.ondataavailable = (event) => {
      this.audioChunks.push(event.data);
    };

    this.mediaRecorder.onstop = () => {
      const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
      this.audioUrl = URL.createObjectURL(audioBlob);
    };

    this.mediaRecorder.start();
    this.isRecording = true;
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = false;
  }

}

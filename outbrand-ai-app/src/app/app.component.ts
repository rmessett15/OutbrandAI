import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

declare var MediaRecorder: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent implements OnInit {
  //Video Record and Play By Ryan Messett
  videoElement: HTMLVideoElement;
  recordVideoElement: HTMLVideoElement;
  mediaVideoRecorder: any;
  videoRecordedBlobs: Blob[];
  isRecording: boolean = false;
  downloadVideoUrl: string;
  stream: MediaStream;
  db: any;
  @ViewChild('recordedVideo') recordVideoElementRef: ElementRef;
  @ViewChild('liveVideo') videoElementRef: ElementRef;
  constructor() {}
  async ngOnInit() {
    const firebaseConfig = {
      apiKey: 'AIzaSyD_x1ywXKCuby2qrU3PUAZCcauoYsjehGc',
      authDomain: 'outbrand-ai-webcam-recorder.firebaseapp.com',
      databaseURL:
        'https://outbrand-ai-webcam-recorder-default-rtdb.firebaseio.com',
      projectId: 'outbrand-ai-webcam-recorder',
      storageBucket: 'outbrand-ai-webcam-recorder.appspot.com',
      messagingSenderId: '882113387268',
      appId: '1:882113387268:web:0f1d02ccd2504a582fce51',
      measurementId: 'G-0FGF0H551R',
    };
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 480,
        },
      })
      .then((stream) => {
        this.videoElement = this.videoElementRef.nativeElement;
        this.recordVideoElement = this.recordVideoElementRef.nativeElement;
        this.stream = stream;
        this.videoElement.srcObject = this.stream;
      });
  }
  startVideoRecording() {
    this.videoRecordedBlobs = [];
    let options: any = {
      mimeType: 'video/webm',
    };
    try {
      this.mediaVideoRecorder = new MediaRecorder(this.stream, options);
    } catch (err) {
      console.log(err);
    }
    this.mediaVideoRecorder.start();
    this.isRecording = !this.isRecording;
    this.onDataAvailableVideoEvent();
    this.onStopVideoRecordingEvent();
  }
  stopVideoRecording() {
    this.mediaVideoRecorder.stop();
    this.isRecording = !this.isRecording;
  }
  playRecording() {
    if (!this.videoRecordedBlobs || !this.videoRecordedBlobs.length) {
      return;
    }
    this.recordVideoElement.play();
    console.log(this.videoRecordedBlobs);
  }
  onDataAvailableVideoEvent() {
    try {
      this.mediaVideoRecorder.ondataavailable = (event: any) => {
        if (event.data && event.data.size > 0) {
          this.videoRecordedBlobs.push(event.data);
        }
      };
    } catch (error) {
      console.log(error);
    }
  }
  onStopVideoRecordingEvent() {
    try {
      this.mediaVideoRecorder.onstop = (event: Event) => {
        const videoBuffer = new Blob(this.videoRecordedBlobs, {
          type: 'video/webm',
        });
        this.saveVideo(this.videoRecordedBlobs[0]);
        this.downloadVideoUrl = window.URL.createObjectURL(videoBuffer);
        this.recordVideoElement.src = this.downloadVideoUrl;
      };
    } catch (error) {
      console.log(error);
    }
  }

  saveVideo(blob: any) {
    blob.text().then((data: any) => {
      this.db
        .collection('video')
        .add({
          data: data,
        })
        .then((docRef: any) => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch((error: any) => {
          console.error('Error adding document: ', error);
        });
    });
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'outbrand-ai-app';
}

  // constructor(private httpClient: HttpClient) {
  //   onSubmit() {
  //     this.httpClient.post("https://outbrand-ai-webcam-recorder-default-rtdb.firebaseio.com/", this.value)
  //   }
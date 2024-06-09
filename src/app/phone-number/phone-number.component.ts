import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



let config = {
  apiKey: "AIzaSyCSp4cN10tEGHRTTqJPLjuUZH94TKImUAo",
  authDomain: "rpweather-998b8.firebaseapp.com",
  projectId: "rpweather-998b8",
  storageBucket: "rpweather-998b8.appspot.com",
  messagingSenderId: "397926975339",
  appId: "1:397926975339:web:c7ae4bcc058c03342c2e2e",
  measurementId: "G-WCSGN5BRBP"
}

@Component({
  selector: 'app-phone-number',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './phone-number.component.html',
  styleUrl: './phone-number.component.css'
})
export class PhoneNumberComponent implements OnInit {
  phoneNumber: any;
  reCaptchaVerifier!: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    firebase.initializeApp(config);
  }

  getOTP() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );

    firebase
      .auth()
      .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem('verificationId', JSON.stringify(confirmationResult.verificationId));
        this.router.navigate(['/code']);
      }).catch((error) => {
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      })
  }
}

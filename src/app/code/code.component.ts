import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [FormsModule,NgOtpInputModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CodeComponent implements OnInit {

  otp!: string;
  verify: any;

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  ngOnInit() {
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
  }

  onOtpChange(otpCode: any) {
    this.otp = otpCode;
    console.log(this.otp);
  }

  handleClick() {
    console.log(this.otp);
    let credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );
    firebase
    .auth()
    .signInWithCredential(credential)
    .then((response) => {
      console.log(response);
    })
  }

  }

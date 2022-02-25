import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  term: string = '';
  booking: boolean = true;
  booked: boolean = false;
  container: any[] = [];

  formBook: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(22),
      Validators.required,
    ]),
    name_movie: new FormControl(null, [Validators.required]),
    time: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8),
    ]),
    seats: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(30),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    textArea: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(220),
    ]),
  });
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('movie') !== null) {
      this.container = JSON.parse(localStorage.getItem('movie') || '{}');
    } else {
      this.container = [];
    }
  }

  getFOrmData(formBook: FormGroup) {
    this.term = formBook.get('email')?.value;
    console.log(formBook);

    console.log(11);

    if (this.formBook.status == 'VALID') {
      this.container.push(this.formBook.value);

      localStorage.setItem('movie', JSON.stringify(this.container));
      this.booking = !this.booking;
      this.booked = !this.booked;
      this.formBook.reset();

      setTimeout(() => {
        this.booking = !this.booking;
        this.booked = !this.booked;
      }, 22000);
    }
  }
}

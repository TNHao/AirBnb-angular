import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { VerificationService } from '../../services/verification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private verification: VerificationService, private router: Router) { }

  ngOnInit(): void {
  }

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}"),
    ]),
    password: new FormControl('', Validators.required),
    gender: new FormControl('', null),
    birthday: new FormControl('', null),
    phone: new FormControl('', null)
  })

  onSubmit = () => {
    console.log(this.signUpForm.value)

    let value = this.signUpForm.value;

    if (value.gender === "") value.gender = true;

    this.verification.post("auth/register", value).subscribe(async (res) => {
      await Swal.fire({
        title: `Sign up successed!`,
        icon: 'success'
      });

      localStorage.setItem("userData", JSON.stringify(res));

      this.router.navigate(["/"]);
    }, (error) => {
      console.log(error);
      Swal.fire({
        title: "Something went wrong!",
        icon: 'error'
      });
    })
  }
}

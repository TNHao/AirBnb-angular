import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { VerificationService } from '../../services/verification.service';

@Component({
	selector: 'app-log-in',
	templateUrl: './log-in.component.html',
	styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
	constructor(private verification: VerificationService, private router: Router) { }

	ngOnInit(): void {
	}

	logInForm = new FormGroup({
		email: new FormControl('', [
			Validators.required,
			Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}"),
		]),
		password: new FormControl("", Validators.required)
	})

	onSubmit(): void {
		this.verification.post("auth/login", this.logInForm.value).subscribe(async (res) => {
			console.log(res)
			
			let userData = res.user;

			await Swal.fire({
				title: `Welcome Back, ${userData.name}!`,
				icon: 'success'
			});
			
			localStorage.setItem("userData", JSON.stringify(userData));

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

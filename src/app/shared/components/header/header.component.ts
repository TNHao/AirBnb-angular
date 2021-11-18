import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = true;

  constructor(private router: Router) {
    const currentUser = JSON.parse(localStorage.getItem('userData')!);
    if (currentUser) this.isLoggedIn = true;
    else 
      this.isLoggedIn = false;
  }

  ngOnInit(): void {
  }

 async handleLogOut(){
    this.isLoggedIn = false;
    localStorage.clear();

    await Swal.fire({
      title: "Log out success!",
      icon: "success"
    });

    this.router.navigate(['/']);
  }
}

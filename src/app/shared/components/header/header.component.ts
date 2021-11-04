import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = true;

  constructor() {
    const currentUser = JSON.parse(localStorage.getItem('userData')!);
    if (currentUser) this.isLoggedIn = true;
    else 
      this.isLoggedIn = false;
  }

  ngOnInit(): void {
  }

  handleLogOut(){
    this.isLoggedIn = false;
    localStorage.clear();

    Swal.fire({
      title: "Log out success!",
      icon: "success"
    });
  }
}

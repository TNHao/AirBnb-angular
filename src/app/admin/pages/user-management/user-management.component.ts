import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  listUser: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.get('users/pagination').subscribe(
      (result: any) => {
        this.listUser = result.content;
        console.log(this.listUser);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}

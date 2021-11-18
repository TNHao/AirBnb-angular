import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { UpdateInfoDialogComponent } from './update-info-dialog/update-info-dialog.component';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userInfo: any;

  constructor(public dialog: MatDialog) {
    this.userInfo = JSON.parse(localStorage.getItem("userData")!);
    console.log(this.userInfo)
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateInfoDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

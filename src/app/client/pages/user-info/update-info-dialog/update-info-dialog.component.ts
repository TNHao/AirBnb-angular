import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog"

@Component({
  selector: 'app-update-info-dialog',
  templateUrl: './update-info-dialog.component.html',
  styleUrls: ['./update-info-dialog.component.scss']
})
export class UpdateInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

}

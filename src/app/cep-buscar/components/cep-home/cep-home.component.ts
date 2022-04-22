import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CepDialogComponent } from '../cep-dialog/cep-dialog.component';

@Component({
  selector: 'app-cep-home',
  templateUrl: './cep-home.component.html',
  styleUrls: ['./cep-home.component.css']
})
export class CepHomeComponent implements OnInit {

  cepToFind: FormControl = new FormControl('',[Validators.required]);

  constructor(
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  showDialog(): void {
    let ref = this.dialog.open(CepDialogComponent)
    ref.componentInstance.cep = this.cepToFind.value

  }
}

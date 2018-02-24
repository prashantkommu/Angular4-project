import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { InputTextModule, ButtonModule } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  processingInfoForm: FormGroup;
  processingInfoData: any = [];
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.processingInfoForm = this._fb.group({
      quantity: [''],
      billedDaysSupply: [''],
      actualDaysSupply: ['']
    });
    this.processingInfoData['quantity'] = '0005';
    this.processingInfoData['billedDaysSupply'] = '03';
    this.processingInfoData['actualDaysSupply'] = '2';
  }


}

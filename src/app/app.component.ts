import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { InputTextModule, ButtonModule, DropdownModule } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  processingInfoForm: FormGroup;
  processingInfoMainForm: FormGroup;
  processingInfoData: any = [];
  processingInfoMainData: any = [];
  fill: any;
  primary: any;
  secondPayor: any;
  processAction: any;
  fillData: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.processingInfoForm = this._fb.group({
      quantity: [''],
      billedDaysSupply: [''],
      actualDaysSupply: ['']
    });
    this.processingInfoMainForm = this._fb.group({
      fill: [''],
      primary: [''],
      secondPayor: [''],
      processAction: ['']
    });
    this.processingInfoData['quantity'] = '0005';
    this.processingInfoData['billedDaysSupply'] = '03';
    this.processingInfoData['actualDaysSupply'] = '2';
  }
}

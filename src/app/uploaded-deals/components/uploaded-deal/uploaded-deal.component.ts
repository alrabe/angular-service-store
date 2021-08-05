import { Component, Input, OnInit } from '@angular/core';
import { UploadedDeal } from '../../models/uploaded-deal';

@Component({
  selector: 'uploaded-deal',
  templateUrl: './uploaded-deal.component.html',
  styleUrls: ['./uploaded-deal.component.css']
})
export class UploadedDealComponent implements OnInit {

  @Input()
  deal!: UploadedDeal;

  constructor() { 
  }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadedDeal } from './models/uploaded-deal';
import { UploadedDealsService } from './services/uploaded-deals.service';

@Component({
  selector: 'uploaded-deals',
  templateUrl: './uploaded-deals.component.html',
  styleUrls: ['./uploaded-deals.component.css']
})
export class UploadedDealsComponent implements OnInit {

  deals: Observable<UploadedDeal[]>;
  isLoading: Observable<boolean>;

  constructor(private _dealsService: UploadedDealsService) { 
    this.deals = this._dealsService.deal$();
    this.isLoading = this._dealsService.isLoading$();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Promise.resolve(null).then(() => this.reloadDeals());
  }

  reloadDeals(): void {
    this.clearDeals();
    this._dealsService.reload(new Date());
  }

  clearDeals(): void {
    this._dealsService.clear();
  }
}

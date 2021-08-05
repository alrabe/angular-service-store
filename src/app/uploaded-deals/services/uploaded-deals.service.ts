import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, filter, tap } from 'rxjs/operators';
import { __makeTemplateObject } from 'tslib';
import { UploadedDeal } from '../models/uploaded-deal';

@Injectable({
  providedIn: 'root'
})
export class UploadedDealsService {

  _isLoading = new BehaviorSubject<boolean>(false);
  _uploadedDeals = new BehaviorSubject<UploadedDeal[]>([]);

  constructor() { }

  isLoading$(): Observable<boolean> {
    return this._isLoading.asObservable();
  }

  deal$(): Observable<UploadedDeal[]> {
    return this._uploadedDeals.asObservable();
  }

  deals(): UploadedDeal[] {
    return this._uploadedDeals.getValue();
  }

  reload(date: Date): void {
    of(this.mockData()).pipe(
      filter(_ => this._isLoading.getValue() === false),
      tap(_ => console.log(`loading deals for ${date.getDate()}.${date.getMonth()+1},${date.getFullYear()}`)),
      tap(_ => this._isLoading.next(true)),
      delay(1200),
      tap(_ => this._isLoading.next(false))
    ).subscribe(
      (deals) => this._uploadedDeals.next(deals)
    );
  }

  clear(): void {
    console.log("remove all deals from store");
    this._uploadedDeals.next([]);
  }

  private mockData(): UploadedDeal[] {
    return  [
      {tradeId: "1" , reference: "deal one", state: "processing"},
      {tradeId: "2" , reference: "deal two", state: "completed"},
      {tradeId: "3" , reference: "deal three", state: "EndurError"},
      {tradeId: "4" , reference: "deal four", state: "UploadError"},
      {tradeId: "5" , reference: "deal five", state: "StateUnknown"},
    ];
  }
}


import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedTokenService {
  private _tokenValue = new BehaviorSubject<number>(0);

  get tokenValue(): Observable<number> {
    return this._tokenValue.asObservable();
  }

  updateTokenValue(newValue: number) {
    this._tokenValue.next(newValue);
  }
}

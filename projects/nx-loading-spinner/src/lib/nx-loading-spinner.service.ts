import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NxLoadingSpinnerService {

  constructor() { }

  /** Progress state */
  state = new Subject();
  private isSpinning1 = false;

  /** Start spinning */
  start(): void {
    if (this.isSpinning()) {
      return;
    }
    this.isSpinning1 = true;
    this.state.next(true);
  }

  /** Stop spinning */
  stop(): void {
    if (!this.isSpinning()) {
      return;
    }
    this.isSpinning1 = false;
    /** if spinning stop it */
    this.state.next(false);
  }

  isSpinning(): boolean {
    return this.isSpinning1;
  }

}

import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {NxLoadingSpinnerService} from './nx-loading-spinner.service';

@Injectable()
export class NxLoadingSpinnerInterceptor implements HttpInterceptor {

  private requestCounter = 0;

  constructor(public spinnerService: NxLoadingSpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.start();
    this.requestCounter++;
    return next.handle(req)
      .pipe(
        finalize(() => {
          this.requestCounter--;
          if (this.requestCounter === 0) {
            this.spinnerService.stop();
          }
        }));
  }
}

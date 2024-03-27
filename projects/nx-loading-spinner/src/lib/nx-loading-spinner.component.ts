import {Component, Input} from '@angular/core';
import {NxLoadingSpinnerService} from "./nx-loading-spinner.service";

@Component({
  selector: 'lib-nx-loading-spinner',
  standalone: true,
  imports: [],
  template: `
    <div [hidden]="!show" id="loading-bar-spinner" [style.top]="top + 'px'">
      <div [style.border-color]="color" class="spinner-icon"></div>
    </div>
  `,
  styleUrls: ['./nx-loading-spinner.component.scss'],
})
export class NxLoadingSpinnerComponent {

  @Input() color = '#000000';
  @Input() top = 105;

  show = false;

  constructor(private ngLoadingSpinnerService: NxLoadingSpinnerService) {
    this.ngLoadingSpinnerService.state.subscribe((r: any) => {
      this.show = r;
    });
  }

  ngOnDrestroy(): void {
    this.ngLoadingSpinnerService.state.unsubscribe();
  }
}

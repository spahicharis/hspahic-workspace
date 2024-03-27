import {AfterViewInit, Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {NxRibbonComponent} from "@hspahic/nx-ribbon";
import {NxLoadingSpinnerComponent, NxLoadingSpinnerService} from '@hspahic/nx-loading-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, InputTextModule, CardModule, NxRibbonComponent, NxLoadingSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    NxLoadingSpinnerService
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'showcase';
  spinnerService = inject(NxLoadingSpinnerService);

  ngAfterViewInit() {
    this.spinnerService.start();
  }
}

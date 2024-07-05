import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { NxRibbonComponent } from "@hspahic/nx-ribbon";
import { NxLoadingSpinnerComponent, NxLoadingSpinnerService } from '@hspahic/nx-loading-spinner';
import { NxPredictiveInputComponent } from "@hspahic/nx-predictive-input";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, InputTextModule, CardModule,
    NxRibbonComponent, NxLoadingSpinnerComponent,
    NxPredictiveInputComponent,
    ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    NxLoadingSpinnerService
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'showcase';
  spinnerService = inject(NxLoadingSpinnerService);
  form = this.fb.group({
    name: ['', Validators.required],
    country: [''],
  });

  countries = [
    "Bosnia and Herzegovina",
  ]

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngAfterViewInit() {
    this.spinnerService.start();
  }
}

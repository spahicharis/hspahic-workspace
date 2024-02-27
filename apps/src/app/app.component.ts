import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { NxRibbonComponent } from "nx-ribbon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, InputTextModule, CardModule, NxRibbonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ribbon-showcase';
}

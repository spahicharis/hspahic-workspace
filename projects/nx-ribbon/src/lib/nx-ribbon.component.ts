import { Component, Input } from '@angular/core';
import { NgStyle } from "@angular/common";

@Component({
  selector: 'lib-nx-ribbon',
  standalone: true,
  imports: [
    NgStyle
  ],
  template: `
    <div class="ribbon-1 left"
         [ngStyle]="{
    background: bgColor || '#ffd740',
    boxShadow: '0 0 0 999px ' + (bgColor || '#ffd740'),
    color: color || '#ffffff'
    }">{{ text }}
    </div>
  `,
  styles: `
    .ribbon-1 {
      position: fixed;
      background: #ffd740;
      box-shadow: 0 0 0 999px #ffd740;
      clip-path: inset(0 -100%);
      z-index: 99999;
      font-size: 24px;
      padding: 10px;
    }
    .left {
      inset: 0 auto auto 0;
      transform-origin: 100% 0;
      transform: translate(-29.3%) rotate(-45deg);
    }`
})
export class NxRibbonComponent {
  @Input() text = "Development";
  @Input() bgColor = "#ffd740";
  @Input() color = "#ffffff";
}

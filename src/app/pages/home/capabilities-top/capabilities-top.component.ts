import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { BelowBgShadesComponent } from "../../../shades/below-bg-shades/below-bg-shades.component";
import { BgShadesComponent } from "../../../shades/bg-shades/bg-shades.component";

@Component({
  selector: 'app-capabilities-top',
  standalone: true,
  imports: [MatIcon, BelowBgShadesComponent, BgShadesComponent],
  templateUrl: './capabilities-top.component.html',
  styles: ``
})
export class CapabilitiesTopComponent {

}

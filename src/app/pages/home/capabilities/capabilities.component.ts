import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GreenShadesComponent } from "../../../components/utils/green-shades/green-shades.component";
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [
    MatIconModule, 
    GreenShadesComponent, 
    TranslateModule 
  ],
  templateUrl: './capabilities.component.html',
  styles: ``
})
export class CapabilitiesComponent { }
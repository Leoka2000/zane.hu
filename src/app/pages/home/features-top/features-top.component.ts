import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-features-top',
  standalone: true,
  imports: [
    MatIcon,
    TranslateModule 
  ],
  templateUrl: './features-top.component.html',
  styles: ``
})
export class FeaturesTopComponent {

}
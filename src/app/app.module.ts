import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DettaglioDistintaComponent } from './dettaglio-distinta/dettaglio-distinta.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DettaglioSDDComponent } from './dettaglio-sdd/dettaglio-sdd.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [AppComponent, DettaglioDistintaComponent, DettaglioSDDComponent,],
  imports: [BrowserModule, FontAwesomeModule,NgbModule,FormsModule,CommonModule],
  providers: [],
  bootstrap: [AppComponent]
  
    
    
  
  
})
export class AppModule { }

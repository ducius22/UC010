import { Component, OnInit } from '@angular/core';
import {faChevronDown, faChevronRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dettaglio-distinta',
  templateUrl: './dettaglio-distinta.component.html',
  styleUrls: ['./dettaglio-distinta.component.css']
})
export class DettaglioDistintaComponent implements OnInit {
 
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  isCollapsedDatiSottDist = false;
  isCollapsedSddRig = false;
  isCollapsedSddNonLav = false;
  isValid = false;

  

  constructor() { }

  ngOnInit(): void {
  }

}

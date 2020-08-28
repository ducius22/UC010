import { Component, OnInit, Input } from '@angular/core';
import {faChevronDown, faChevronRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dettaglio-sdd',
  templateUrl: './dettaglio-sdd.component.html',
  styleUrls: ['./dettaglio-sdd.component.css']
})
export class DettaglioSDDComponent implements OnInit {

  
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  isCollapsed =false;
  isValid = false;
  

  constructor() { }

  ngOnInit(): void {
  }

}

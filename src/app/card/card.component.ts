import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope, faMapMarker, faPhoneAlt, faDatabase } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user: any;
  
  faEnvelope = faEnvelope;
  faMapMarker = faMapMarker;
  faPhoneAlt = faPhoneAlt;
  faDatabase = faDatabase;
  constructor() { }

  ngOnInit(): void {
  }

  reloadPage(){
    window.location.reload();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.css']
})
export class CalendarEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  eventTouched(event) {
    console.log("inside eventTouched() function");
    console.log(event);
  }

}

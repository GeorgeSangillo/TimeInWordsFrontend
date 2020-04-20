import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-view-event-table',
  templateUrl: './view-event-table.component.html',
  styleUrls: ['./view-event-table.component.css']
})
export class ViewEventTableComponent implements OnInit {

  events: any;
  timesInWords: any;

  constructor(private eventsServ: EventsService) { }

  ngOnInit(): void {
    this.eventsServ.getAllEvents().subscribe(data => {
      this.events = data[0];
      this.timesInWords = data[1];
      // console.log(this.timesInWords[]);
    });
  }

}

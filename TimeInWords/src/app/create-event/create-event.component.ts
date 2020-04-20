import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event: any;
  name: string;
  location: string;
  month: number;
  day: number;
  year: number;
  hour: number;
  minute: number;

  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  minutes: number[] = [];

  constructor(private eventsServ: EventsService) { }

  ngOnInit(): void {
    this.minutes.pop();
    for (let i = 1; i <= 60; i++) {
      this.minutes.push(i);
    }
  }

  createNewEvent() {
    this.eventsServ.createNewEvent(this.name, this.location, this.month, this.day, this.year, this.hour, this.minute).subscribe(event => {
      this.event = event;
      location.reload();
    });
  }

}

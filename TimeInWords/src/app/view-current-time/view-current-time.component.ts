import { Component, OnInit, OnChanges } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-view-current-time',
  templateUrl: './view-current-time.component.html',
  styleUrls: ['./view-current-time.component.css']
})
export class ViewCurrentTimeComponent implements OnInit, OnChanges {

  currentDate = new Date(Date.now());
  timeInWords: string;

  constructor(private eventsServ: EventsService) { }

  ngOnInit(): void {
    this.eventsServ.getTimeInWords(this.currentDate).subscribe(time => {
      this.timeInWords = time[0];
    });
  }

  ngOnChanges(): void {
  }

}

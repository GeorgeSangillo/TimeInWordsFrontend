import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private url = 'http://localhost:9025/eventapi';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  /** GET current time in words */
  getTimeInWords(date: Date): Observable<any> {
    const time = ((date.getHours() - 1) % 12 + 1) + ':' + date.getMinutes();
    return this.http.get<any>(`${this.url}/${time}`, this.httpOptions);
  }

  /** POST new event */
  createNewEvent(name: string, location: string, month: number, day: number, year: number, hour: number, minute: number): Observable<any> {
    return this.http.post<any>(`${this.url}/newEvent`, JSON.stringify({name, location, month, day, year, hour, minute}), this.httpOptions);
  }

  /** GET all events */
  getAllEvents(): Observable<any> {
    return this.http.get<any>(`${this.url}/allEvents`, this.httpOptions);
  }
}

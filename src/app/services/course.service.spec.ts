import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = ['Course 1', 'Course 2', 'Course 3'];

  constructor() { }

  getCourses(): Observable<string[]> {
    return of(this.courses);
  }
}


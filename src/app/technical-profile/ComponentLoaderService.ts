import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComponentLoaderService {
  private componentSubject = new Subject<any>();
  component$ = this.componentSubject.asObservable();

  // Called by the right sidebar to tell what to load
  loadComponent(component: any) {
    this.componentSubject.next(component);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModalSubject = new BehaviorSubject<boolean>(false);

  openModal() {
    console.log('Opening modal...');
    this.showModalSubject.next(true);
  }

  closeModal() {
    console.log('Closing modal...');
    this.showModalSubject.next(false);
  }

  get showModal$() {
    return this.showModalSubject.asObservable();
  }
}

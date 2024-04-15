import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.openModal();
    console.log("ouiiiiiiii")

  }

}

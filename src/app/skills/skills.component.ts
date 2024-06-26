import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
 // Catégorie actuelle
 currentCategory = 'frontend';

 // Données des compétences (vous pourriez aussi les récupérer depuis un service ou une API)
 skills = [
  { name: 'Angular', level: 'Confirmé', category: 'frontend', progress: 75 },
  { name: 'Bootstrap', level: 'Confirmé', category: 'frontend', progress: 75 },
  { name: 'JEE', level: 'Confirmé', category: 'backend', progress: 75 },
  { name: 'Joomla', level: 'Intermédiaire', category: 'other', progress: 50 },
  { name: 'Figma', level: 'Confirmé', category: 'other', progress: 75 },
  { name: 'Github', level: 'Confirmé', category: 'other', progress: 75 },
  { name: 'HTML/CSS', level: 'Maîtrise', category: 'frontend', progress: 100 },
  { name: 'Javascript', level: 'Confirmé', category: 'frontend', progress: 75 },
  { name: 'NodeJS', level: 'Confirmé', category: 'backend', progress: 75 },
  { name: 'Jira', level: 'Confirmé', category: 'other', progress: 75 },
  { name: 'PHP', level: 'Intermédiaire', category: 'backend', progress: 50 },
  { name: 'MySQL', level: 'Confirmé', category: 'backend', progress: 75 },
  { name: 'Docker', level: 'Intermédiaire', category: 'other', progress: 50 },
  { name: 'TypeScript', level: 'Confirmé', category: 'frontend', progress: 75 },
];


 getProgressBarClass(progress: number): string {
  if (progress === 100) return 'progress-bar-100';
  if (progress === 75) return 'progress-bar-75';
  if (progress === 50) return 'progress-bar-50';
  if (progress === 25) return 'progress-bar-25';
  return ''; // une valeur par défaut ou pour d'autres pourcentages
}
 // Fonction pour changer la catégorie actuelle
 changeCategory(newCategory: string): void {
   this.currentCategory = newCategory;
 }
}

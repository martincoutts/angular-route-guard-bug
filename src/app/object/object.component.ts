import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-object',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss'],
})
export class ObjectComponent {}

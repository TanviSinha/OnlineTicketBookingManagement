import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface CinemaHall {
  name: string;
  movie: string;
  location: string;
  timeSlots: string[];
}

@Component({
  selector: 'app-cinema-management',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './cinema-management.component.html',
  styleUrls: ['./cinema-management.component.scss'],
})
export class CinemaManagementComponent {

cinemaHalls: CinemaHall[] = [
  // Sample cinema halls
  { name: 'Ranchi Cineplex', movie: 'Pushpa: The Rule - Part 2', location: 'Main Road, Ranchi', timeSlots: ['10:00 AM', '1:30 PM', '5:00 PM'] },
  { name: 'PVR Ranchi', movie: 'Bhool Bhulaiyaa 3', location: 'Hinoo, Ranchi', timeSlots: ['11:30 AM', '2:30 PM', '5:30 PM'] }
];

newCinemaHall: CinemaHall = { name: '', movie: '', location: '', timeSlots: [] };

constructor(private router: Router) {}

// Add new cinema hall
addCinemaHall(): void {
  if (this.newCinemaHall.name && this.newCinemaHall.movie && this.newCinemaHall.location && this.newCinemaHall.timeSlots.length) {
    this.cinemaHalls.push({ ...this.newCinemaHall });
    // Clear form after adding
    this.newCinemaHall = { name: '', movie: '', location: '', timeSlots: [] };
  } else {
    alert('Please fill in all fields and add at least one time slot.');
  }
}

// Remove a cinema hall
removeCinemaHall(index: number): void {
  this.cinemaHalls.splice(index, 1);
}
}
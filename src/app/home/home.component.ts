import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomeStrings = ["Good morning", "Ready to get to work?", "Hello there", "Let's do this", "Time to get things done"];
  welcomeText = this.welcomeStrings[Math.floor(Math.random() * this.welcomeStrings.length)];

  constructor() { }


  ngOnInit(): void {
  }

}

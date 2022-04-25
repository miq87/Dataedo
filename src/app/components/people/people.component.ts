import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  person: any
  interval: any

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.getRandomUser()
  }

  startTimer(): void {
    clearInterval(this.interval)
    console.log("Timer started")
    this.interval = setInterval(() => {
      this.getRandomUser()
    }, 5000)
  }

  pauseTimer(): void {
    clearInterval(this.interval)
    console.log("Timer paused")
  }

  getRandomUser(): void {
    this.randomUserService.getRandomUser().subscribe({
      next: (v) => {
        this.person = v
      },
      error: () => console.error("Problem with loading peoples")
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  person: any
  interval: any
  isTimerStarted = false

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.getRandomUser()
  }

  startTimer(): void {
    if(this.isTimerStarted) {
      clearInterval(this.interval)
      console.log("Timer started")
      this.interval = setInterval(() => {
        this.getRandomUser()
      }, 1500)
    }
  }

  pauseTimer(): void {
    if(this.isTimerStarted) {
      clearInterval(this.interval)
      console.log("Timer paused")
    }
  }

  firstStart(): void {
    this.isTimerStarted = true
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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit, OnDestroy {

  person: any
  source: any
  sub: Subscription
  isTimerPaused = false

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.getRandomUser()
  }

  startTimer() {
    this.sub?.unsubscribe()
    this.source = timer(0, 5000)
    this.sub = this.source.subscribe({
      next: (v: any) => {
        if(!this.isTimerPaused) {
          this.getRandomUser()
          console.log(new Date())
        }
      },
      error: () => console.log("Problem with loading peoples")
    })
  }

  pauseTimer() {
    this.isTimerPaused = true
  }

  resumeTimer() {
    this.isTimerPaused = false
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
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

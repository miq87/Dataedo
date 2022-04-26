import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  @ViewChild('cd', { static: false }) private countdown: CountdownComponent
  config: CountdownConfig = {
    leftTime: 5,
    demand: true
  }
  person: any
  hasTimerStarted = false

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.getRandomUser()
  }

  handleEvent(event: any) {
    if(event.action === "done") {
      this.startTimer()
    }
  }

  startTimer() {
    this.hasTimerStarted = true
    this.getRandomUser()
    this.countdown.restart()
    this.countdown.begin()
  }

  pauseTimer() {
    this.countdown.pause()
  }

  resumeTimer() {
    if(this.hasTimerStarted)
      this.countdown.resume()
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

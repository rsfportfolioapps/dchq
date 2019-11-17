import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  public jumbotronInfo: any[] = [
    {
      title: 'Phil’s story',
      description: `Phil often burns the candle at both ends. He’s a plumber and he’s in demand. The stress can often lead to
      chest infections. But now he’s signed up to DocHQ, a quick video phone call means a nurse can send a
      prescription to his local pharmacist within 24 hours. In no time, Phil is back to doing what he does best.`,
      image: '/assets/images/phil.png'
    },
    {
      title: 'Barbara’s story',
      description: `Barbara is the best customer service rep in the team. She truly cares about her job, and it upset her to take
      an afternoon off once a year to see a doctor about her contraceptive pill. Now, with DocHQ, she receives a
      reminder about her prescription and is booked in for a quick 10 minute appointment. No waiting time, no
      travel time, and she is back at her desk in half an hour. `,
      image: '/assets/images/barbara.png'
    },
    {
      title: 'Roman’s story',
      description: `Roman works on the manufacturing line. He’s amazing with his hands, but his hayfever slows him down
      every summer. With DocHQ, he receives a reminder about his allergies in spring and gets a prescription in
      time to beat the high pollen counts. Finally, he’s able to enjoy the sun as much as he enjoys his work.`,
      image: '/assets/images/roman.png'
    },
    {
      title: 'Sabilah’s story',
      description: `Sabilah developed a nasty rash on her arm a year ago, and didn’t have the time to go to her GP. But her
      company signed up to DocHQ last week. She finds it easy to contact a local nurse and shows the medical
      team her problem. The nurse easily diagnoses the condition and sent a prescription to her local pharmacy
      in under 24 hours. The problem clears up in no time.`,
      image: '/assets/images/sabillah.png'
    }
  ]

  constructor() { }

  ngOnInit(): void { }
}

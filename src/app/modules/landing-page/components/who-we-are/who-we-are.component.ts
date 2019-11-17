import { Component, OnInit, Input } from '@angular/core';
import { Thumbnail } from 'src/app/models/thumbnail.model';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {
  @Input()
  public thumbnails: Thumbnail[] = [
    {
      image: '/assets/svg/noun_Mobile_1202520.svg',
      title: 'Video Appointments',
      description: 'Call a medic from your mobile phone'
    },
    {
      image: '/assets/svg/noun_Doctor_1355572.svg',
      title: 'Face-to-face Consultations',
      description: 'No fuss consultations within 24 hours'
    },
    {
      image: '/assets/svg/noun_Prescription_2138877.svg',
      title: 'Prescriptions',
      description: 'Convenient prescription and medication delivery'
    },
    {
      image: '/assets/svg/noun_doctors_prescription_2154615_000000.svg',
      title: 'Sick notes',
      description: 'Instantly drafted and set to HR'
    },
    {
      image: '/assets/svg/noun_Stethoscope_710443.svg',
      title: 'Annual Health Check',
      description: 'Proactively care for your employees'
    },
    {
      image: '/assets/svg/noun_Conversation_1450139.svg',
      title: 'Referrals',
      description: 'To specialist if required'
    },
    {
      image: '/assets/svg/noun_Mobile_1086535.svg',
      title: 'Mobile App',
      description: "Expert advice at your team's fingertips"
    },
    {
      image: '/assets/svg/noun_Doctor_2207514_000000.svg',
      title: 'Follow-up care',
      description: 'For your employees after they have been unwell'
    }
  ]; 

  constructor() { }

  ngOnInit(): void { }
}

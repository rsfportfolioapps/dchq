import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  faqs = [
    {
      question: "How does DocHQ help us to manage our employee sickness?",
      answer: "We improve employee sickness rates and health by providing swift online access to medical professionals, getting your employees back to work faster. Our aim is to minimise health issues by addressing non-emergency health concerns with preventative methods within a digital space – at a time and a place that is convenient for your workforce."
    },
    {
      question: "Is this an insurance product?",
      answer: "No, DocHQ is not an insurance product but a valuable resource provided by an expert team to help your employees now.",
    },
    {
      question: "What if I need to add more to my package?",
      answer: "Talk to us and we can tailor a solution to the needs of your team."
    },
    {
      question: "Are we tied into a contract?",
      answer: "No, our 14-day free trial can be cancelled at anytime and our Back to Work package requires just one month’s notice for cancellation."
    },
    {
      question: "Can our business trial the DocHQ service?",
      answer: "Yes, we offer a 14-day free trial for businesses to test our service, which you can select when you register online.",
    },
    {
      question: "Can we purchase different services for different teams within our business?",
      answer: "Yes. You may have a Sales team who travel extensively or an overworked CEO who requires a private doctor; we can create individual packages for different business teams to help you design a winning solution.",
    },
    {
      question:"Will employee information be secure?",
      answer: "Yes, we use a combination of working practices and technology to make sure information is kept confidential and secure."
    },
  ];
}

import { Component } from '@angular/core';

export interface Session {
  heading: string;
  copy: string;
  guestSpeaker?: GuestSpeaker;
}

export interface GuestSpeaker { 
  name: string;
  org: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public sessions: Array<Session> = [
    {
      heading: 'Business plan',
      copy: 'Sections, key data, how to write it and how to use it, what a reasonable cost is if you are going to outsource'
    },
    {
      heading: 'Pitch deck',
      copy: 'Who is it for (investors vs customers), branding, market position, what a reasonable cost is if you are going to outsource'
    },
    {
      heading: 'Financial forecast',
      copy: 'How to put it in writing, making it detailed enough without being too cumbersome, how to structure for updates, what a reasonable cost is if you are going to outsource'
    },
    {
      heading: 'Risk management',
      copy: 'Biggest threats, mitigations, contingencies'
    },
    {
      heading: 'Funding your business',
      copy: 'Investors, loans, grants, traditional vs non-traditional approaches',
      guestSpeaker: {
        name: 'Reagan Rodriguez',
        org: '5th Ave Capital'
      }
    },
    {
      heading: 'Ramping up operations',
      copy: 'Checklists, dependencies, what\'s needed vs what can wait'
    },
    {
      heading: 'What\'s on your plate',
      copy: 'Strengths, weaknesses, things you don\'t like'
    },
    {
      heading: 'Early-stage leadership',
      copy: 'Part-time vs full-time, ownership, compensation'
    },
    {
      heading: 'Managing finances',
      copy: 'Bank accounts, credit card, bookkeeping, taxes'
    },
    {
      heading: 'Business creation',
      copy: 'Establishing your business entity, what types of structures exist, how to go about this'
    }
  ];
}

import { trigger, state, style, transition, animate } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


export type AvailablePackages = 'project-management' | 'financial-forecast' | 'pitch-deck' | 'coaching';

@Component({
  selector: 'app-idea-pros',
  templateUrl: './idea-pros.component.html',
  styleUrls: ['./idea-pros.component.scss'],
  animations: [
    trigger('enterTrigger', [
    state('fadeIn', style({
        opacity: '1',
        transform: 'translateX(0)'
    })),
    transition('void => *', [style({opacity: '0'}), animate('350ms ease')])
    ])
  ]
})
export class IdeaProsComponent {
  public showPackageDetails: AvailablePackages | undefined = 'project-management';

  public setPackageDetails(pkg: AvailablePackages) {
    this.showPackageDetails = pkg;
  }
}

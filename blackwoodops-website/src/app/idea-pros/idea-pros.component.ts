import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-idea-pros',
  templateUrl: './idea-pros.component.html',
  styleUrls: ['./idea-pros.component.scss']
})
export class IdeaProsComponent {

  public componentStates = new Map<string, boolean>();

  toggleState(section: string) {

    this.resetAllOtherStates(section);



    if (this.componentStates.has(section)) {
      const currentValue = this.componentStates.get(section);
      this.componentStates.set(section, !currentValue);
    } else {
      this.componentStates.set(section, false);
    }
  }

  resetAllOtherStates(section: string) {
    this.componentStates.forEach((value, key) => {
      if (key !== section) {
        this.componentStates.set(key, true);
      }
    });
  }

  getState(section: string) {
    if (this.componentStates.has(section)) {
      return !!this.componentStates.get(section);
    } else {
      return true;
    }
  }
}

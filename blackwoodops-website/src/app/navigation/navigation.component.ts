import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  private readonly _observer: IntersectionObserver;

  constructor() {
    this._observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
  }

  ngAfterViewInit(): void {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(ele => this._observer.observe(ele));
  }
}

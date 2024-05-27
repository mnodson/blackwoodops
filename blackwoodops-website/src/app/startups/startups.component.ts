import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.scss']
})
export class StartupsComponent implements AfterViewInit, OnDestroy {
  private readonly _observer: IntersectionObserver;
  
  constructor() {
    this._observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('large-scale');
        }
      });
    });
  }

  ngOnDestroy(): void {
    this._observer.disconnect();
  }
  
  
  
  ngAfterViewInit(): void {
    const hiddenElements = document.querySelectorAll('.small-scale');
    hiddenElements.forEach(ele => this._observer.observe(ele));
  }
}

import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { GenericService } from '../generic/generic.service';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

export interface PageDetails {
  title: string | undefined;
  heroImage: string | undefined;
  content: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  private readonly _observer: IntersectionObserver;
  private readonly _lrObserver: IntersectionObserver;
  private readonly _fadeObserver: IntersectionObserver;

  constructor(private readonly genericService: GenericService, private readonly router: Router) {
    this._observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    this._lrObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-lr');
        }
      });
    }, {
      threshold: 0.75
    });

    this._fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-fade');
        }
      });
    }, {
      threshold: 0.75
    });
  }

  ngOnDestroy(): void {
    this._fadeObserver.disconnect();
    this._lrObserver.disconnect();
    this._observer.disconnect();
  }

  ngAfterViewInit(): void {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(ele => this._observer.observe(ele));

    const hiddenLeftRightElements = document.querySelectorAll('.hidden-lr');
    hiddenLeftRightElements.forEach(ele => this._lrObserver.observe(ele));

    const hiddenFadeElements = document.querySelectorAll('.hidden-fade');
    hiddenFadeElements.forEach(ele => this._fadeObserver.observe(ele));
  }

  scrollToNextSection() {
    window.document.body.scrollBy(0, window.innerHeight);
  }
}

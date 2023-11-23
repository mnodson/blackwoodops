import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('section1')
  section1!: ElementRef;

  @ViewChild('section2')
  section2!: ElementRef;

  @ViewChild('section3')
  section3!: ElementRef;

  @ViewChild('section4')
  section4!: ElementRef;

  @ViewChild('section1Indicator')
  section1Indicator!: ElementRef;

  @ViewChild('section2Indicator')
  section2Indicator!: ElementRef;

  @ViewChild('section3Indicator')
  section3Indicator!: ElementRef;

  @ViewChild('section4Indicator')
  section4Indicator!: ElementRef;


  @HostListener('document:scroll')
  scroll() {
    console.log('scrolling', document.documentElement.scrollTop);

    const pos = document.documentElement.scrollTop;
    const sectionHeight = this.section1.nativeElement.offsetHeight;

    switch (true) {
      case pos >= 0 && pos < sectionHeight:
        this.setActiveSection(this.section1Indicator,
          [this.section2Indicator, this.section3Indicator, this.section4Indicator]);
        break;
      case pos >= sectionHeight && pos < sectionHeight * 2:
        this.setActiveSection(this.section2Indicator,
          [this.section1Indicator, this.section3Indicator, this.section4Indicator]);
        break;
      case pos >= sectionHeight * 2 && pos < sectionHeight * 3:
        this.setActiveSection(this.section3Indicator,
          [this.section1Indicator, this.section2Indicator, this.section4Indicator]);
        break;
      case pos >= sectionHeight * 3 && pos < sectionHeight * 4:
        this.setActiveSection(this.section4Indicator,
          [this.section1Indicator, this.section2Indicator, this.section3Indicator]);
        break;
    }
  }

  setActiveSection(section: ElementRef, others: ElementRef[]) {
    section.nativeElement.classList.add('active');
    others.forEach(section => section.nativeElement.classList.remove('active'));
  }
}

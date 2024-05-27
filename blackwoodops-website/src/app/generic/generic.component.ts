import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { GenericService } from './generic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenericComponent implements OnInit {

  @ViewChild('contentHost', { read: ViewContainerRef, static: true })
  contentHost!: ViewContainerRef;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      const contentComponent = data['contentComponent'];
      this.loadContentComponent(contentComponent); 
    });
  }

  loadContentComponent(contentComponent: any) {
    if (contentComponent) {
      this.contentHost.clear();
      this.contentHost.createComponent(contentComponent);
    }
  }
}

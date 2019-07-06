import { NgOrganizationChartNodeModel } from './models/ng-organization-chart-node-model';
import { NgOrganizationChartNodeComponent } from './ng-organization-chart-node/ng-organization-chart-node.component';
import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'ng-organization-chart-vertical',
  templateUrl: './ng-organization-chart-vertical.component.html',
  styleUrls: ['./ng-organization-chart-vertical.component.scss']
})
export class NgOrganizationChartVerticalComponent implements OnInit {

  @ViewChildren('primeiro') block: ElementRef;

  @Input() data: Array<NgOrganizationChartNodeModel> = [];
  @Input() remoteData: boolean = false;
  @Output() onDragNode: EventEmitter<any> = new EventEmitter()

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // this.block.nativeElement.innerHTML = '';
  }


  onDragDeepNode(transfer) {
    this.onDragNode.emit(transfer);
  }

}

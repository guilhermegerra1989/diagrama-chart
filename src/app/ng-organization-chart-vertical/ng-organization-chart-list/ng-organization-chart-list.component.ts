import { NgOrganizationChartNodeModel } from '../models/ng-organization-chart-node-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-organization-chart-list',
  templateUrl: './ng-organization-chart-list.component.html',
  styleUrls: ['./ng-organization-chart-list.component.scss']
})
export class NgOrganizationChartListComponent implements OnInit {

  @Input() nodeList: Array<NgOrganizationChartNodeModel> =[];
  @Output() onClickNode: EventEmitter<NgOrganizationChartNodeModel> = new EventEmitter();
  @Output() onDragNode: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onClickDeepNode(node) {
    this.onClickNode.emit(node);
  }

  onDragDeepNode(transfer) {
    this.onDragNode.emit(transfer)
  }

}

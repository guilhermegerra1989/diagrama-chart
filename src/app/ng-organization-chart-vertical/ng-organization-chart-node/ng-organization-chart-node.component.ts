import { NgOrganizationChartNodeModel } from '../models/ng-organization-chart-node-model';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
@Component({
  selector: 'ng-organization-chart-node',
  templateUrl: './ng-organization-chart-node.component.html',
  styleUrls: ['./ng-organization-chart-node.component.scss']
})
export class NgOrganizationChartNodeComponent implements OnInit {

  @Input() node: NgOrganizationChartNodeModel;
  @Input() nodeListSize: number;
  @Input() index: number;

  public isChildrenVisible = true;
  public modalForm: FormGroup;
  public blockTypeList: any[];
  public diagram: any;
  public isEdit: boolean = null;

  public initFirst: string;
  public status: string;
  public statusChild: string;

  public isShowingOrgChartRemoveModal = false;
  public isShowingOrgChartAddModal = false;
  public isShowingOrgChartEditModal = false;
  public modalEditTitle = 'diagram.modal.edit.header.title';
  public modalRemoveTitle = 'diagram.modal.remove.header.title';
  public modalAddTitle = 'Add';

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    if (this.index === 0 ) {
      this.status = 'first';
    } else if (this.index === this.nodeListSize - 1) {
      this.status = 'last';
    } else {
      this.status = 'middle';
    }

    if (this.node.idParent == null) {
      this.initFirst = 'init-first';
    }

    if (this.nodeListSize > 1) {
      this.statusChild = 'child-true';
    }

    this.getBlockTypes();
    this.modalForm = this._fb.group({
      subject: ['', [Validators.required]],
      description: [null, [Validators.required]],
      diagramValue: ['1', [Validators.required]]
    });
   }

   showEditModal(isActive: boolean, isNew: boolean) {
    if (isNew) {
      this.isShowingOrgChartEditModal = isActive;
      this.modalForm.get('diagramValue').setValue('1');
      this.modalForm.get('subject').setValue(1);
      this.modalForm.get('description').setValue('');
      this.isEdit = false;
    } else {
      this.isShowingOrgChartEditModal = isActive;

      if (this.node.isAndDoor == null) {
        this.modalForm.get('diagramValue').setValue('1');
      } else if (this.node.isAndDoor) {
        this.modalForm.get('diagramValue').setValue('2');
      } else {
        this.modalForm.get('diagramValue').setValue('3');
      }
      this.modalForm.get('subject').setValue(this.node.blockType);
      this.modalForm.get('description').setValue(this.node.name);
      this.isEdit = true;
    }
  }

  closeEditModal() {
    this.isShowingOrgChartEditModal = false;
    this.isEdit = null;
  }

  showRemoveModal(isActive: boolean) {
    this.isShowingOrgChartRemoveModal = isActive;
    this.isEdit = null;
  }

  deleteNode() {
  }

  saveNode() {
    
  }

  getBlockTypes() {
    
  }

  save (diagram: any) {
    
  }

  onClickDeepNode(event: any){}

  saveNodeChildren (diagram: any) {
  }
}

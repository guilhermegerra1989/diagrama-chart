import { NgOrganizationChartNodeModel } from '../models/ng-organization-chart-node-model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'ng-organization-chart-node',
  templateUrl: './ng-organization-chart-node.component.html',
  styleUrls: ['./ng-organization-chart-node.component.scss']
})
export class NgOrganizationChartNodeComponent implements OnInit {

  @Input() node: NgOrganizationChartNodeModel;
  @Input() nodeList: Array<NgOrganizationChartNodeModel> = [];

  public childrenStyleClass: string = 'horizontal';
  public isChildrenVisible: boolean = true;
  public dropdownMenu: boolean;
  public diagramValue: string = '1';
  public modalForm: FormGroup;
  public blockTypeList: any[];
  public diagram: any;

  public isShowingOrgChartRemoveModal: boolean = false;
  public isShowingOrgChartEditModal: boolean = false;
  public isEdit: boolean = null;
  public modalEditTitle: string = 'diagram.modal.edit.header.title';
  public modalRemoveTitle: string = 'diagram.modal.remove.header.title';

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
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
      this.modalForm.get('subject').setValue(1);
      this.modalForm.get('description').setValue('');
      this.isEdit = false;
      if (this.node.children.length > 1) {
        if (this.node.isAndDoor == null) {
          this.modalForm.get('diagramValue').setValue('1');
        } else if (this.node.isAndDoor) {
          this.modalForm.get('diagramValue').setValue('2');
        } else {
          this.modalForm.get('diagramValue').setValue('3');
        }
      } else {
        this.modalForm.get('diagramValue').setValue('1');
      }
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

  changeChildrenStyleToVertical(){}

  saveNodeChildren (diagram: any) {
   
  }

  delete(id: string) {
   
  }
}


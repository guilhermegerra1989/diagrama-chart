import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { NgOrganizationChartVerticalComponent } from './ng-organization-chart-vertical.component';
import { NgOrganizationChartNodeComponent } from './ng-organization-chart-node/ng-organization-chart-node.component';
import { NgOrganizationChartListComponent } from './ng-organization-chart-list/ng-organization-chart-list.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { GenericModalComponent } from './generic-modal/generic-modal.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2DragDropModule.forRoot(),
  ],
  declarations: [
    NgOrganizationChartVerticalComponent,
    NgOrganizationChartNodeComponent,
    NgOrganizationChartListComponent,
    GenericModalComponent
  ],
  exports: [
    NgOrganizationChartVerticalComponent,
  ],
  entryComponents: [
    NgOrganizationChartNodeComponent,
    NgOrganizationChartListComponent
  ],
})
export class NgOrganizationChartVerticalModule { }
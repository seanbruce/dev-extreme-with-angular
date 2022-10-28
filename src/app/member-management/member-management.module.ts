import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberManagementRoutingModule } from './member-management-routing.module';
import { IndexComponent } from './component/index/index.component';
import {
  DxTreeViewModule,
  DxDataGridModule,
  DxListModule,
  DxButtonModule,
} from 'devextreme-angular';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    MemberManagementRoutingModule,
    DxTreeViewModule,
    DxDataGridModule,
    DxListModule,
    DxButtonModule,
  ],
  exports: [IndexComponent],
})
export class MemberManagementModule {}

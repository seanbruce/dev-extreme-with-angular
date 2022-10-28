import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { DxListComponent, DxTreeViewComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import {
  Card,
  IndexService,
  Member,
  OrganizationUnit,
  SelectedMember,
  SelectedOrgNode,
} from './index.service';

@Component({
  templateUrl: './index.component.html',
  providers: [IndexService],
})
export class IndexComponent implements OnInit, AfterViewInit {
  @ViewChild('containerElmRef')
  containerElmRef!: ElementRef;

  @ViewChild(DxTreeViewComponent, { static: false })
  treeView!: DxTreeViewComponent;

  organization: OrganizationUnit[];

  containerHeight = 800;

  dataSource: Member[];

  cards: Card[];

  isDrawerOpen = false;

  tabPanals = [
    {
      id: '1',
      name: '卡片',
    },
    {
      id: '2',
      name: '卡機群組',
    },
    {
      id: '3',
      name: '設備權限',
    },
    {
      id: '4',
      name: '門禁記錄',
    },
  ];

  constructor(public service: IndexService) {
    this.organization = service.getOrganization();
    this.dataSource = service.generateData(10000);
    this.cards = service.getCards();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.containerHeight =
        this.containerElmRef.nativeElement.clientHeight - 40;
      console.log(this.containerHeight);
    }, 0);
  }

  customizeColumns(columns: { width: number }[]) {
    columns[0].width = 70;
  }

  treeViewSelectionChanged(e: any) {
    this.syncSelection(e.component);
    this.isDrawerOpen = false;
  }

  treeViewContentReady(e: any) {
    this.syncSelection(e.component);
  }

  syncSelection(treeView: any) {
    const selectedOrgNode = treeView
      .getSelectedNodes()
      .map((node: any) => node.itemData);

    const [node] = selectedOrgNode;
    if (node) {
      const { id, text } = node;
      this.service.selectedOrgNode = { id, name: text };
    } else {
      this.service.selectedOrgNode = null;
    }
  }

  memberDisplayExpr(member: Member) {
    return `${member.lastName} ${member.firstName}`;
  }

  updateSelectedMember(thing: any) {
    const {
      addedItems: [member],
    } = thing;
    if (member) {
      this.service.selectedMember = {
        id: member.id,
        name: `${member.lastName} ${member.firstName}`,
      };
    } else {
      this.service.selectedMember = null;
    }
  }
}

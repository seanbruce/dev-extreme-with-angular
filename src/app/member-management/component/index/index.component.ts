import { Component, OnInit } from '@angular/core';
import { Card, IndexService, Member, OrganizationUnit } from './index.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [IndexService],
})
export class IndexComponent implements OnInit {
  organization: OrganizationUnit[];
  dataSource: Member[];
  cards: Card[];
  constructor(public service: IndexService) {
    this.organization = service.getOrganization();
    this.dataSource = service.generateData(10000);
    this.cards = service.getCards();
  }

  ngOnInit(): void {}

  customizeColumns(columns: { width: number }[]) {
    columns[0].width = 70;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface OrganizationUnit {
  id: string;

  text: string;

  expanded?: boolean;

  items?: OrganizationUnit[];

  price?: number;
}

export interface Member {
  id: number;

  firstName: string;

  lastName: string;

  gender: string;

  birthDate: Date;
}

export interface Card {
  ID: number;
  Name: string;
  Category: string;
}

const organization: OrganizationUnit[] = [
  {
    id: '1',
    text: '組織1',
    expanded: true,
    items: [
      {
        id: '1_1',
        text: '組織1-1',
        expanded: true,
        items: [
          {
            id: '1_1_1',
            text: '組織1-1-1',
            items: [
              {
                id: '1_1_1_1',
                text: '組織1-1-1-1',
                price: 220,
              },
              {
                id: '1_1_1_2',
                text: '組織1-1-1-2',
                price: 270,
              },
            ],
          },
          {
            id: '1_1_2',
            text: '組織1-1-2',
            items: [
              {
                id: '1_1_2_1',
                text: '組織1-1-2-1',
                price: 1200,
              },
              {
                id: '1_1_2_2',
                text: '組織1-1-2-2',
                price: 1450,
              },
              {
                id: '1_1_2_3',
                text: '組織1-1-2-3',
                price: 1600,
              },
              {
                id: '1_1_2_4',
                text: '組織1-1-2-4',
                price: 1350,
              },
              {
                id: '1_1_2_5',
                text: '組織1-1-2-5',
                price: 4000,
              },
            ],
          },
          {
            id: '1_1_3',
            text: '組織1-1-3',
            items: [
              {
                id: '1_1_3_1',
                text: '組織1-1-3-1',
                items: [
                  {
                    id: '1_1_3_1_1',
                    text: '組織1-1-3-1-1',
                    price: 160,
                  },
                ],
              },
              {
                id: '1_1_3_2',
                text: '組織1-1-3-2',
                items: [
                  {
                    id: '1_1_3_2_1',
                    text: '組織1-1-3-2-1',
                    price: 170,
                  },
                  {
                    id: '1_1_3_2_2',
                    text: '組織1-1-3-2-2',
                    price: 175,
                  },
                ],
              },
            ],
          },
          {
            id: '1_1_4',
            text: '組織1-1-4',
            items: [
              {
                id: '1_1_4_1',
                text: '組織1-1-4-1',
                price: 550,
              },
              {
                id: '1_1_4_2',
                text: '組織1-1-4-2',
                price: 750,
              },
            ],
          },
        ],
      },
      {
        id: '1_2',
        text: '組織1-2',
        items: [
          {
            id: '1_2_1',
            text: '組織1-2-1',
            items: [
              {
                id: '1_2_1_1',
                text: '組織1-2-1-1',
                price: 240,
              },
              {
                id: '1_2_1_2',
                text: '組織1-2-1-2',
                price: 300,
              },
            ],
          },
          {
            id: '1_2_2',
            text: '組織1-2-2',
            items: [
              {
                id: '1_2_2_1',
                text: '組織1-2-2-1',
                price: 1800,
              },
              {
                id: '1_2_2_2',
                text: '組織1-2-2-2',
                price: 3500,
              },
            ],
          },
          {
            id: '1_2_3',
            text: 'Monitors',
            items: [
              {
                id: '1_2_3_1',
                text: '19"',
                items: [
                  {
                    id: '1_2_3_1_1',
                    text: 'DesktopLCD 19',
                    price: 170,
                  },
                ],
              },
              {
                id: '1_2_3_2',
                text: '21"',
                items: [
                  {
                    id: '1_2_3_2_1',
                    text: 'DesktopLCD 21',
                    price: 180,
                  },
                  {
                    id: '1_2_3_2_2',
                    text: 'DesktopLED 21',
                    price: 190,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1_3',
        text: '組織1-3',
        items: [
          {
            id: '1_3_1',
            text: 'Video Players',
            items: [
              {
                id: '1_3_1_1',
                text: 'HD Video Player',
                price: 220,
              },
              {
                id: '1_3_1_2',
                text: 'SuperHD Video Player',
                price: 275,
              },
            ],
          },
          {
            id: '1_3_3',
            text: 'Monitors',
            items: [
              {
                id: '1_3_3_1',
                text: '19"',
                items: [
                  {
                    id: '1_3_3_1_1',
                    text: 'DesktopLCD 19',
                    price: 165,
                  },
                ],
              },
              {
                id: '1_3_3_2',
                text: '21"',
                items: [
                  {
                    id: '1_3_3_2_1',
                    text: 'DesktopLCD 21',
                    price: 175,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1_4',
        text: '組織1-4',
        items: [
          {
            id: '1_4_1',
            text: 'Video Players',
            items: [
              {
                id: '1_4_1_1',
                text: 'HD Video Player',
                price: 210,
              },
              {
                id: '1_4_1_2',
                text: 'SuperHD Video Player',
                price: 250,
              },
            ],
          },
          {
            id: '1_4_2',
            text: 'Televisions',
            items: [
              {
                id: '1_4_2_1',
                text: 'SuperLCD 42',
                price: 1100,
              },
              {
                id: '1_4_2_2',
                text: 'SuperLED 42',
                price: 1400,
              },
              {
                id: '1_4_2_3',
                text: 'SuperLED 50',
                price: 1500,
              },
              {
                id: '1_4_2_4',
                text: 'SuperLCD 55',
                price: 1300,
              },
              {
                id: '1_4_2_5',
                text: 'SuperLCD 70',
                price: 4000,
              },
              {
                id: '1_4_2_6',
                text: 'SuperPlasma 50',
                price: 1700,
              },
            ],
          },
          {
            id: '1_4_3',
            text: 'Monitors',
            items: [
              {
                id: '1_4_3_1',
                text: '19"',
                items: [
                  {
                    id: '1_4_3_1_1',
                    text: 'DesktopLCD 19',
                    price: 160,
                  },
                ],
              },
              {
                id: '1_4_3_2',
                text: '21"',
                items: [
                  {
                    id: '1_4_3_2_1',
                    text: 'DesktopLCD 21',
                    price: 170,
                  },
                  {
                    id: '1_4_3_2_2',
                    text: 'DesktopLED 21',
                    price: 180,
                  },
                ],
              },
            ],
          },
          {
            id: '1_4_4',
            text: 'Projectors',
            items: [
              {
                id: '1_4_4_1',
                text: 'Projector Plus',
                price: 550,
              },
              {
                id: '1_4_4_2',
                text: 'Projector PlusHD',
                price: 750,
              },
            ],
          },
        ],
      },
    ],
  },
];

const members: Member[] = [];

const surnames: string[] = [
  'Smith',
  'Johnson',
  'Brown',
  'Taylor',
  'Anderson',
  'Harris',
  'Clark',
  'Allen',
  'Scott',
  'Carter',
];

const names: string[] = [
  'James',
  'John',
  'Robert',
  'Christopher',
  'George',
  'Mary',
  'Nancy',
  'Sandra',
  'Michelle',
  'Betty',
];

const gender: string[] = ['Male', 'Female'];

const cards: Card[] = [
  {
    ID: 1,
    Name: '第一張卡',
    Category: 'Video Players',
  },
  {
    ID: 3,
    Name: '第二張卡',
    Category: 'Televisions',
  },
  {
    ID: 4,
    Name: '第三張卡',
    Category: 'Televisions',
  },
  {
    ID: 5,
    Name: '第四張卡',
    Category: 'Televisions',
  },
  {
    ID: 6,
    Name: '第五張卡',
    Category: 'Televisions',
  },
];

let s = 123456789;

export type SelectedMember = { id: number; name: string } | null;
export type SelectedOrgNode = { id: string; name: string } | null;

@Injectable({
  providedIn: 'root',
})
export class IndexService {
  selectedMember: SelectedMember = null;

  selectedOrgNode: SelectedOrgNode = null;

  constructor() {}

  getCards(): Card[] {
    return cards;
  }

  random() {
    s = (1103515245 * s + 12345) % 2147483647;
    return s % (10 - 1);
  }

  getOrganization(): OrganizationUnit[] {
    return organization;
  }

  generateData(count: number) {
    let i: number;
    const startBirthDate = Date.parse('1/1/1975');
    const endBirthDate = Date.parse('1/1/1992');

    for (i = 0; i < count; i++) {
      const birthDate = new Date(
        startBirthDate +
          Math.floor((this.random() * (endBirthDate - startBirthDate)) / 10)
      );
      birthDate.setHours(12);

      const nameIndex = this.random();
      const item = {
        id: i + 1,
        firstName: names[nameIndex],
        lastName: surnames[this.random()],
        gender: gender[Math.floor(nameIndex / 5)],
        birthDate,
      };
      members.push(item);
    }

    return members;
  }
}

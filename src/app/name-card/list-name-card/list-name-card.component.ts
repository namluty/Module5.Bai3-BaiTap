import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-name-card',
  templateUrl: './list-name-card.component.html',
  styleUrls: ['./list-name-card.component.scss']
})
export class ListNameCardComponent implements OnInit {
  nameCard: NameCard = {};

  constructor() {
  }

  ngOnInit(): void {
  }

}

interface NameCard {
  nameCard?: string;
  email?: string;
  phone?: string;
}

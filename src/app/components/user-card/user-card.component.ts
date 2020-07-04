import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/store/user/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  private nameBackgrounds: string[] = [
    '#680000',
    '#990099',
    '#FFCC33',
    '#3300CC',
    '#330000',
    '#003300',
    '#0033FF',
  ];
  randomColor = '#42ff33';
  currentTimeInSec = new Date().getTime() / 1000;
  constructor() {
    this.randomColor = this.nameBackgrounds[
      this.currentTimeInSec % this.nameBackgrounds.length
    ];
  }

  @Input() user: User;
  ngOnInit(): void {}
}

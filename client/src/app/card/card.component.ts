import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() profilePicture: string = '';
  @Input() bio: string = '';
  @Input() gitUsername: string = '';
  @Input() name: string = '';
  @Input() location: string = '';
  @Input() titles: string = '';
  @Input() favLang: string = '';
  @Input() totalStars: number = 0;
  @Input() highestStarCount: number = 0;
  @Input() publicRepos: number = 0;
  @Input() perfectRepos: number = 0;
  @Input() followers: number = 0;
  @Input() following: number = 0;

  constructor() {}

  ngOnInit(): void {}
}

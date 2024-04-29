import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css'],
})
export class DuelComponent implements OnInit {
  usernameOne: string = '';
  profilePictureOne: string = '';
  bioOne: string = '';
  gitUsernameOne: string = '';
  nameOne: string = '';
  locationOne: string = '';
  titlesOne: string = '';
  favLangOne: string = '';
  totalStarsOne: number = 0;
  highestStarCountOne: number = 0;
  publicReposOne: number = 0;
  perfectReposOne: number = 0;
  followersOne: number = 0;
  followingOne: number = 0;

  usernameTwo: string = '';
  profilePictureTwo: string = '';
  bioTwo: string = '';
  gitUsernameTwo: string = '';
  nameTwo: string = '';
  locationTwo: string = '';
  titlesTwo: string = '';
  favLangTwo: string = '';
  totalStarsTwo: number = 0;
  highestStarCountTwo: number = 0;
  publicReposTwo: number = 0;
  perfectReposTwo: number = 0;
  followersTwo: number = 0;
  followingTwo: number = 0;

  showCards: boolean = false;
  errorNoUsername: boolean = false;
  errorNotFound: boolean = false;

  winOne: boolean = false;
  winTwo: boolean = false;
  loseOne: boolean = false;
  loseTwo: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  hideCards() {
    this.showCards = false;
  }

  hideWinLoss() {
    this.winOne = false;
    this.winTwo = false;
    this.loseOne = false;
    this.loseTwo = false;
  }

  onSubmit() {
    let cardShownOne = false;
    let cardShownTwo = false;

    this.userService
      .inspectUser(this.usernameOne)
      .then((data) => {
        const userData = JSON.parse(JSON.stringify(data));
        this.profilePictureOne = userData['avatar_url'];
        this.bioOne = userData.bio;
        this.gitUsernameOne = userData.username;
        this.nameOne = userData.name;
        this.locationOne = userData.location;
        this.titlesOne = userData.titles;
        this.favLangOne = userData['favorite-language'];
        this.totalStarsOne = userData['total-stars'];
        this.highestStarCountOne = userData['highest-starred'];
        this.publicReposOne = userData['public-repos'];
        this.perfectReposOne = userData['perfect-repos'];
        this.followersOne = userData.followers;
        this.followingOne = userData.following;

        cardShownOne = true;
      })
      .catch(() => {
        this.hideCards();
        this.hideWinLoss();
        cardShownOne = false;
        if (this.usernameTwo == '') {
          this.errorNoUsername = true;
          this.errorNotFound = false;
        } else {
          this.errorNotFound = true;
          this.errorNoUsername = false;
        }
      });

    this.userService
      .inspectUser(this.usernameTwo)
      .then((data) => {
        const userData = JSON.parse(JSON.stringify(data));
        this.profilePictureTwo = userData['avatar_url'];
        this.bioTwo = userData.bio;
        this.gitUsernameTwo = userData.username;
        this.nameTwo = userData.name;
        this.locationTwo = userData.location;
        this.titlesTwo = userData.titles;
        this.favLangTwo = userData['favorite-language'];
        this.totalStarsTwo = userData['total-stars'];
        this.highestStarCountTwo = userData['highest-starred'];
        this.publicReposTwo = userData['public-repos'];
        this.perfectReposTwo = userData['perfect-repos'];
        this.followersTwo = userData.followers;
        this.followingTwo = userData.following;

        cardShownTwo = true;
      })
      .catch(() => {
        this.hideCards();
        this.hideWinLoss();
        cardShownTwo = false;
        if (this.usernameOne == '') {
          this.errorNoUsername = true;
          this.errorNotFound = false;
        } else {
          this.errorNotFound = true;
          this.errorNoUsername = false;
        }
      });

    this.userService
      .duelUsers(this.usernameOne, this.usernameTwo)
      .then((data) => {
        const userData = JSON.parse(JSON.stringify(data));
        const user1 = userData[0];
        const user2 = userData[1];

        this.hideWinLoss();

        if (user1.followers >= user2.followers) {
          this.winOne = true;
          this.loseTwo = true;
          console.log(`${this.usernameOne} wins!`);
        } else {
          this.winTwo = true;
          this.loseOne = true;
          console.log(`${this.usernameTwo} wins!`);
        }
        if (cardShownOne && cardShownTwo) {
          this.showCards = true;
        }
      });
  }
}

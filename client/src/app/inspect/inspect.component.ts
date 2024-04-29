import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css'],
})
export class InspectComponent implements OnInit {
  username: string = '';
  profilePicture: string = '';
  bio: string = '';
  gitUsername: string = '';
  name: string = '';
  location: string = '';
  titles: string = '';
  favLang: string = '';
  totalStars: number = 0;
  highestStarCount: number = 0;
  publicRepos: number = 0;
  perfectRepos: number = 0;
  followers: number = 0;
  following: number = 0;

  cardShown: boolean = false;

  errorNoUsername: boolean = false;
  errorNotFound: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.userService
      .inspectUser(this.username)
      .then((data) => {
        const userData = JSON.parse(JSON.stringify(data));
        this.profilePicture = userData['avatar_url'];
        this.bio = userData.bio;
        this.gitUsername = userData.username;
        this.name = userData.name;
        this.location = userData.location;
        this.titles = userData.titles;
        this.favLang = userData['favorite-language'];
        this.totalStars = userData['total-stars'];
        this.highestStarCount = userData['highest-starred'];
        this.publicRepos = userData['public-repos'];
        this.perfectRepos = userData['perfect-repos'];
        this.followers = userData.followers;
        this.following = userData.following;

        this.cardShown = true;
        this.errorNoUsername = false;
        this.errorNotFound = false;
      })
      .catch(() => {
        if (this.username == '') {
          this.errorNoUsername = true;
          this.errorNotFound = false;
        } else {
          this.errorNotFound = true;
          this.errorNoUsername = false;
        }
      });
  }
}

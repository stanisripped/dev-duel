import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const inspectUserUrl = 'http://localhost:3000/api/user/';
const duelUsersUrl = 'http://localhost:3000/api/users?';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  async inspectUser(username = 'andrew') {
    let data = await this.http.get(inspectUserUrl + username).toPromise();
    // console.log(data);
    // console.log(JSON.stringify(data));
    // const userData = JSON.parse(JSON.stringify(data));
    // username
    // console.log(userData.username);
    // name
    // console.log(userData.name);
    // location
    // console.log(userData.location);
    // titles
    // console.log(userData.titles);
    // fav language
    // console.log(userData['favorite-language']);
    // total stars
    // console.log(userData['total-stars']);
    // highest star count
    // console.log(userData['highest-starred']);
    // public repos
    // console.log(userData['public-repos']);
    // perfect repos
    // console.log(userData['perfect-repos']);
    // followers
    // console.log(userData.followers);
    // following
    // console.log(userData.following);
    return data;
  }

  async duelUsers(user1 = 'fabpot', user2 = 'andrew') {
    let data = await this.http
      .get(duelUsersUrl + `username=${user1}&username=${user2}`)
      .toPromise();
    console.log(data);
    return data;
  }
}

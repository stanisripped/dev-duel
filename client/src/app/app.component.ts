import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dev-duel';

  @Input() gitUsername: string = '';
  @Input() name: string = '';

  constructor(private userService: UserService) {}

  async inspectUser(username: string = 'andrew') {
    const data = await this.userService.inspectUser(username);
    console.log('hello', data);

    const userData = JSON.parse(JSON.stringify(data));
    this.gitUsername = userData.username;
    this.name = userData.name;
  }

  async duelUsers(user1: string, user2: string) {
    const data = await this.userService.duelUsers(user1, user2);
    console.log(data);
    const userData = JSON.parse(JSON.stringify(data));
    this.gitUsername = userData.username;
    this.name = userData.name;
  }
}

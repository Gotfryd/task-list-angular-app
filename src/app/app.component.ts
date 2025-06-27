import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from "./user/user.component";


@Component({
  selector: 'app-root-comp',
  imports: [RouterOutlet, HeaderComponent, User],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected title = 'task-list-app';
}

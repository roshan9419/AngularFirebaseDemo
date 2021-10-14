import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DBService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private dbService: DBService) { }

  ngOnInit(): void {
  }

  async gooleLogin() {
    try {
      const user = await this.authService.googleLoginIn();
      if (user) {
        alert("Welcome " + user.displayName);
      }
    } catch (e) {
      alert("Failed to login, please try again!");
    }
  }


}

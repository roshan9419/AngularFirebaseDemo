import { Component, OnInit } from '@angular/core';
import { DBService } from 'src/app/services/db.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  model = { name: '', email: '' };

  constructor(private dbService: DBService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      await this.dbService.saveUser(this.model);
      this.model.name = '';
      this.model.email = '';
      // alert("Saved");
    } catch (error) {
      console.log(error);
      alert("Failed to create new user");
    }
  }

}

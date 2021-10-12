import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { DBService } from 'src/app/services/db.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isLoadingData: boolean = true;
  users!: User[];

  constructor(private dbService: DBService) { }

  ngOnInit(): void {
    this.dbService.getUsers().subscribe(items => {
      this.users = items;
      this.isLoadingData = false;
      console.log(this.users);
    });
  }

}

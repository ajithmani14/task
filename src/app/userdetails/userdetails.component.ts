import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  user: User | undefined;
  // headers:string[]=[];
   userKeys:string[]=[];

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    console.log("User ID from route:", userId);  // Log the retrieved userId

    if (userId) {
      this.userService.getUsers().subscribe((users: User[]) => {
        console.log("Users fetched:", users); // Log the list of users fetched from the service

        this.user = users.find(user => user.id === userId);
        if (this.user) {
          this.userKeys = Object.keys(this.user);
          console.log("Selected user:", this.user);  // Log the selected user details
        } else {
          console.error('User not found');
        }
      });
    } else {
      console.error('User ID is null or undefined');
    }
}

}


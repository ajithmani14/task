import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user'
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent  implements OnInit {
  users: User[] = [];
  headers: string[] = [];
  showData:boolean=true;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
   // console.log("userlist");
    this.userService.getUsers().subscribe((data: User[]) => {
      if (data.length) {
        this.headers = Object.keys(data[0]);
      }
      this.users = data;
    });
}
onEdit(user: User, key: string, event: Event): void {
  //const inputElement = event.target as HTMLInputElement;

  //user[key] = inputElement.value; // Update the user object with new value
}

// onRowClick(userId: string): void {
//   console.log("Navigating to user details for ID:", userId);
//   this.router.navigate(['/user-details', userId]);
//   this.showData = false;
// }
onRowClick(userId: string): void {
  console.log("Navigating to user details for ID:", userId);
  if (userId) {
    this.router.navigate(['/user-details', userId]);
    this.showData = false;
  } else {
    console.error("User ID is null or undefined");
  }
}
// onRowClick(userId: string): void {
//   console.log("Navigating to user details for ID:", userId);
//   this.router.navigate(['/user-details', userId]);
// }


}

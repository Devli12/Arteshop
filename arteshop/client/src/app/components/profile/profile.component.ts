import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent implements OnInit {
  user:Object;
  profilePic: Object;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }
  
  addImage() {
    // Save selected image 
    // Save image path into database using HTTP post and backend scripting (Express?)
  }
  
  getProfilePicture() {
	  // Attempt to fetch the image reference from the database using a service
		// Return the image path
	  // If the attempt returns null
		// Return the placeholder image path
  }
}

import { Component, OnInit } from '@angular/core';
import {ProfileComponent} from "../profile/profile.component";
import {ResultsComponent} from "../results/results.component";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  componentData = null;
  ngOnInit() {};

  createProfileComponent(){
    this.componentData = {
      component: ResultsComponent,
      inputs: []
    };
  }

}

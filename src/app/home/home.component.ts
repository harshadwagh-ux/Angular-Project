import { Component, OnInit} from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/foodservice.service';
import { __param } from 'tslib';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods:Foods[]= [];
constructor(private fs:FoodService, private router:ActivatedRoute){ }

ngOnInit(): void{
  

  this.router.params.subscribe(params =>{
    if(params['serachItem'])
    this.foods=this.fs.getAll().filter(foods => foods.name.toLowerCase().includes(params['serachItem'].toLowerCase()));
  else
  this.foods=this.fs.getAll();
  })
}
}


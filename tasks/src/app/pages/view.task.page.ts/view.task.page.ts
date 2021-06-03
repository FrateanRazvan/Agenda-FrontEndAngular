import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Task } from "src/app/models/task.model";

@Component({
    selector: 'app-view-task',
    templateUrl: 'view.task.page.html',
  })
  
  export class ViewTaskPage{

    task: Task;
    
    constructor(private route: ActivatedRoute, private router: Router){
      this.route.queryParams.subscribe(params => {
        if(params && params.special){
          this.task = JSON.parse(params.special);
        }
      })
    }
  }
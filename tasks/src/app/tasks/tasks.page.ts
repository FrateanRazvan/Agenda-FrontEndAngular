import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../models/task.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TasksPage{
    tasks: Array<Task>

    constructor(private apiSvc: ApiService, private router: Router){

    }

    ionViewWillEnter(){
        this.apiSvc.get("api/Tasks").subscribe((response:Array<Task>) => {
          console.log(response);  
          this.tasks = response;
        });
    }

    gotToAddTask(){
      this.router.navigateByUrl("tasks/add");
    }
}
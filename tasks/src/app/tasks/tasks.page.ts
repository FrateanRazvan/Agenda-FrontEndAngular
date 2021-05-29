import { Component, ViewEncapsulation } from '@angular/core';
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

    constructor(private apiSvc: ApiService){

    }

    ionViewWillEnter(){
        this.apiSvc.get("api/Tasks").subscribe((response:Array<Task>) => {
          console.log(response);
          this.tasks = response;
        });
    }
}
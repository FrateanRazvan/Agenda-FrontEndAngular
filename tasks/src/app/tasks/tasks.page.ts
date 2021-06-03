import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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
    task: Task

    constructor(private apiSvc: ApiService, private router: Router){

    }

    ionViewWillEnter(){
        this.loadTasks();
    }

    gotToAddTask(){
      this.router.navigateByUrl("tasks/add");
    }

    deleteTask(task: Task){
       this.apiSvc.delete(`api/Tasks/${task.id}`).subscribe(() => {
        this.loadTasks();
       });
    }

    gotToViewTask(task: Task){
      this.apiSvc.get(`api/Tasks/${task.id}`).subscribe((response: Task) => {
          console.log("sunt aici"+response.id);
          //set my task with the one i get by id
          this.task = response;

          //setup task to be sent as paramaters
          let navigationExtras: NavigationExtras = {
            queryParams: {
              special: JSON.stringify(this.task)
            }
          }
          //navigate to "tasks/view" with response of object task as parameters
          this.router.navigate(['tasks','view'], navigationExtras);
      });
      
    }

    private loadTasks(){
      this.apiSvc.get("api/Tasks").subscribe((response:Array<Task>) => {
        // console.log(response);  
        this.tasks = response;
      });
    }
}
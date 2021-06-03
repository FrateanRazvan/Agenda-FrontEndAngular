import { Component } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { IonDatetime, NavController } from "@ionic/angular";
import { IMPORTANCE_REF, STATE_REF, Task } from "src/app/models/task.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-update-task',
    templateUrl: 'update.task.page.html',
  })
  
  export class UpdateTaskPage{
    
    IMPORTANCE_REF =IMPORTANCE_REF;
    STATE_REF = STATE_REF;

    task = new Task();

    constructor(private route: ActivatedRoute, private apiSvc: ApiService, private navCtrl: NavController, private router: Router){
      this.route.queryParams.subscribe(params => {
        if(params && params.special){
          this.task = JSON.parse(params.special);
        }
      })
    }

    updateTask(task: Task){
      console.log(task);

      const activationDate = new Date();

      task.dateTimeAdded =  new Date().toISOString();
      this.apiSvc.put(`api/Tasks/${task.id}`, task).subscribe(() => {
        this.router.navigateByUrl("tasks");
      });
    }

  }

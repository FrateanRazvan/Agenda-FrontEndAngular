import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { IMPORTANCE_REF, STATE_REF, Task } from "src/app/models/task.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-add-task',
    templateUrl: 'add.task.page.html',
  })
  
  export class AddTaskPage{

    IMPORTANCE_REF =IMPORTANCE_REF;
    STATE_REF = STATE_REF;

    task = new Task();

    constructor(private apiSvc: ApiService, private navCtrl: NavController){

    }

    addTask(){
        this.apiSvc.post("api/Tasks", this.task).subscribe(() => {
          this.navCtrl.pop();
        })
    }

    backToTasks(){
      this.navCtrl.pop();
    }
  }
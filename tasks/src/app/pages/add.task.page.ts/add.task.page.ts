import { Component } from "@angular/core";
import { IMPORTANCE_REF, STATE_REF, Task } from "src/app/models/task.model";

@Component({
    selector: 'app-add-task',
    templateUrl: 'add.task.page.html',
  })
  
  export class AddTaskPage{

    IMPORTANCE_REF =IMPORTANCE_REF;
    STATE_REF = STATE_REF;

    task = new Task();

    addTask(){
        this.task.dateTimeAdded = Date.UTC.toString;
    }
  }
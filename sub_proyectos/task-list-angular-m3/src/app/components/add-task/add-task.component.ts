import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import {Task} from '../../Task'
import { UiService } from '../../service/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text:string = ""
  day:string = ""
  reminder:boolean = false
  showAddTask:boolean = false;
  subscription?: Subscription ;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(val => {
      this.showAddTask = val
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.text.length === 0){
      alert("Please add a text for a card");
      return
    }
    const {text, day, reminder} = this
    const newTask = {text, day, reminder}
    this.onAddTask.emit(newTask as any)
  }

}

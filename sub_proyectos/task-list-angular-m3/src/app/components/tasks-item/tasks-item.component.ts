import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faCalendar } from '@fortawesome/free-solid-svg-icons';
import {Task} from '../../Task'
import {TASKS} from '../../mock_task'

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faCalendar = faCalendar;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task)
  }
}

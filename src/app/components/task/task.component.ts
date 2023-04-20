import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: ITask | undefined;
  @Output() deleteTaskEmitter: EventEmitter<ITask> = new EventEmitter<ITask>();

  onTaskDelete() {
    this.deleteTaskEmitter.emit(this.task);
  }
}

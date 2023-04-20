import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: ITask | undefined;

  handleDelete() {
    console.log('[TASK] handleDelete(): ' + this.task?.title);
  }
}

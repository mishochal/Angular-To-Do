import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [NgClass],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss'
})
export class TaskComponent {
    @Input() task: any;
    @Output() delete = new EventEmitter<Number>();
    @Output() toggle = new EventEmitter<Task>();

    deleteTask() {
        this.delete.emit(this.task.id);
    }

    toggleTask() {
        this.toggle.emit(this.task);
    }
}

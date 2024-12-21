import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../models/task.model';
import { TaskComponent } from './task/task.component';

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [FormsModule, CommonModule, TaskComponent],
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
    newTask: string = "";
    tasks: Task[] = [];

    addNewTask() {
        if (this.newTask.trim() !== "") {
            let newId: number = this.tasks.length === 0 ? 1 : this.tasks[this.tasks.length - 1].id + 1;
            this.tasks.push({ task: this.newTask, completed: false, id: newId })
            this.newTask = "";
        }
    }

    deleteTask(taskId: Number) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    toggleTask(task: Task) {
        task.completed = !task.completed;
    }
}

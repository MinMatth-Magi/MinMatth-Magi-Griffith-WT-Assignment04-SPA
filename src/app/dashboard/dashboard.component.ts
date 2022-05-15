import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  members = {
    1: { mail: 'matthieudesrues@gmail.com' },
    2: { mail: 'mario@gmail.com' },
    3: { mail: 'luigi@gmail.com' },
  };
  lists = [
    {
      id: 1,
      listname: 'Backlog',
      tasks: [
        {
          id: 1,
          name: 'Epitech Innovative Project',
          assignedMembers: [2, 3],
        },
        {
          id: 2,
          name: 'Griffith-CSP',
        },
        {
          id: 3,
          name: 'Griffith-HGP',
        },
      ],
    },
    {
      id: 2,
      listname: 'To Do',
      tasks: [],
    },
    {
      id: 3,
      listname: 'In progress',
      tasks: [],
    },
  ];

  private newId = () => {
    let min = 0;
    let max = 100000;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  addNewTaskList = () => {
    this.lists.push({
      id: this.newId(),
      listname: 'New list',
      tasks: [],
    });
  };

  deleteTaskList = (id) => {
    this.lists = this.lists.filter((taskList) => taskList.id !== id);
  };

  editTaskListName = (id, value) => {
    // Todo: save new name to database
  };

  addNewTaskToList = (listId) => {
    this.lists
      .filter((taskList) => taskList.id === listId)[0]
      .tasks.push({
        id: this.newId(),
        name: 'New task',
      });
  };
}

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
      id: '1',
      listname: 'Backlog',
      tasks: [
        {
          id: '1',
          name: 'Epitech Innovative Project',
          assignedMembers: [2, 3],
        },
        {
          id: '2',
          name: 'Griffith-CSP',
        },
        {
          id: '3',
          name: 'Griffith-HGP',
        },
        {
          id: '4',
          name: 'Griffith-CD',
        },
        {
          id: '5',
          name: 'Griffith-GD',
        },
      ],
    },
    {
      id: '2',
      listname: 'To Do',
      tasks: [],
    },
    {
      id: '3',
      listname: 'In progress',
      tasks: [],
    },
  ];

  addNewTaskList = () => {
    this.lists.push({
      id: '5',
      listname: 'New list',
      tasks: [],
    });
  };

  deleteTaskList = (id) => {
    this.lists = this.lists.filter((taskList) => taskList.id !== id);
  };

  editTaskListName = (id, value) => {
    this.lists.find((taskList) => taskList.id === id).listname = value;
  };
}

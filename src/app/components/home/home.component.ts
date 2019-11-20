import { Component, OnInit } from '@angular/core';
import { RequesterService } from '../../services/requester.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks = [];
  selectedTask = null;
  loading = false;

  constructor(public rq: RequesterService) {}

  ngOnInit() {
    this.allTasks();
  }

  allTasks() {
    this.rq.getTasks()
        .subscribe(resp => {
          this.tasks =  resp;
          this.selectedTask =  resp[0];
        },
        error => console.log('error', error)
  ); }

  selectTask(id) {
    this.loading = true;
    this.rq.getOneTasks(id)
        .subscribe(resp => {
          this.selectedTask =  resp;
          this.loading = false;
        },
        error => console.log('error', error)
        );
      }
}

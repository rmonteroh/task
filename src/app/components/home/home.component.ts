import { Component, OnInit } from '@angular/core';
import { RequesterService } from '../../requester.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks = [];
  selectedTask = null;

  constructor(public rq: RequesterService) { 
    this.allTasks();
  }

  ngOnInit() {
    
  }

  allTasks(){
    this.rq.getTasks()
        .subscribe(resp => {
          this.tasks =  resp;
          this.selectedTask =  resp[0];          
        },
        error => console.log('error',error)        
  )};

  selectTask(id){
   this.selectedTask = id;
    console.log(id);
    this.rq.getOneTasks(id)
        .subscribe(resp => {
          this.selectedTask =  resp;
          console.log(this.selectedTask);
          
        },
        error => console.log('error',error)
        )
      
        console.log('al final');
      }
}

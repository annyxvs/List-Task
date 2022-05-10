import { Component, OnInit } from '@angular/core';
import { Task } from './types/Task'
 
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public tarefaf: Array<Task> =[]
  public tasks: Array<Task> = []
  public taskFinish : Array<any> = []
  public alertDanger: boolean = false

  add(tarefa: string, op: string){
    if(tarefa.length > 0){
      this.tasks.push({text: tarefa, priority: op, id: this.tasks.length}) 
      console.log(this.tasks)
    }else{
      this.alertDanger = true
      setTimeout(() =>{
        this.alertDanger = false     
      }, 1000)
    }
  }

  finished(id: number){
    this.tarefaf = this.tasks.filter(item => item.id == id)
    
    this.tasks = this.tasks.filter(i => i.id !== id)
    
    this.taskFinish.push(this.tarefaf)
    console.log(this.taskFinish)
  }

}

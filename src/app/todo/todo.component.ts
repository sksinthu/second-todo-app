import { ITask } from './../model/task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
todoForm!:FormGroup;
task:ITask[]=[];
inprogress:ITask[]=[];
done:ITask[]=[];
iseditEnable!:boolean;
updateIndex!:any;
constructor(public fb:FormBuilder){}
ngOnInit():void{
  this.todoForm=this.fb.group({
    item:['',Validators.required]
  })
}
drop(event: CdkDragDrop<ITask[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
    }}
    addTask(){
      this.task.push({
        description:this.todoForm.value.item,
        done:false,      
      })
      this.todoForm.reset()
    }
    deleateTask(i:number){
      this.task.splice(i,1)
    }
    editTask(item:ITask,i:number){
      this.todoForm.controls['item'].setValue(item.description,i);
      this.updateIndex=i;
      this.iseditEnable=true;
    }
    deleateProgress(i:number){
    this.inprogress.splice(i,1)
    }
    updateTask(){
      this.task[this.updateIndex].description=this.todoForm.value.item;
      this.task[this.updateIndex].done=false;
      this.todoForm.reset();
      this.updateIndex=undefined;
      this.iseditEnable=false;
    }
    deleateDoneTask(i:number,item:any){
       this.task.splice(i,)
    }
  }

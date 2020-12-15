import { Component, OnInit } from '@angular/core';
import { StorageService } from 'ngx-webstorage-service';
import { Observable, Subject } from 'rxjs';
import { Storage1Service } from '../service/storage1.service';
//import { LocalstorageService } from '../localstorage.service';



@Component({
   selector: 'app-todo',
   templateUrl: './todo.component.html',
   styleUrls: ['./todo.component.css'],
   //providers: [storage1.Service]
})
export class TodoComponent implements OnInit {
   display: string;

   constructor(
      private storage1: Storage1Service
   ) { }

   ngOnInit(): void {
   }
   public items = [];
   private flag;
   private editIndex;
   private isEdit: boolean = false;
   public array1 = [];
   clickStream: Observable<any> = new Subject<any>();

   /* A two-way binding performed which 
      pushes text on division */
   public newTask;


   /* When input is empty, it will 
      not create a new division */
   public addToList() {
      debugger
      if (this.isEdit) {
         this.items.splice(this.editIndex, 0, this.newTask);
         this.isEdit = false;
         this.newTask = '';
         // Object.assign({}, this.items);
         // this.localStorage1.store(this.items);
         this.storage1.setSessionStorage(this.items);
         this.display = this.storage1.getSessionStorage();

      } else {
         this.items.push(this.newTask);
         this.newTask = '';
         this.storage1.setSessionStorage(this.items);
         this.display = this.storage1.getSessionStorage();
         // Object.assign({}, this.items);
         // this.localStorage1.store(this.items);

      }

      // this.clickStream.subscribe(() => {
      //    Object.assign({}, this.items);
      //    this.localStorage1.store(this.items);
   }


   debugger

   delete(one: any) {
      this.items.splice(one, 1);
   }

   edit(change: any, r: any) {
      debugger
      this.newTask = change;
      this.items.splice(r, 1);
      this.editIndex = r;
      this.isEdit = true;
      debugger
   }
   // setSessionStorage() {
   //    console.log("in todo set session" + Object.assign({}, this.items));
   //    Object.assign({}, this.items);
   //    this.localStorage1.store(this.items);
   // }

   // getSessionStorage() {
   //    this.setSessionStorage();
   //    console.log("in todocomponent getsession" + this.localStorage1.retrieve);
   //    this.array1 = this.localStorage1.retrieve();
   //    return this.localStorage1.retrieve();
   // }



}




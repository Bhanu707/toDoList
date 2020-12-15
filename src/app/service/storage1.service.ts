import { Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService, StorageServiceModule } from 'ngx-webstorage-service';

@Injectable({
   providedIn: 'root'
})
export class Storage1Service {

   array1: any;
   list: string;

   constructor() { }
   setSessionStorage(items) {
      console.log("in todo set session" + Object.assign({}, items));
      debugger
      Object.assign({}, items);
      debugger
      sessionStorage.setItem("key", items);
   }

   getSessionStorage() {
      debugger
      this.list = sessionStorage.getItem("key");
      return this.list;
      debugger
      //console.log("in todocomponent getsession" + this.localStorage1.retrieve);
      //this.array1 = this.localStorage1.retrieve();
      //  return this.localStorage1.retrieve();
   }
   setLocalStorage(items) {
      console.log("in todo set session" + Object.assign({}, items));
      debugger
      Object.assign({}, items);
      debugger
      localStorage.setItem("key", items);
   }

   getLocalStorage() {
      debugger
      this.list = localStorage.getItem("key");
      return this.list;
      debugger
      //console.log("in todocomponent getsession" + this.localStorage1.retrieve);
      //this.array1 = this.localStorage1.retrieve();
      //  return this.localStorage1.retrieve();
   }
}

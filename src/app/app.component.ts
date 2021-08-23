import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() listCitas:any[]

  constructor(){
    this.listCitas = [];
  }

//Agrego cita
  addCitas(cita){
    this.listCitas.push(cita)
  }
//borro cita 
  delete(index:number){
    this.listCitas.splice(index, 1)
  }
}

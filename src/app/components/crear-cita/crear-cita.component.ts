import { Time } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cita } from 'src/app/models/cita';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  @Output() cita = new EventEmitter;
  name:string;
  date:Date;
  time:Time;
  symptom:string;
  validForm:boolean

  constructor() {
  
    this.validForm = true;
   }

  ngOnInit(): void {
  }

  addCitas(form){
    let name = this.name;
    let date = this.date;
    let time = this.time;
    let symptom = this.symptom;

    if(name == '' || date == undefined || time == undefined ||symptom == ''){
      this.validForm = false
    }else{
      this.validForm = true
      let cita = new Cita(name, date, time, symptom)
      this.cita.emit(cita)
      form.reset()
      
    }

  }
}

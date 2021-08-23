import { Time } from "@angular/common";
export class Cita {

    name:string;
    date:Date;
    time:Time;
    symptom:string

    constructor(name:string,date:Date, time:Time, symptom:string){
        this.name = name;
        this.date = date;
        this.time = time;
        this.symptom = symptom;
    }
}
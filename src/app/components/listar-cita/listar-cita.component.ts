import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {
  @Input() citas = [];
  @Output() deleteCita = new EventEmitter<number>();
  constructor() { 
  }

  ngOnInit(): void {
  }
// Mando a borrar cita al componente padre
delete(index:number){
  this.deleteCita.emit(index)
}

}

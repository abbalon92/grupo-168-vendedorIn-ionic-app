import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditory-questionary',
  templateUrl: './auditory-questionary.page.html',
  styleUrls: ['./auditory-questionary.page.scss'],
})
export class AuditoryQuestionaryPage implements OnInit {

  preguntasBasico:Array<{pregunta:string,respuestas:string[]}>;
  preguntasPuesto:Array<{pregunta:string,respuestas:string[]}>;
  preguntasProducto:Array<{pregunta:string,respuestas:string[]}>;

  constructor() { 
    this.preguntasBasico=[
      {pregunta:"pregunta1",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta2",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta3",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta4",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta5",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
    ];
    this.preguntasPuesto=[
      {pregunta:"pregunta1",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta2",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta3",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta4",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta5",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
    ];
    this.preguntasProducto=[
      {pregunta:"pregunta1",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta2",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta3",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta4",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
      {pregunta:"pregunta5",respuestas:["Respuesta1","Respuesta2","Respuesta3"]},
    ];
  }

  ngOnInit() {
  }

}

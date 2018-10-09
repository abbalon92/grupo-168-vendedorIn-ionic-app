import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-auditory-questionary',
  templateUrl: './auditory-questionary.page.html',
  styleUrls: ['./auditory-questionary.page.scss'],
})
export class AuditoryQuestionaryPage implements OnInit {

  preguntasBasico:Array<{pregunta:string,respuestas:string[]}>;
  preguntasPuesto:Array<{pregunta:string,respuestas:string[]}>;
  preguntasProducto:Array<{pregunta:string,respuestas:string[]}>;

  constructor(public alertController: AlertController) { 
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Finalizar formulario',
      message: 'Esta es la finalizacion del formulario',
      buttons: ['OK']
    });

    await alert.present();
  }

}

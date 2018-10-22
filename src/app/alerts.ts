import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AlertsClass{

    constructor(private alertController: AlertController){

    }
    public async simpleAlert(mensaje:string){
            const alert = await this.alertController.create({
              header: 'Alert',
              message: mensaje,
              buttons: ['OK']
            });
            await alert.present();
    }

    public async confirmAlert(mensaje:string) {
        let respuesta:boolean;
        const alert = await this.alertController.create({
          header: 'Confirm!',
          message: mensaje,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                respuesta=false;
              }
            }, {
              text: 'Okay',
              handler: () => {
                respuesta=true;
              }
            }
          ]
        });
        return respuesta;
    }

}
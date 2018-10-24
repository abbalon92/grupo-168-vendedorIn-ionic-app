import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertsClass } from "../alerts";

@Component({
  selector: 'app-auditory-evidence',
  templateUrl: './auditory-evidence.page.html',
  styleUrls: ['./auditory-evidence.page.scss'],
})
export class AuditoryEvidencePage implements OnInit {

  constructor(private camera:Camera,
    private alert:AlertsClass) 
  { }
  title:string="Evidencias"
  CapturedImageURL:string[]=[];
  ngOnInit() {
  }

  getPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     this.CapturedImageURL[this.CapturedImageURL.length] =  imageData;
    }, (err) => {
      this.alert.simpleAlert("Se genero un error:"+err);
    });
  }

  enviar(){
    if(this.alert.confirmAlert("Seguro desea enviar auditoria?")){
      this.alert.simpleAlert("Auditoria enviada");
    }else{
      this.alert.simpleAlert("Auditoria cancelada");
    }
  }

}

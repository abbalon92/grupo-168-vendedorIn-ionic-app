import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { error } from 'util';



@Component({
  selector: 'app-check-seller',
  templateUrl: './check-seller.page.html',
  styleUrls: ['./check-seller.page.scss'],
})
export class CheckSellerPage implements OnInit {

  title:string="Comprobar certificado";
  CapturedImageURL:any;
  constructor(private camera:Camera,
    public storage:NativeStorage ) { }

  

  ngOnInit() {
  }

  getPhoto(){
    const CamOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      targetWidth:1024,
      targetHeight:720
    }

    this.camera.getPicture(CamOptions).then((imageData) => {
      console.log(imageData);
      this.CapturedImageURL = imageData;         
    },error=>{
      console.log('error en tomar la foto');
      console.log(error);
    });
  }


}

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
  CapturedImageURL:string="";
  constructor(private camera:Camera,
    public storage:NativeStorage ) { }

  

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
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.CapturedImageURL = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }


}

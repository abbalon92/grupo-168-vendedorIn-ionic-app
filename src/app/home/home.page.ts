import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(private router: Router) { }

	seleccion(characterNum: int) {
   	
   	 console.log(characterNum);
   	if(characterNum== "0"){
   		this.router.navigate(['/stand']);
   	}if(characterNum==1){
   		this.router.navigate(['/home']);
   	}if(characterNum==2){
   		this.router.navigate(['/home']);
   	}if(characterNum==3){
   		this.router.navigate(['/home']);
   	}

   // let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    //modal.present();
  }


}

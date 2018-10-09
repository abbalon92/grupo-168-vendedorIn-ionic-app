import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.page.html',
  styleUrls: ['./home-profile.page.scss'],
})
export class HomeProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


 public appPages = [
    
     {
      title: 'Mi Perfil',
      url: '/homeProfile'
      //icon: 'pr¿'
    },
    {
      title: 'Salir',
      url: '/login',
      //icon: 'list'
    }
  ];

   openModal(characterNum: number) {
   	
   	 console.log(characterNum);
   	if(characterNum== 0){
   		this.router.navigate(['/basicData']);
   	}if(characterNum==1){
   		this.router.navigate(['/contactInformation']);
   	}if(characterNum==2){
   		this.router.navigate(['/vulnerabilityCondition']);
   	}
   // let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    //modal.present();
  }

   regresar():void{
	 this.router.navigate(['/home']);
  }


}

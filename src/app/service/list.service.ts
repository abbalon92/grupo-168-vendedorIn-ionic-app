import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

//Services
import { DocumentTypeService} from './document-type.service';
import {GenderService} from './gender.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  listaTipoIdentifica = [];
  listaGeneros = [];


  constructor(private http: HttpClient,private documentTypeService:DocumentTypeService,private genderService:GenderService) { 
   
  }

  cargarListas(){
    this.cargarTipoIdentifica();
    this.cargarGenero();
  }

  cargarTipoIdentifica(){
    this.documentTypeService.getData()
      .subscribe(res => {
        this.listaTipoIdentifica = res;
      }, err => {

      });
  }

  cargarGenero(){
    this.genderService.getData()
      .subscribe(res => {
        this.listaGeneros = res;
      }, err => {

      });
  }
}

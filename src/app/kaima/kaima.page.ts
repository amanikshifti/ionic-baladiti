import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

import {ServicesService}  from  '../Services/services.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-kaima',
  templateUrl: './kaima.page.html',
  styleUrls: ['./kaima.page.scss'],
})
export class KaimaPage implements OnInit {
  listgouvernoratws: any;
  listgouv: any;
  wilayat: any;
  item: any;

  constructor(
     public navCtrl: NavController,
     public loadingCtrl: LoadingController,
     private toast: ToastController,
     private services : ServicesService,
     private httpClient : HttpClient
  ) { }

  ngOnInit() {
    this.services.getlistgouvernoratws().subscribe((data) => {
       this.listgouvernoratws = data;
       this.listgouv = data;
       console.log(this.listgouv)
    });

  }


  onContextChange(ctxt: string): void {
    console.log(this.item);
    this.item = this.wilayat.filter( (Newlistes) => {
      if ( Newlistes.nom === ctxt ) {
        console.log(Newlistes);
        return this.item = Newlistes;
    }
  });
 }



}

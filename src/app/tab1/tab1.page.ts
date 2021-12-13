import { Filmeu } from './../models/Filmeu.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmeus';

  listaFilmes: Filmeu[] = [
    {
      nome: 'Transformers: O lado Oculto da Lua',
      lancamento: '29/06/2011',
      duracao: '2h 34m',
      classificacao: 61,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ks8rCjVBG7clohwHVu0TIpEB4Q.jpg',
      generos: ['Ação', 'Ficção científica', 'Aventura']
    },
    {
      nome: 'Piratas do Caribe: No Fim do Mundo',
      lancamento: '25/05/2007',
      duracao: '2h 49m',
      classificacao: 72,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j15lZasREutscon6e61LSSNJoN7.jpg',
      generos: ['Aventura', 'Fantasia', 'Ação']
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async apresentarAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Esse seria o seu favorito!?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Confere',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme preferido favoritado!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}

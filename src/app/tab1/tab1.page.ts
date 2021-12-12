import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
      color: 'secondary'
    });
    toast.present();
  }

}

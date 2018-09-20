import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShopDetailPage } from '../shop-detail/shop-detail';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  searchQuery: string = '';
  rate: any;
  //items: string[];

  items: Array<{image: string, name: string, rating: number, type: string, icon: string  }>;
  //, octime: string, phoneNo: number, address: string, delivery: boolean
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad ShopPage');
  }
  initializeItems() {

    this.items = [
      { image: 'assets/imgs/supergirl.jpg', name: 'Shwe Pan', rating: 3.4, type: 'Restaurant', icon: 'ionic'},
      { image: 'assets/imgs/supergirl.jpg', name: 'Hot Pot City', rating: 4.5,type: 'Hot Pot',  icon: 'ionic' },
      { image: 'assets/imgs/supergirl.jpg', name: 'Hotke Htoe', rating: 5,type: 'BBQ',  icon: 'ionic' },
      { image: 'assets/imgs/supergirl.jpg', name: 'Oreno Kit', rating: 2.1,type: 'Coffee Shop',  icon: 'ionic' }
    ]
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        //return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goDetail(data)
  {
    this.navCtrl.push(ShopDetailPage, {
      d: data
    })
  }

}

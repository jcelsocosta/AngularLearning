import {Component, NgModule} from '@angular/core';
import {products} from '../products';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent{
    products = products;
    share(){
        window.alert('The product has been shared!');
    }
    onNotify(){
        window.alert('You willbe notified when the product goes on sale');
    }
}
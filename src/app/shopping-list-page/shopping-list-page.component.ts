import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: [
    './shopping-list-page.component.scss',
    '../recipe-information-page/recipe-information-page.component.scss',
  ],
})
export class ShoppingListPageComponent implements OnInit {
  shoppingList = new Map<string, JSON>();
  totalCost: number = 0;
  totalCostServing: number = 0;
  emptySpace: string = '   ';
  constructor(private router: Router) {}

  ngOnInit(): void {
    for (var i = 0; i < sessionStorage.length; i++) {
      if (sessionStorage.key(i).substring(0, 3) == 'id:') {
        //console.log(sessionStorage.key(i));
        console.log(sessionStorage.getItem(sessionStorage.key(i)));
        this.shoppingList.set(
          sessionStorage.key(i).substring(3),
          JSON.parse(sessionStorage.getItem(sessionStorage.key(i)))
        );
        let val: string = JSON.stringify(
          this.shoppingList.get(sessionStorage.key(i).substring(3))
        );
        this.totalCostServing += Number(
          val.substring(val.lastIndexOf(':') + 1, val.length - 1)
        );
        console.log(val.substring(val.lastIndexOf(':') + 1, val.length - 1));
        this.totalCost += Number(this.getNum(val));
      }
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  getNum(str: string): string {
    let str2 = '';
    let i: number = str.lastIndexOf(',') - 1;

    while (str.charAt(i) != ':') {
      str2 += str.charAt(i);
      i--;
    }
    console.log(str2.split('').reverse().join(''));
    return str2.split('').reverse().join('');
  }

  deleteShopItem(id: string) {
    sessionStorage.removeItem('id:' + id);
    this.shoppingList.delete(id);
    this.router.navigate(['app/shopping-list']);
  }
}

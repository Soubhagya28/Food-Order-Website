import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food=> food.id == id)!;
  }
  getAllFoodByTag(tag: string) : Foods[]{
  return tag == "All" ?
  this.getAll() : this.getAll().filter(food => food.tags?.
    includes(tag));
  }
  getAllTag():Tag[]{
    return [
      {name: 'All', count: 8 },
      {name: 'FastFood', count: 4},
      {name: 'Pizza', count: 2},
      {name: 'lunch', count: 3},
      {name: 'SlowFood', count: 2},
      {name: 'Hamburger', count: 1},
      {name: 'Fry', count: 1},
      {name: 'Soup', count:1},
      
    ];
  }



 
  getAll(): Foods[]{
    return[
    
      {
       id: 1,
       name: 'Breakfast',
       cookTime: '10-20',
       price: 10,
       favorite: false,
       origins: ['Italy'],
       star: 4.5,
       imageUrl: './assets/fd-1.jpg',
       tags: ['Fry',  'SlowFood'],
      },
      {
        id: 2,
       name: 'Brunch',
       cookTime: '20-30',
       price: 20,
       favorite: true,
       origins: ['Persia'],
       star: 4.7,
       imageUrl: './assets/fd-2.jpg',
       tags: ['FastFood',  'lunch'],
      },
      {
        id: 3,
       name: 'Pizza',
       cookTime: '10-30',
       price: 30,
       favorite: false,
       origins: ['Italy'],
       star: 4.5,
       imageUrl: './assets/fd-3.jpg',
       tags: ['FastFood',  'Pizza'],
      },
      {
        id: 4,
        name: 'Lunch',
        cookTime: '20-40',
        price: 40,
        favorite: true,
        origins: ['America'],
        star: 4.2,
        imageUrl: './assets/fd-4.jpg',
        tags: ['Hamburger',  'lunch'],
      },
      {
        id: 5,
        name: 'Egg Whites',
        cookTime: '10-15',
        price: 50,
        favorite: false,
        origins: ['London'],
        star: 4.6,
        imageUrl: './assets/fd-5.jpg',
        tags: ['Slowfood',  'lunch'],
      },
      {
        id: 6,
        name: 'Coffee & Food',
        cookTime: '30-50',
        price: 60,
        favorite: true,
        origins: ['Scotland'],
        star: 4.8,
        imageUrl: './assets/fd-6.jpg',
        tags: ['FastFood',  'Pizza'],
      },
      {
        id: 7,
        name: 'Salad',
        cookTime: '10-15',
        price: 70,
        favorite: false,
        origins: ['Newyork'],
        star: 4.9,
        imageUrl: './assets/fd-7.jpg',
        tags: ['Pizza',  'Soup'],
      },
      {
        id: 8,
        name: 'Dessert',
        cookTime: '20-40',
        price: 80,
        favorite: true,
        origins: ['India'],
        star: 5.0,
        imageUrl: './assets/fd-8.jpg',
        tags: ['FastFood'],
      }
    ];
  }
}

import { Injectable } from "@angular/core";
@Injectable()
export class ImageService{
visibleImages: any[]=[];
getImages(){
    return this.visibleImages =IMAGES.slice(0);
}
getImage(id:number){
    return IMAGES.slice(0).find(image => image.id == id)

}
}
const IMAGES=[
    {"id":1, "category":"bmw", "caption":"BMW", "url":"./assets/car.png"},
    // {"id":2, "category":"bmw", "caption":"view of car", "url":"./assets/car1.jpg"},
    // {"id":3, "category":"tata", "caption":"view of car", "url":"./assets/car2.jpg"},
    // {"id":4, "category":"tata", "caption":"view of car", "url":"./assets/car3.jpg"},
    {"id":5, "category":"audi", "caption":"This is Audi", "url":"./assets/audinew1.jpg"},
    {"id":6, "category":"bmw", "caption":"BMW", "url":"./assets/car5.jpg"},
    {"id":7, "category":"audi", "caption":"AUDI R8", "url":"./assets/audinew.jpg"},
    {"id":8, "category":"audi", "caption":"AUDI", "url":"./assets/audi1.jpg"},
    {"id":9, "category":"bmw", "caption":"BMW", "url":"./assets/bmwnew2.jpg"},
    {"id":10, "category":"bmw", "caption":"BMW", "url":"./assets/bmw1.jpg"},
    {"id":11, "category":"tata", "caption":"TATA NEXON EV", "url":"./assets/tatanew1.jpg"},
    {"id":12, "category":"tata", "caption":"TATA NEXON", "url":"./assets/tata1.jpg"},
    {"id":13, "category":"tata", "caption":"TATA JAGUAR", "url":"./assets/tata2.jpg"},
    {"id":14, "category":"tata", "caption":"TATA HARRIER", "url":"./assets/tatanew2.jpg"},
    {"id":15, "category":"tata", "caption":"TATA JAGUAR", "url":"./assets/tata4.jpg"},
   
]
import { Component, OnInit } from '@angular/core';
import { User, User2 } from '../../interfaces/common';

@Component({
  selector: 'app-proba',
  templateUrl: './proba.component.html',
  styleUrls: ['./proba.component.css']
})
export class ProbaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  zmienna1: number = 7;
  imie: string = 'Karolina'

  user:User = {
    name: 'Karolina',
    surname: 'Bizub',
    age: 32
  }

  user2:Array<User2> = [
    {name: 'Karolina', surname: 'Bizub'},
    {name: 'Ania', surname: 'Kowalska'},
    {name: 'Monika', surname: 'Zielonka'}

  ]

  getUserData(data:string): string{
    let x:number= 8;
    return `Mam na imie ${this.user.name} i mam lat ${this.user.age + 8}`
  }

  placeholder:string = 'Moj placeholder'
  imageSrc: string ='https://ocdn.eu/pulscms-transforms/1/Wc6ktkpTURBXy9jOGZmNTc2NDM4ODhmN2VlYTkwNzVlZjRiNGVmNjNmYS5qcGeRlQMAXs0LuM0Glw'


  jeden:string ='klasaonazwiejeden';
  jakisKolor: string = 'red';

  myStyles: any = {
   color: 'green'
  }

  // wypiszDane: string = '';
  // examp(hello: string, name: string, age: number): void
  // {
  //   alert(`${hello} ${name} ${age}`)
  //   this.wypiszDane = `${hello} ${name} ${age}`
  // }

  examp() {
    alert('hello')
  }


  focusFunc(){
    console.log('kliknieto')
  }
  getDataFromInput(val:(number | string)) {
console.log(val)
  }

  jakasZmienna:string = '';
  email: string = " ";
  komunikat:string ='';

  onKeyUp() {
    if (this.email.length < 8){
      console.log('zle haslo');
      this.komunikat = 'zle haslo'
    } else {
      this.komunikat = "dobre haslo"
    }
  }

  showOrNot:boolean = true;
  show:boolean = false;

}

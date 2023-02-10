import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_expediente_levm';
  image = 'https://source.unsplash.com/random'
  btnDisabled= true;
  algo = 'nuevo';
  num: number= 0;
  names: string[]=['Luis','Eduardo','Yimell','Alexandra'];
  newName: string ='';

  toogleButton(){
    this.btnDisabled=!this.btnDisabled;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event : Event){
    const element = event.target as HTMLInputElement;
    this.algo=element.value;
  }
  addName()
  {
    this.names.push(this.newName)
    this.newName=''
  }
  deleteName(index:number)
  {
    this.names.splice(index,1);
  }
}

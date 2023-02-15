import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit,OnChanges, AfterViewInit, OnDestroy {
  
  img:string='';

  @Input('img') 
  set changeImg(newImg: string){
    this.img = newImg;
  }
  @Input() alt:string='';

  @Output() loaded= new EventEmitter<string>();
  imgDefault='../../assets/img/default.png';

  constructor (){
    //before render
    //NO asyc - once time
    //console.log('constructor','imgValue =>' ,this.img)
  }
  ngOnDestroy(): void {
    //When
    //console.log('ngOnDestroy')
  }
  ngAfterViewInit(): void {
    //after render
    //handler  children
    //console.log('ngAfterViewInit')
  }
   ngOnChanges(change:SimpleChanges){
    //before-  during render
    //changes inputs - times
    //console.log('ngOnChanges','imgValue =>' ,this.img)
    //console.log(change)
  }
  ngOnInit(): void{
    //before render
    //async - fetch, etc.
    //one time
    //console.log('ngOnInit','imgValue =>' ,this.img)
  }
  imgError(){
    this.img=this.imgDefault;
  }
  imgLoaded(){
    //console.log('Log desde el hijo');
    this.loaded.emit(this.img);
  }

}

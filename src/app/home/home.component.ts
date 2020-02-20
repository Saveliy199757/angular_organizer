import {Component} from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: '/home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name:string="Tom";
  count: number=0;
  increase() : void {
    this.count++;
  }
  isRed = false;

  name1:string="Tom";
  age1:number = 24;

  clicks:number = 0;
  onChanged(increased:any){
    increased==true?this.clicks++:this.clicks--;
  }
  names: string = "Tom";

  namesval: any = this.names.length;




}




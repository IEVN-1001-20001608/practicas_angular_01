import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  numa = 0;
  numb = 0;
  tja = '';
  total = 0;

  calculartotal(){
    let costob = 12000;
    if(this.numb / this.numa>7){
      alert('No puedes comprar');
    }
    else{
      if(this.numb>2){
        if(this.numb>5){
          this.total= costob*this.numb*.85;
        }
        else{
          this.total= costob*this.numb*.9;
        }
      }
      else{
        this.total = costob*this.numb;
      }
    }
    if(this.tja=='si'){
      this.total = this.total*.9;
    }
  }
}



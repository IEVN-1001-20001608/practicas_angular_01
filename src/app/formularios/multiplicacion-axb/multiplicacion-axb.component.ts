import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-axb',
  templateUrl: './multiplicacion-axb.component.html',
  styleUrls: ['./multiplicacion-axb.component.css']
})
export class MultiplicacionAxbComponent {
  num1=0;
  num2=0;
  res='';

  sumar(){
    for(let i = 0; i < this.num2 ; i++){
      let num2 = this.num2;
      this.res='';
      for(let i = 0; i < num2; i++){
        if(i==0){
          this.res += this.num1;
        }
        else if(i >= 1){
          this.res += " + "+ this.num1;
        }
      }
      this.res+= "=" + this.num1 * this.num2;
    }
  }
}

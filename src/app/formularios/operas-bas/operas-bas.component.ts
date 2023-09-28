import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  //C a F
  grado: number = 0;
  cel: number = 0;
  far: number = 0;
  res: number = 0;

  radioButton: string = '';

  //Hacer la operación indicada 

  operacion(): void {
    //Cel
    if (this.radioButton == "5") {
      this.res = ((this.grado * 9 / 5) + 32);
    }
    else if (this.radioButton == "6") {
      this.res = ((this.grado - 32) * 5 / 9);
    }

  }

}

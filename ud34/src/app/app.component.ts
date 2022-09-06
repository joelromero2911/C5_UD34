import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ud34';

  num1:any = "";
  num2:any = "";
  op:any = null;

  pantalla:any = "";

  numberFunction(num:any){
    if (this.op == null){
      this.num1 += num;
      this.pantalla = this.num1;
    }else{
      this.num2 += num;
      this.pantalla = this.num1 + " " + this.op + " " + this.num2
    }
  }

  operation2num(operation:any){
    if (this.op == null){
      this.op = operation;
      this.pantalla = this.pantalla + " " + this.op;
    }
  }

  polaridad(){
      if (this.op == null){
          let polarity = this.num1.charAt(0);
          if (polarity != "-"){
            this.num1 = "-" + this.num1
          }else{
            this.num1 = this.num1.slice(1)
          }
          this.pantalla = this.num1
      }else{
          let polarity = this.num2.charAt(0);
          if (polarity != "-"){
            this.num2 = "-" + this.num2
          }else{
            this.num2 = this.num2.slice(1)
          }
          this.pantalla = this.num1 + " " + this.op + " " + this.num2
      }
  }

  retr(){
    this.num1 = this.num1.slice(0, -1)
    this.pantalla = this.num1
  }

  ce(){
      if (this.num2 == ""){
        this.num1 = ""
        this.op = null
        this.pantalla = this.num1
      }else{
        this.num2 = ""
        this.pantalla = this.num1 + " " + this.op + " " + this.num2
      }
  }

  clr(){
      this.reset()
      this.pantalla = this.num1
  }

  reset(){
      this.num1 = "";
      this.num2 = "";
      this.op = null;
  }

  calc(){
      let number1 = Number(this.num1)
      let number2 = Number(this.num2)
      switch (this.op) {
          case "/":
              this.pantalla = number1 / number2
              break;

          case "*":
              this.pantalla = number1 * number2
              break;

          case "-":
              this.pantalla = number1 - number2
              break;

          case "+":
              this.pantalla = number1 + number2
              break;

          default:
              break;
      }
      this.reset()
  }

  raiz(){
    this.pantalla = Math.sqrt(this.num1)
    this.reset()
  }

  porcentaje(){
    this.pantalla = "No se que hace '%'"
    this.reset()
  }

  unoEntre(){
    this.pantalla = 1 / Number(this.num1)
    this.reset()
  }
}

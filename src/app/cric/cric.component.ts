import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cric',
  template : `
  <div
style="color: rgb(240, 16, 16);">
<h2>cric component!</h2>
<input [id]="myId" type="text" value="Tharani">
<input [disabled]="disable" id="{{myId}}" type ="text" value="hai">
</div>
<h2 class="blueColor" >IPL2021</h2>
<h2 [class]="colour" >Class binding</h2>
<h2 [ngClass]="objectmessage" >IPL2021</h2>
<h3 [style.color]="'orange'">Style bindig</h3>
<h3 [style.color]="haserror ? 'green' : 'red'">Style binding</h3>
<h3 [ngStyle]="styletemplate"> Style binding</h3>
<div>
<button (click)="onClick()">Click me</button><br>
<button (click)="greeting='welcome'" >Click me</button><br>
{{greeting}}
</div>
<div><br>
<input #temrefvar type="text">
<button (click)="display(temrefvar.value)">tempref</button>
{{tempRef}}<br>
</div>
<div>
<input [(ngModel)]="name" type="text">
{{name}}
</div>
  `,
  styles: [`
  .blueColor{
    color: Blue;
  }
  .yellowcolor{
    color: yellow;
  }
  .fontstyle{
    font-style:italic;
  }
  `]
})
export class CricComponent implements OnInit {

  public myId="Smart";
  public disable="true";
  public colour="blueColor";
  public haserror="false"
  public greeting="";
  public objectmessage={
    "blueolor":false,
    "yellowcolor":true,
    "fontstyle":true,
  };
  public styletemplate=
  {
    color:"violet",
    fontStyle:"italic",
  }
  onClick()
  {
    this.greeting="Have a nice day";
  }

public tempRef="";
display(value: string)
{
  this.tempRef=value;
}

public name="";
  constructor() { }

  ngOnInit(): void {
  }

}

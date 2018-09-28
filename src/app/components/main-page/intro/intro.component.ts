import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  reqVisible:boolean;
  constructor() { }

  ngOnInit() {
    this.reqVisible=false;
    setTimeout(() => {
      this.reqVisible=true;
      // console.log(this.reqVisible)
    }, 600);
  }

}

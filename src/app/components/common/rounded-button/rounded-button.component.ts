import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.scss']
})
export class RoundedButtonComponent implements OnInit {

  @Input() color:string;
  @Input() backgroundColor:string;
  @Input() text:string;
  @Input() image:string;
  constructor() { }

  ngOnInit() {
  }

}

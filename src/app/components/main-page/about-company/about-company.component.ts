import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss']
})

export class AboutCompanyComponent implements OnInit, AfterViewInit {

  constructor() { }


  ngAfterViewInit() {
    var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;
    function moveBackground() {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;
  
      var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
  
      $('#animated').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
      });
  
      window.requestAnimationFrame(moveBackground);
    }
    $(window).on('mousemove click', function (e) {

      var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
      var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
      lFollowX = (20 * lMouseX) / 200; // 100 : 12 = lMouxeX : lFollow
      lFollowY = (10 * lMouseY) / 200;

    });
    moveBackground();
  }
  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as jQuery from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hour:number = 0;
  minute:number = 0;
  seconds:number = 0;
  constructor(){
    
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: false,
    navText: ["<span class='arrow_left'><span/>", "<span class='arrow_right'><span/>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }

  ngAfterContentInit(){
    

    /*------------------
        CountDown
    --------------------*/
    // For demo preview start
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm:any = parseInt(String(today.getMonth() + 1).padStart(2, '0')); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end


    // Uncomment below and use your date //

    /* var timerdate = "2020/12/30" */  

    setInterval(()=>{
      this.changeTick();
    },1000)

    // $("#countdown").countdown(timerdate, function (event:any) {
    //     $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
    // });
  }

  changeTick(){
    this.hour = 23 - new Date().getHours();
    this.minute = 60 - new Date().getMinutes();
    this.seconds = 60 - new Date().getSeconds();

    $("#countdown").html(`<div class='cd-item'><span>30</span> <p>Days</p> </div><div class='cd-item'><span>${this.hour}</span> <p>Hours</p> </div><div class='cd-item'><span>${this.minute}</span> <p>Minutes</p> </div><div class='cd-item'><span>${this.seconds}</span> <p>Seconds</p> </div>`)
  }
}

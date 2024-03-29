import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  ngOnInit(){
    $('.set-bg').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
    });
  }

  ngAfterContentInit(){
    setTimeout(()=>{
      $(".loader").fadeOut();
      $("#preloder").delay(200).fadeOut("slow");
    },10)
  }
}


/*Маска телефона в форму*/

$(function(){
   $(".phone-input").mask("+7 (999)999-99-99");
})


//Блок с салонами. Переключение между программами

$(function(){
   $("#saloon-b-1").click(function(){
      $(this).addClass("active");
      $("#saloon-b-2").removeClass("active");

      $("#sal-t-1").removeClass("d-none");
      $("#sal-list-1").removeClass("d-none");
      $("#saloon-bot-1").removeClass("d-none");

      $("#sal-t-2").addClass("d-none");
      $("#sal-list-2").addClass("d-none");
      $("#saloon-bot-2").addClass("d-none");

   })

   $("#saloon-b-2").click(function(){
      $(this).addClass("active");
      $("#saloon-b-1").removeClass("active");

      $("#sal-t-2").removeClass("d-none");
      $("#sal-list-2").removeClass("d-none");
      $("#saloon-bot-2").removeClass("d-none");

      $("#sal-t-1").addClass("d-none");
      $("#sal-list-1").addClass("d-none");
      $("#saloon-bot-1").addClass("d-none");

   })



})



// Блок с результатами. Переключение программ

$(function(){
   $("#res-but-1").click(function(){
      $(this).addClass("active");
      $("#res-but-2").removeClass("active");

      $("#res-main-1").removeClass("d-none");
      $("#res-main-2").addClass("d-none");
   })

   $("#res-but-2").click(function(){
      $(this).addClass("active");
      $("#res-but-1").removeClass("active");

      $("#res-main-2").removeClass("d-none");
      $("#res-main-1").addClass("d-none");
   })



})



/*скрытие модалок при клике на подложку*/

$(function(){
   $("#background").click(function(){
      $(this).removeClass("d-block");
      $(".modal").removeClass("d-block");
   })
})

/*инициализация слайдера*/
$(function(){
   $( window ).resize(function() {
      if($(window).width() < 500){
         $(".intro__item-wrapper").addClass("swiper-slide")

         new Swiper(".intro__info");
      }
   });
})

/*открытие модалок при клике на кнопки*/
/*заказать звонок*/

$(function(){
   $(".recall-me").click(function(){
      $(".modal-sign-up").addClass("d-block");
      $("#background").addClass("d-block");
   })
})


/*получить материалы*/

$(function(){
   $(".red-button").click(function(){
      $(".modal-know").addClass("d-block");
      $("#background").addClass("d-block");
   })
})


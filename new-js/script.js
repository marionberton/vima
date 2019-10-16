const menu=document.querySelector ('.nav-top-right-mobile');
  console.log (menu)
  if (menu) {
    menu.addEventListener('click', function(){
      const list=document.querySelector ('.nav-top-list');
      if (list.classList.contains('nav-top-list-open')) {
        list.classList.remove('nav-top-list-open'); 
        menu.textContent='menu';
        menu.style.color = "white";
        menu.style.textTransform = "uppercase";

      }

      else {
        list.classList.add('nav-top-list-open');
        menu.textContent='close';
        menu.style.color = "#4b4b4b";
        menu.style.textTransform = "uppercase"; 
      }
    })            
  }

    //Click event to scroll to top
    $(".scrollToTop").click(function(){
        $('html, body').animate({scrollTop : 0},800);
       
    });

    //Scroll trigger the div to fade in
    $(window).scroll( function(){
      $('.benefit-container').each( function(i){  
       $(this).animate({'opacity':'1'}, 2000);  
      }); 
  });


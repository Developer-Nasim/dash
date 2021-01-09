(function($) {
  "use strict";



 // menu 
  $('.mtn').click( function (){ 
    $('.left-menu').toggleClass('siteBar');   
  }); 
 // menu 
  $('a.siteBar-btn.mtn').click( function (){ 
    $('a.siteBar-btn.mtn').toggleClass('humbarger');   
  }); 
  
 // menu 
  $('.mmenus').click( function (){ 
    $('.right-menu').toggleClass('siteBar');   
  }); 
 // menu 
  $('a.mmenus').click( function (){ 
    $('a.mmenus').toggleClass('humbarger');   
  }); 
 




  const tabmenus = document.querySelectorAll('.assing_parson_nav_tab .tab ul li a');
  const tabconts = document.querySelectorAll('.all-inItems .innerSgl_items');
  tabmenus.forEach(tm => {
      tm.addEventListener('click', (e) => {
          e.preventDefault();
          
          tabmenus.forEach(cl => {
              cl.classList.remove('active')
          })
          tm.classList.add('active');
          
          tabconts.forEach(cmn => {
              if (tm.dataset.menu == cmn.dataset.cont) {
                  tabconts.forEach(aaa => {
                      aaa.classList.remove('active');
                  });
                  cmn.classList.add('active');
              }
          }); 
      });
  });
 


  const tabmenu = document.querySelectorAll('.tab ul li a');
  const tabcont = document.querySelectorAll('.all-cons .single-conts');
  tabmenu.forEach(tm => {
      tm.addEventListener('click', (e) => {
          e.preventDefault();
          
          tabmenu.forEach(cl => {
              cl.classList.remove('active')
          })
          tm.classList.add('active');
          
          tabcont.forEach(cmn => {
              if (tm.dataset.menu == cmn.dataset.cont) {
                  tabcont.forEach(aaa => {
                      aaa.classList.remove('active');
                  });
                  cmn.classList.add('active');
              }
          }); 
      });
  });
 
  // side_Nav
  $(".nav_toggel").click(function(e){
    $(".parson_left_nav").toggleClass("sw_hi", 1000);
    e.preventDefault();
});

  $(".nav_toggel").click(function(){
    $(".parson_left_nav_ov").toggleClass("ovrlay");
});



  const inner_tabmenu = document.querySelectorAll('.inner-tab ul li a');
  const inner_tabcont = document.querySelectorAll('.inner-all-cons .sssingle-conts');
  inner_tabmenu.forEach(tm => {
      tm.addEventListener('click', (e) => {
          e.preventDefault();
          
          inner_tabmenu.forEach(cl => {
              cl.classList.remove('active')
          })
          tm.classList.add('active');
          
          inner_tabcont.forEach(cmn => {
              if (tm.dataset.menu == cmn.dataset.cont) {
                inner_tabcont.forEach(aaa => {
                      aaa.classList.remove('active');
                  });
                  cmn.classList.add('active');
              }
          }); 
      });
  });
  
  // Cal-menu
  const crbtn = document.querySelector('.cal-logo i');
  const spnbtn= document.querySelector('.calbar-btn');
  const bars  = document.querySelector('.calender-bar');
  const ovl   = document.querySelector('.overlay');
  spnbtn.addEventListener('click', () => { 
    ovl.style.opacity = '1';
    ovl.style.visibility = 'visible'; 
    bars.style.marginLeft = '0px';
  });
  crbtn.addEventListener('click', () => { 
    ovl.style.opacity = '0';
    ovl.style.visibility = 'hidden'; 
    bars.style.marginLeft = '-400px';
  });
  ovl.addEventListener('click', () => { 
    ovl.style.opacity = '0';
    ovl.style.visibility = 'hidden'; 
    bars.style.marginLeft = '-400px';
  });


 
})(jQuery);

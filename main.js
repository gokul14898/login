let navbar = $(".navbar");
$(window).scroll(function()
{
   let otop=$(".section-2").offset().top-window.innerHeight;
   if($(window).scrollTop()>otop)
   {
       navbar.addClass("sticky");
   }
   else
   {
       navbar.removeClass("sticky");
   }
});
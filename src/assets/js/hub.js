import $ from 'jquery';
$(document).ready(()=> {
    $('#nav-toggler').click((e)=> {
      $('.sidebar').addClass('togglesidebar');
      $('.layout').addClass('sidetoggler');
    });
    $('#side-close').click((e) => {
      $('.sidebar').removeClass('togglesidebar');
      $('.layout').removeClass('sidetoggler');
    });
});
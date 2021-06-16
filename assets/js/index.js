
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        
        // document.body.classList.toggle('navig-resp-2');
        
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            // $('.navig-resp').addClass('navig-resp-2');
        });
    }

});

$(document).ready(function(){
    $("#sidebarToggle").click(function(){
      $(".navig-resp").toggleClass("navig-resp-2");
    });
  });

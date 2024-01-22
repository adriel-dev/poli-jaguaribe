$(document).ready(function(){
    $('#clinic-carousel').carousel();
});

$('#clinical-staff-more').hide();

$('#btn-staff-more').click(() => {
    $('#clinical-staff-more').slideToggle();
});
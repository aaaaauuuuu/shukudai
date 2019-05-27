$(function() {
    $('.chatlink').on('click',function() {
        console.log('AAA');
        $('.chat').fadeIn();
    });
    $('.fa-times-circle').on('click',function() {
        $('.chat').fadeOut(1000,function(){
            $('.chat').remove();
        });
    })
});
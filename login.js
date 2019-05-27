$(function() {

    // $(window).scroll(function() {
    //     let pass =$(document).scrollTop();
    //     console.log(pass);
    //      if(pass > 30) {
    //          console.log('AAA');
    //         $('.box').fadeIn(slow);
    //      }
    // })

    // $('.form-control').keydown(function() {
    //     $('.btn').fadeIn('btnjs',30000);
    // $('.form-control').addClass('btnjv');
    // })

    $('.btn').on('click',function() {
        console.log('AAA');
        
        let text = $('.form-control').val();
        if('nexseed3' == text) {  
            window.location.href = "/Users/uezatoaya/Desktop/NexSeed/Bootsrap/宿題/memberbox.html";
        }else {
            alert('passwordが間違っております。') ;
        }
    })
})
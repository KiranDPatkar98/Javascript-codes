// console.log($);
// $('button').click(function(){
//     $('hi').slideDown()
//     // console.log("you clicked on me", this);
//     // $('p').hide();
// })
$('document').ready(function(){
$('button').click(()=>{
    // $('#hi').slideDown(1000)
    // $('#hi').slideUp(5000)
    // $('#hi').fadeIn()
    // $('#hi').fadeOut(10000)
    $('#hi').animate({
        width:"50%"
    })
},1000)

})

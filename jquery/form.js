let userInputValues;
$(document).ready(function() //ha az oldal betöltődött
{
    $('input').focus(function()
    {
        $(this).toggleClass('active');
    })
    $('input').blur(function()
    {
        $(this).toggleClass('active');
        let v =$(this).val();
        console.log(v);
        $('.values').html(v);
        userInputValues += v +'<br>';
    })

    $('[type="submit"]').click(function(ev)
    {
        ev.preventDefault();
        $('.values').html(userInputValues);
    })

})
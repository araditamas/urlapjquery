$(document).ready(function() //ha az oldal betöltődött
{
    $('input').focus(function()
    {
        $(this).toggleClass('active');
    })
    $('input').blur(function()
    {
        $(this).toggleClass('active');
    })

})
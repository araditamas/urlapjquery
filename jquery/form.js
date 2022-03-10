let userInputValues;
let send = null;
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
    $('[type = "submit"]').change(function()
    {
        console.log('Over')
        let un = $('[name="uname"]').val();
        let pwd = $('[name="pwd"]').val();
        //checkbox
        let bd = $('[name="date"]').val();
        if(un.lenght >5 && pwd.lenght > 5 && bd.lenght == 10)
        {
            $('[type="submit"]').prob('disabled', false);
        }
    })

})
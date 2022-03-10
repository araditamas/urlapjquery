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
    $('[type = "date"]').change(ell) //Csak a dátum típusú input elemhez csatolja az ellenőrzést
    //$('[type = "uname"]').change(ell)
    //ready vége

})
        function ell()
    {
        let un = $('[name="uname"]').val();
        let pwd = $('[name="pwd"]').val();
        let bd = $('[name="date"]').val();
        let cb = $('[name="reszvetel"]').prop('checked');

        //console.log(cb)

        if(un.lenght >5 && pwd.lenght > 5 && bd.lenght == 10 && cb)
        {
            $('[type="submit"]').prob('disabled', false);
            send = {'username':un,
                    'pwd':pwd,
                    'birthdate':bd
                    } 
                    console.log(send)
        }
    }
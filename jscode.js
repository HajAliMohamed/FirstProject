var menu = document.getElementById('listmenu');
    icon = document.getElementById('icon');


icon.onclick = function()
{
    if(menu.style.maxHeight == "0px")
    {
        menu.style.maxHeight = "200px" ;
    }

    else{
        menu.style.maxHeight = "0px" ;
    }
    

}    ;



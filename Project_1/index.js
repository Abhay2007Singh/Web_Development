const body = document.querySelector(".body");
addEventListener('click',function(e){

    switch(e.target.id){
        case "grey": body.style.backgroundColor = "grey" ;
                     break;
        case "white": body.style.backgroundColor = "white" ;
                    break;
        case "yellow": body.style.backgroundColor = "yellow" ;
                      break;
        case "blue": body.style.backgroundColor = "blue" ;
                    break;
        case "pink": body.style.backgroundColor = "pink" ;
                    break;
        case "green": body.style.backgroundColor = "green" ;
                    break;
        default:break;
    }
});
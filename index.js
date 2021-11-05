$(document).ready(function(){
    
    // Imagenes Gato
    let gato0 = document.getElementById('gato0');
    let gato1 = document.getElementById('gato1');
    let gato2 = document.getElementById('gato2');
    let gato3 = document.getElementById('gato3');
    let gato4 = document.getElementById('gato4');

    //Imagenes Ninja
    let ninja0 = document.getElementById('ninja0');
    let ninja1 = document.getElementById('ninja1');
    let ninja2 = document.getElementById('ninja2');
    let ninja3 = document.getElementById('ninja3');
    let ninja4 = document.getElementById('ninja4');

    $(gato0).click(function(){
        if($(gato0).css("display") == "block"){
            $(gato0).css("display", "none");
            $(ninja0).css("display", "block");
        }
    });

    $(ninja0).click(function(){
        if($(ninja0).css("display") == "block"){
            $(ninja0).css("display", "none");
            $(gato0).css("display", "block");
        }
    })

    $(gato1).click(function(){
        if($(gato1).css("display") == "block"){
            $(gato1).css("display", "none");
            $(ninja1).css("display", "block");
        }
    });

    $(ninja1).click(function(){
        if($(ninja1).css("display") == "block"){
            $(ninja1).css("display", "none");
            $(gato1).css("display", "block");
        }
    })

    $(gato2).click(function(){
        if($(gato2).css("display") == "block"){
            $(gato2).css("display", "none");
            $(ninja2).css("display", "block");
        }
    });

    $(ninja2).click(function(){
        if($(ninja2).css("display") == "block"){
            $(ninja2).css("display", "none");
            $(gato2).css("display", "block");
        }
    })

    $(gato3).click(function(){
        if($(gato3).css("display") == "block"){
            $(gato3).css("display", "none");
            $(ninja3).css("display", "block");
        }
    });

    $(ninja3).click(function(){
        if($(ninja3).css("display") == "block"){
            $(ninja3).css("display", "none");
            $(gato3).css("display", "block");
        }
    })

    $(gato4).click(function(){
        if($(gato4).css("display") == "block"){
            $(gato4).css("display", "none");
            $(ninja4).css("display", "block");
        }
    });

    $(ninja4).click(function(){
        if($(ninja4).css("display") == "block"){
            $(ninja4).css("display", "none");
            $(gato4).css("display", "block");
        }
    })
})
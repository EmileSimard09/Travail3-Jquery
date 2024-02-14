$(document).ready(function(){

    //Numero 1
    $("h2").hover(function(){
        $(this).css("color", "red");
        }, function(){
        $(this).css("color", "blue");
      });

    //Numero 2
    $("div#green").hide();

    //Numero 3
    $("div#checkbox input").checkboxradio({
        icon : false
    });

    //Numero 4
    $("div#forme div").click(function(){
        var color = $(this).attr("id");
        console.log(color);

        $("div#checkbox label").css("color", color);
    });

    //Numero 5
    $("div#checkbox input").click(function (){
        var square = $(this).attr("value");
        $("div#forme div#"+square).toggle();
    });



    //Numero 6
    $("#slider").slider({
        range : "max",
        min : 10,
        max : 140,
        value : 140,
        slide : function(event,ui){
            $("div#largeur label").text(ui.value);
            $("div#forme div").width(ui.value);
        }
    });
    
    //Numero 7
    $("#slider").tooltip({
        hide:{
            effect: "explode",
            delay : 10
        }
    });

    //numero 8
    $("#dialog").dialog({
        autoOpen: false,
        hide: "puff",
        show : "slide",
        modal:true,
        height: 200 
    });

    $("#message button").click(function() {
        $("#dialog").dialog("open");
    });

     $("#message button").button({
        icons:{
                primary: "ui-icon-comment"
            }
        });

    
    //Numero 9
    $("#add").button({
    icons:{
          primary: "ui-icon-plus"
         }
    });

    $("#add").click(function(){
        var texte = $("#paragraphe p").last().text();
        $("#paragraphe p").last().before("<p>"+texte+"</p>")
    })

    

    //Numero 10
    $("#del").button({
        icons:{
              primary: "ui-icon-minus"
             }
    })

    $("#del").click(function(){
        $("#paragraphe p").last().remove()
    })

    //Numero 11 
    $("#animation button").button({
        icons:{
         primary: "ui-icon-play"
        }
    })

    $("#animation button").click(function () { 
        $(this).animate({left: '300px'},"slow");
        $(this).animate({left: '0px'},"slow");
    })

    //Numero 12
    $("#ajax button").button({
        icons:{
         primary: "ui-icon-help"
        }
    })

    $("#ajax button").click(function () { 
        $.ajax({
            url:"../ajax/jquery.txt",
            type : "GET",
            success : function(res){
                $("#reponse").text(res);
            }  
        })
    })

    //Numero 13
    $("#datepicker").datepicker();

    //Numero 14
    $("#spinner").spinner({
        min : 0,
        max : 10
    });

    //Numero 15

    //1 - Ajout d'un texte qui quex etre drag
    $("#drag").draggable();

    //2 - ajout d'une barre de proges basique
    $("#barreDL").progressbar({
        value: false
    });

    //3 - Bouton qui toggle le main et lui meme (un peu tannant mais c'est drole ahah)
    $("#hide").click(function(){
        $("#main").toggle("pulsate",500);
    })


    
});
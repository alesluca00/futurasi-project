

/********************************** PERSONE*************************************/
var persone = new Persone();
persone.toView();

var colori = new Colori();
colori.toView();

var temi = new Temi();
temi.toView();



for(var i=0; i < persone.personeDOM.children.length; i++) {
    persone.personeDOM.children[i].addEventListener('click', (function( value) {
        return function() { 
    
                SelectPersona(value); 
            
            if (coloreSelected) { 
                    
                ChangeColorPersona(value);
            }
    
            if(themeSelected) {
                ChangeTheme();
            }
        }
    })(persone.personeDOM.children[i].fiscale));
}

for(var i = 0; i < persone.personeDOM.children.length; i++) {

    persone.personeDOM.children[i].addEventListener('mousedown', (function(cognome){
        return function(){
            resetBorder(cognome);
            changeBorder(cognome);
        }
    })(persone.personeDOM.children[i].cognome));
}

/////////////////////////////SELEZIONA PERSONA

var SelectPersona = function(id) {
    persone.personaSelected = id;
    console.log("personaSelected = ", persone.personaSelected);
    }

/******************************* COLORI *************************************/


for(var i=0; i < colori.colorsDOM.children.length ; i++)
    divcolor_i.addEventListener('click', (function(value) {
        return function() {
            SelectColor(value);

        }
    })(colori.colors[i].value));

    ////////////////

    var SelectColor = function(value) {
        colori.coloreSelected = value;
        console.log("coloreSelected = ", colori.coloreSelected);
        }



/******************************* TEMI *******************************************/



    for(var i=0; i < temi.themeDOM.children.length ; i++)
    {
    divtheme_i.addEventListener('click', (function(value) {
        return function() {
            
            SelectTheme(value);
        }
    })(temi.theme[i].nome));

    }




    



/*********************************************************************** FUNCTIONS ***********************************************************************/




var SelectTheme =function(value){
temi.themeSelected = value;
console.log("tema selezionato = ", temi.themeSelected);
}



var ChangeColorPersona = function() {
console.log("changeColorPersona");
console.log("coloreSelected = ", colori.coloreSelected);
console.log("personaSelected = ", persone.personaSelected);
console.log("personeDOM = ", persone.personeDOM.children);

//var personeDOMChildren = personeDOM.children;
var fiscaleSelected;
var colore;
var nuovoColore;
console.log("colore", colore);
var personeDOMChildren = persone.personeDOM.children;
for (var i = 0; i < personeDOMChildren.length; i++) {
    console.log("personeDOM[" + i + "] = ", personeDOMChildren[i]);

    //capire l'elemento con fiscale giusto 
    //cambiare colore

    fiscaleSelected = personeDOMChildren[i].fiscale;
    console.log("persona preselezionata: ", persone.personaSelected);
    console.log("Persona: ", fiscaleSelected);

    if (fiscaleSelected == persone.personaSelected) {
        if (colori.coloreSelected == "Navy" || colori.coloreSelected == 'Blue'|| colori.coloreSelected == "Black")
            personeDOMChildren[i].style.color = "white";

        else personeDOMChildren[i].style.color = "Black";

        colore = colori.coloreSelected;
        console.log("colore = ", colore);
        personeDOMChildren[i].style.backgroundColor = colore;
    }
}

/*********************************************************************** Funzione CAMBIA IL BORDO ***********************************************************************/
}

var changeBorder = function(cognome) {

var cognome2 = cognome;
console.log("cognome: ", cognome2);

for (var i = 0; i < persone.personeDOM.children.length; i++) {

    for (i = 0; i < persone.persone.length; i++) {
        if (persone.persone[i].cognome == cognome2) {

           // console.log("reset", reset);
            console.log("funziona", cognome2);

            persone.personeDOM.children[i].style.border = '3px solid blue';
            
            
        }
    }

}
}
/*********************************************************************** Funzione RESETTA IL BORDO ***********************************************************************/
var resetBorder = function(cognome) {

var cognome2 = cognome;
console.log("cognome: ", cognome2);

    for (var i = 0; i < persone.personeDOM.children.length; i++) {

        for (i = 0; i < persone.persone.length; i++) {
            
            console.log("funziona", cognome2);

            persone.personeDOM.children[i].style.border = '1px solid black'; 
        }
    }
}

/*********************************************************************** Funzione CAMBIA TEMA ***********************************************************************/

var ChangeTheme = function(){

        console.log("Change Theme");
   

        console.log("personeDOM = ", personeDOM.children, themeSelected);

    var fiscaleSelected = null;
    var tema = null;
    tema = temi.themeSelected;
    fiscaleSelected = persone.personeDOM.children[0].fiscale;

    console.log("tema selezionato", tema);
    console.log("Persona selezionata: ", persone.personaSelected);

    

    var personeDOMChildren = persone.personeDOM.children;
    for (var i = 0; i < personeDOMChildren.length; i++) {
        console.log("personeDOM[" + i + "] = ", personeDOMChildren[i]);

        fiscaleSelected = personeDOMChildren[i].fiscale;
        

        if (fiscaleSelected == persone.personaSelected) {
             
            tema = themeSelected;

            //ciclo per rimuovere quelle gia' messe 
            persone.personeDOM.children[i].classList.add(tema);
        }
    }

    console.log("personeDOM = ", persone.personeDOM.children, temi.themeSelected);


}










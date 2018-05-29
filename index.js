/******************************* VETTORE COLORE *******************************************/
var colors = [{

    /***************************Prima colonna********************/
    value: "Green",
    style: {
        class: "elem_tabella_colori"
    }
}, {
    value: "Red",
    style: {
        class: "elem_tabella_colori"
    }
}, {
    value: "Yellow",
    style: {
        class: "elem_tabella_colori"
    }
}, {
    value: "Orange",
    style: {
        class: "elem_tabella_colori"
    }
}, {
    value: "Brown",
    style: {
        class: "elem_tabella_colori"
    }
}, {
    value: "Violet",
    style: {
        class: "elem_tabella_colori"
    }
},




/***************************Seconda colonna********************/




{
    value: "Pink",
    style: {
        class: "elem_tabella_colori"
    }
}, {
    value: "Blue",
    style: {
        class: "elem_tabella_colori"
    }
}, {
    value: "Salmon",
    style: {
        class: "elem_tabella_colori"
       
    }
}, {
    value: "Lime",
    style: {
        class: "elem_tabella_colori"
       
    }
}, {
    value: "Beige",
    style: {
        class: "elem_tabella_colori"
      
    }
}, {
    value: "Grey",
    style: {
        class: "elem_tabella_colori"
       
    }
},


/***************************Terza colonna********************/


{
    value: "Navy",
    style: {
        class: "elem_tabella_colori"
    }
}, {
    value: "Silver",
    style: {
        class: "elem_tabella_colori"
    
    }
}, {
    value: "Gold",
    name: "Gold",
    style: {
        class: "elem_tabella_colori"
      
    }
}, {
    value: "Aqua",
    style: {
        class: "elem_tabella_colori"

    }
}, {
    value: "Peru",
    style: {
        class: "elem_tabella_colori"
        
    }
}, {
    value: "Black",
    style: {
        class: "elem_tabella_colori"

    }
},{
    value: "Teal",
    style: {
        class: "elem_tabella_colori"

    }
},{
    value: "White",
    style: {
        class: "elem_tabella_colori"              

    }
}
];



    var theme = [{
       nome: 'default',
       style: {

                class: 'defaultIcon'

              }
    },{
        nome: 'firstTheme',
        style: {
 
                 class: 'firstThemeIcon'
 
               }
     },{
        nome: 'secondTheme',
        style: {
 
                 class: 'secondThemeIcon'
 
               }
     }];


var coloreSelected = null;
var themeSelected = null;

var colorsDOM = document.getElementById('colors');
var themeDOM = document.getElementById('temi');




/*****************************/
var persone = new Persone();
persone.toView();

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

/*****************************/


/******************************* LOGICA CHE DISEGNA *******************************************/
var themeDOMChildren = themeDOM.children;
for(var i=0; i < theme.length; i++)
{

    var divtheme_i = document.createElement("div");
    divtheme_i.setAttribute("value", theme[i].nome)
    divtheme_i.classList.add(theme[i].style.class);
    divtheme_i.value = theme[i].nome;

    var tema_scelto = document.createTextNode(theme[i].nome);
    divtheme_i.appendChild(tema_scelto);
    themeDOM.appendChild(divtheme_i);

    /*--------------------------------------------------Temi Logica----------------------------------------*/
    
    divtheme_i.addEventListener('click', (function(value) {
        return function() {
            
            SelectTheme(value);
        }
    })(theme[i].nome));


}

for (var i = 0; i < colors.length; i++) {
    var divcolor_i = document.createElement("div");

    divcolor_i.setAttribute("value", colors[i].value);

    divcolor_i.style.backgroundColor = colors[i].value;
    divcolor_i.value = colors[i].value;
    divcolor_i.style.color = colors[i].style.color;
    divcolor_i.classList.add(colors[i].style.class);

    ///////////////////////////////////////////////////////////////////////////////////ascoltatore colore selezionato
    divcolor_i.addEventListener('click', (function(value) {
        return function() {
            SelectColor(value);

        }
    })(colors[i].value));


    colorsDOM.appendChild(divcolor_i);

    }


    


/*********************************************************************** FUNCTIONS ***********************************************************************/


var SelectColor = function(value) {
coloreSelected = value;
console.log("coloreSelected = ", coloreSelected);
}

var SelectTheme =function(value){
themeSelected = value;
console.log("tema selezionato = ", themeSelected);
}

var SelectPersona = function(id) {
persone.personaSelected = id;
console.log("personaSelected = ", persone.personaSelected);
}

var ChangeColorPersona = function() {
console.log("changeColorPersona");
console.log("coloreSelected = ", coloreSelected);
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
    console.log("persona preselezionata: ", personaSelected);
    console.log("Persona: ", fiscaleSelected);

    if (fiscaleSelected == personaSelected) {
        if (coloreSelected == "Navy" || coloreSelected == 'Blue'|| coloreSelected == "Black")
            personeDOMChildren[i].style.color = "white";

        else personeDOMChildren[i].style.color = "Black";

        colore = coloreSelected;
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
    tema = themeSelected;
    fiscaleSelected = persone.personeDOM.children[0].fiscale;

    console.log("tema selezionato", tema);
    console.log("Persona selezionata: ", personaSelected);

    

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

    console.log("personeDOM = ", personeDOM.children, themeSelected);


}










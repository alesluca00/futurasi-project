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


var persone = [{
    nome: "Francesco",
    cognome: "Ferrante",
    fiscale: "AAB",
    img: "img/ferrante.jpg",
    style: {

        class:"avatar",
        toppp: '100px'
    }
    }, {
    nome: "Franco",
    cognome: "Cason",
    fiscale: "AAC",
    img: "img/cason.png",

    style: {
        class:"avatar",
        toppp: '200px'
    }
    }, {
    nome: "Luigi",
    cognome: "Rossi",
    fiscale: "QAB",
    img: "img/rossi.jpg",

    style: {
    class:"avatar",
    toppp: "300px"
    }
    }, {
    nome: "Anna",
    cognome: "Bianchi",
    fiscale: "ABB",
    img: "img/bianchi.jpg",

    style: {
        class: "avatar",
        toppp: '400px'
    }
    },
    {
    nome: "Carla",
    cognome: "Neri",
    fiscale: "ZBB",
    img: "img/neri.jpeg",

    style: {
        class: "avatar",
        toppp: '400px'
    }
    },
    {
    nome: "Mario",
    cognome: "Verdi",
    fiscale: "QWB",
    img: "img/verdi.jpeg",

    style: {
        class: "avatar",
        toppp: '400px'
    }
    },
    {
    nome: "Sara",
    cognome: "Marroni",
    fiscale: "MBB",
    img: "img/marroni.jpg",

    style: {
        class: "avatar",
        toppp: '400px'
    }
    },
    {
    nome: "Guido",
    cognome: "Piano",
    fiscale: "PBB",
    img: "img/piano.jpg",
    style: {
        class: "avatar",
        toppp: '400px'
    }
    }];

    var theme = [{
       nome: 'Default',
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


var personaSelected = null;
var coloreSelected = null;
var themeSelected = null;

var colorsDOM = document.getElementById('colors');
var personeDOM = document.getElementById('persone');
var themeDOM = document.getElementById('temi');



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
            ChangeTheme(value);

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


    var personeDOMChildren = personeDOM.children;
    for (var i = 0; i < persone.length; i++) {

    var divPersona_i = document.createElement("div");

    var nome_cognome = document.createTextNode(persone[i].nome + ' ' + persone[i].cognome);

    var avatar = document.createElement("img");
    avatar.src = persone[i].img;
    console.log(divPersona_i);

    divPersona_i.appendChild(avatar);
    divPersona_i.appendChild(nome_cognome);




    divPersona_i.setAttribute("fiscale", persone[i].fiscale);


    divPersona_i.classList.add(persone[i].style.class);
    divPersona_i.fiscale = persone[i].fiscale;




    ///////////////////////////////////////////////////////////////////////////////////ascoltatore persona selezionata
    divPersona_i.addEventListener('click', (function(value) {
        return function() {
           
            if (coloreSelected) {
                 SelectPersona(value);
                ChangeColorPersona(value);
            }
            if(themeSelected){
                ChangeTheme(value)
            }
        }
    })(persone[i].fiscale));

    divPersona_i.addEventListener('mousedown', (function(cognome){
        return function(){
            resetBorder(cognome);
            changeBorder(cognome);
        }
    })(persone[i].cognome));


    personeDOM.appendChild(divPersona_i);


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
personaSelected = id;
console.log("personaSelected = ", personaSelected);
}
var ChangeColorPersona = function() {
console.log("changeColorPersona");
console.log("coloreSelected = ", coloreSelected);
console.log("personaSelected = ", personaSelected);
console.log("personeDOM = ", personeDOM.children);

//var personeDOMChildren = personeDOM.children;
var fiscaleSelected;
var colore;
var nuovoColore;
console.log("colore", colore);
var personeDOMChildren = personeDOM.children;
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

for (var i = 0; i < personeDOMChildren.length; i++) {

    for (i = 0; i < persone.length; i++) {
        if (persone[i].cognome == cognome2) {

           // console.log("reset", reset);
            console.log("funziona", cognome2);

            personeDOMChildren[i].style.border = '3px solid blue';
            
            
        }
    }

}
}
/*********************************************************************** Funzione RESETTA IL BORDO ***********************************************************************/
var resetBorder = function(cognome) {

var cognome2 = cognome;
console.log("cognome: ", cognome2);

for (var i = 0; i < personeDOMChildren.length; i++) {

    for (i = 0; i < persone.length; i++) {
        
        console.log("funziona", cognome2);

        personeDOMChildren[i].style.border = '1px solid black'; 
    }
}
}

/*********************************************************************** Funzione CAMBIA TEMA ***********************************************************************/

var ChangeTheme = function(){

        console.log("Change Theme");
    console.log("Theme selected = ", themeSelected);
    console.log("personaSelected = ", personaSelected);
    //console.log("personeDOM = ", personeDOM.children);

    //var personeDOMChildren = personeDOM.children;
    var fiscaleSelected;
    var tema;
    tema = themeSelected;
    console.log("tema selezionato", tema);
    //var nuovoColore;

    var personeDOMChildren = personeDOM.children;
    for (var i = 0; i < personeDOMChildren.length; i++) {
        console.log("personeDOM[" + i + "] = ", personeDOMChildren[i]);

        //capire l'elemento con fiscale giusto 
        //cambiare colore

        fiscaleSelected = personeDOMChildren[i].fiscale;
        console.log("persona preselezionata: ", personaSelected);
        console.log("Persona: ", fiscaleSelected);

        if (fiscaleSelected == personaSelected) {
            

            tema = themeSelected;
            console.log("colore = ", colore);
            personeDOMChildren[i].style = colore;
        }
    }

}


/*********************************************************************** array immagini ***********************************************************************/

var arrayOfImage = [{

img : 'img/ferrante.jpg',
value :'ferrante'
},
{
    img:'img/rossi.jpg',
  value: 'rossi'
},
{
   img:'img/bianchi.jpg',
    value:'bianchi'
},
{
    img:'img/cason.png',
   value:'cason'
}];


/*********************************************************************** parte logica arrayOfImage ***********************************************************************/


for (var i = 0; i < arrayOfImage.length; i++) {
   
    var divimage_i = document.createElement("div");

    var style_image = document.createElement("img");

    /*style_image.appendChild(style_image);
    
    style_image.src = arrayOfImage[i].img;

     style_image.classList.add("style_image");
   
    //console.log(divimage_i);
    style_image.setAttribute("value", arrayOfImage[i].value);


        
    
    divimage_i.img = arrayOfImage[i].img;
    divimage_i.value = arrayOfImage[i].value;*/
    

//------------------------------>controllare perchè non si vede l'immagine nonostante ci sia il percorso <-----------------------------------------------------
}






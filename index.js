

var server = new Server(); 

var persone = new Persone(server.getPersone());
persone.toView();

var colori = new Colori(server.getColori());
colori.toView();

var temi = new Temi(server.getTemi());
temi.toView();

var azioni = new Azioni(persone, colori, temi);



for(var i=0; i < persone.persone.length; i++) {

    persone.personeDOM.children[i].addEventListener('click', (function( value) {

        return function() { 
    
                azioni.SelectPersona(value); 
            
            if (colori.coloreSelected) { 
                    
                azioni.ChangeColorPersona(value);
            }
    
            if(temi.themeSelected) {
               azioni.ChangeTheme();
            }
        }
    })(persone.persone[i].fiscale));
}

for(var i = 0; i < persone.persone.length; i++) {

    persone.personeDOM.children[i].addEventListener('mousedown', (function(cognome){

        return function(){
            console.log("cognomeeee", cognome);
            azioni.resetBorder(cognome);
            azioni.changeBorder(cognome);
        }
    })(persone.persone[i].cognome));
}



/******************************* COLORI *************************************/


for(var i=0; i < colori.colori.length ; i++) {

    var domColor = colori.getDomColorById(colori.colori[i].value);

    domColor.addEventListener('click', (function(value) {

        return function() {
            azioni.SelectColor(value);
        }

    })(colori.colori[i].value));
}

    /////////////////////////////SELEZIONA COLORE




/******************************* TEMI *******************************************/


for(var i=0; i < temi.temi.length; i++){

    
    var domTemi = temi.getDomTemaById(temi.temi[i].nome);
    console.log("www", domTemi);


    domTemi.addEventListener('click', (function(value) {

        return function() { 

            azioni.SelectTheme(value);
            console.log("TEMA SEL: ", value);

        }

    })(temi.temi[i].nome));

}





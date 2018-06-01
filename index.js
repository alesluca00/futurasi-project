

var server = new Server(); 

var persone = new Persone(server.getPersone());
persone.toView();

var colori = new Colori(server.getColori());
colori.toView();

var temi = new Temi(server.getTemi());
temi.toView();

var azioni = new Azioni(persone, colori, temi);

var textBox = document.getElementById('textBox');

/*******************************************EventListener PERSONA***************************************** */

for(var i=0; i < persone.persone.length; i++) {

    persone.personeDOM.children[i].addEventListener('click', ((persona) => {

        return function() { 
            azioni.resetBorder(persona.cognome);
            azioni.changeBorder(persona.cognome);
            azioni.SelectPersona(persona.fiscale);
            
            if (colori.coloreSelected) { 
                    
                azioni.ChangeColorPersona(persona.fiscale);
            }
    
            if(temi.themeSelected) {
               azioni.ChangeTheme();
            }
        }
    })(persone.persone[i]));
}


    var parola_completa = "";
    var controllo=false;
    var backSpaceCounter=null;
    
    textBox.addEventListener('keyup', (function(event){

        
        if(event.key == 'Enter') {
            
            
            azioni.ChangeNamePersona(parola_completa);
            parola_completa = '';
              
        }
        
       
        else{
            parola_completa = parola_completa + event.key;
        }   
    }));
    

        


/*******************************************EventListener COLORI***************************************** */


 for (var i=0; i < colori.colori.length ; i++) {

    var domColor = colori.getDomColorById(colori.colori[i].value);

    domColor.addEventListener('click', (function(value) {

        return function() {
            azioni.SelectColor(value);
        }

    })(colori.colori[i].value));
}


/*******************************************EventListener TEMI***************************************** */


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
/*******************************************EventListener TITOLI******************************************/
console.log("prova", document.getElementsByTagName('h1'));
var domTagName = null;
var arrayTitolo = document.getElementsByTagName('h1');
for( var i = 0; i < arrayTitolo.length; i++){
    
    domTagName = arrayTitolo[i];
    console.log("titoli", domTagName);
    domTagName.addEventListener('mouseover', (function(domTagName){
        return function(){
            azioni.conversioneStringArray(domTagName);
          
        }
    })(arrayTitolo[i].innerText));

}

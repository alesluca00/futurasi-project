

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
            azioni.resetBorder();
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

            azioni.resetBorderColor();
            azioni.SelectColor(value);
            azioni.changeBorderColor(colori.coloreSelected);
           
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
console.log('arrayTitolo::', arrayTitolo);

for( var i = 0; i < arrayTitolo.length; i++){

    var bool = false;
    if(i == 0) {bool = true;}
    firstTitle = arrayTitolo[i].innerText;
    arrayTitolo[i].innerHTML = '';
   
    var arrayLettere = firstTitle.split('');
    console.log('innerhtml::', arrayTitolo[i].innerHTML);
    console.log('arrayTitolo::', arrayTitolo[i]);
 
  
    for ( var a = 0; a < arrayLettere.length; a++)
    {
    
        var lettere = document.createElement('span');
    
        lettere.setAttribute('pos', a);
        lettere.innerHTML = arrayLettere[a];
        arrayLettere[a] = '';
        console.log('lettere', lettere);
        
        if(bool == true){
            lettere.style.backgroundColor = '#E8E8E8';
        }

        lettere.classList.add('lettera');
        
        
        console.log('entra', a);
        arrayTitolo[i].appendChild(lettere);
        console.log('rrrrrrrrrrrrrrr',document.getElementsByTagName('h1')[i].textContent );
        
        lettere.addEventListener('mouseover', (function(lettere){
            
                return function(){
                    azioni.changeLetter(lettere, bool);
                }
            
        })(lettere));
    
    }
}
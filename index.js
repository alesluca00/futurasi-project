

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


////////////////////////////////////////////azioni.addAvatar()///////////////////////////////////////////////


var pp = null;
for(var i=0; i < persone.persone.length; i++) {

    persone.personeDOM.children[i].addEventListener('click', ((persona) => {

        return function() { 
            azioni.resetBorder();
            azioni.changeBorder(persona.cognome);
            azioni.SelectPersona(persona.fiscale);
            
                for( var p = 0 ; p < persone.persone.length; p++)
                if(persone.persone[p].fiscale == '') pp = p;
            

            persone.personeDOM.children[pp] = (azioni.addAvatar(pp));
            if (colori.coloreSelected)  
                azioni.ChangeColorPersona(persona.fiscale);
            if(temi.themeSelected) 
               azioni.ChangeTheme();
            
        }
    })(persone.persone[i]));
}


    var parola_completa = '';
    var controllo=false;
    
    
    textBox.addEventListener('keyup', (function(event){
        
        
        if(event.key == 'Enter') {
            
            console.log('entra ciclo::');
            azioni.ChangeNamePersona(parola_completa);
            parola_completa = '';
            
              
        }
        
       
        else {
            
            
            parola_completa = azioni.controllo(parola_completa,event.key);
            console.log('parola_completa', parola_completa);
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

console.log("prova", document.getElementsByClassName('header'));
var domTagName = null;
var arrayTitolo = document.getElementsByClassName('header');
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
        console.log('rrrrrrrrrrrrrrr',document.getElementsByClassName('header')[i].textContent );
        
        lettere.addEventListener('mouseover', (function(lettere){
            
                return function(){
                    azioni.changeLetter(lettere);
                }
            
        })(lettere));
    
    }
}
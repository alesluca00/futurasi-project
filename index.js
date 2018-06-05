

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
var parola = document.getElementsByClassName('header')[0].innerText;

console.log('arrayTitolo::', parola);
var arrayTitolo = parola.split('');

  
    for ( var a = 0; a < arrayTitolo.length; a++)
    {
       var prelettera = ''
        var lettere = document.createElement('span');
    
        lettere.setAttribute('pos', a);
       
        lettere.innerHTML= arrayTitolo[a];
        
      
        arrayTitolo[a] = '';
        console.log('lettere', lettere);
        
        
        
            lettere.style.backgroundColor = '#E8E8E8';
        

        lettere.classList.add('lettera');
        
        
        console.log('entra', a);
        //arrayTitolo[a].appendChild(lettere);
        console.log('rrrrrrrrrrrrrrr', document.getElementsByTagName('span'));

       
        
        lettere.addEventListener('mouseover', (function(lettere){
            
            return function(){

                lettere[a].style.color = 'black';
                azioni.changeLetter(lettere);     
            }         
        })(lettere));    
    }

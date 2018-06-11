var server = new Server(); 

var persone = new Persone(server.getPersone());
persone.toView();

var colori = new Colori(server.getColori());
colori.toView();

var temi = new Temi(server.getTemi());
temi.toView();

var titolo = new Titolo();
titolo.toView();

var azioni = new Azioni(persone, colori, temi);


var textBox = document.getElementById('textBox');

function allowDrop(e){
    e.preventDefault();
}

/*******************************************EventListener PERSONA***************************************** */
var colorDrag = '';
for (var i=0; i < colori.colori.length ; i++) {

    var domColor = colori.getDomColorById(colori.colori[i].value);

    domColor.addEventListener('mousedown', (function(value) {

        return function() {

            azioni.resetBorderColor();
            azioni.SelectColor(value);
            azioni.changeBorderColor(colori.coloreSelected);
           
        }

    })(colori.colori[i].value));

  
}




////////////////////////////////////////////azioni.addAvatar()///////////////////////////////////////////////
var pulsanteloco = document.getElementById('pulsante-loco');


pulsanteloco.addEventListener('click', (function(value) {
    return function(){
        
        console.log("pulsanteloco::clicked");
        var i = persone.personeDOM.children.length;
        
       azioni.addAvatar(i)
     
    }
})(pulsanteloco));






console.log('lunghezzzzaaaaaaaa----->',persone.persone.length );
var pp = null;


for(var i=0; i < persone.personeDOM.children.length; i++) {
        
        
    persone.personeDOM.children[i].addEventListener('click', ((persona) => {

        return function() { 
            azioni.resetBorder();
            azioni.SelectPersona(persona.fiscale);
            
            azioni.changeBorder(persona.cognome);
            
            
            if (colori.coloreSelected)  
                azioni.ChangeColorPersona(persona.fiscale);
            if(temi.themeSelected) 
               azioni.ChangeTheme();
            
        }
    })(persone.persone[i]));
    
    persone.personeDOM.children[i].addEventListener('dragover',(function(e){


      
        
       
       return function() { 
        e.style.opacity = 0.5;
          
            
        }
    })(persone.personeDOM.children[i]));

    persone.personeDOM.children[i].addEventListener('dragleave',(function(e){

     return function() { 
         e.style.opacity = 1;
      }
     })(persone.personeDOM.children[i]));

    
    persone.personeDOM.children[i].addEventListener('drop',(function(e) {
        return function()
        {
        
        e.style.opacity = 1;
        e.style.backgroundColor = colori.coloreSelected;
       
        }
      
        
    })(persone.personeDOM.children[i]));


}

/*******************************************EventListener TEMI***************************************** */


for(var i=0; i < temi.temi.length; i++){

    
    var domTemi = temi.getDomTemaById(temi.temi[i].nome);
    console.log("www", domTemi);


    domTemi.addEventListener('mousedown', (function(value) {

        return function() { 

            
            azioni.SelectTheme(value);
console.log("TEMA SEL: ", value);
            

        }

    })(temi.temi[i].nome));


}

////////////*********************************************DRAG AND DROP TEMI *************************************************/
console.log('persone.personeDOM.length',persone.personeDOM.children[0]);
for(var i=0; i < persone.personeDOM.children.length; i++) {
    {
            persone.personeDOM.children[i].addEventListener('dragover',(function(e){
                return function() { 
                    e.style.opacity = 0.5;
                }
            })(persone.personeDOM.children[i]));

            persone.personeDOM.children[i].addEventListener('dragleave',(function(e){

                return function() { 
                    e.style.opacity = 1;
                }
            })(persone.personeDOM.children[i]));

            
            persone.personeDOM.children[i].addEventListener('drop',(function(e) {
            return function()
            {
            
            e.style.opacity = 1;
            console.log('entra::nel::drop');
            persone.personeDOM.children[i].classList = '';
            persone.personeDOM.children[i].classList.add('avatar');
            if(temi.themeSelected != 'default')
            {
                e.classList.add(temi.themeSelected);
            }
 
          
            
            }
        
            
        })(persone.personeDOM.children[i]));

    }
}

    textBox.addEventListener('keyup', (function(event){
        
     if(event.key == 'Enter') 
          azioni.ChangeNamePersona();

 }));
    

/*******************************************EventListener TITOLI******************************************/

for (var i = 0; i < titolo.titoloDOM.children.length; i++) {

    titolo.titoloDOM.children[i].addEventListener('mouseover', (function(lettera){
                
        return function(){
            
            
            if(colori.coloreSelected){
                console.log("letteraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa::", lettera);
                lettera.style.color  = colori.coloreSelected;
                lettera.style.fontSize = "30px";
            }          
        }   
                
    })(titolo.titoloDOM.children[i]));


    titolo.titoloDOM.children[i].addEventListener('mouseleave', (function(lettera){
                
        return function(){

            lettera.classList.remove("lettera-loca");
            lettera.style.color = 'black';
            lettera.style.fontSize = "25px";
                
        }   
                
    })(titolo.titoloDOM.children[i])); 

}


var filepicker = document.getElementById('file-picker');

/*filepicker.addEventListener("change", (function(divFile){
  
    return function(){

        

        let persona = persone.personeDOM.children[0];
        persona.getElementsByTagName('img')[0].src = 'img/' + divFile.value.split('\\')[divFile.value.split('\\').length - 1];
            
            
        
    }
})(filepicker));*/

var divRimuoviPersona = document.getElementById('rimuoviPersona');
console.log('divRimuoviPersona', divRimuoviPersona);
divRimuoviPersona.addEventListener('click', (function(value){
    return function(){
    
    
    
    //var lunghezza = 
    //console.log(lunghezza);
        var checkBoxed = document.getElementsByClassName('checkBox');
        console.error('checkBoxed', checkBoxed);

        var trueIndex = 0;


       do
        {
            
            var checkBoxValue = checkBoxed[trueIndex];
            if(checkBoxValue.checked == true) {
                console.error('checkBoxValue', checkBoxValue);
                azioni.deleteAvatar(trueIndex);
            } else {
                trueIndex++;
            }
        }while(trueIndex<=persone.persone.length);

    
            
    }
})(divRimuoviPersona));


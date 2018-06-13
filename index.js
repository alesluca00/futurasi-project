

var server = new Server();

var persone = new Persone(server.getPersone());
persone.toView();
console.log('persone::toView::', persone);

//var stringOfPersone = localStorage.getItem('persone');
//var persone = [];
//persone = JSON.parse(stringOfPersone);
//persone.toView();

var colori = new Colori(server.getColori());
colori.toView();

var temi = new Temi(server.getTemi());
temi.toView();

var titolo = new Titolo();
titolo.toView();

var azioni = new Azioni(persone, colori, temi);


var textBox = document.getElementById('textBox');






console.log('persone::array', persone.persone);
function allowDrop(e){
    e.preventDefault();
}


/*******************************************EventListener PERSONA***************************************** */

var personeDOM = document.getElementById('persone');
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



var divAddAvatar;
////////////////////////////////////////////azioni.addAvatar()///////////////////////////////////////////////
var pulsanteloco = document.getElementById('pulsante-loco');
divAddAvatar = document.getElementById('divAddAvatar');

pulsanteloco.addEventListener('mousedown', (function(value) {
    return function(){
        pulsanteloco.backgroundColor = 'rgb(184, 182, 182)';
        console.log("pulsanteloco::clicked");
        var i = personeDOM.children.length;
        

        azioni.addAvatar(i)
        console.log('persona da inserire::', persone.persone[i]);
        server.inserisci(persone.persone[i]);
       
     
    }
})(pulsanteloco));


document.addEventListener('contextmenu',( function() {
    console.log("You've tried to open context menu", event.clientX, event.clientY); //here you draw your own menu
}));//, false);



for(var i=0; i < personeDOM.children.length; i++) {
        
        
    personeDOM.children[i].addEventListener('mousedown', ((persona) => {

        return function() { 
            switch(event.button){
            case 0:
            {
            azioni.resetBorder();
            azioni.SelectPersona(persona.fiscale);
            
            azioni.changeBorder(persona.cognome);
            
            
            if (colori.coloreSelected)  
                azioni.ChangeColorPersona(persona.fiscale);
            if(temi.themeSelected) 
               azioni.ChangeTheme();
            break;
            }
            
            case 2:
            {
            
            }
        }
        }
    })(persone.persone[i]));
    
    personeDOM.children[i].addEventListener('dragover',(function(e){

     return function() { 
        e.style.opacity = 0.5;
     }
    })(personeDOM.children[i]));


    personeDOM.children[i].addEventListener('dragleave',(function(e){

     return function() { 
         e.style.opacity = 1;
      }
     })(personeDOM.children[i]));

    
    personeDOM.children[i].addEventListener('drop',(function(e) {
        return function()
        {
        
        e.style.opacity = 1;
        e.style.backgroundColor = colori.coloreSelected;
       
        }
      
        
    })(personeDOM.children[i]));


}

var fiscaleSelected = null;


divAddAvatar.addEventListener('dragover',(function(e){

    return function(){
        for( var i = 0; i < persone.persone.length; i++)
        {
                if(persone.persone[i].fiscale == persone.personaSelected){
                    
                    console.log('personeSelected::', persone.persone[i]);
                    e.getElementsByClassName('addFiscaleInput')[0].value = persone.persone[i].fiscale;
                    e.getElementsByClassName('addNomeInput')[0].value = persone.persone[i].nome;
                    e.getElementsByClassName('addCognomeInput')[0].value = persone.persone[i].cognome;
                    e.getElementsByClassName('addImmagineInput')[0].value = persone.persone[i].img;
                    e.style.opacity = 0.5;
            }
        }
    }
}(divAddAvatar)));

divAddAvatar.addEventListener('dragleave',(function(e){

    return function(){
        for( var i = 0; i < persone.persone.length; i++)
        {
                if(persone.persone[i].fiscale == persone.personaSelected){
                   
                    e.getElementsByClassName('addFiscaleInput')[0].value = '';
                    e.getElementsByClassName('addNomeInput')[0].value = '';
                    e.getElementsByClassName('addCognomeInput')[0].value = '';
                    e.getElementsByClassName('addImmagineInput')[0].value = '';
                    e.style.opacity = 1;
            }
        }
    }
}(divAddAvatar)));

divAddAvatar.addEventListener('drop',(function(e){

    return function(){
        for( var i = 0; i < persone.persone.length; i++)
        {
                if(persone.persone[i].fiscale == persone.personaSelected){
                    e.getElementsByClassName('addFiscaleInput')[0].value = persone.persone[i].fiscale;
                    e.getElementsByClassName('addNomeInput')[0].value = persone.persone[i].nome;
                    e.getElementsByClassName('addCognomeInput')[0].value = persone.persone[i].cognome;
                    e.getElementsByClassName('addImmagineInput')[0].value = persone.persone[i].img;
                    fiscaleSelected = persone.persone[i].fiscale;

                    e.style.opacity = 1;
                    return fiscaleSelected;
            }
        }
       
    }
}(divAddAvatar)));



 
        var ModificaValori = document.getElementById('modificaPersona');
        console.log('modificavalori::', ModificaValori);
        ModificaValori.addEventListener('mousedown', (function(div){
            return function(){
                div.style.backgroundColor = 'rgb(184, 182, 182)';
                
                for(var i = 0; i < persone.persone.length; i++){
                    
                  

                    if(persone.persone[i].fiscale == fiscaleSelected ){
                        
                        
                        persone.persone[i].nome = divAddAvatar.getElementsByClassName('addNomeInput')[0].value;
                        persone.persone[i].cognome = divAddAvatar.getElementsByClassName('addCognomeInput')[0].value; 
                        persone.persone[i].img = divAddAvatar.getElementsByClassName('addImmagineInput')[0].value;
                        persone.persone[i].fiscale = divAddAvatar.getElementsByClassName('addFiscaleInput')[0].value;
                        personeDOM.children[i].getElementsByClassName('nome_cognome')[0].innerHTML = persone.persone[i].nome +' ' + persone.persone[i].cognome;

                        
                        server.modificaPersona(persone.persone[i]);
                    }
                }
            }
        }(ModificaValori)));

        ModificaValori.addEventListener('mouseup', (function(div){
           return function(){

              div.style.backgroundColor = '#E8E8E8';
           } 
        }(ModificaValori)));




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
var divInnerText = document.getElementsByClassName('nome_cognome');

console.log('persone.personeDOM.length',personeDOM.children[0]);
for(var i=0; i < divInnerText.length; i++) {
    
       
            
    divInnerText[i].addEventListener('drop',(function(e) {
    return function()
    {
    e.classList = '';
    e.classList.add('nome_cognome');
    if(temi.themeSelected != 'default')
        {
            if(temi.themeSelected== 'firstTheme')
                e.classList.add('firstTheme');

            else e.classList.add('secondTheme');
        }
    }
    })(divInnerText[i]));

    divInnerText[i].addEventListener('dragover',(function(e) {
        return function()
        {
        e.classList = '';
        e.classList.add('nome_cognome');
        if(temi.themeSelected != 'default')
            {
                if(temi.themeSelected== 'firstTheme')
                    e.classList.add('firstTheme');
    
                else e.classList.add('secondTheme');
            }
        }
        })(divInnerText[i]));

        divInnerText[i].addEventListener('dragleave',(function(e) {
        return function()
        {
        e.classList = '';
        e.classList.add('nome_cognome');
        
        }
        })(divInnerText[i]));

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


var arrayOfAvatarDelete = '';
var i = 0;
var divRimuoviPersona = document.getElementById('rimuoviPersona');

divRimuoviPersona.addEventListener('mousedown', (function(value,i){
    return function(){
    
    

        var checkBoxed = document.getElementsByClassName('checkBox');


        var trueIndex = 0;


       do
        {
            
            var checkBoxValue = checkBoxed[trueIndex];
            if(checkBoxValue.checked == true) {
                console.error('checkBoxValue', checkBoxValue);
                azioni.addAvatarDelete(trueIndex)
                i++;
                azioni.deleteAvatar(trueIndex);
                server.rimuovi(persoe.persone[trueIndex]);
            } else {
                trueIndex++;
            }
        }while(trueIndex< persone.persone.length);

    
            
    }

})(divRimuoviPersona, i));

reset.addEventListener('mouseover', (function(button){
    return function(){

        button.style.border = '3px dotted red';
    }
}(reset)));
reset.addEventListener('mouseleave', (function(button){
    return function(){

        button.style.border = '1px solid black';
    }
}(reset)));

reset.addEventListener('mousedown', (function(button){
    return function(){

        window.location.reload();
    }
}(reset)))

console.log('persone::index.js::', persone);




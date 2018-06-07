
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
var dragAndDrop = new DragAndDrop(persone, colori, temi);

var textBox = document.getElementById('textBox');



/*******************************************EventListener PERSONA***************************************** */


////////////////////////////////////////////azioni.addAvatar()///////////////////////////////////////////////
var pulsanteloco = document.getElementById('pulsante-loco');

pulsanteloco.addEventListener('click', (function() {
    return function(){
        
        console.log("pulsanteloco::clicked");
        var i = persone.personeDOM.children.length;
        
        azioni.addAvatar(i);
        
    }
})());



console.log('lunghezzzzaaaaaaaa----->',persone.persone.length );
var pp = null;

for(var i=0; i < persone.persone.length; i++) {

    persone.personeDOM.children[i].addEventListener('click', ((persona) => {

        return function() { 
            azioni.resetBorder();
            azioni.changeBorder(persona.cognome);
            azioni.SelectPersona(persona.fiscale);
            
            if (colori.coloreSelected)  
                azioni.ChangeColorPersona(persona.fiscale);
            if(temi.themeSelected) 
               azioni.ChangeTheme();
            
        }
    })(persone.persone[i]));
}

    textBox.addEventListener('keyup', (function(event){
        
     if(event.key == 'Enter') 
          azioni.ChangeNamePersona();

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


for( var i = 0; i < colori.colorsDOM.children.length;i++){
    colori.colorsDOM.children[i].addEventListener("dragstart", (function(colore){
        return function(){

            
            console.log('colore--->', colore);
                dragAndDrop.allowDrop(colore);
                dragAndDrop.drag(colore);
                //dragAndDrop.allowDrop(event);
                //colore.dragAndDrop.inizioDrag(event);
                
                
                //dragAndDrop.ondragstart(event);
                
            
        }
    })(colori.colorsDOM.children[i].value));
}







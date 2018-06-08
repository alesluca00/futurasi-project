
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



/*******************************************EventListener PERSONA***************************************** */


/*for ( var i = 0; i < colori.coloriDOM.children.length; i++)
{
function allowDrop(ev) {
    ev.preventDefault();
   }
   var img = new Image();
   img.src = 'https://cdn0.iconfinder.com/data/icons/hands-pt-3/100/051_-_drag-512.png';
   
    var ondragstart = function(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        
        console.log('entra bibbi------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        event.dataTransfert.effectAllowed = 'copy';
        event.dataTransfert.dropEffect = 'copy';
        event.dataTransfert.setData('text', event.target.getAttribute('value'));
        console.log('colore--->', event);
   }

   function dragOver(ev)
   {
        event.preventDeafault();
    }

   

   function drop(ev) {
       ev.preventDefault();
       var data = ev.dataTransfer.getData("text");
       ev.target.appendChild(document.getElementById(data));
   }

}*/



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

    persone.personeDOM.children[i].addEventListener('dragover', ((e) => {
        console.log("index::persona::dragover", e);

        return function() { 
           console.log("index::persona::dragover", e);
            
        }
    }));
    persone.personeDOM.children[i].addEventListener('drop', ((e) => {
        console.log("index::persona::dragover", e);

        return function() { 
           console.log("index::persona::drop", e);
            
        }
    }));

    persone.personeDOM.children[i].addEventListener('dropover', ((e) => {
        console.log("index::persona::dragover", e);

        return function() { 
           console.log("index::persona::dropover", e);
            
        }
    }));
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


/*for( var i = 0; i < colori.colorsDOM.children.length;i++){
    colori.colorsDOM.children[i].addEventListener("dragstart", (function(div_colore){
        //console.log('colore--->', event);
        return function(){*/






           /* console.log('colore--->', event);
                //dragAndDrop.allowDrop(colore);*/
                
                /*function dragstart(event){

                    event.dataTransfert.setData('text', event.target.id);
                    console.log('entra bibbi------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                    event.dataTransfert.effectAllowed = 'copy';
                    event.dataTransfert.dropEffect = 'copy';
                    event.dataTransfert.setData('text', event.target.getAttribute('value'));
                    console.log('colore--->', event);


                }
                
                function dragOver(event){

                    event.preventDeafault();

                }

                function drop(event){

                    event.preventDeafault();
                    var data = event.dataTransfert.getData('text');
                    console.log('data::',data);
                    event.target.appendChild(document.getElementById(data));    
                }

                function dragOver(event){

                    event.preventDeafault();

                }
                function drop(event)
                {
                    var nomeImgTrascinata = event.dataTransfert.getData('text');
                    var oggettoDrop = event.target;

                }*/

                
                
                
                //dragAndDrop.ondragstart(event);
                
            
       /* }
    })( colori.colorsDOM.children[i]));
}*/


var filepicker = document.getElementById('file-picker');

filepicker.addEventListener("change", (function(divFile){
    //console.log('colore--->', event);
    return function(){

        

        let persona = persone.personeDOM.children[0];
        persona.getElementsByTagName('img')[0].src = 'img/' + divFile.value.split('\\')[divFile.value.split('\\').length - 1];
            
            
        
    }
})(filepicker));







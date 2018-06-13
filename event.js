

class Event{
    constructor(persone, colori, temi) {
        this.persone = persone;
        this.colori = colori; 
        this.temi = temi;
    }
   
eventRimuoviPersona(){
    var filepicker = document.getElementById('file-picker');
    var arrayOfAvatarDelete = '';
    var i = 0;
    var divRimuoviPersona = document.getElementById('rimuoviPersona');
    console.log('divRimuoviPersona', divRimuoviPersona);
    divRimuoviPersona.addEventListener('click', (function(value,i){
        return function(){
        var checkBoxed = document.getElementsByClassName('checkBox');
        console.error('checkBoxed', checkBoxed);

        var trueIndex = 0;


       do
        {
            
            var checkBoxValue = checkBoxed[trueIndex];
            if(checkBoxValue.checked == true) {
                console.error('checkBoxValue', checkBoxValue);
                azioni.addAvatarDelete(trueIndex)
                i++;
                azioni.deleteAvatar(trueIndex);
            } else {
                trueIndex++;
            }
        }while(trueIndex<=persone.persone.length);

    
            
    }

})(divRimuoviPersona, i));
    }



resetDiv(){

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
        
    }

animationOfTitle(){

    for (var i = 0; i < this.titolo.titoloDOM.children.length; i++) {

        this.titolo.titoloDOM.children[i].addEventListener('mouseover', (function(lettera){
                    
            return function(){
                
                
                if(colori.coloreSelected){
                    console.log("letteraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa::", lettera);
                    lettera.style.color  = colori.coloreSelected;
                    lettera.style.fontSize = "30px";
                }          
            }   
                    
        })(this.titolo.titoloDOM.children[i]));
    
    
        this.titolo.titoloDOM.children[i].addEventListener('mouseleave', (function(lettera){
                    
            return function(){
    
                lettera.classList.remove("lettera-loca");
                lettera.style.color = 'black';
                lettera.style.fontSize = "25px";
                    
            }   
                    
        })(this.titolo.titoloDOM.children[i])); 
    
    }
    
}

themeOperation(){

    var divInnerText = document.getElementsByClassName('nome_cognome');
console.log('divInnerText', divInnerText[0].innerHTML);
console.log('persone.personeDOM.length',this.persone.personeDOM.children[0]);
for(var i=0; i < divInnerText.length; i++) {
    
       
            
    divInnerText[i].addEventListener('drop',(function(e) {
    return function()
    {
    e.classList = '';
    e.classList.add('nome_cognome');
    if(this.temi.themeSelected != 'default')
        {
            if(this.temi.themeSelected== 'firstTheme')
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
        if(this.temi.themeSelected != 'default')
            {
                if(this.temi.themeSelected== 'firstTheme')
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

}

selectOfTheme(){

    for(var i=0; i < this.temi.temi.length; i++){

    
        var domTemi = temi.getDomTemaById(this.temi.temi[i].nome);
        domTemi.addEventListener('mousedown', (function(value) {
    
            return function() { 
    
                
                azioni.SelectTheme(value);
    console.log("TEMA SEL: ", value);
                
    
            }
    
        })(this.temi.temi[i].nome));
    
    
    }
}

getAvatarInfo(){

    divAddAvatar.addEventListener('dragover',(function(e){

        return function(){
            for( var i = 0; i < this.persone.persone.length; i++)
            {
                    if(this.persone.persone[i].fiscale == this.persone.personaSelected){
                        console.log('personeSelected::', persone.persone[i]);
                        e.getElementsByClassName('addFiscaleInput')[0].value = this.persone.persone[i].fiscale;
                        e.getElementsByClassName('addNomeInput')[0].value = this.persone.persone[i].nome;
                        e.getElementsByClassName('addCognomeInput')[0].value = this.persone.persone[i].cognome;
                        e.getElementsByClassName('addImmagineInput')[0].value = this.persone.persone[i].img;
                        e.style.opacity = 0.5;
                }
            }
        }
    }(divAddAvatar)));
    
    divAddAvatar.addEventListener('dragleave',(function(e){
    
        return function(){
            for( var i = 0; i < this.persone.persone.length; i++)
            {
                    if(this.persone.persone[i].fiscale == this.persone.personaSelected){
                       
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
            for( var i = 0; i < this.persone.persone.length; i++)
            {
                    if(this.persone.persone[i].fiscale == this.persone.personaSelected){
                        e.getElementsByClassName('addFiscaleInput')[0].value = this.persone.persone[i].fiscale;
                        e.getElementsByClassName('addNomeInput')[0].value = this.persone.persone[i].nome;
                        e.getElementsByClassName('addCognomeInput')[0].value = this.persone.persone[i].cognome;
                        e.getElementsByClassName('addImmagineInput')[0].value = this.persone.persone[i].img;
                        
                        e.style.opacity = 1;
                }
            }
        }
    }(divAddAvatar)));
    
}

dropOfColor(){
    for(var i=0; i < this.persone.persone.length; i++) {
        
        
        this.persone.personeDOM.children[i].addEventListener('mousedown', ((persona) => {
    
            return function() { 
                azioni.resetBorder();
                azioni.SelectPersona(persona.fiscale);
                
                azioni.changeBorder(persona.cognome);
                
                
                if (colori.coloreSelected)  
                    azioni.ChangeColorPersona(persona.fiscale);
                if(temi.themeSelected) 
                   azioni.ChangeTheme();
                
            }
        })(this.persone.persone[i]));
        
        this.persone.personeDOM.children[i].addEventListener('dragover',(function(e){
    
         return function() { 
            e.style.opacity = 0.5;
         }
        })(this.persone.personeDOM.children[i]));
    
        this.persone.personeDOM.children[i].addEventListener('dragleave',(function(e){
    
         return function() { 
             e.style.opacity = 1;
          }
         })(this.persone.personeDOM.children[i]));
    
        
        this.persone.personeDOM.children[i].addEventListener('drop',(function(e) {
            return function()
            {
            
            e.style.opacity = 1;
            e.style.backgroundColor = colori.coloreSelected;
           
            }
          
            
        })(this.persone.personeDOM.children[i]));
    
    
    }
    
}

addDiv(){

    var pulsanteloco = document.getElementById('pulsante-loco');


pulsanteloco.addEventListener('click', (function(value) {
    return function(){
        
        console.log("pulsanteloco::clicked");
        var i = this.persone.personeDOM.children.length;
        
       azioni.addAvatar(i)
     
    }
})(pulsanteloco));
}

mousedownColor(){
    for (var i=0; i < this.colori.coloriDOM.children.length ; i++) {
      
        var domColor = colori.getDomColorById(this.colori.colori[i].value);
        domColor.addEventListener('mousedown', (function(value) {
    
            return function() {
    
                azioni.resetBorderColor();
                azioni.SelectColor(value);
                azioni.changeBorderColor(this.colori.coloreSelected);
               
            }
    
        })(this.colori.colori[i].value));
    
      
    }
}
}

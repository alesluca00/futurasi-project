

class Azioni {

    constructor(persone, colori, temi) {
        this.persone = persone;
        this.colori = colori; 
        this.temi = temi;
    }

    SelectColor(value) {
        
        this.colori.coloreSelected = value;
        var quadrato = document.getElementsByClassName('colore')[0];
        console.log('quadrato', quadrato);
        quadrato.style.backgroundColor = value;
        
        console.log("coloreSelected = ", this.colori.coloreSelected);
    }

    SelectPersona(id){
        this.persone.personaSelected = id;
        console.log("personaSelected = ", this.persone.personaSelected);
    }
    SelectTheme(value){
        this.temi.themeSelected = value;
        console.log("temaSelected = ",this.temi.themeSelected);
    }


    ChangeNamePersona(lettera) {
    
        var personeDOMChildren = this.persone.personeDOM.children;
        var backSpace = 0;
        for (var i = 0; i < personeDOMChildren.length; i++) {
            if (this.persone.personaSelected && personeDOMChildren[i].fiscale == this.persone.personaSelected){
                
                if(lettera != 'BackSpace')
                var textDiv = personeDOMChildren[i].getElementsByClassName("nome_cognome")[0];
                textDiv.innerHTML = lettera;
                console.log("controllo", this.colori.colori[i]);            }
        }                  
    }

    ChangeColorPersona() {

        
        this.personeDOMChildren = this.persone.personeDOM.children;
   
        
        for (var i = 0; i < this.personeDOMChildren.length; i++) {
        
        
            if (this.personeDOMChildren[i].fiscale == this.persone.personaSelected) {
                console.log('coloree--->', this.colori.coloreSelected);
                if (this.colori.coloreSelected == "navy" || this.colori.coloreSelected == 'blue'|| this.colori.coloreSelected == "black")
                    {console.log('entra bitchhh');
                    this.personeDOMChildren[i].style.color = "white";
                    }
                else this.personeDOMChildren[i].style.color = "black";
            
                this.personeDOMChildren[i].style.backgroundColor = this.colori.coloreSelected;
                console.log('personeDomchildren::', this.persone.personeDOM.getElementsByClassName('nome_cognome')[i].style.backgroundColor);
                this.persone.personeDOM.getElementsByClassName('nome_cognome')[i].style.backgroundColor = this.colori.coloreSelected
                
            }
        }
    
    }


    ChangeTheme(){


        var trovato = false;
        for (var i = 0; i < this.persone.persone.length && !trovato; i++) {

            console.log("changetheme", i, this.persone.personaSelected, this.persone.persone[i].fiscale);
            if (this.persone.personaSelected == this.persone.persone[i].fiscale) {
            
            this.persone.personeDOM.children[i].classList.add(temi.themeSelected);
            trovato = true;
        }
        }
    }

    resetBorder() {

        for (var i = 0; i < this.persone.personeDOM.children.length; i++) {

            this.persone.personeDOM.children[i].style.border = '1px solid black'; 
        
        }
    }
    resetBorderColor() {

        for (var i = 1; i < this.colori.colorsDOM.children.length; i++) {

            this.colori.colorsDOM.children[i].style.border = '1px solid black'; 
        
        }
    }

    changeBorder(cognome) {

        var trovato = false;

        for (var i = 0; i < this.persone.personeDOM.children.length && !trovato; i++) {

            if (this.persone.persone[i].cognome == cognome) {

                if(this.colori.coloreSelected=="blue"){

                    this.persone.personeDOM.children[i].style.border = '3px solid red';
                
                }
                else{
                    this.persone.personeDOM.children[i].style.border = '3px solid blue';
                }
                trovato = true;    
            }  

        }
    }
    changeBorderColor(colore) {

        var trovato = false;

        for (var i = 0; i < this.colori.colorsDOM.children.length && !trovato; i++) {
            console.log("coloreeeee: ", colore);
            console.log("bella li: " , this.colori.colori[i].value);

            if (this.colori.colori[i].value == colore) {

                if(this.colori.coloreSelected=="blue"){

                    this.colori.colorsDOM.children[i+1].style.border = '2px solid red';
                }
                else{

                    this.colori.colorsDOM.children[i+1].style.border = '2px solid blue';
                }

                trovato = true;
                    
            }  
        }
    }

    
    changeLetter(lettere){
        
  
        if(this.colori.coloreSelected){ 
            
            lettere.style.color = this.colori.coloreSelected;
            lettere.style.fontSize = '35px';
            lettere.style.fontFamily = 'fantasy';   
        }           
    }
  

    controllo(parola_completa, event){
      
        if(event != 'Backspace' && event != 'Shift' && event != 'CapsLock'){  
            console.log('event', event);
           parola_completa = parola_completa + event;
           console.log('parola_____completa', parola_completa);
           
           
        }
        else{
            var conversione = parola_completa.split('')
            var lunghezza = conversione.length-1;
            
            if(event == 'Backspace'){

                parola_completa = '';

            }
            for(var i=0; i< lunghezza; i++)
                return parola_completa = parola_completa + conversione[i];                          
        }return parola_completa;
    } 
    
    addAvatar(i)
    {
        var nome = document.getElementsByClassName('addNomeInput')[0].value;
   
        var cognome = document.getElementsByClassName('addCognomeInput')[0].value;
    
        var fiscale = document.getElementsByClassName('addFiscaleInput')[0].value;
       
        
        var immagine = document.createElement("img");
        immagine = document.getElementsByClassName('addImmagineInput')[0].value;
        
       
        this.persone.personeDOM.children[i].getElementsByClassName("nome_cognome")[0].innerHTML = nome + ' ' +  cognome;
        this.persone.personeDOM.children[i].getElementsByTagName('img')[0].src = immagine;
        console.log('immagine', this.persone.personeDOM.children[i].getElementsByClassName("nome_cognome"));
    
        }
}               
                
        
        
           
       

    

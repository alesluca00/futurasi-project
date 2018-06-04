

class Azioni {

    constructor(persone, colori, temi) {
        this.persone = persone;
        this.colori = colori; 
        this.temi = temi;
    }

    SelectColor(value) {
        this.colori.coloreSelected = value;
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
           
        for (var i = 0; i < personeDOMChildren.length; i++) {
            if (this.persone.personaSelected && personeDOMChildren[i].fiscale == this.persone.personaSelected){
                     
                var textDiv = personeDOMChildren[i].getElementsByClassName("nome_cognome")[0];
                textDiv.innerHTML = lettera;
                console.log("controllo", this.colori.colori[i]);            }
        }                  
    }

    ChangeColorPersona() {

        
        this.personeDOMChildren = this.persone.personeDOM.children;
   
        
        for (var i = 0; i < this.personeDOMChildren.length; i++) {
        
        
            if (this.personeDOMChildren[i].fiscale == this.persone.personaSelected) {

                if (this.colori.coloreSelected == "Navy" || this.colori.coloreSelected == 'Blue'|| this.colori.coloreSelected == "Black")
                    this.personeDOMChildren[i].style.color = "white";
        
                else this.personeDOMChildren[i].style.color = "Black";
            
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

    changeBorder(cognome) {

        var trovato = false;

        for (var i = 0; i < this.persone.personeDOM.children.length && !trovato; i++) {

            if (this.persone.persone[i].cognome == cognome) {

                this.persone.personeDOM.children[i].style.border = '3px solid blue';
                trovato = true;
                    
            }  

        }
    }
    
    changeLetter(lettere){
        
       
        if(this.colori.coloreSelected && lettere.style.color != this.colori.coloreSelected){

            
                lettere.style.color = colori.coloreSelected;
                lettere.style.fontSize = '35px';
                lettere.style.fontFamily = 'fantasy';
               
            }
                
             else if(lettere.style.color == this.colori.coloreSelected && this.colori.coloreSelected)
             {

                lettere.style.color = 'black';
                
                
            }
        }
    }

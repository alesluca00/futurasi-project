

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

        this.personeDOMChildren = this.persone.personeDOM.children;
        
        for (var i = 0; i < this.personeDOMChildren.length; i++) {
            if(this.persone.personaSelected){
                
                if (this.personeDOMChildren[i].fiscale == this.persone.personaSelected) {

                    console.log("copate", lettera);
                    

                    this.personeDOMChildren[i].setAttribute("nome", lettera);
                   // this.personeDOMChildren[i].nome_cognome.nodeValue=(this.persone.persone[i].nome + ' ' + this.persone.persone[i].nome);

                    

                    //this.personeDOMChildren[i].createTextNode(this.persone.persone[i].nome + ' ' + this.persone.persone[i].cognome);
                    
                    
                    console.log("stampa1", persone.personaSelected);
                    console.log("stampa",this.personeDOMChildren[i]);
                }
            }
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
}
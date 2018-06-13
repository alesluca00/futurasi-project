

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


    ChangeNamePersona() {
    
        var personeDOMChildren = this.persone.personeDOM.children;
      
        var parola = document.getElementById('casellaTesto').value;

        for (var i = 0; i < personeDOMChildren.length; i++) {
            if (this.persone.personaSelected && personeDOMChildren[i].fiscale == this.persone.personaSelected){
                
             
                var textDiv = personeDOMChildren[i].getElementsByClassName("nome_cognome")[0];
                textDiv.innerHTML = parola;
                  }
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

           
            if (this.persone.personaSelected == this.persone.persone[i].fiscale) {
                this.persone.personeDOM.children[i].classList = '';
                this.persone.personeDOM.children[i].classList.add('avatar');

                if(temi.themeSelected != 'default'){
                    var cambio = getElementsByClassName('nome_cognome')[i].innerHTML;
                   cambio.classList.add(temi.themeSelected);           
                    trovato = true;
                }
            }
        }
    }

    resetBorder() {

        for (var i = 0; i < this.persone.personeDOM.children.length; i++) {

            this.persone.personeDOM.children[i].style.boxShadow = "none";
    
        }
    }
    resetBorderColor() {

        for (var i = 1; i < this.colori.colorsDOM.children.length; i++) {
            
            this.colori.colorsDOM.children[i].style.boxShadow = "none";    
        
        }
    }

    changeBorder(cognome) {

        var trovato = false;
        console.log('cognome::',this.persone.persone);
        for (var i = 0; i < this.persone.personeDOM.children.length && !trovato; i++) {

            if (this.persone.persone[i].cognome == cognome) {

                if(this.colori.coloreSelected=="blue"){

                    this.persone.personeDOM.children[i].style.boxShadow = "2px  1px 1px red, -2px -2px 1px red, 2px -2px 1px red, 2px  2px 1px red";
                
                }
                else{
                    this.persone.personeDOM.children[i].style.boxShadow = "2px  1px 1px blue, -2px -2px 1px blue, 2px -2px 1px blue, 2px  2px 1px blue";
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

                    //this.colori.colorsDOM.children[i+1].style.border = '2px solid red';
                    this.colori.colorsDOM.children[i+1].style.boxShadow = "2px  1px 1px red, -2px -2px 1px red, 2px -2px 1px red, 2px  2px 1px red";

                }
                else{

                    //this.colori.colorsDOM.children[i+1].style.border = '2px solid blue';
                    this.colori.colorsDOM.children[i+1].style.boxShadow = "2px  1px 1px blue, -2px -2px 1px blue, 2px -2px 1px blue, 2px  2px 1px blue";

                }

                trovato = true;
                    
            }  
        }
    }

    addAvatar(i){
      
        /////////////////////////////////////////************CREAZIONE NUOVO AVATAR********************************* */
        var predefinito = { 
            nome: "",
            cognome: "",
            fiscale: "",
            img: "",
        }

        console.log('lunghezze array--->', this.persone.persone);
        this.persone.persone.push(predefinito);

        var divPersona_i = document.createElement("div");  
        var avatar_i = document.createElement("img");
        var divNomeCognome_i = document.createElement("div"); 
        avatar_i.src = document.getElementsByClassName('addImmagineInput')[0].value;
        
        
        
       
       var nome = document.getElementsByClassName('addNomeInput')[0].value;
       var cognome = document.getElementsByClassName('addCognomeInput')[0].value;
       var fiscale = document.getElementsByClassName('addFiscaleInput')[0].value;

       if(nome == '' || cognome =='' || fiscale == '' || avatar_i.src == '')
       {
           alert('Devi completare TUTTI i campi');
           
       }
       else{
        console.log('avatar_i', avatar_i);
        divPersona_i.setAttribute("nome", nome);
       
        divPersona_i.setAttribute("fiscale", fiscale);
      
        avatar_i.classList.add('avatar_img');
       
        var bordoNero = document.createElement('div');
        bordoNero.appendChild(avatar_i);
        bordoNero.classList.add('bordoNero');
        var checkBox = document.createElement('input');
        checkBox.classList.add('checkBox');
        checkBox.setAttribute('type', 'checkbox');
        divPersona_i.setAttribute('ondragover','allowDrop(event)');
        divPersona_i.appendChild(bordoNero);
       
       
       this.persone.persone[i].nome = nome;
       this.persone.persone[i].cognome = cognome;
       this.persone.persone[i].fiscale = fiscale;
       this.persone.persone[i].img = avatar_i.src;

       
      
       
        var nomeCognome_i = document.createTextNode(this.persone.persone[i].nome + ' ' + this.persone.persone[i].cognome);
        divPersona_i.appendChild(checkBox); 
        divNomeCognome_i.appendChild(nomeCognome_i);
        divPersona_i.appendChild(bordoNero);
        divPersona_i.appendChild(divNomeCognome_i);
        divPersona_i.classList.add('avatar');
        this.persone.personeDOM.appendChild(divPersona_i);
        console.log('  this.persone.personeDOM',  new Persone(server.getPersone()));
        return this.persone.persone[i]; 

        
       }
    
    }
    deleteAvatar(personaDelete)
    {   
   
        var element = document.getElementsByClassName('avatar')[personaDelete];
        element.parentNode.removeChild(element);
        this.persone.persone.splice(personaDelete, 1);
        
        server.modificaPersona(persone.persone[i]);

    }
     
    addAvatarDelete(i){
      
        /////////////////////////////////////////************CREAZIONE NUOVO AVATAR********************************* */
        var predefinito = { 
            nome: "",
            cognome: "",
            fiscale: "",
            img: "",
        }

      
        var divPersona_i = predefinito;

        var divPersona_i = document.createElement("div");  
        var avatar_i = document.createElement("img");
        var divNomeCognome_i = document.createElement("div"); 
        avatar_i.src = document.getElementsByClassName('avatar_img')[i].src;
        console.log('document.getElementsByClassName(avatar)[i]', document.getElementsByClassName('avatar')[i]);
        
        
       
       var nome = document.getElementsByClassName('avatar')[i].nome;
       var cognome = document.getElementsByClassName('avatar')[i].cognome;
       var fiscale = document.getElementsByClassName('avatar')[i].fiscale;
        avatar_i.setAttribute('draggable', false);
      
       console.log('avatar_i', avatar_i);
       divPersona_i.setAttribute("nome", nome);
       divPersona_i.setAttribute("img", avatar_i);
       divPersona_i.setAttribute("fiscale", fiscale);
      
       avatar_i.classList.add('avatar_img');
      
       var bordoNero = document.createElement('div');
       bordoNero.appendChild(avatar_i);
       bordoNero.classList.add('bordoNero');
        var checkBox = document.createElement('input');
        checkBox.classList.add('checkBox');
        checkBox.setAttribute('type', 'checkbox');
        divPersona_i.setAttribute('draggable', false);
       divPersona_i.appendChild(bordoNero);
       
       
       
      
       
        var nomeCognome_i = document.createTextNode(document.getElementsByClassName('nome_cognome')[i].innerHTML);
        divPersona_i.appendChild(checkBox); 
        divNomeCognome_i.appendChild(nomeCognome_i);
        divPersona_i.appendChild(bordoNero);
        divPersona_i.appendChild(divNomeCognome_i);
        divPersona_i.classList.add('avatar');
        var allocazione = document.getElementById('avatarDelete');
         allocazione.appendChild(divPersona_i);
 
        
       
        

    
       }
    
    }


   
             
                
        
        
           
       

    

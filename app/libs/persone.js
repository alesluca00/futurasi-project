class Persone {

    constructor(persone) {

        this.persone = persone; 

        this.personaSelected = null;

        this.personeDOM = document.getElementById('persone');

    }



    toView() {
        console.log('this.personeDOM::', this.personeDOM);
        for (var i = 0; i < this.persone.length; i++) {

            var divPersona_i = document.createElement("div");
            var divNomeCognome_i = document.createElement("div");
            var nomeCognome_i = document.createTextNode(this.persone[i].nome + ' ' + this.persone[i].cognome);
            divNomeCognome_i.classList.add("nome_cognome");
            divNomeCognome_i.appendChild(nomeCognome_i);
            var checkBox = document.createElement('input');
            checkBox.classList.add('checkBox');
            checkBox.setAttribute('type', 'checkbox');
            divPersona_i.draggable = true;
            var avatar_i = document.createElement("img");
            var bordoNero = document.createElement('div');
            avatar_i.classList.add('avatar_img');
            
            avatar_i.src = this.persone[i].img;
            bordoNero.appendChild(avatar_i);
            bordoNero.classList.add('bordoNero');
            
            divPersona_i.appendChild(checkBox);
            divPersona_i.appendChild(bordoNero);
            divPersona_i.appendChild(divNomeCognome_i);
            divPersona_i.setAttribute("fiscale", this.persone[i].fiscale);
            divPersona_i.setAttribute("nome", this.persone[i].nome);
         
            divPersona_i.setAttribute('ondragover','allowDrop(event)');
           console.log('personaaaaaaaaaaaaaaaaaa', divPersona_i);
            divPersona_i.classList.add('avatar');
            divPersona_i.fiscale = this.persone[i].fiscale;
            
           

            

            this.personeDOM.appendChild(divPersona_i);
        
        }

    }
    getDomPersonaById(id) {

        var domPeople = null;
        for (var i = 0; i < this.personeDOM.children.length; i++) {
            if (id == this.personeDOM.children[i].getAttribute("nome")) {
                domPeople = this.personeDOM.children[i];
                console.log("PERSONA: ", domPeople);
                
            }
        }
        return domPeople;
    }
       
}
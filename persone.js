


class Persone {

    constructor(persone) {

        this.persone = persone; 

        this.personaSelected = null;

        this.personeDOM = document.getElementById('persone');
    }



    toView() {

        for (var i = 0; i < this.persone.length; i++) {

            var divPersona_i = document.createElement("div");

            var nome_cognome = document.createTextNode(this.persone[i].nome + ' ' + this.persone[i].cognome);

            var avatar = document.createElement("img");

            avatar.src = this.persone[i].img;

            divPersona_i.appendChild(avatar);
            divPersona_i.appendChild(nome_cognome);
            divPersona_i.setAttribute("fiscale", this.persone[i].fiscale);
            divPersona_i.setAttribute("nome", this.persone[i].nome);

            divPersona_i.classList.add(this.persone[i].style.class);
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
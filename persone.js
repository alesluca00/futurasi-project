


class Persone {

    constructor() {

        this.persone = [{
            nome: "Francesco",
            cognome: "Ferrante",
            fiscale: "AAB",
            img: "img/ferrante.jpg",
            style: {
        
                class:"avatar",
                toppp: '100px'
            }
            }, {
            nome: "Franco",
            cognome: "Cason",
            fiscale: "AAC",
            img: "img/cason.png",
        
            style: {
                class:"avatar",
                toppp: '200px'
            }
            }, {
            nome: "Luigi",
            cognome: "Rossi",
            fiscale: "QAB",
            img: "img/rossi.jpg",
        
            style: {
            class:"avatar",
            toppp: "300px"
            }
            }, {
            nome: "Anna",
            cognome: "Bianchi",
            fiscale: "ABB",
            img: "img/bianchi.jpg",
        
            style: {
                class: "avatar",
                toppp: '400px'
            }
            },
            {
            nome: "Carla",
            cognome: "Neri",
            fiscale: "ZBB",
            img: "img/neri.jpeg",
        
            style: {
                class: "avatar",
                toppp: '400px'
            }
            },
            {
            nome: "Mario",
            cognome: "Verdi",
            fiscale: "QWB",
            img: "img/verdi.jpeg",
        
            style: {
                class: "avatar",
                toppp: '400px'
            }
            },
            {
            nome: "Sara",
            cognome: "Marroni",
            fiscale: "MBB",
            img: "img/marroni.jpg",
        
            style: {
                class: "avatar",
                toppp: '400px'
            }
            },
            {
            nome: "Guido",
            cognome: "Piano",
            fiscale: "PBB",
            img: "img/piano.jpg",
            style: {
                class: "avatar",
                toppp: '400px'
            }
            },{
                nome: "Felice",
                cognome: "Severo",
                fiscale: "SBB",
                img: "img/severo.jpg",
                style: {
                    class: "avatar",
                    toppp: '400px'
                } 
        }];

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
            divPersona_i.classList.add(this.persone[i].style.class);
            divPersona_i.fiscale = this.persone[i].fiscale;
            this.personeDOM.appendChild(divPersona_i);
        
        }

    }

       
}
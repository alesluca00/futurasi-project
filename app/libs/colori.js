
class Colori {

    constructor(colori) {

        this.colori = colori;

        this.coloreSelected = null;

        this.colorsDOM = document.getElementById('colors');

    }

    toView() {

        for (var i = 0; i < this.colori.length; i++) {
            var divcolor_i = document.createElement("div");
            
            divcolor_i.setAttribute("value", this.colori[i].value);
            
            divcolor_i.style.backgroundColor = this.colori[i].value;
            divcolor_i.value = this.colori[i].value;

          

    divcolor_i.classList.add('elem_tabella_colori');
            divcolor_i.setAttribute('draggable', true);
            
   
            console.log('div color . value', divcolor_i.value);
            this.colorsDOM.appendChild(divcolor_i);
            console.log('this.colorsDOM.appendChild(divcolor_i);', this.colorsDOM.appendChild(divcolor_i));
        }
    
    }

    getDomColorById(id) {
        var trovato = false;
        var domColor = null;
        for (var i = 0; i < this.colorsDOM.children.length && !trovato; i++) {
            if (id == this.colorsDOM.children[i].getAttribute("value")) {
                domColor = this.colorsDOM.children[i];
                trovato = true;
                


            }
        }
        return domColor;
    }

}
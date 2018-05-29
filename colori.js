
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
            divcolor_i.style.color = this.colori[i].style.color;
            divcolor_i.classList.add(this.colori[i].style.class);
            this.colorsDOM.appendChild(divcolor_i);
        }
    
    }

    getDomColorById(id) {
        var trovato = false;
        var domColor = null;
        for (var i = 0; i < this.colorsDOM.children.length; i++) {
            if (id == this.colorsDOM.children[i].getAttribute("value")) {
                domColor = this.colorsDOM.children[i];
            }
        }
        return domColor;
    }

}
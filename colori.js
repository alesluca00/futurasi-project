
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
            var dragIcon = document.createElement('img');
            dragIcon.src = 'https://cdn0.iconfinder.com/data/icons/hands-pt-3/100/051_-_drag-512.png';
            divcolor_i.setAttribute('dragIcon', dragIcon);

            divcolor_i.style.backgroundColor = this.colori[i].value;
            divcolor_i.value = this.colori[i].value;

            divcolor_i.style.color = this.colori[i].style.color;
            divcolor_i.classList.add(this.colori[i].style.class);
            divcolor_i.setAttribute('draggable', true);
            divcolor_i.setAttribute('ondragmove', dragIcon);
            divcolor_i.setAttribute('ondragstart', 'drag(event)');
            divcolor_i.setAttribute('data-backgroundColor', this.colori[i].value);
            console.log('drag & drop::', divcolor_i);

            this.colorsDOM.appendChild(divcolor_i);

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
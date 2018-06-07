
class DragAndDrop {

    constructor(persone, colori, temi) {
        this.persone = persone;
        this.colori = colori; 
        this.temi = temi;
    }

    allowDrop(ev) {
        ev.preventDefault();
    }
    dragstart(ev)
    {
        alert(ev);
    }

   
    
}

class DragAndDrop {

    constructor(persone, colori, temi) {
        this.persone = persone;
        this.colori = colori; 
        this.temi = temi;
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(colore) {
        console.log('evento::::', colore);
        colore.dataTransfert.setData("text", colore.target.id);
    }
    
    
}
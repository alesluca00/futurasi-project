
class DragandDrop {

    constructor(persone, colori, temi) {
        this.persone = persone;
        this.colori = colori; 
        this.temi = temi;
    }
  

    
    dragStart(ev)
    {
        alert(ev);
        ev.dataTransfert.effectAllowed = 'copy';
        ev.dataTransfert.dropEffect = 'copy';
        alert(ev.target);
        
        ev.dataTransfert.setData('text', ev.target.getElementsByClassName('elem_tabella_colori').color);
        

    }

   
    
}
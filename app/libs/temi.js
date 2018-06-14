

class Temi{

    constructor(temi)
    {
        this.temi = temi;
 
        this.themeSelected = null;
    
        this.themeDOM = document.getElementById('temi');
    }

  toView(){

    for(var i=0; i < this.temi.length; i++)
    {
    
        var divtheme_i = document.createElement("div");

        divtheme_i.setAttribute("value", this.temi[i].nome);

        divtheme_i.classList.add(this.temi[i].style.class);
        divtheme_i.value = this.temi[i].nome;
        divtheme_i.setAttribute('draggable', true);
    
        var tema_scelto = document.createTextNode(this.temi[i].nome);
        divtheme_i.appendChild(tema_scelto);
        this.themeDOM.appendChild(divtheme_i);

    }
  }

    getDomTemaById(id) {
        var trovato = false;
        var domTheme = null;
        for (var i = 0; i < this.themeDOM.children.length && !trovato; i++) {
            if (id == this.themeDOM.children[i].getAttribute("value")) {
                domTheme = this.themeDOM.children[i];
                console.log("TEMA: ", domTheme);
                trovato = true;

            }
        }
        return domTheme;
    }

}
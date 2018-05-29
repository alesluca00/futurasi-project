

class Temi{

    constructor()
    {

        this.temi = [{
            nome: 'default',
            style: {
    
                    class: 'defaultIcon'
    
                }
        },{
            nome: 'firstTheme',
            style: {
    
                    class: 'firstThemeIcon'
    
                    }
        },{
            nome: 'secondTheme',
            style: {
    
                    class: 'secondThemeIcon'
    
                    }
        }];
  
 
 
        this.themeSelected = null;
    
        this.themeDOM = document.getElementById('temi');
  }

  toView(){
      
    for(var i=0; i < this.temi.length; i++)
    {
    
        var divtheme_i = document.createElement("div");

        divtheme_i.setAttribute("value", this.temi[i].nome)

        divtheme_i.classList.add(this.temi[i].style.class);
        divtheme_i.value = this.temi[i].nome;
    
        var tema_scelto = document.createTextNode(this.temi[i].nome);
        divtheme_i.appendChild(tema_scelto);
        this.themeDOM.appendChild(divtheme_i);


    }
  }
}
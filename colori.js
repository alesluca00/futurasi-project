
class Colori {

    constructor() {

        this.colori = [{

       
            value: "Green",
            style: {
                class: "elem_tabella_colori"
            }
        }, {
            value: "Red",
            style: {
                class: "elem_tabella_colori"
            }
        }, {
            value: "Yellow",
            style: {
                class: "elem_tabella_colori"
            }
        }, {
            value: "Orange",
            style: {
                class: "elem_tabella_colori"
            }
        }, {
            value: "Brown",
            style: {
                class: "elem_tabella_colori"
            }
        }, {
            value: "Violet",
            style: {
                class: "elem_tabella_colori"
            }
        }, {
            value: "Pink",
            style: {
                class: "elem_tabella_colori"
            }
        }, {
            value: "Blue",
            style: {
                class: "elem_tabella_colori"
            }
        }, {
            value: "Salmon",
            style: {
                class: "elem_tabella_colori"
               
            }
        }, {
            value: "Lime",
            style: {
                class: "elem_tabella_colori"
               
            }
        }, {
            value: "Beige",
            style: {
                class: "elem_tabella_colori"
              
            }
        }, {
            value: "Grey",
            style: {
                class: "elem_tabella_colori"
               
            }
        }, {
            value: "Navy",
            style: {
                class: "elem_tabella_colori"
            }
        }, {
            value: "Silver",
            style: {
                class: "elem_tabella_colori"
            
            }
        }, {
            value: "Gold",
            name: "Gold",
            style: {
                class: "elem_tabella_colori"
              
            }
        }, {
            value: "Aqua",
            style: {
                class: "elem_tabella_colori"
        
            }
        }, {
            value: "Peru",
            style: {
                class: "elem_tabella_colori"
                
            }
        }, {
            value: "Black",
            style: {
                class: "elem_tabella_colori"
        
            }
        },{
            value: "Teal",
            style: {
                class: "elem_tabella_colori"
        
            }
        },{
            value: "White",
            style: {
                class: "elem_tabella_colori"              
        
            }
        }
        ];

        this.coloreSelected = null;

        this.colorsDOM = document.getElementById('colors');

    }

toView()
{

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

}
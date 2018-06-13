class Server {

    getPersone() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "http://localhost:4000/persone", false ); // false for synchronous request
        xmlHttp.send( null );
        return JSON.parse(xmlHttp.response);
    }

    getColori() {
        return [{
                value: "green",
                style: {
                    class: "elem_tabella_colori"
                }
            }, {
                value: "red",
                style: {
                    class: "elem_tabella_colori"
                }
            }, {
                value: "yellow",
                style: {
                    class: "elem_tabella_colori"
                }
            }, {
                value: "orange",
                style: {
                    class: "elem_tabella_colori"
                }
            }, {
                value: "brown",
                style: {
                    class: "elem_tabella_colori"
                }
            }, {
                value: "violet",
                style: {
                    class: "elem_tabella_colori"
                }
            }, {
                value: "pink",
                style: {
                    class: "elem_tabella_colori"
                }
            }, {
                value: "blue",
                style: {
                    class: "elem_tabella_colori"
                }
            }, {
                value: "salmon",
                style: {
                    class: "elem_tabella_colori"
                
                }
            }, {
                value: "lime",
                style: {
                    class: "elem_tabella_colori"
                
                }
            }, {
                value: "beige",
                style: {
                    class: "elem_tabella_colori"
                
                }
            }, {
                value: "grey",
                style: {
                    class: "elem_tabella_colori"
                
                }
            }, {
                value: "navy",
                style: {
                    class: "elem_tabella_colori"
                }
            }, {
                value: "silver",
                style: {
                    class: "elem_tabella_colori"
                
                }
            }, {
                value: "gold",
                name: "Gold",
                style: {
                    class: "elem_tabella_colori"
                
                }
            }, {
                value: "aqua",
                style: {
                    class: "elem_tabella_colori"
            
                }
            }, {
                value: "peru",
                style: {
                    class: "elem_tabella_colori"
                    
                }
            }, {
                value: "black",
                style: {
                    class: "elem_tabella_colori"
            
                }
            },{
                value: "teal",
                style: {
                    class: "elem_tabella_colori"
            
                }
            },{
                value: "white",
                style: {
                    class: "elem_tabella_colori"              
            
                }
            },
        ];

    }
    getTemi(){
        return [
            {
                nome: 'default',
                style: {
        
                    class: 'defaultIcon'
        
                }
            },
            {
                nome: 'firstTheme',
                style: {
        
                    class: 'firstThemeIcon'
                }
            },
            {
                nome: 'secondTheme',
                style: {
        
                    class: 'secondThemeIcon'
                }
            }
        ];
    }
}
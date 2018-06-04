class Server {

    getPersone() {
        return [{
                nome: "Francesco",
                cognome: "Ferrante",
                fiscale: "AAB",
                img: "img/ferrante.jpg",
                style: {
            
                    class:"avatar",
                    backgroundColor: "white",
                }
            }, {
                nome: "Franco",
                cognome: "Cason",
                fiscale: "AAC",
                img: "img/cason.png",
                style: {
                    class:"avatar",
                }
            }, {
                nome: "Luigi",
                cognome: "Rossi",
                fiscale: "QAB",
                img: "img/rossi.jpg",
                style: {
                    class:"avatar",
                }
            }, {
                nome: "Anna",
                cognome: "Bianchi",
                fiscale: "ABB",
                img: "img/bianchi.jpg",
                style: {
                    class: "avatar",
                }
            },
            {
                nome: "Carla",
                cognome: "Neri",
                fiscale: "ZBB",
                img: "img/neri.jpeg",
            
                style: {
                    class: "avatar",
            }
            },
            {
                nome: "Mario",
                cognome: "Verdi",
                fiscale: "QWB",
                img: "img/verdi.jpeg",
                style: {
                    class: "avatar",
                }
            },
            {
                nome: "Sara",
                cognome: "Marroni",
                fiscale: "MBB",
                img: "img/marroni.jpg",
            
                style: {
                    class: "avatar",
                }
            },
            {
                nome: "Guido",
                cognome: "Piano",
                fiscale: "PBB",
                img: "img/piano.jpg",
                style: {
                    class: "avatar",
                }
            },{
                nome: "Felice",
                cognome: "Severo",
                fiscale: "SBB",
                img: "img/severo.jpg",
                style: {
                    class: "avatar",
                } 
            },{
                nome: "Guido",
                cognome: "Collauto",
                fiscale: "SBC",
                img: "img/collauto.jpg",
                style: {
                    class: "avatar",
                } 
            },{
                nome: "Carla",
                cognome: "Rizzoli",
                fiscale: "SBT",
                img: "img/rizzoli.jpg",
                style: {
                    class: "avatar",
                }
            },{

                nome: "Daniel",
                cognome: "Barazza",
                fiscale: "SBP",
                img: "img/barazza.jpg",
                style: {
                    class: "avatar",

            }
            
}];
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
            }
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
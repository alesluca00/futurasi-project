class Server {

    getPersone() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "http://localhost:9000/persone", false ); // false for synchronous request
        xmlHttp.send( null );
        return JSON.parse(xmlHttp.response);
    }

    modificaPersona(persona) {

        var stringaQuery = "nome=" + persona.nome + "&cognome=" + persona.cognome +"&fiscale=" + persona.fiscale + "&img=" + persona.img;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "http://localhost:9000/modifica_persona/?" + stringaQuery, false ); // false for synchronous request
        xmlHttp.send( null);
        console.log("modificaPersona::res", xmlHttp.response);
        return JSON.parse(xmlHttp.response);


    }

    inserisci(persona){

        var stringaQuery = "nome=" + persona.nome + "&cognome=" + persona.cognome +"&fiscale=" + persona.fiscale + "&img=" + persona.img;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "http://localhost:9000/modifica_persona/?" + stringaQuery, false ); // false for synchronous request
        xmlHttp.send( null);
        console.log("modificaPersona::res", xmlHttp.response);
        return JSON.parse(xmlHttp.response);


    
    }


    getColori() {
        
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "http://localhost:9000/colori", false ); // false for synchronous request
        xmlHttp.send( null );
        console.log('xmlHttp::', xmlHttp.response );
        return JSON.parse(xmlHttp.response);      

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
class Server {



    constructor() {
        //this.http_address = "https://futurasi-server.herokuapp.com";
        this.http_address = "http://localhost:9000";
    }

    getPersone() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", this.http_address +  "/persone", false ); // false for synchronous request
        xmlHttp.send( null );
        return JSON.parse(xmlHttp.response);
    }

    eliminaPersona(persona) {

        var stringaQuery = "fiscale=" + persona.fiscale;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET",  this.http_address + "/elimina_persona/?" + stringaQuery, false ); // false for synchronous request
        xmlHttp.send( null);
        return xmlHttp.response;

    }

    modificaPersona(persona) {
        
        var stringaQuery = "nome=" + persona.nome + "&cognome=" + persona.cognome +"&fiscale=" + persona.fiscale + "&img=" + persona.img + "&descrizione=" + persona.descrizione;
  
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET",  this.http_address + "/modifica_persona/?" + stringaQuery, false ); // false for synchronous request
        xmlHttp.send( null);
        return JSON.parse(xmlHttp.response);


    }

 
    addDescription(persona){

        var stringaQuery = "nome=" + persona.nome + "&cognome=" + persona.cognome +"&fiscale=" + persona.fiscale + "&img=" + persona.img + "&descrizione" + persona.descrizione;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET",  this.http_address + "/descrizione_persona/?" + stringaQuery, false ); // false for synchronous request
        xmlHttp.send( null);
        return JSON.parse(xmlHttp.response);
    }

  

    inserisci(persona){

        var stringaQuery = "nome=" + persona.nome + "&cognome=" + persona.cognome +"&fiscale=" + persona.fiscale + "&img=" + persona.img + "&descrizione" + persona.descrizione;
        console.log("modificaPersona::res", stringaQuery );

        var xmlHttp = new XMLHttpRequest();
        console.log("modificaPersona::res", XMLHttpRequest );

        xmlHttp.open( "GET", this.http_address + "/inserisci_persona/?" + stringaQuery, false ); // false for synchronous request
        xmlHttp.send( null);
        return JSON.parse(xmlHttp.response);


    
    }
    

    getColori() {
        
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", this.http_address + "/colori", false ); // false for synchronous request
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
class Server {

    getPersone() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "http://localhost:9000/persone", false ); // false for synchronous request
        xmlHttp.send( null );
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


var server = new Server();
var prova = window.location.search.substring(1);

var array = prova.split('=');

var fiscaleSelected = array[1].toString();
/*var persona = server.getPersonaByFiscale(personaa);
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "http://localhost:9000/persone", false ); // false for synchronous request
xmlHttp.send( null );
var prova = JSON.parse(xmlHttp.response);
console.log('prova::', persona);*/

  

var persone = server.getPersone();
var personaSelected;
    


        
    

for( var i = 0; i < persone.length; i++)
{
 
    
    if(persone[i].fiscale == fiscaleSelected){
        console.log('persone', persone[i]);
        
        
        
        personaSelected = persone[i];
        var divPersona_i = document.createElement("div");
        var divNomeCognome_i = document.createElement("div");
        var nomeCognome_i = document.createTextNode(persone[i].nome + ' ' + persone[i].cognome);
        divNomeCognome_i.classList.add("nome_cognome");
        divPersona_i.setAttribute("fiscale", persone[i].fiscale);
        divPersona_i.setAttribute("nome", persone[i].nome);
        divNomeCognome_i.appendChild(nomeCognome_i);
        var checkBox = document.createElement('input');
        checkBox.classList.add('checkBox');
        checkBox.setAttribute('type', 'checkbox');
        divPersona_i.draggable = true;
        var avatar_i = document.createElement("img");
        var bordoNero = document.createElement('div');
        avatar_i.classList.add('avatar_img');
        
        avatar_i.src = persone[i].img;
        bordoNero.appendChild(avatar_i);
        bordoNero.classList.add('bordoNero');
        divPersona_i.fiscale = persone[i].fiscale;
        divPersona_i.appendChild(checkBox);
        divPersona_i.appendChild(bordoNero);
        divPersona_i.appendChild(divNomeCognome_i);
        
    
        divPersona_i.setAttribute('ondragover','allowDrop(event)');
        //console.log('divpersona::', divPersona_i);
    
        divPersona_i.classList.add('avatar');
        //console.log('provic', document.body);
        var allocazione = document.getElementById('persona_visualizzata');
        allocazione.appendChild(divPersona_i);
    }
}


    var addDescription = document.getElementsByClassName("addDescription")[0];
    console.log('ciao',addDescription);
    console.log(document);

    addDescription.addEventListener("mousedown", function(){

        
    
        addDescription.style.backgroundColor = "red";
        var contenutoTextArea = document.getElementById("testo").value;   //sistemare
        
        var personaDOM = document.getElementsByClassName('avatar')[0];
        personaDOM.setAttribute('descrizione',contenutoTextArea );

        personaSelected.descrizione = contenutoTextArea;
        console.log('BB',personaSelected);
            var nome = personaSelected.nome;
            console.log('nomeeeeeeeeee::', nome);
            var cognome = personaSelected.cognome;
            var fiscale = personaSelected.fiscale;
            var img = personaSelected.img;
            var descrizione = personaSelected.descrizione;
            server.modificaPersona(personaSelected);
            console.log('BBB',personaSelected);
            location.reload();

         
    });

    addDescription.addEventListener("mouseup", function(){

        addDescription.style.backgroundColor = "white"; 
        
    });

    document.getElementsByClassName('viewDescription')[0].innerHTML =  personaSelected.descrizione;





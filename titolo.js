

class Titolo {

    constructor()
    {
       this.titolo = ["I", "m", "p","o","s","t","a","z","i","o","n","i"];
       this.titoloDOM = document.getElementById('titolo');

    }

  toView(){

   for (var i = 0; i < this.titolo.length; i++) {
    var lettera = document.createElement('span');
    lettera.classList.add("lettera")
    lettera.setAttribute('pos', i);
    lettera.innerHTML = this.titolo[i];
    this.titoloDOM.appendChild(lettera);
   }
  }


}
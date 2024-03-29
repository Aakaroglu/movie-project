function Storage (){

}

Storage.prototype.addFilmToStorage = function(newFilm) {
 let films = this.getFilmsFromStorage();

 films.push(newFilm);

//şimdi arraye string değil obje yapmış olduk

localStorage.setItem("films",JSON.stringify(films));

}


Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if(localStorage.getItem("films") === null) {
        films = [];
    }

    else {
        films = JSON.parse(localStorage.getItem("films")); //eğer değer girilmişse filmlerimizi arraye çevirmiş olduk ve öyle kaydetmiş olduk

    }

    return films;
}

Storage.prototype.deleteFilmFromStorage = function (filmTitle) {
    let films = this.getFilmsFromStorage();

    films.forEach(function(film,index) {
        if (film.title === filmTitle){
            //Arrayden silmek için splice
            films.splice(index,1);
        }
    });

    localStorage.setItem("films", JSON.stringify(films));
    
}

Storage.prototype.clearAllFilmsFromStorage = function() {
    localStorage.removeItem("films");
}
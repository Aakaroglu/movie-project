function UI(){

}

UI.prototype.addFilmToUI = function(newFilm) {

    // <tr>
    //      <td><img src="" class="img-fluid img-thumbnail"></td>
    //      <td></td>
    //      <td></td>
    //      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    // </tr>

    const filmList = document.getElementById("films");

    filmList.innerHTML += `
    <tr>
         <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
         <td>${newFilm.title}</td>
         <td>${newFilm.director}</td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    `;
}

UI.prototype.clearInput = function(element1,element2,element3){
    element1.value="";
    element2.value="";
    element3.value="";
}

UI.prototype.displayMessages = function(message,type) {
    const cardBody = document.querySelectorAll(".card-body")[0]; //ilk cardBodyi almak istediğimiz için 0. indexi aldık çünkü hata mesajının görünmesini istediğimiz yer tam olarak orası
    //Alert divini oluşturalım

    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div); //child olarak eklemek istedik

    // setTimeout(() => {  //1 saniye sonra bu alert mesajımız silinmiş olacak
    //     div.remove();
    // }, 2000);

    setTimeout(function () { // silinip kaybolan bir animasyon yaptım

        div.style.opacity = 1;
        div.style.transition = 'opacity 0.25s ease-in-out'; // akışkan bir görüntü sağlıyor
        setTimeout(() => {
            
            div.style.opacity = 0;

            setTimeout(() => {
                div.remove();
            }, 500);
        }, 750);
     
    }, 1000);

}


UI.prototype.loadAllFilms = function(films){

    const filmList = document.getElementById("films");

    films.forEach(function(film) {
        filmList.innerHTML += ` <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
   </tr>`;
    });


}

UI.prototype.deleteFilmFromUI = function(element) {
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function() {
    const filmList = document.getElementById("films");

    // filmList.innerHTML= "";

    //tbodynin içinde child kalmayana kadar silebiliriz

    while(filmList.firstElementChild !== null) { //Child olduğu sürece

        filmList.firstElementChild.remove();
        ui.displayMessages("Silme işlemi başarıyla gerçekleşti","success");

        
    }
    if(filmList.firstElementChild === null) {
        ui.displayMessages("Silinecek öğe bulunamamıştır","danger");

    }

    

}
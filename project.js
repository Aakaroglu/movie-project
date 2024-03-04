const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//UI objesini başlatma

const ui = new UI();

//Storage objesi oluşturma
const storage = new Storage();

//Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url==="") {
        //HATA
        ui.displayMessages("Tüm alanları doldurun...","danger");
    }
    else{

        //Yeni Film
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); //Arayüze film ekleme
        storage.addFilmToStorage(newFilm); //Storageye film ekleme
        ui.displayMessages("Film başarıyla eklendi...","success");
    }

    ui.clearInput(titleElement,urlElement,directorElement);

    e.preventDefault();
}

function deleteFilm(e){

    //console.log(e.target);  //consolede görmek için deneme

    if(e.target.id==="delete-film"){
        ui.deleteFilmFromUI(e.target);
    //Burada filminin ismini bulup ordan silmeye yönlendirmeye çalıştık consoleye yazdığımız kısım da bu yaptığımız işlemi kontrol etmemizi sağlıyor
    //     console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
     
    //Burada da işlemimizi yapıyoruz
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

        ui.displayMessages("Silme işlemi başarıyla gerçekleşti","success");

}
}

function clearAllFilms(){

    if(confirm("Emin misiniz ?"))  {
       
        ui.clearAllFilmsFromUI();
         
        storage.clearAllFilmsFromStorage();


    }
    
}
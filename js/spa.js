// window.onload = function() {
// si queremos tener el scrip del html en el head
// eso hace que se espere la ejecución hasta que este renderizado el html

window.onload = function() {

    const xhr = new XMLHttpRequest()

    const contenedor = document.querySelector("#contenedor")
    
    function procesaRespuesta() {
        if (this.readyState === 4 && this.status === 200) {
            // .parse coge la respuesta y la convierte en un oabjeto de javascript
            const respuesta = JSON.parse(this.responseText)
            const resultados = respuesta.Search
            
            contenedor.innerHTML = ""
            let innerHTML = ""
            for (let i = 0; i < resultados.length; i++) {
               const pelicula = resultados[i]

               innerHTML = innerHTML + `<article class="pelicula">
                    <img src="${pelicula.Poster}" alt="Poster de ${pelicula.Title}">
                    <p class="titulo">${pelicula.Title}</p>
                </article>` 
            }
            contenedor.innerHTML = innerHTML
    
        } else {
            alert("Algo no ha ido bien")
        }
    }
    
    function busca(ev) {
        ev.preventDefault() // para que el form no de la respuesta por defecto del form, no cambia la direeción en la barra de direcciones
        const cuadro_entrada = document.querySelector("#criterios")  //Obtener el criterio de búsqueda .value específico de los input
        const cadena_de_busqueda = cuadro_entrada.value
    
        const url = `https://www.omdbapi.com/?apikey=d428236e&s=${cadena_de_busqueda}` //Hacer la llamada a la API
        xhr.open('GET', url, true)
        // onload es quien indica quién se ocupa de las cosas
        xhr.onload = procesaRespuesta 
        xhr.send()
    }
    
    const btnBuscar = document.querySelector("#btn-buscar")
    btnBuscar.addEventListener("click", busca)
    

    // btnBuscar.addEventListener("click", function(ev) {
    //     alert("click directo")
    // })
    
    // btnBuscar.addEventListener("click", (ev) => {
    //     alert("click arrow function")
    // })
  
    
}
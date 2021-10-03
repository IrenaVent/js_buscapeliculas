window.onload = function() {
    const xhr = new XMLHttpRequest()


    const contenedor = document.querySelector("#contenedor")
    
    function procesaRespuesta() {
        if (this.readyState === 4 && this.status === 200) {
            const respuesta = JSON.parse(this.responseText)
            contenedor.innerHTML = ""
            const resultados = respuesta.Search
    
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
        ev.preventDefault() // parar la respuesta por defecto del form
    
        const cuadro_entrada = document.querySelector("#criterios")  //Obtener el criterio de búsqueda
        const cadena_de_busqueda = cuadro_entrada.value
    
        const url = `https://www.omdbapi.com/?apikey=d428236e=${cadena_de_busqueda}` //Hacer la llamada a la API
        xhr.open('GET', url, true)
        xhr.onload = procesaRespuesta
        xhr.send()
    
    }
    
    const btnBuscar = document.querySelector("#btn-buscar")
    
    btnBuscar.addEventListener("click", busca)
    /*
    btnBuscar.addEventListener("click", function(ev) {
        alert("click directo")
    })
    
    btnBuscar.addEventListener("click", (ev) => {
        alert("click arrow function")
    })
    */
    
}
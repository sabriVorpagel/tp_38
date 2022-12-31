window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    /*let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }*/

    body.classList.add('fondoMoviesList');
    
    let logo = document.querySelector('figure');
    let oscuro = logo.addEventListener('mouseover', (event) => {
        body.style.backgroundColor = '#7f7f7f'
        enlaces.forEach(enlace => {
            enlace.style.color = 'white'
        });

    } )

    let claro = logo.addEventListener('mouseout', (event) => {
        body.style.backgroundColor = 'white'
        enlaces.forEach(enlace => {
            enlace.style.color = 'teal'
        });
    } )
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';


}
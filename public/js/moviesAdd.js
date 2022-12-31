window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    let inputTitulo = document.querySelector('#titulo')

    titulo.onmouseout = function(){
        titulo.classList.add ("color");
    }


        let estadoSecreto = 0;
        let cero;
        let uno;
        let dos;
        let tres;
        let cuatro;
        let cinco;
        let seis;
        let respuesta;
        inputTitulo.addEventListener("keypress", (event) => {
            let eventKey = event.key
            let secreto=[];
            switch (estadoSecreto) {
            case 0:
                respuesta = ++estadoSecreto
                cero = "s"
                if(respuesta == 1 && eventKey == cero){
                    secreto.push(cero)
                    console.log(secreto)
                }
                console.log(estadoSecreto);
                break;
            case 1:
                respuesta = ++estadoSecreto
                
                uno = "e"
                if(respuesta == 2 && eventKey == uno){
                    secreto.push(cero + uno)
                    console.log(secreto)
                }
                
                console.log(estadoSecreto);
                break;
            case 2:
                respuesta = ++estadoSecreto
                
                dos = "c"
                if(respuesta == 3 && eventKey == dos){
                
                secreto.push(cero + uno + dos);
                console.log(secreto)
                }
                console.log(estadoSecreto);
                break;
            case 3:
            respuesta = ++estadoSecreto
            
            tres = "r"
            if(respuesta == 4 && eventKey == tres){
                secreto.push(cero + uno + dos + tres);
                console.log(secreto)
            }  
                console.log(estadoSecreto);
                break;
            case 4:
                respuesta = ++estadoSecreto
                
                cuatro = "e"
                if(respuesta == 5 && eventKey == cuatro){
                secreto.push(cero + uno + dos + tres + cuatro)
                console.log(secreto)
                }
            
                console.log(estadoSecreto);
                break;
            case 5:
                respuesta = ++estadoSecreto
                
                cinco = "t"
                if(respuesta == 6 && eventKey == cinco){
                secreto.push(cero + uno + dos + tres + cuatro + cinco);
                console.log(secreto);
                }
                console.log(estadoSecreto)
                break;
            case 6:
    
                respuesta = ++estadoSecreto
                
                seis = "o"
            
                if(respuesta == 7 && eventKey == seis){
                secreto.push(cero + uno + dos + tres + cuatro + cinco + seis);
                console.log(secreto)
                }
                console.log(estadoSecreto);
                break;
            default:
            estadoSecreto = 0;
                break;
            }
            if(respuesta == 7 && secreto == 'secreto'){
            return alert("SECRETO MAGICO")
        } ;
        }
        );
}
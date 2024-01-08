function toggleMode(){
    const html = document.documentElement 
    // document é a representação do documento (pagina) em formato de JS
    // Sempre que colocar um . (ponto) estou acessando propriedades e funcionalidades
    // Entao dentro do documento . eu acesso o meu html atraves do documentElement


    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else{
    //     html.classList.add('light')
    // }
    html.classList.toggle('light') //O toggle faz sozinho a condição acima (se tiver o ligth ele tira e se nao tiver o light ele coloca)

    //pegar a tag img
    const img = document.querySelector("#profile img") //query é pesquisa selector pelo seletor
    //substituir a img
    if(html.classList.contains('light')){
    //se tiver light mode, adc a img light
    img.setAttribute('src', 'assets/avatar-light.png') //P ajustar/modificar um atributo (primeiro o atributo que quer mudar, e dps o novo valor que eu quero)
    } else{
    //se tiver sem light mode, manter a img normal
    img.setAttribute('src', 'assets/avatar.png')
    }
}


/* No JS tudo é objeto
Atributos são as prorpiedades de um objeto
Metodos sao as funcionalidades de um objeto 

criando um objeto
const person = {
    age:18,
    drive: function() {}
}

usando um objeto
person.drive()*/

// DESAFIO= Setar o atributo ALT com um novo texto (um pra qnd for light e outro pra qnd for normal)



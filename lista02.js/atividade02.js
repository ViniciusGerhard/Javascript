const elemetosFake = 
[
    {
    tagName: 'DIV',
    style: {color: 'blue', display: 'flex'},
    classList: ['container', 'active']
    },
    {
    tagName:'H1',
    style: {color: 'red', display: 'block'},
    classList:['title']
    },
    {
    tagName:'BUTTON',
    style: {color: 'white', display: 'inline-block'},
    classList:['btn', 'btn-primary']
    },
];

 for (const chave in elemetosFake){
    if (elemetosFake[chave].style.color === 'blue'){
        console.log("O elemento " + elemetosFake[chave].tagName + " é azul ");
    } else {
        console.log("O elemento " + elemetosFake[chave].tagName + " não é azul ");
    }
    console.log(chave, '->', elemetosFake[chave]);
 }
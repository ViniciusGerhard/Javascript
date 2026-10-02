const elemetosFake = 
[
    {
    tagName: 'DIV',
    style: {color: 'blue', display: 'flex'},
    classList: ['container', 'active']
    },
    {
    tagName:'H1',
    Style: {color: 'red', display: 'block'},
    classList:['title']
    },
    {
    tagName:'BUTTON',
    style: {color: 'white', display: 'inline-block'},
    classList:['btn', 'btn-primary']
    },
];

 for (const chave in elemetosFake){
    if (style = 'blue'){
        console.log("O elemento" [tagName] "é azul ");
    } else {"O elemento [tagName"}
    console.log(chave, '->', elemetosFake[chave]);
 }
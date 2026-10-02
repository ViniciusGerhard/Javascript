const elemetosFake = [
    {
    tagName: 'DIV',
    style: {color: 'blue', display: 'flex'},
    classList: ['container', 'active']
    }
]
 for (const chave in elemetosFake[0]){
    console.log(chave, '->', elemetosFake[chave]);
 }
const adicionaItem = () => {
    const item = document.createElement('article');
    // const conteudoItem = document.createTextNode("item x");
    // item.appendChild(conteudoItem);
    const containerLista = document.getElementById('container');
    containerLista.insertAdjacentElement('beforeend', item);
    item.classList.add("item")
    item.setAttribute("onclick", "removeItem()")
}

const removeItem = () => {    
    event.target.remove()    
}
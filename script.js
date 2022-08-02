window.onload = cloneNode;

function cloneNode() {
    const node = document.querySelector('#containerFlores');
    const htmlString = node.innerHTML;
    repeat(htmlString,node,5);
    const node2 = document.querySelector('#containerDos');
    repeat(htmlString,node2,5);
}

function repeat(htmlString,node,times) {
    for(let i = 0; i < times; i++) {
        node.insertAdjacentHTML("afterbegin", htmlString);
    }
}
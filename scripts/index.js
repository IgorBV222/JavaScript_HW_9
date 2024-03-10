
const element = document.querySelectorAll('#list');
element.forEach(str => {
    let textEl = str.innerText;   
    if(textEl.includes('http://') || textEl.includes('https://')){
        str.innerText='';

        var newStr = document.createElement('a');
        newStr.href = textEl;

        newStr.appendChild(document.createTextNode(textEl));
        str.appendChild(newStr);
    }
});


/* ВОПРОС!!! Хотел таким способом, но не переводит в ссылку и ошибку выдает. НЕ смог понять в чем дело.
const elements = document.querySelectorAll('#list');
console.log (getChilds(elements));
function getChilds(element){
   
    for(let child of element.children){
        let textEl = child.innerText; 
        if(textEl.includes('http://') || textEl.includes('https://')){
            child.innerText='';
            var newText = document.createElement('a');
            newText.href = textEl;
            newText.appendChild(document.createTextNode(textEl));
            child.appendChild(newText);
        }      
    }    
}*/

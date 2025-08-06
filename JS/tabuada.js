function tabuada(){
    let num = document.querySelector("#valorTab").value;
    let tab = document.querySelector("#saltab");
    if (num.length == 0){
        alert("Por favor, digiteum número)");
    } else {
        let n = Number(num);
        let c = 1
        tab.innerHTML= "";
        while (c <= 10){
            let item = document.createElement("option");
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`
            tab.appendChild(item);
            c++
        }
    }
}
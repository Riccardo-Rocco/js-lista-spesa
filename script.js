const listaSpesa = ["Pane", "Latte", "Uova", "Frutta", "Verdura"];
let index = 0;


while (index < listaSpesa.length) {
    console.log(listaSpesa[index]);
    index++;
}

index = 0;


const listaUl = document.getElementById("listaSpesa");
while (index < listaSpesa.length) {
    const li = document.createElement("li");
    li.textContent = listaSpesa[index];
    listaUl.appendChild(li);
    index++;
}

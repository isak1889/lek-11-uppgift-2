const ul = document.querySelector("ul");


function lägga_till_i_varukorg(namn, pris){
    console.log("namn: " + namn + "\npris: " + pris)
    let li = document.createElement("li");
    li.textContent= namn + " Pris: " + pris + "kr";
    ul.appendChild(li);
    count++;

    let fält=[];
    let json = window.localStorage.getItem("produkt");
    if (json){
        fält = JSON.parse(json)
    }

    let obj = {
        namn: namn,
        pris: pris,
    }
    fält.push(obj);
    json = JSON.stringify(fält);
    window.localStorage.setItem("produkt",json);
    


}
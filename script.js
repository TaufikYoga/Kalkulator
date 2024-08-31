const h1 = document.getElementById("display");

let wadahDisplay = "";
let wadahAsli = ""

const tambahAngka = (angka) => {
  wadahDisplay += angka;
  wadahAsli += angka;
  h1.innerHTML = wadahDisplay;
};

const operator = (op) => {
    if(wadahDisplay){
        if(op === "+"){
            wadahDisplay += " + "
            wadahAsli += "+"
            h1.innerHTML = wadahDisplay;
        }else if(op === "-"){
            wadahDisplay += " - "
            wadahAsli += "-"
            h1.innerHTML = wadahDisplay;
        }else if(op === "x"){
            wadahDisplay += " x "
            wadahAsli += "*"
            h1.innerHTML = wadahDisplay;
        }else{
            wadahDisplay += " : "
            wadahAsli += "/"
            h1.innerHTML = wadahDisplay;
        }
    }else{
        return
    }
}

const penjumlahan = () => {
    const result = eval(wadahAsli)
    h1.innerHTML = result
    wadahDisplay = result.toString()
    wadahAsli = result.toString()
}

const Clear = () => {
    wadahDisplay = ""
    wadahAsli = ""
    h1.innerHTML=wadahDisplay
}

const Delete = () => {
    wadahDisplay = wadahDisplay.slice(0, -1)
    wadahAsli = wadahAsli.slice(0, -1)
    h1.innerHTML=wadahDisplay
}
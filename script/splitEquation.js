//Wyciaganie pojedynczych liczb i ich znakow

export class splitEquation {
    constructor(string) {

        this.tab = this.splitEquations(string);
        console.log(this.tab)
        if(this.tab.length === 2) {
            return this.reduceEquation(this.splitEquationRight(this.tab[0]), this.splitEquationRight(this.tab[1]));
        }else {
            return this.reduceEquation(this.splitEquationRight(this.tab[0]), {a: 0,b: 0,c:0})
        }
        
    }

    reduceEquation(leftSide, rightSide) {
        return {
            a:leftSide.a - rightSide.a,
            b:leftSide.b - rightSide.b,
            c:leftSide.c - rightSide.c
        }
    }

    splitEquations(string) {
        const tab = string.split('=')
        return tab
    }
    //Wyciaganie pojedynczych liczb i ich znakow
    
    splitEquationRight = (string) => {
        const tabSigns = [];
        //wydobycie znakow rownania oprocz pierwszego
        for(let i = 1; i<=string.length -1; i++) {
            if(string.charAt(i) === "-" || string.charAt(i) === "+") {
                if(tabSigns[1]) {
                    tabSigns[2] = string.charAt(i)
                }else {
                    tabSigns[1] = string.charAt(i)
                }
            }
        }
        //pobranie pierwszego elementu stringa i sprawdzenie czy to jest - jezeli - to dodaje 
        //go do tablicy i usuwa by nie bylo problemow przy separacji stringa
        if(string.charAt(0) === "-"){   
            tabSigns[0] = "-";
            string = string.slice(1);
        }else {
            tabSigns[0] = "+";
        }
    
        //separacja stringa poprzez + i -
        const tab = string.split(/\+|-/);

	if(tab.length < 3) {
          for(let i = 0; i<=tab.length-1; i++) {
            if(!tab[i].includes('x', tab[i].length - 1)&&!tab[i].includes('x^2', tab[i].length - 3)){
            tab.unshift('0x');
            tab.unshift('0x^2');
            tabSigns.unshift('+')
            tabSigns.unshift('+')
            break;
        }
        if(!tab[i].includes('x', tab[i].length - 1)) {
            tab.splice(1,0,'0x')
            tabSigns.splice(1,0,'+')
            break;
        }
        if(!tab[i].includes('x^2', tab[i].length - 3)) {
            tab.splice(0,0,'0x^2')
            tabSigns.splice(0,0,'+')
            break;
        }
    }
} 
        //sprawdzenie czy jest liczba przy x^2 jezeli nie ma to wpisanie 1 na miejsce zerowe w tablicy
        if(tab[0] === "x^2") {
            tab[0] = `1${tab[0]}` 
        }
        // sprawdzenie czy jest liczba przy x jezeli nie ma to wpisanie 1 
        if(tab[1] === "x") {
            tab[1] = `1${tab[1]}` 
        }
        if(
        tab[0].includes('x^2', tab[0].length - 3) && tab.length<=2 
        || tab[1].includes('x', tab[1].length - 1)&& tab.length<=2 
        || tab[0].includes('x^2', tab[0].length - 3) && tab[1].includes('x', tab[1].length - 1)&&tab.length<=2
        ){
            tab.splice(2,0,'0')
            tabSigns.splice(2,0,'+')
        }

        for(let i = 0; i<=tab.length-1;i++) {
            if(tab[i].includes("/")){
                const dzielenie = tab[i].split("/");
                if(i === 0) {
                    tab[i] = `${parseInt(dzielenie[0])/parseInt(dzielenie[1])}x^2`;
                }else if(i === 1) {
                    tab[i] = `${parseInt(dzielenie[0])/parseInt(dzielenie[1])}x`;
                }else{
                    tab[i] = `${parseInt(dzielenie[0])/parseInt(dzielenie[1])}`;
                }
            }
        }
         //zwrocenie pierwiastkow rownania a,b,c i tablicy ze znakami jako obiekt
        return {
            a: parseFloat(`${tabSigns[0]}${tab[0].substring(0,tab[0].length-3)}`),
            b: parseFloat(`${tabSigns[1]}${tab[1].substring(0,tab[1].length-1)}`),
            c: parseFloat(`${tabSigns[2]}${tab[2].substring(0,tab[2].length)}`),
            tabSigns
        }
    }   
}

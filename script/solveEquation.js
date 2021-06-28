//Obliczanie pierwiastkow rownania
export const solveEquation = (tabsObject, delta) => {
    let x1 = 0;
    let x2 = 0;

    //Tylko jedno rozwiazanie
    if(delta === 0) {

         x1 = -tabsObject.b /(2*tabsObject.a);
        return `x1= ${x1}`;
        
    }
    //wiecej niz jedno rozwiazanie lub brak rozwiazan
    if(delta !== 0) {
        if(delta < 0) {
            return "funkcja nie ma pierwiastków"
        }
       const deltaSqrt = Math.sqrt(delta);
        if(delta > 0) {
                x1 = (-tabsObject.b + deltaSqrt)/(2*tabsObject.a);
                x2 = (-tabsObject.b - deltaSqrt)/(2*tabsObject.a);
        //zwrocenie rozwiazania
            return `
            x1= ${x1} 
            x2= ${x2} 
            Delta= ${delta} 
            Deltasqrt= ${deltaSqrt} 
            a: ${tabsObject.a} 
            b: ${tabsObject.b} 
            c: ${tabsObject.c}`;
    }
    }
}

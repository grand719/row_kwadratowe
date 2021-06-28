//Obliczanie delty do rownania

export const delta = (tabsObject) => {
    let deltaSolve = 0;

    deltaSolve = Math.pow(tabsObject.b,2) - (4*tabsObject.a*tabsObject.c);  
    
    return deltaSolve
}


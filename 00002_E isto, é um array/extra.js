var personas = ["camilla", "julio"];

function arraysIguais(umArray, outroArray) {
    if (umArray.length != outroArray.length)
        return false;
    for (var i = 0; i < umArray.length; i++) {
        if (umArray[i] instanceof Array && outroArray[i] instanceof Array) {
            if (!arraysIguais(umArray[i], outroArray[i]))
              return false;
        }           
        else if (umArray[i] != outroArray[i])
          return false;   
    }       
    return true;
}
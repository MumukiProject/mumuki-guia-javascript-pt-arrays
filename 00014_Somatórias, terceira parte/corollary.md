:clap: Bem feito!

E se o array tivesse N elementos?

Se continuamos repetindo esse padrão, veremos que uma somatória de um array sempre começa igual (let somatoria = 0) e termina igual (devolvendo a variável local somatória).

``` javascript
function lucroTotalN(umPeriodo) {
  let somatoria = 0; // esto sempre está
  //... etc
  return somatoria; //esto sempre está
}
```

O que muda são as acumulações (`somatoria = somatoria + ...`), precisamos de uma por cada elemento do array. Em outras palavras, temos que visitar cada elemento, independentemente de quantos tem. Mas como fazê-lo? Essa idéia de _repetir algo muitas vezes_ não te é familiar?


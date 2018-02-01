Mas, só podemos criar arrays de strings? E se eu quiser, por exemplo, representar os números da loteria que surgiram na semana passada? Ou as sucessivas jogadas de um dado? Ou se saiu cara ou coroa em sucessivas jogadas de uma moeda?

``` javascript
let numerosDaLoteria = [2,  11, 17, 32, 36, 39];
let jogadasDeUmDado = [1, 6, 6, 2, 2, 4];
let saiuCara = [false, false, true, false];
```

Como você pode ver, também podemos representar conjuntos de números ou booleanos, da mesma forma: escrevendo-os entre colchetes e separados por vírgulas. Podemos ter arrays de números, de strings, de booleanos, etc. Até poderíamos ter arrays de arrays!

> Vamos ver se você vai entendendo: experimente as seguintes consultas no console:

> * `numerosDaLoteria`
> * `saiuCara`
> * `[[1, 2, 3], [4, 5, 6]]`

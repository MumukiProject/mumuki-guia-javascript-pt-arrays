Bem feito!

Se você vem prestando atenção aos exemplos de consulta, você notará que os arrays também podem ter elementos duplicados: `[1, 2, 1]`, `["olá", "olá"]`, etc.

Portanto, `indexOf` na verdade devolve a posição da _primeira aparição_ do elemento no array. Por exemplo:

``` javascript
ム [2, 3, 3, 4].indexOf(3)
1 //devolve 1 porque, embora também está na posição 2, aparece primeiro na posição 1.
```

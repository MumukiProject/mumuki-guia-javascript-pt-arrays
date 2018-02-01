Então, temos que repetir a operação de acumular várias vezes, uma para cada elemento do array. Digamos olá (novamente) ao `for...of`!

``` javascript
function lucroTotal(umPeriodo) {
  let somatoria = 0;
  for (let mes of umPeriodo) {
    somatoria = somatoria + mes;
  }
  return somatoria;
}
```

Como você pode ver, o `for...of` permite visitar e fazer algo com cada elemento de um array; neste caso, estaremos visitando cada mes de `umPeriodo`.

> Ainda não está convencido? Novamente, experimente as seguintes expressões no console:

> * `lucroTotal([])`
> * `lucroTotal([100])`
> * `lucroTotal([100, 2])`
> * `lucroTotal([2, 10, -20])`
> * `lucroTotal([2, 10, -20, 0, 0, 10, 10])`

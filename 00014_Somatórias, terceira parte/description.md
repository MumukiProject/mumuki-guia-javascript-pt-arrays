_Agora que já sabems o que queremos (`lucroTotal`), vamos descobrir como fazê-lo
..._

Vamos pouco a pouco: se o array não tivesse elementos, quanto deveria ser a somatória? 0!

``` javascript
function lucroTotal0(umPeriodo) {
  let somatoria = 0;
  return somatoria;
}
```

E se eu tivesse exatamente 1 elemento? Em... 0... Mais esse elemento? Exatamente!

``` javascript
function lucroTotal1(umPeriodo) {
  let somatoria = 0;
  somatoria = somatoria + umPeriodo[0];
  return somatoria;
}
```

¿E se tivesse 2 elementos?

``` javascript
function lucroTotal2(umPeriodo) {
  let somatoria = 0;
  somatoria = somatoria + umPeriodo[0];
  somatoria = somatoria + umPeriodo[1];
  return somatoria;
}
```

¿E se tivesse 3 elementos?

``` javascript
function lucroTotal3(umPeriodo) {
  let somatoria = 0;
  somatoria = somatoria + umPeriodo[0];
  somatoria = somatoria + umPeriodo[1];
  somatoria = somatoria + umPeriodo[2];
  return somatoria;
}
```

> Você começa a ver um padrão? Tente escrever `lucroTotal4` que funcione para 4 elementos.
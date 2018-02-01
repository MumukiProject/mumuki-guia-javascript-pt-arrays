Os arrays são muito úteis para conter vários elementos. Mas há outra coisa: também podemos adicionar elementos em qualquer momento, o que resolvemos usando o método `push`. Por exemplo:

``` javascript
let pertences = ["espada", "escudo", "torcha"];
//pertences.length aqui vale 3;
 
pertences.push("amuleto mágico");
//agora pertences.length vale 4
```

Como podemos ver, `push` adiciona um elemento à lista, o que faz que o tamanho dele aumente. Mas em que parte da lista o adiciona? No princípio? Ao final? No meio?

> Descubra-o você mesmo: inspecione no console que elementos contêm `pertences`, adicione uma `"besta"` e volte a inspecionar `pertences`.

> Ah e, além disso, existe um método `pop`, que não tem parâmetros. Investigue o que faz no console.
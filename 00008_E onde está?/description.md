Outro método útil dos arrays é `indexOf`, o que nos diz em que posição está um elemento dentro do array:

``` javascript
["A", "maior", "eu", "chamei", "de", "cuca"].indexOf("maior"); //devolve 1
 
let diasDeTrabalho = ["segunda", "terça", "quarta", "quinta", "sexta"]
diasDeTrabalho.indexOf("segunda"); //devolve 0
```

Como você pode ver, o "estranho" do método `indexOf` é que parece sempre devolver 1 menos do que esperado. Os criadores de JavaScript estavam errados? :confused:

Não, é que em JavaScript, como em muitos idiomas, as posições dos arrays começam em 0: o primeiro elemento é a posição 0, a segundo 1, o terceiro 2 e assim por diante.

> E o que acontece se você passa por parâmetro ao `indexOf` um elemento que ele não tem? Descubra-o você mesmo!

> Experimente o seguinte:

> ``` javascript
> diasDeTrabalho.indexOf("osvaldo")
> ```

Ana, contadora de uma empresa bem conhecida, guarda o lucro de cada mês em um array. Por exemplo, para o último semestre do ano passado, registou o seguinte:

``` javascript
//Em Julio ganhou $50, em Agosto perdeu $12, etc
let lucroUtimoSemestre = [50, -12, 1000, 300, 200, 0];
```

Ela acaba de nos perguntar: "posso saber o lucro de **um semestre** inteiro?"

_"Óbvio"_, dissemos, e escrevemos o seguinte código:

``` javascript
function somatoriaLucroSemestre(umSemestre) {
  return umSemestre[0] + umSemestre[1] +
         umSemestre[2] + umSemestre[3] +
         umSemestre[4] + umSemestre[5];
}
```

_"Obrigada"_, respondeu a  Ana, e se foi calculando o lucro usando a função que a passamos a ela. Mas um pouco mais tarde, ela voltou contando que também tinha registrado o lucro do primeiro trimestre deste ano:

``` javascript
//Em Janeiro a empresa ganhou $80, en Fevereiro, $453, em Março $1000
let lucroPrimeiroTrimestre = [80, 453, 1000];
```

E ela nos perguntou: _"Posso usar esta função que vocês me deram para calcular o lucro do primeiro trimestre?"_

E ficamos pensando. :thought_balloon:

> Tem algum problema a função `somatoriaLucroSemestre` que escrevemos? Funcionará com trimestres? E com quatrimestres?

> Experimente no console! 

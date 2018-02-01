Você o pensou?

A função `somatoriaLucroSemestre` anterior tem dois problemas:

1. É muito repetitiva e tediosa para escrever. Temos que fazer muitas somas à mão!
2. E não é genérica, serve apenas para arrays de 6 elementos:

  * Se tiver mais de seis elementos, ela só adiciona os primeiros
  * Se ela tiver menos, devolve coisas estranhas (você se lembra quando lhe dissemos: não passe do índice, porque coisas ruins poderiam acontecer? :stuck_out_tongue:)

O que gostaríamos é poder somar de maneira genérica todos os elementos do array, independentemente de quantos há realmente: queremos uma função `lucroTotal`, que possa adicionar períodos de qualquer tamanho: semestres, quadrimestres, trimestres, etc. Que difícil!

> O que? Você não acha que isso pode ser feito? Que pouca confiança, hein?

> Nos já fizemos a nossa versão; tente com as seguintes consultas:

> ```javascript
> ム lucroTotal([2, 3])
> ム lucroTotal([2, 3, 1, 8, 8, -1])
> ム lucroTotal([])
> ```

> Depois siga-nos para te contar como fizemos. :wink:


Se você pede um elemento numa posição que seja igual ou superior ao tamanho do array, obterá `undefined`. Não parece uma coisa terrível, mas o problema é que com um  undefined você não pode fazer nada realmente útil.

Então você está avisado: não passe do índice!

> Tendo isso em mente, aqui vai um desafio: escreva novamente a função `medalhaDeAcordoComPosto`, mas desta vez usando como máximo um só `if`. Talvez os arrays possam te servir de ajuda. :wink:

> Ah, lembre-se: a função deve devolver a medalha que lhe corresponde às primeiras posições de uma competição:

> ``` javascript
> ム medalhaDeAcordoComPosto(1)
> "ouro"
> ム medalhaDeAcordoComPosto(2)
> "prata"
> ム medalhaDeAcordoComPosto(3)
> "bronze"
> ム medalhaDeAcordoComPosto(4)
> "nada"
> ム medalhaDeAcordoComPosto(5)
"nada"
> ```

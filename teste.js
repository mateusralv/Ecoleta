function acontece(alunos, min) {
    var chegaram = 0;
    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i] <= 0) {
            chegaram++
        }
    }
    return chegaram >= min
}

function aberturas(dias, min) {
    var res = []
    for (var i = 0; i < dias.length; i++) {
        res.push(acontece(dias[i], min))
    }
    return res
}

var alunosDaSegunda = [10, -5, 3, 0]
var alunosDaTerca = [10, 5, 3, 0]
var alunosDaQuarta = [10, 5, 3, 0]


console.log(acontece(alunosDaSegunda, 3))

console.log(aberturas([alunosDaSegunda, alunosDaTerca, alunosDaQuarta], 2))
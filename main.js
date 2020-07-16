var result = document.querySelector('.result');
var resultado1 = 0;
var termo = '';
var res = '';
result.innerHTML = '';
function um() {
    limpaTela();
    res += '1';
    result.innerHTML += `1`;
}
function dois() {
    limpaTela();
    res += '2';
    result.innerHTML += `2`;
}
function tres() {
    limpaTela();
    res += '3';
    result.innerHTML += `3`;
}
function quatro() {
    limpaTela();
    res += '4';
    result.innerHTML += `4`;
}
function cinco() {
    limpaTela();
    res += '5';
    result.innerHTML += `5`;
}
function seis() {
    limpaTela();
    res += '6';
    result.innerHTML += `6`;
}
function sete() {
    limpaTela();
    res += '7';
    result.innerHTML += `7`;
}
function oito() {
    limpaTela();
    res += '8';
    result.innerHTML += `8`;
}
function nove() {
    limpaTela();
    res += '9';
    result.innerHTML += `9`;
}
function zero() {
    limpaTela();
    res += '0';
    result.innerHTML += `0`;
}
function ponto() {
    limpaTela();
    res += '.';
    result.innerHTML += `.`;
}
function mais() {
    if (resultado1 == 0) {
        resultado1 = Number(res);
        termo = '+';
        res = '';
    } else {
        termo = '+';
        res = '';
        result.innerHTML = '+';
    }
}
function menos() {
    if (resultado1 == 0) {
        resultado1 = Number(res);
        termo = '-';
        res = '';
        result.innerHTML = '-';
    } else {
        termo = '-';
        res = '';
        result.innerHTML = '-';
    }
}
function multiplicacao() {
    if (resultado1 == 0) {
        resultado1 = Number(res);
        termo = 'x';
        res = '';
        result.innerHTML = 'x';
    } else {
        termo = 'x';
        res = '';
        result.innerHTML = 'x';
    }
}
function divisao() {
    if (resultado1 == 0) {
        resultado1 = Number(res);
        termo = '/';
        res = '';
        result.innerHTML = '/';
    }
    else {
        termo = '/';
        res = '';
        result.innerHTML = '/';
    }
}
function resultado() {
    if (termo === '+') {
        resultado1 += Number(res);
        result.innerHTML = `${resultado1}`;
    }
    if (termo === '-') {
        resultado1 -= Number(res);
        result.innerHTML = `${resultado1}`;
    }
    if (termo === 'x') {
        resultado1 *= Number(res);
        result.innerHTML = `${resultado1}`;
    }
    if (termo === '/') {
        resultado1 /= Number(res);
        result.innerHTML = `${resultado1}`;
    }
}
function limpar() {
    resultado1 = 0;
    res = '';
    result.innerHTML = '';
}
function limpaTela() {
    if (res == 0) {
        result.innerHTML = '';
    }
}
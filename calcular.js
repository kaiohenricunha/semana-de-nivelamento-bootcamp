const readline = require('readline-sync');

function calcular() {
    let num = 0;
    let a;
    let b;

    while (num != -1) {
        console.log('1 - Somar | 2 - Subtrair | 3 - Muiltiplicar | 4 - Dividir | -1 Sair ');
        const operacao = readline.question(('Digite o número da operação desejada: '));

        if (operacao == 1) {
            a = readline.question(('Insira o primeiro número: '));
            b = readline.question(('Insira o segundo número: '));

            var c = parseFloat(a);
            var d = parseInt(b);

            console.log(c + d);
        }
        else if (operacao == 2) {
            a = readline.question(('Insira o primeiro número: '));
            b = readline.question(('Insira o segundo número: '));

            var c = parseFloat(a);
            var d = parseFloat(b);

            console.log(c - d);
        }
        else if (operacao == 3) {
            a = readline.question(('Insira o primeiro número: '));
            b = readline.question(('Insira o segundo número: '));

            var c = parseInt(a, 10);
            var d = parseInt(b, 10);

            console.log(c * d);
        }
        else if (operacao == 4) {
            a = readline.question(('Insira o primeiro número: '));
            b = readline.question(('Insira o segundo número: '));

            var c = parseInt(a, 10);
            var d = parseInt(b, 10);

            console.log(c / d);
        }
        else if (operacao == -1) {
            num = -1;
        } else {
            console.log('Número inválido. Tente novamente.')
        }
    }
}

calcular();
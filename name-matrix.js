const readline = require('readline-sync');

function matrixPrinter() {
    var matrix = [];
    var name = readline.question(("Type in your name: "));

    var count = 0;

    for (var j=0; j<10; j++) {
        for (var i=0; i<10; i++) {
            matrix.push(name);
            process.stdout.write(matrix[i]+ " | ");

            if (i == 9) {
                count = count + 1;
                process.stdout.write('- linha ' + count + '\n');
            }
        }
    }

    console.log('\nFim do programa.');
}

matrixPrinter();
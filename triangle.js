function triangleType(a, b, c) {
    if (a == b && a == c) {
        console.log('Triângulo Equilátero 3 lados iguais');
    } else if (a != b && a != c) {
        console.log('Triângulo Escaleno todos os lados diferentes');
    } else {
        console.log('Triângulo Isósceles 2 lados iguais')
    }
}


triangleType(100, 100, 100); // Triângulo Equilátero 3 lados iguais
triangleType(5, 55, 55); // Triângulo Escaleno todos os lados diferentes
triangleType(5, 10, 5); // Triângulo Isósceles 2 lados iguais

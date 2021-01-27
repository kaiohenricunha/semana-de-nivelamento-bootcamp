function evenOrOdd(number) {
        if ((number == 1 || number % 2 == 0) && number != 2) {
            console.log("It's not prime.");
        } else {
            console.log("Yes! It's prime.");
        }
    }

evenOrOdd(1); // not prime
evenOrOdd(2); // prime
evenOrOdd(19); // prime
evenOrOdd(53); // prime
evenOrOdd(4); // not prime

// prime numbers can only be divided, without remainders by itself and 1
let a = 1;
for (count = 0; count < 100; count++) {
    if (a % 3 === 0 && a % 5 === 0) {
        document.write("FizzBuzz" + "<br/>");
    } else if (a % 3 === 0) {
        document.write("Fizz" + "<br/>");
    } else if (a % 5 === 0) {
        document.write("Buzz" + "<br/>");
    }  else {
        document.write(a + "<br/>");
    }
    a++;
}
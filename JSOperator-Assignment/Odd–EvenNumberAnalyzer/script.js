function analyze() {
  let numbers = [];
  let results = [];

  for (let i = 1; i <= 30; i++) numbers.push(i);

  for (let n of numbers) {
    if (n % 3 === 0 && n % 5 === 0) results.push("FizzBuzz");
    else if (n % 2 === 0) results.push("Even");
    else results.push("Odd");
  }

  document.getElementById("result").innerHTML = results.join(" , ");
}

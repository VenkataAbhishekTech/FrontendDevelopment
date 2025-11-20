const x = 16.75;


const summary = `Math Dashboard Results:\n
Rounded Value: ${Math.round(x)}\nSquare Root: ${Math.sqrt(x)}\nPower (x^3): ${Math.pow(x, 3)}\nRandom (10-50): ${Math.floor(Math.random() * 41) + 10}`;


document.getElementById("output").innerText = summary;
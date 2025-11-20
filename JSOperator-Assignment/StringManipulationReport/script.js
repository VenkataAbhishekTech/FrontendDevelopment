function processTitle() {
    let product = " wireless headphones PRO ";

    let cleaned = product.trim().toLowerCase();      
    let words = cleaned.split(" ").map(w =>            
        w.charAt(0).toUpperCase() + w.slice(1)
    );

    let finalTitle = words.join(" ").replace("Pro", "Pro Edition");   

    document.getElementById("output").innerText =
        finalTitle + " (Length: " + finalTitle.length + ")";      
}

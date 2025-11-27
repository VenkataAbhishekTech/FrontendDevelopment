$(document).ready(function () {
    
    $("#searchBox").on("input", function () {
        const query = $(this).val().trim();

        // Show loading indicator
        $("#loading").show();

        $.ajax({
            url: "http://localhost:3001/products?q=" + query,
            method: "GET",
            success: function (products) {
                $("#loading").hide();
                $("#results").empty();

                if (products.length === 0) {
                    $("#results").html("<p class='no-result'>No products found</p>");
                    return;
                }

                products.forEach(product => {
                    $("#results").append(`
                        <div class="product-card">
                            <img src="${product.image}" width="80">
                            <div>
                                <h3>${product.name}</h3>
                                <p>Price: ₹${product.price}</p>
                            </div>
                        </div>
                    `);
                });
            },

            error: function () {
                $("#loading").hide();
                $("#results").html("<p class='no-result'>Error fetching products</p>");
            }
        });
    });

});

$(function() {
    // load data from url
    getProducts();
})

function getProducts() {
    $.ajax({
        // json-server --> search 
        url:"https://dummyjson.com/products",
        success:function(res){
            console.log(res);
            res.products.forEach((product) => {
                addProduct(product);
            });

        },
        error:function(err){
            console.log(err)
        },
        data:{},
        // type:"PUT"

    });
}

function addProduct(productInfo) {
    let product = $(`
        <div  class="product">
            <img src=${productInfo.thumbnail} alt="">
            <h4>${productInfo.title}</h4>
            <p>${productInfo.description}</p>
        </div>
    `);
    $("#container").append(product);
}

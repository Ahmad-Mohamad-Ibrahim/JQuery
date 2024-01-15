$(function() {
    // getProducts(1);
    $("#getBtn").on("click" , () => {
        let inputField = $("#inputField");
        getProducts(inputField.val());
        inputField.val('');
    });
});

function getProducts(id) {
    $.ajax({
        // json-server --> search 
        url:"https://dummyjson.com/products/" + id,
        success:function(res){
            console.log(res);
            addProduct(res);
        },
        error:function(err){
            console.log(err)
        },
        data:{},
        // type:"PUT"

    });
}

function addProduct(product) {
    let productEle = $(`
        <img id="productImg" src="${product.thumbnail}" alt="">
        <h4 id="productTitle">${product.title}</h4>
        <p id="productDisc">${product.description}</p>
    `);

    $("#container").html(productEle);
}
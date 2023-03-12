let loadProducts = (filter_id) => {

    fetch("https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json")
    .then(response => response.json())
    .then(products => {
        products.filter(product =>  filter_id? product.name  == filter_id || product.type  == filter_id  : true).forEach(product => {
            let {src, name, type, price} = product;

            let template = `
            <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
                <div class="card card-blog card-plain">
                <div class="card-header p-0 mt-n4 mx-3">
                    <a class="d-block shadow-xl border-radius-xl">
                    <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                    </a>
                </div>
                <div class="card-body p-3">
                    <p class="mb-0 text-sm">${type}</p>
                    <a href="javascript:;">
                    <h5>
                        ${name}
                    </h5>
                    </a>
                    <p class="mb-4 text-sm">
                    <b>Price: </b> $ ${price}
                    </p>
                </div>
                </div>
            </div>`

            document.getElementById("output").innerHTML += template
        });
    })

    fetch("https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml")
    .then(response => response.text())
    .then(result => {
        let xml = (new DOMParser()).parseFromString(result, 'application/xml');

        let arrayProduct = xml.getElementsByTagName("product")
        .filter(product =>  filter_id? product.getElementsByTagName("name")[0].innerHTML == filter_id || product.getElementsByTagName("type")[0].innerHTML == filter_id : true)

        for(let item of arrayProduct)  {
            let name = item.getElementsByTagName("name")[0].innerHTML
            let price = item.getElementsByTagName("price")[0].innerHTML
            let src = item.getElementsByTagName("src")[0].innerHTML
            let type = item.getElementsByTagName("type")[0].innerHTML

            let template = `
            <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
                <div class="card card-blog card-plain">
                <div class="card-header p-0 mt-n4 mx-3">
                    <a class="d-block shadow-xl border-radius-xl">
                    <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                    </a>
                </div>
                <div class="card-body p-3">
                    <p class="mb-0 text-sm">${type}</p>
                    <a href="javascript:;">
                    <h5>
                        ${name}
                    </h5>
                    </a>
                    <p class="mb-4 text-sm">
                    <b>Price: </b> $ ${price}
                    </p>
                </div>
                </div>
            </div>`

            document.getElementById("output").innerHTML += template
        }
    })

}

loadProducts()


let filter_products = () => {
    
    let values_id =  document.getElementById("text").value;
    ///console.log(values_id)
    document.getElementById("output").innerHTML = ""
    loadProducts(values_id)
    
}
filter_products()
{
    window.onload = function datasonload () {

    let xhr = new XMLHttpRequest ();

    xhr.open('get','https://fakestoreapi.com/products');
    xhr.send();

    console.log(xhr);

    xhr.onreadystatechange = function () {

        if(xhr.readyState===4){
            let response = xhr.response;
            console.log(response);

            let datas = JSON.parse(response);
            console.log(datas);

            let image = document.getElementsByClassName('image');
            for(let i = 0; i<image.length && i<datas.length; i++){
                image[i].src = datas[i].image;
            }

            let category = document.getElementsByClassName('category');
            for(let i = 0; i<category.length && i<datas.length; i++){
                category[i].innerHTML = datas[i].category;
            }

            let title = document.getElementsByClassName('title');
            for(let i = 0; i<title.length && i<datas.length; i++){
                title[i].innerHTML = datas[i].title;
            }

            let price = document.getElementsByClassName('price');
            for(let i = 0; i<price.length && i<datas.length; i++){
                price[i].innerHTML = datas[i].price;
            }

            let rating = document.getElementsByClassName('rating');
            for(let i = 0; i<rating.length && i<datas.length; i++){
                rating[i].innerHTML = datas[i].rating.rate;
            }

        }

    }

    }
    
}
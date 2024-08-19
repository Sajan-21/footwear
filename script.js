{
     function datasOnload () {

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

                let corosalInner1 = document.querySelector('#corousal-inner1');

                let crows = '';

                for (let i = 0; i < 3; i++){
                    crows = crows + `
                    <div class="carousel-item active">
                        <img class="p-5" src="${datas[i].image}">                   
                    </div>
                    `;
                }
                console.log(crows);

                corosalInner1.innerHTML = crows;

                let box = document.getElementById('box');

                let rows = '';

                for(let i = 0; i < datas.length; i++){
                    rows = rows + `
                    <div class="border rounded boxes">
                    <img class="w-100 boxImage" src="${datas[i].image}">
                    <p>${datas[i].category}</p>
                    <p class = "text-center fw-bold">${datas[i].title}</p>
                    <p class = "text-center">${datas[i].price}$</p>
                    <p>rating : ${datas[i].rating.rate}</p>
                    <div id="buttonId"><button onclick="handleClick(${datas[i].id})">details</button></div>
                    </div>`


                }

                box.innerHTML = rows;

            }

        }

    }

    function handleClick (id) {
        window.location.href = `view.html?id=${id}`;
        return;
    }
    
    function userData () {
        console.log("loading....")
    
        let location = window.location;
        console.log("location", location);
    
        let querystring = location.search;
        console.log("querystring", querystring);
    
    
        let urlParams = new URLSearchParams(querystring);
        console.log("url", urlParams);
    
        let id = urlParams.get("id");
        console.log("id ", id);
    
        let xhr = new XMLHttpRequest();
    
        xhr.open("get", `https://fakestoreapi.com/products/${id} `)
    
        xhr.send();
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              console.log("status:", xhr.status);
    
              if (xhr.status === 200) {
                  console.log("success");
    
                  let userData = xhr.response;
                  console.log("userData:",userData);
    
                  let parsed_userData = JSON.parse (userData);
                  console.log("parsed_userData",parsed_userData);
    
    
                  
                  
                  let load = document.getElementById('product');
                  
                  
                  
    
    
                  // load.value =.title;
                  let load1 = document.getElementById('product');
                  let load2 = document.getElementById('product1');

                  let load3 = document.getElementById('product2');
                  let load4 = document.getElementById('product3');

                  let load5 = document.getElementById('product4');

                      
                      load1.innerHTML = `${parsed_userData.title}`;
                      load2.innerHTML = ` ${parsed_userData.category}` 
                      load3.innerHTML = `<img src = "${parsed_userData.image}" style="width : 400px; height : 400px;">`;
                      load4.innerHTML = `${parsed_userData.description}`
                    load5.innerHTML = `${parsed_userData.price}`
    
              }else{
                  alert("failed to load")
              }
              
              
           }
        }

    }
}

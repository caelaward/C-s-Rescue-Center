
products=JSON.parse(localStorage.getItem('products'))
// let cart=[]//everything being purchased must be added here

let items=document.querySelector('[data-items]')

// let c=products.map(function (item,index) {
//     return `
//         <div class="col">
//             <div class="card h-100 w-75">
//                 <img src="${item.url}" class="card-img-top " >
//                     <div class="card-body">
//                         <h5 class="card-title">${item.name}</h5>
//                         <p class="card-text">${item.description}.</p>
//                         <p class="price">R${item.price}</p>
//                         <button 'class='w-50' id='btnAdd' data-add>Add to cart</button>
//                     </div>
//              </div>
//          </div>
    
//     `
// }).join('')

    
//     items.innerHTML=c




//sort



// sortbtn.addEventListener('click', )

// let compPrice =(a,b)=>a.price-b.price;
// let sortedPrice=products.sort(compPrice) 
// // c(sortedPrice)
// console.log(sortedPrice)

// sortbtn.addEventListener('click',function () {
    //     alert('hi')
    //     products.sort((a, b) => a.price - b.price);
    //     return 
    // })
    
    // function sortPrice() {
            //     let sortedPrice=[...products].sort((a,b)=>{
                //         return parseInt(a.price)-parseInt(b.price)
                    //         console.log(sortedPrice);
                    //     });
                    // if (sortPrice) {
                        //     items.innerHTML=sortedPrice
                        // }
                        // }
                        // sortbtn.addEventListener('click', sortPrice)
                        
                        
                        // let searchbtn=document.querySelector('[data-search]')
                        //search function
                        
                        //                         let inputV=document.querySelector('[data-input]')
                        //                         //addevent
                        //                         inputV.addEventListener("keyup", () => {
                            //                             let SearchItem = products.filter((prod) => {
                                //     return prod.name.toLowerCase().includes(inputV.value.toLowerCase());
                                //   });
                                //   if (SearchItem) {
                                    //   items.innerHTML=("SearchItem");
                                    //   }
                                    // });
                                    
                                    function productDisplay(prod){
                                        let p = prod.map(function(item,index) {
                                            console.log(item); 
                                            return`
                                                    <div class="col">
                                                        <div class="card h-100 w-75">
                                                            <img src="${item.url}" class="card-img-top " >
                                                            <div class="card-body">
                                                            <h5 class="card-title">${item.name}</h5>
                                                            <p class="card-text">${item.description}.</p>
                                                            <p class="price">R${item.price}</p>
                                                            <button 'class='w-50' id='btnAdd' data-add>Add to cart</button>
                                                            </div>
                                                        </div>
                                                     </div>
                                                        `
                                                    })
                                                    //join will join the trs together 
                                                    items.innerHTML=p.join('')
                                                }
                                                productDisplay(products)
         
let sortbtn=document.querySelector('[data-sort]')

// let compPrice= (a,b)=> {
//         return a.price-b.price;  
//     }
    
//     let sortedPrice=products.sort(compPrice)
    
//     console.log(sortedPrice);
    
    
   
// function sortPrice() {
//     let sortedPrice=products.sort((a,b)=>{
//         return parseInt(a.price) - parseInt (b.price);
//     })
//     productDisplay(sortedPrice)
//     console.log(sortedPrice);
// }

sortbtn.addEventListener('click', sortPrice )

function sortPrice(event) {

     event.preventDefault()

    let sortedPrice=products.sort((a,b)=>{
        return parseInt(a.price) - parseInt (b.price);
    });

    productDisplay(sortedPrice)
    alert('Items will be sorted by price from low to high')
    console.log(sortedPrice);

}
// let sortbtn=document.querySelector('[data-sort]')

// //addevent

// inputV.addEventListener("input", () => {
    //   let SearchItem = products.filter((prod) => {
        //     return prod.name.toLowerCase().includes(inputV.value.toLowerCase());
        //   });
        //   if (SearchItem) {
            //     productDisplay(SearchItem);
            //   }
            // });
            
 //search function
 let inputV=document.querySelector('[data-input]')
function find() {
    let findItem =document.querySelector('[data-input]').value.toLowerCase()
    
    let searchFilter=products.filter(item=>{
        return item.name.toLowerCase().includes(findItem)
    });
    productDisplay(searchFilter)

}
inputV.addEventListener('keyup',find)
// let searchbtn=document.querySelector('[data-search]')
// searchbtn.addEventListener('click',function () {
//     alert('Item searched will be displayed')
//     find()
    
// })


let loader=document.querySelector('[data-spinner]')
// function spinnerhide() {
//     loader.style.display="none"
// }

if (products.length===0) {
    items.innerHTML=`
    *<div class="d-flex justify-content-center">
    <div class="spinner-border p-5 " id="spinner"  role="status">
      <span class="visually-hidden" data-spinner>Loading...</span>
    </div>
  </div>`
}else{
    productDisplay(products)
}

  
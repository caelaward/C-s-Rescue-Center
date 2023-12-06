// let products=[]

// function ProdCon(name,description,price,url) {
//     this.name=name,
//     this.description=description,
//     this.price=price,
//     this.url=url 
// }

// let p1=new ProdCon('Collars', 'Custom made collars with your dogs name on' , 75 , "https://i.postimg.cc/DZ6Kh469/img10.jpg")
// let p2=new ProdCon('Teddy', 'Fluffy pink bunny ' , 50 , "https://i.postimg.cc/DZ6Kh469/img10.jpg")
// let p3=new ProdCon('Teddy', 'Fluffy pink bunny' , 50,"https://i.postimg.cc/DZ6Kh469/img10.jpg" )
// let p4=new ProdCon('Teddy', 'Cat collars' , 50 ,"https://i.postimg.cc/5NjzGZS3/img12.jpg" )
// let p5=new ProdCon('Teddy', 'Fluffy pink bunny ' , 50 , "https://i.postimg.cc/Pr4yXrzW/img9.jpg")
// let p6=new ProdCon('Teddys', ' ' , 50 , "https://i.postimg.cc/Pr4yXrzW/img9.jpg")

// products.push(p1,p2,p3,p4,p5,p6)

// localStorage.setItem('products',JSON.stringify(products))
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
                                    
                                    function productDisplay(){
                                        let p = products.map(function(item,index) {
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
productDisplay()

let compPrice= (a,b)=> {
        return a.price-b.price;  
    }
    
    let sortedPrice=products.sort(compPrice)
    
    console.log(sortedPrice);
    
    
// function sortPrice() {
//     let sortedPrice=products.sort((a,b)=>{
//         return parseInt(a.price) - parseInt (b.price);
//     })
//     productDisplay(sortedPrice)
// }
// let sortbtn=document.querySelector('[data-sort]')
//  sortbtn.addEventListener('click', sortPrice )
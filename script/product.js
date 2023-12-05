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


    
    let calla=products.map(function (item,index) {
        return `
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
    }).join('')
    items.innerHTML=calla


let searchbtn=document.querySelector('[data-search]')
let inputV=document.querySelector('[data-input]')
let sortbtn=document.querySelector('[data-sort]')



sortbtn.addEventListener('click', function ( ) {
    
    products.sort(function(a,b){
        if (a.price < b.price) {
            return -1;
          } else if(a.price>b.price){
            return 1
          }
    })
})


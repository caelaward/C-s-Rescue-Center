let products=[]//empty array to push obj into

//create const function to create products/obj
function ProdCon(name,description,price,url) {
    this.name=name,
    this.description=description,
    this.price=price,
    this.url=url 
}
//creating different objs/products 
let p1=new ProdCon('Collars', 'Custom made collars with your dogs name on' , 75 , "https://i.postimg.cc/DZ6Kh469/img10.jpg")
let p2=new ProdCon('Teddy', 'Fluffy pink bunny ' , 50 , "https://i.postimg.cc/DZ6Kh469/img10.jpg")
let p3=new ProdCon('Teddy', 'Fluffy pink bunny' , 20,"https://i.postimg.cc/DZ6Kh469/img10.jpg" )
let p4=new ProdCon('Teddy', 'Cat collars' , 50 ,"https://i.postimg.cc/5NjzGZS3/img12.jpg" )
let p5=new ProdCon('Teddy', 'Fluffy pink bunny ' , 10 , "https://i.postimg.cc/Pr4yXrzW/img9.jpg")
let p6=new ProdCon('Teddys', ' ' , 30 , "https://i.postimg.cc/Pr4yXrzW/img9.jpg")
//pushing objs into empty array
products.push(p1,p2,p3,p4,p5,p6)
//storing objs in local storage as string
localStorage.setItem('products',JSON.stringify(products))
//get items back removing string
products=JSON.parse(localStorage.getItem('products'))

let display=document.querySelector('[data-table]')
function tableDisplay(){
    let p = products.map(function(item,index) {
        console.log(item); 
        console.log(index);
        return`
        <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Description</th>
          <th scope="col">price</th>
          <th scope="col">img</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${item.name}</td>
          <td>${item.description}</td>
          <td>${item.price}</td>
          <td><img src="${item.url}" id="img-table"></td>
          <td><button>X</button></td>
          <td><button>Edit</button></td>
          </tr>
    <tbody>


            `
    })
    //join will join the trs together 
    display.innerHTML=p.join('')
}
tableDisplay()//will ensure that the function still running
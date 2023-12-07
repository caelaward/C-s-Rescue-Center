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
            <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col">Description</th>
          <th scope="col">price</th>
          <th scope="col">img</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>${index+1}</td>
          <td>${item.name}</td>
          <td>${item.description}</td>
          <td>${item.price}</td>
          <td><img src="${item.url}" id="img-table"></td>
          <td><button class="delete" value=${index}>X</button></td>
          <td><button>Edit</button></td>
          </tr>
    <tbody>


            `
    })
    //join will join the trs together 
    display.innerHTML=p.join('')
}
tableDisplay()//will ensure that the function still running

let deleteButton=document.querySelector('.delete')
display.addEventListener('click',function () {
    //event.target will pick up anything clicked inside the parent tag (from the children)
    if(event.target.classList.contains('delete')) {
        //event.target is the button
        removeP(event.target.value) //passing value set to button
        alert("Are you sure you want to delete this item")
    }

})

function removeP(position) {
    products.splice(position,1)//right now event.target and positionhas the same value
    updateData()//function to set data and get it
    tableDisplay()//function to view.. function to loop through array

}

function updateData() {
    localStorage.setItem('products',JSON.stringify(products))
    products=JSON.parse(localStorage.getItem('products'))
}



  

let modal = new bootstrap.Modal(document.querySelector('.modal')); // Initialize the modal
let addbtn=document.querySelector('[data-addbtn]')
addbtn.addEventListener('click',function () {

  modal.show();
})

let savebtn=document.querySelector('[data-savebtn]')

savebtn.addEventListener('click', something )
 function something() {
  alert('nbiunwdjnfjn')
  let input1=document.querySelector('[data-input1]').value
  let input2=document.querySelector('[data-input2]').value
  let input3=document.querySelector('[data-input3]').value
  let input4=document.querySelector('[data-input4]').value
  let newObj= new ProdCon(input1,input2,input3,input4)
  console.log(newObj);
  products.push(newObj)
  updateData()
  // localStorage.setItem('products',JSON.stringify(products))
  tableDisplay()
}
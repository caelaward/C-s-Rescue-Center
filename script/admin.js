let products=[]//empty array to push obj into

//create const function to create products/obj
function ProdCon(name,description,price,url) {
    this.name=name,
    this.description=description,
    this.price=price,
    this.url=url 
}

//creating different objs/products 
let p1=new ProdCon('Custom Collars', 'Custom made collars with your dog or cats name on' , 70 , "https://i.postimg.cc/DZ6Kh469/img10.jpg")
let p2=new ProdCon('Dog Harness', 'Different colour harness , any size available' , 60,"https://i.postimg.cc/28khFCwK/dog-harness.webp" )
let p3=new ProdCon('Cat printed Collars', 'Different colour collars with cat image printed on it. ' , 45 , "https://i.postimg.cc/5NjzGZS3/img12.jpg")
let p4=new ProdCon('Rope lead', 'Different colour rope material lead' , 50 ,"https://i.postimg.cc/L5KXC3LT/rope-leash.jpg" )
let p5=new ProdCon('Leather lead', 'Different colour waterproof lead ' , 75 , "https://i.postimg.cc/q7KHbVLP/leather-lead.jpg")
let p6=new ProdCon('Cat bed', 'Comfy cat beds comes in various sizes and colours. Price varies depending on bed size starting at R60 for small acnd R200for L ' , 60 , "https://i.postimg.cc/yY9mw9BD/cat-bed.webp")
let p7=new ProdCon('Chew Toy combo', 'Rainbow Ball, Paw Bone, 2 Knot Rope, Puppy Ball, Rope Ball, Ball with Handle ' , 55 , "https://i.postimg.cc/Dw2JcPKh/chew-toy-img.jpg")
let p8=new ProdCon('Cat toy combo', ' Cat Sequin Feather StickToys,Plush Mouse Toy,Sisal Mouse Toy and Feather Mouse Cat' , 55, "https://i.postimg.cc/tCRn3zbj/cat-toy.jpg")
let p9=new ProdCon('Dog bed', 'Comfy dog beds comes in various sizes and colours. Price varies depending on bed size starting at R100 for small acnd R450 for XL ' ,100 ,"https://i.postimg.cc/TYyfvyqb/dog-bed.jpg")
//pushing objs into empty array
products.push(p1,p2,p3,p4,p5,p6,p7,p8,p9)
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
          <td><button class="edit" value=${index} >Edit</button></td>
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
        alert("Item will be deleted")
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

savebtn.addEventListener('click', saveAdded )
 function saveAdded() {
  
  let input1=document.querySelector('[data-input1]').value
  let input2=document.querySelector('[data-input2]').value
  let input3=document.querySelector('[data-input3]').value
  let input4=document.querySelector('[data-input4]').value
  let newObj= new ProdCon(input1,input2,input3,input4)
  // console.log(newObj);
  products.push(newObj)
  updateData()
  // localStorage.setItem('products',JSON.stringify(products))
  tableDisplay()
}

let editButton=document.querySelector('.edit')
display.addEventListener('click',function () {
    //event.target will pick up anything clicked inside the parent tag (from the children)
    if(event.target.classList.contains('edit')) {
        //event.target is the button
        // removeP(event.target.value) //passing value set to button
        // alert("Item will be edited")
        editFunction(event.target.value)

       
    }
    updateData()

})

function editFunction(index) {
        let input5=document.querySelector('[data-input5]')
        let input6=document.querySelector('[data-input6]')
        let input7=document.querySelector('[data-input7]')
        let input8=document.querySelector('[data-input8]')
        input5.value=products[index].name
        input6.value=products[index].description
        input7.value=products[index].price
        input8.value=products[index].url
    
 document.getElementById('modalEdit').style.display='block'
 document.getElementById('modalEdit').setAttribute('data-index',index)

        
}
// tableDisplay(editFunction) 

function saveEdit() {
  let input5=document.querySelector('[data-input5]').value.trim()
  let input6=document.querySelector('[data-input6]').value.trim()
  let input7=document.querySelector('[data-input7]').value.trim()
  let input8=document.querySelector('[data-input8]').value.trim()
  let position=document.getElementById('modalEdit').getAttribute('data-index')
        products[position].name= input5
        products[position].description=input6
        products[position].price=input7
        products[position].url=input8
    
   updateData()
   editdone() 
   tableDisplay()
}

function editdone() {
  document.getElementById('modalEdit').style.display='none'


}
//sort function
let sortbtn=document.querySelector('[data-sort]')
sortbtn.addEventListener('click', sortPrice )

function sortPrice(event) {

     event.preventDefault()

    let sortedPrice=products.sort((a,b)=>{
        return parseInt(a.price) - parseInt (b.price);
    });

    tableDisplay(sortedPrice)
    alert('Items will be sorted by price from low to high')
    console.log(sortedPrice);

}  

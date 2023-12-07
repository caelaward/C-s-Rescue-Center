cart=JSON.parse(localStorage.getItem('cart'))
let totalDis=document.querySelector('[data-total]')
let displayCheckout=document.querySelector('[data-checkout]')
let total=0
let arr=[]//to catch the doubled item selected.
function checkoutDisplay(){
    let p = cart.map(function(item,index) {
        // takes items price and adds it 
        total += +item.price ;
    
        return`
        <thead>
        <tr>
        <th scope="col"></th>
        <th scope="col">Item</th>
        <th scope="col">Description</th>
        <th scope="col">price</th>
        <th scope="col">img</th>
        <th scope="col">Quantity</th>
        <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>R${item.price}</td>
        <td><img src="${item.url}" id="img-table"></td>
        <td><input type="number" class="w-25" ></td>
        <td><button class="delete" value=${index}>X</button></td>
        </tr>
        <tbody>
        
        
        
        `
    })
    //displays the item price
    totalDis.textContent = `R${total}`
    // join will join the trs together 
    displayCheckout.innerHTML=p.join('')
}
checkoutDisplay()//will ensure that the function still running



let deleteButton=document.querySelector('.delete')

displayCheckout.addEventListener('click',function () {
    //event.target will pick up anything clicked inside the parent tag (from the children)
    if(event.target.classList.contains('delete')) {
        //event.target is the button
        removeP(event.target.value) //passing value set to button
        alert("Are you sure you want to delete this item")
    }

})

function removeP(position) {
    cart.splice(position,1)//right now event.target and position has the same value
    updateData()//function to set data and get it data
    checkoutDisplay()//function to view.. function to loop through array

}
 
//catches any errors when adding to local storage or trying to get items
function updateData() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
        cart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
        console.error('Error in updateData:', error);
    }
}

cart=JSON.parse(localStorage.getItem('cart'))

let displayCheckout=document.querySelector('[data-checkout]')
function checkoutDisplay(){
    let p = cart.map(function(item,index) {
        // console.log(item); 
        // console.log(index);
        return`
        <thead>
        <tr>
            <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col">Description</th>
          <th scope="col">price</th>
          <th scope="col">img</th>
          <th scope="col">Q</th>
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
          <td></td>
          <td><button class="delete" value=${index}>X</button></td>
          </tr>
    <tbody>

       

            `
    })
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
    cart.splice(position,1)//right now event.target and positionhas the same value
    updateData()//function to set data and get it
    checkoutDisplay()//function to view.. function to loop through array

}

function updateData() {
    localStorage.setItem('cart',JSON.stringify(cart))
    cart=JSON.parse(localStorage.getItem('cart'))
}


// function removeDuplicates(cart) {
//     let unique = [];
//     cart.forEach(item => {
//         if (!unique.includes(item)) {
//             unique.push(item);
//         }
//     });
//     return unique;
// }

// removeDuplicates(cart)


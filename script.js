const output = document.querySelector('.output')
let arr = []
let blink = '';

function textarea(text) {
    arr = text.split(',') //taking values form input field & spliting the text wherever ',' is there
    arr.map(val => {
        return parseInt(val)//converting text values to intger values
    })
    console.log("this is new array int-values", arr)

}
function carddesign(val) {
    let box = document.createElement('div')
    box.classList.add('box')
    box.classList.add('text-center')
    // if (blink == val) {

    //     box.classList.add('blink')

    //     setTimeout(timmer, 3000);

    //     function timmer() {
    //         box.classList.remove('blink')
    //     }

    // }
    box.innerHTML = val

    output.appendChild(box)
}
function checkChildren() {
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
}
function traverse() {
    if (textarea == undefined) {
        alert('plz insert values')//display the text if input box is empty==undefined
    }
    else {
        console.log(arr)
        console.log(arr.length)
        for (var i = 0; i < arr.length; ++i) {//running the loop for checking the value of array
            carddesign(arr[i])// And now creating the card of array values
        }

    }
}
function insertion() {
    const insertpos = prompt("At what postion you want to insert") //giving position for value


    var insertval = prompt("what value you want insert") //giving the value

    //postion of value| del 0|value to insert
    //                ^|   ^  |   ^
    arr.splice(insertpos - 1, 0, insertval)

    checkChildren()//clear the previous array

    for (var i = 0; i < arr.length; ++i) {// Again creating card for new array
        if (insertval == arr[i]) {  //if searchval is not-equal to arr value then
            blink = arr[i]
            carddesign(arr[i])


        } else {
            carddesign(arr[i])//And now creating the card of new array value

        }

    }
    console.log("new array after insertion", arr)



}
function search() {
    var searchVal = prompt("which value should be search")
    console.log(searchVal)//taking search value from user

    for (var i = 0; i < arr.length; ++i) { //running the loop for checking the value of arr 

        if (searchVal != arr[i]) {  //if searchval is not-equal to arr value then

            checkChildren() // clear the output screen


            var err = document.createElement('p')//creating p tag which contains error msg

            err.innerText = "The Search value is not fuond"//error msg

            output.appendChild(err);// display error text in output


        }
        else { //if searchval is equal to arr value then

            checkChildren() //clear the output screen

            carddesign(arr[i])// And now creating the card of search value
            break
            // var err=document.createElement('p')//creating p tag which contains error msg

            //   err.innerText="The Search value is not fuond"//error msg

            //  output.appendChild(err);// display error text in output

        }

    }

}
function deletee() {

       let delpos = prompt("what value you want delete") //giving the value
    delpos = arr.indexOf(delpos)
    console.log("index value",delpos)
    for (var i = 0; i < arr.length; ++i){
        
    if (delpos == arr[i]) {

        //postion of value| deleting one item|
        //                ^|   ^  
        arr.splice(delpos, 1,)

        checkChildren()//clear the previous array

        for (var i = 0; i < arr.length; ++i) {// Again creating card for new array
            carddesign(arr[i])//And now creating the card of new array value
        }

    }else{
        alert("enter the correct number")
        break
    }}





    console.log("new array after deletion", arr)


}

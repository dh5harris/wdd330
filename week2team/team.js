

function footer_date(){
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}



// function add_numbers(number){
//     let total = 0;
//     let done = false;

//     while(!done){
//         total += number
//         number = number - 1

//         if(number == 0){
//             done = true
//             return total
//         }

//     }
// }


// function sum (input1, input2) {
//     return input1 + input2
// }



function getInput(){

    let input = document.getElementById('userinput').value;


    let number = parseFloat(input)

    let total = total_num(number)

    document.getElementById('output').textContent = `Total: ${total}`;
}

function total_num(number)
{
    let total = 0;
    for(let i = number; i >= 0; i--)
    {
        total += i;
    }
    return total;
}

function getSum(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let sum = num1 + num2;

    document.getElementById('total_sum').textContent = `Sum: ${sum}`;


}


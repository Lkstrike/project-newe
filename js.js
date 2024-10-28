function my_add(){
    var first_number = document.getElementById("first_number").value;
    first_number = parseInt(first_number);
    // parseFloat() function ist auch verhanden
    var second_number = document.getElementById("second_number").value;
    second_number = parseInt(second_number);
    window.alert(first_number+second_number);
 }
 function my_minus(){
    var first_number = document.getElementById("first_number").value;
    first_number = parseInt(first_number);
    // parseFloat() function ist auch verhanden
    var second_number = document.getElementById("second_number").value;
    second_number = parseInt(second_number);
    window.alert(first_number - second_number);

 }

 function my_multiple() {
    var first_number = document.getElementById("first_number").value;
    first_number = parseFloat(first_number);
    var second_number = document.getElementById("second_number").value;
    second_number = parseFloat(second_number);
    window.alert(first_number * second_number);
}

function my_divide() {
    var first_number = document.getElementById("first_number").value;
    first_number = parseFloat(first_number);
    var second_number = document.getElementById("second_number").value;
    second_number = parseFloat(second_number);
    window.alert(first_number / second_number);
}
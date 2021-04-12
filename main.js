p1 =[];
p2 =[];

function get_Paragraph1(){
    p1 = [
        document.getElementById("para1_input1").value + 
        document.getElementById("para1_input2").value +
        document.getElementById("para1_input3").value +
        document.getElementById("para1_input4").value +
        document.getElementById("para1_input5").value +
        document.getElementById("para1_input6").value];
    document.getElementById("para1").innerHTML = p1;
};
function get_Paragraph2(){
    p2 = [
        document.getElementById("para2_input1").value + 
        document.getElementById("para2_input2").value +
        document.getElementById("para2_input3").value +
        document.getElementById("para2_input4").value +
        document.getElementById("para2_input5").value +
        document.getElementById("para2_input6").value];
    document.getElementById("para2").innerHTML = p2;
};




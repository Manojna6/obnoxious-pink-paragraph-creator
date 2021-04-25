var inputs = [];
var inputs1 = [];

function get_Paragraph1(){
    for(var i=1; i<=6 ; i++)
    {
        inputs.push(document.getElementById("para1_input"+i).value);
        document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
    }
};
function get_Paragraph2(){
    for(var i=1; i<=6 ; i++)
    {
        inputs1.push(document.getElementById("para2_input"+i).value);
        document.getElementById("showParagraph2").innerHTML = inputs1.join(". ");
    }
};

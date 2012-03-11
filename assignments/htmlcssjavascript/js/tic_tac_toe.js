var cell_flag = '';
function place_holder(cell_id)
{
    if ('X' == cell_flag)
        cell_flag = 'O';
    else
        cell_flag = 'X';
    cell_id.innerHTML = cell_flag;

    var cell_one=document.getElementById("cell_one").innerHTML;
    var cell_two=document.getElementById("cell_two").innerHTML;
    var cell_three=document.getElementById("cell_three").innerHTML;
    var cell_four=document.getElementById("cell_four").innerHTML;
    var cell_five=document.getElementById("cell_five").innerHTML;
    var cell_six=document.getElementById("cell_six").innerHTML;
    var cell_seven=document.getElementById("cell_seven").innerHTML;
    var cell_eight=document.getElementById("cell_eight").innerHTML;
    var cell_nine=document.getElementById("cell_nine").innerHTML;

    if (cell_one=="X" && cell_two=="X" && cell_three=="X")
    {
        alert(" X is Win");
        location.reload();
    }
    if (cell_four=="X" && cell_five=="X" && cell_six=="X")
    {
        alert(" X is Win")
        location.reload();
    }
    if (cell_seven=="X" && cell_eight=="X" && cell_nine=="X")
    {
        alert(" X is Win")
        location.reload();
    }
    if (cell_one=="X" && cell_four=="X" && cell_seven=="X")
    {
        alert(" X is Win")
        location.reload();
    }
    if (cell_two=="X" && cell_five=="X" && cell_eight=="X")
    {
        alert(" X is Win")
        location.reload();
    }
    if (cell_three=="X" && cell_six=="X" && cell_nine=="X")
    {
        alert(" X is Win")
        location.reload();
    }
    if (cell_one=="X" && cell_five=="X" && cell_nine=="X")
    {
        alert(" X is Win")
        location.reload();
    }
    if (cell_three=="X" && cell_five=="X" && cell_seven=="X")
    {
        alert(" X is Win")
        location.reload();}
    if (cell_one=="O" && cell_two=="O" && cell_three=="O")
    {
        alert(" O is Win")
        location.reload();
    }
    if (cell_four=="O" && cell_five=="O" && cell_six=="O")
    {
        alert(" O is Win")
        location.reload();
    }
    if (cell_seven=="O" && cell_eight=="O" && cell_nine=="O")
    {
        alert(" O is Win")
        location.reload();
    }
    if (cell_one=="O" && cell_four=="O" && cell_seven=="O")
    {
        alert(" O is Win")
        location.reload();
    }
    if (cell_two=="O" && cell_five=="O" && cell_eight=="O")
    {
        alert(" O is Win")
        location.reload();}
    if (cell_three=="O" && cell_six=="O" && cell_nine=="O")
    {
        alert(" O is Win")
        location.reload();
    }
    if (cell_one=="O" && cell_five=="O" && cell_nine=="O")
    {
        alert(" O is Win")
        location.reload();}
    if (cell_three=="O" && cell_five=="O" && cell_seven=="O")
    {
        alert(" O is Win")
        location.reload();
    }
    if (cell_one!="" && cell_two!="" && cell_three!="" && cell_four!="" && cell_five!="" && cell_six!="" &&  cell_seven!="" && cell_eight!="" && cell_nine!="")
    {
        alert("Game is Over......!!")
        location.reload();
    }
} // End of place_holder(cell_id) function

function ChessBoard() {
    var temp = 1; var html_table = '<center ><table border="0" cellspacing="0">'
    for(var i=0; i<8; i++)
    {
        temp+=1;
        if(temp>1)
            temp=0;
        html_table += '<tr>'
        for(var j=0; j<8; j++)
        {
            var color = 'white'; temp += 1;
            if(temp>1)
            {
                var color = 'black'; temp = 0;
            }
            html_table += '<td class="'+color+'"></td>'
        }
        html_table += '</tr>'
    }
    html_table +='</table>'
    document.write(html_table)
}
ChessBoard()

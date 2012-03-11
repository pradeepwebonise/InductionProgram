function ChessBoard() {
    var temp = 1; var html_table = '<center ><div style="width:460px;">'
    for(var i=0; i<8; i++)
    {
        temp+=1;
        if(temp>1)
            temp=0;
        html_table += '<div>'
        for(var j=0; j<8; j++)
        {
            var color = 'white'; temp += 1;
            if(temp>1)
            {
                var color = 'black'; temp = 0;
            }
            html_table += '<div class="'+color+'"></div>'
        }
        html_table += '</div>'
    }
    html_table +='</div>'
    document.write(html_table)
}
ChessBoard()

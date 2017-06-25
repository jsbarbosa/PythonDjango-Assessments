var player1 = prompt("Player one: Enter your name, you will be blue")
var player2 = prompt("Player two: Enter your name, you will be red")

var color1 = "blue";
var color2 = "red";
var color = color1;
var turn = 0;

var table = $('table tr');
var buttons = $('button');
var columns = {0: 5, 1:5, 2:5, 3:5, 4:5, 5:5, 6:5}

function setText(player)
{
    var player_text = ": it is your turn, please pick a column to drop your";
    var text = "";
    if (player == 1)
    {
        text = player1 + player_text + " " + color1 + " chip."
    }
    else
    {
        text = player2 + player_text + " " + color2 + " chip."
    }
    $('h3').text(text)
}

function changeColor(column)
{
    var row = columns[column];
    if (turn%2 == 0)
    {
        color = color1;
    }
    else
    {
        color = color2;
    }
    setText(turn%2);
    table.eq(row).find('td').eq(column).find('button').css('background-color',color);
    columns[column] -= 1;
    turn += 1;
}

function colorCheck(first, second, third, fourth)
{
    if (first == second && first == third && first == fourth)
    {
        return true;
    }
    return false;
}

function getColor(row, col)
{
    return table.eq(row).find('td').eq(col).find('button').css('background-color');
}

function fadeCell(i, color, time)
{
    setTimeout(function(){
        buttons.eq(i).css('background-color', color)}, time)
}

function effect(color)
{
    console.log(buttons.length);
    for (var i=0; i < buttons.length; i++)
    {
        fadeCell(i, color, i*50);
    }
    setTimeout(function(){
        buttons.fadeOut(3000)}, (buttons.length + 1)*50)
}

function endGame()
{
    var player;
    var color;
    if(turn%2 == 1)
    {
        player = player1;
        color = color1;
    }
    else
    {
        player = player2;
        color = color2;
    }
    $('h1').text('Congratulations ' + player + ' you have won!');
    $('h2').text('Please restart the browser to restart game.');
    $('h3').text('');
    effect(color);
}

function verifyHorizontal()
{
    var answer;
    var color;
    for (var row = 0; row < 6; row++)
    {
        for (var col = 0; col < 4; col++)
        {
            color = getColor(row, col);
            answer = colorCheck(color,
                getColor(row, col + 1),
                getColor(row, col + 2),
                getColor(row, col + 3))
            if (answer && color != "rgb(128, 128, 128)")
            {
                return true;
            }
        }
    }
    return false;
}

function verifyVertical()
{
    var answer;
    var color;
    for (var col = 0; col < 7; col++)
    {
        for (var row = 0; row < 3; row++)
        {
            color = getColor(row, col);
            answer = colorCheck(color,
                getColor(row+1, col),
                getColor(row+2, col),
                getColor(row+3, col))
            if (answer && color != "rgb(128, 128, 128)")
            {
                return true;
            }
        }
    }
    return false;
}

function verifyDiagonal()
{
    var answer;
    var color;
    for (var col = 0; col < 5; col++)
    {
        for (var row = 0; row < 7; row++)
        {
            color = getColor(row, col);
            answer = colorCheck(color,
                getColor(row+1, col+1),
                getColor(row+2, col+2),
                getColor(row+3, col+3));
            if (answer && color != "rgb(128, 128, 128)" && color != undefined)
            {
                return true;
            }
            else
            {
                answer = colorCheck(color,
                    getColor(row-1, col+1),
                    getColor(row-2, col+2),
                    getColor(row-3, col+3))
                if (answer && color != "rgb(128, 128, 128)")
                {
                    return true;
                }
            }
        }
    }
    return false;
}

function clicked()
{
    var col = $(this).closest("td").index();
    changeColor(col);

    if (verifyVertical() || verifyHorizontal() || verifyDiagonal())
    {
        endGame();
    }
}

setText(1);

buttons.on('click', clicked);

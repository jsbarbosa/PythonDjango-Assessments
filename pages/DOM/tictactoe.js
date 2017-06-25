var button = document.querySelector("button")
var table_cells = document.querySelectorAll("td")

function clear_cells()
{
    for (cell of table_cells)
    {
        cell.textContent = ""
    }
}

function put_marker()
{
    if (this.textContent == "")
    {
        this.textContent = "X"
    }
    else if (this.textContent == "X")
    {
        this.textContent = "O"
    }
    else
    {
        this.textContent = ""
    }
}

for (cell of table_cells)
{
    cell.addEventListener("click", put_marker)
}

button.addEventListener("click", clear_cells)

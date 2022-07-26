const container = document.querySelector('#container');

function createPage() {
    const rows = createGrid();
    const button = document.createElement('button');
    button.innerText = 'Change Grid Size';
    container.insertBefore(button, rows);
    button.addEventListener('click', () => {
        changeSize()
    })
};


function createGrid(rowLines=16) {
    const rows = document.createElement(`div`);
    rows.className += ('rows')

    for (i=1; i<=rowLines; i++){
        const row = document.createElement(`div`);
        row.className += ('row');
        for (j=1; j<=rowLines; j++){
            const square = document.createElement(`div`);
            square.className += ('square');
            row.appendChild(square);
            square.addEventListener('mouseover', function(event) {
                square.style.backgroundColor= 'black';
                console.log('hover')
            })
        }
        rows.appendChild(row)

    }
    container.appendChild(rows)
    return rows
}

function changeSize() {
    let rows = document.querySelector('.rows')
    let userResponse = 0;
    while ((userResponse<1 || userResponse>100) && userResponse!=null){
        userResponse = prompt('What size grid would you like (1-100)')
    }
    if (userResponse == null) {
        return
    }else{
        container.removeChild(rows)
        createGrid(userResponse)
    }


}

createPage()





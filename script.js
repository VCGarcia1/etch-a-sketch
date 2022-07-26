const container = document.querySelector('#container');
const rows = document.createElement(`div`);
rows.className += ('rows')
let rowLines=0;

function createGrid(rowLines) {
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
}

while (rowLines<1 || rowLines>100){
    rowLines = prompt('What size grid would you like (1-100)')
}

createGrid(rowLines)





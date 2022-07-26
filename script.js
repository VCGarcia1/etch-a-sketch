const container = document.querySelector('#container');
const rows = document.createElement(`div`);
rows.className += ('rows')
let rowLines = 16;

for (i=1; i<=rowLines; i++){
    const row = document.createElement(`div`);
    row.className += ('row');
    for (j=1; j<=rowLines; j++){
        const square = document.createElement(`div`);
        square.className += ('square');
        row.appendChild(square);
    }
    rows.appendChild(row)

}
container.appendChild(rows)
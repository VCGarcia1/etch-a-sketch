let container = document.querySelector('#container');
let mode = 'black'
let rowLines = 16

function createPage() {
    container.innerText= ''
    const rows = createGrid();
    const buttonSize = document.createElement('button');
    buttonSize.className+='button-size'
    buttonSize.innerText = 'Change Grid Size';
    container.insertBefore(buttonSize, rows);
    buttonSize.addEventListener('click', () => {
        changeSize()
    })

    createColorButtons()


};

function createColorButtons(){
    let squares = document.querySelectorAll('.square')
    const buttonColors = document.createElement('div');
    buttonColors.className+='button-colors';

    const buttonBlack = document.createElement('button');
    buttonBlack.className+='button-color';
    buttonBlack.innerText = 'Black';
    buttonColors.appendChild(buttonBlack);
    buttonBlack.addEventListener('click', () => {
        mode = 'black'
        createPage()
    })

    const buttonRainbow = document.createElement('button');
    buttonRainbow.className+='button-color';
    buttonRainbow.innerText = 'Rainbow';
    buttonColors.appendChild(buttonRainbow);

    const buttonModern = document.createElement('button')
    buttonModern.className+='button-modern'
    buttonModern.innerText = 'Modern'
    buttonColors.appendChild(buttonModern)

    container.appendChild(buttonColors);

    buttonBlack.addEventListener('click', () => {
        mode = 'black'
        createPage()
    })

    buttonRainbow.addEventListener('click', () => {
        mode = 'rainbow'
        createPage()
    })
    
    buttonModern.addEventListener('click', () => {
        mode = 'modern'
        createPage()
    })
}


function createGrid() {
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
                const color = (mode=='black' || mode=='modern') ? 'black' : getRandomColor()
                square.style.backgroundColor= color;
                if (mode=='modern') {
                    let opacity = this.style.opacity;
                    this.style.opacity = opacity ? (parseFloat(opacity) + 0.1) : 0.1;
                }
            })
        }
        rows.appendChild(row)

    }
    container.appendChild(rows)
    return rows
}

function getRandomColor() {
    const colors = ['#760EF4', '#34EBFF', '#00D51B', '#FFED00', '#FB9C01', '#DF3100']
    const color = colors[Math.floor(Math.random() * 6)]
    return color
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
        rowLines = userResponse
        createPage()
    }

    function resetPage(){

    }

}

createPage()





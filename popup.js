document.querySelector('div').addEventListener('click', btntgl)

function btntgl(){
    document.querySelector('.moon').classList.toggle('hidden')
    document.querySelector('.sun').classList.toggle('hidden')

    document.querySelector('body').classList.toggle('darkBG')
    document.querySelector('div').classList.toggle('btndark')
    document.querySelector('section').classList.toggle('bodydark')
    document.querySelector('h1').classList.toggle('textDark')
    document.querySelector('h2').classList.toggle('textDark')

    let pArr = document.querySelectorAll('p')

    for(let i = 0; i<pArr.length; i++){
        pArr[i].classList.toggle('textDark')
    }
}
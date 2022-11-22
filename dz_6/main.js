const arg = document.getElementById('input')
const text = document.getElementById('p')
const add = document.getElementById('button')
const reverseText = () => {
    if (arg.value === ''){
        return false;
    } else {
        text.innerText = arg.value.split('').reverse().join('');
        arg.value = ''
    }
}
add.addEventListener('click',reverseText)
arg.addEventListener('keydown', e => e.keyCode === 13 ? reverseText() : false)
const lightBtn = document.getElementById('light');
const darkBtn = document.getElementById('dark');
const solarizeBtn = document.getElementById('solarize');
const body = document.body;

const theme = localStorage.getItem('theme');
const isSolarize = localStorage.getItem('isSolarize');

if(theme){
    body.classList.add(theme);
    isSolarize && body.classList.add('solarize');
}

lightBtn.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
}

darkBtn.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');

}

solarizeBtn.onclick = () => {
    if(body.classList.contains('solarize')) {
        body.classList.remove('solarize');
        solarizeBtn.style.cssText = `
            --bg-solar: var(--yellow);
        `
        solarizeBtn.innerText = 'Solarize';

        localStorage.removeItem('isSolarize');
    } else {
        solarizeBtn.style.cssText = `
            --bg-solar: white;
        `
        
        body.classList.add('solarize');
        localStorage.setItem('isSolarize', true);
    }
}
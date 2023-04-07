const menu = () => {
    let menu = document.querySelector('.menu');

    if(menu.style.display === 'block'){
        menu.style.display = 'none';
        return;
    }
    menu.style.display = 'block';
}
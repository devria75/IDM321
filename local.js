{
    const btnSetLocal = document.getElementById('btnSetLocal');

    function handleSetLocal(){
        const inputName = document.getElementById('name');
        consolde.log(inputName.value);

        localStorage.setItem('IDM222LocalName', inputName, false);
    }

    btnSetLocal.addEventListener('click', handleSetLocal, false);
}
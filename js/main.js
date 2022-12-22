async function buscaConselhoAPI() {
    var consultaConselhoAPI = await fetch("https://api.adviceslip.com/advice");

    var consultaConselhoAPIConvertida = await consultaConselhoAPI.json();

    const idConselho = document.getElementById('idConselho');    
    const conselho = document.getElementById('conselho');

    idConselho.value = consultaConselhoAPIConvertida.slip.id;
    conselho.value = consultaConselhoAPIConvertida.slip.advice;   
        
    document.getElementById('botaoDado').addEventListener('click', function(chamaConselho){
        chamaConselho.preventDefault();
        idConselho.innerText =' # ' + idConselho.value
        conselho.innerText = conselho.value

        buscaConselhoAPI();
        
        })
}

buscaConselhoAPI();


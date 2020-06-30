
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")// vai no endereço dessa api e traz todos os dados
        .then(res => res.json() ) //Essa função anonima diz que se a fetch que é uma promess retornar algo ENTÃO a função vai receber um res e transformar em uma Json()
        .then(states => { // com o resultado em JSON e utiliza ele colocando. 

            for (state of states) { //um for normal onde uma const state roda até atingir a quantidade que tem em state 
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs()

function getCities (event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=city]")

    
    const ufValue = event.target.value //o target pega as informações enquanto o value apenas o valor 

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
        .then(res => res.json())
        .then(cities => {

            for(city of cities) {
                citySelect.innerHTML += `<option value = "${city.id}">${city.nome}</option>`
            }

            citySelect.disabled = false
            
        })

}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities) // o ouvidor de eventos foi configurado para quando acontecer alguma mudaça 
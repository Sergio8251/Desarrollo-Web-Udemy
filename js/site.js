
//let saludo = 'Hola mundo, desde una variable'

// const Load = (mensaje) => console.log(mensaje); 

class Country {
    constructor(pais) {
        this.flag = pais.flag;
        this.name = pais.name;
        this.region = pais.region;
    }
}

const getCountry = async (name) => {
    const uri = `https://restcountries.com/v2/name/${name}`;
    const resp = await fetch(uri);
    const data = await resp.json();

    let pais = new Country(data[0]);

    let { region } = pais;

    let array = ['Elemento 1', 'Elemento 2', 'Elemento 3']

    let [, , ele] = array

    console.log(ele);

    document.getElementById('pais_name').innerHTML = pais.name;
    document.getElementById('pais_flag').src = pais.flag;
    document.getElementById('pais_region').innerHTML = pais.region;

}

document.addEventListener('DOMContentLoaded', () => {
    const $btn_search = document.getElementById('btn_search');
    $btn_search.addEventListener('click', () => {
        const $pais_input = document.getElementById('pais_input');
        getCountry($pais_input.value);
    });

    getCountry('Chile');
});

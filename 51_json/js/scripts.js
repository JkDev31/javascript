const objs = [
    {
        nome: 'Cleverson',
        idade: 33,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: 'Programador',
            empresa: 'Empresa X',
        },
        hobbies: [
            'Programar',
            'Assistir séries',
            'Comer'
        ],
    },
    {
        nome: 'Pedro',
        idade: 20,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: null,
            empresa: null,
        },
        hobbies: [
            'Jogar',
            'Academia',   
        ],  
    },
]

// JSON
// Converter o objeto para json

const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// Converter json para objeto

const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})
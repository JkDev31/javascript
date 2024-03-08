// criação de promessa

const myPrmomise = new Promise((resolve, reject) => {
    const nome = 'Cleverson'

    if (nome === 'Cleverson') {
        resolve('Usuário Cleverson encontrado!')
    } else {
        reject('Usuário Cleverson nõa foi encontrado!')
    }
})

myPrmomise.then((data) => {
    console.log(data)
})

// Encadeamento de then's

const myPrmomise2 = new Promise((resolve, reject) => {
    const nome = 'Cleverson'

    if (nome === 'Cleverson') {
        resolve('Usuário Cleverson encontrado!')
    } else {
        reject('Usuário Cleverson nõa foi encontrado!')
    }
})

myPrmomise2.then((data) => {
    return data.toLowerCase()
})
.then((stringModificada) => {
    console.log(stringModificada)
})

// Retorno do catch

const myPrmomise3 = new Promise((resolve, reject) => {
    const nome = 'Pedro'

    if (nome === 'Cleverson') {
        resolve('Usuário Cleverson encontrado!')
    } else {
        reject('Usuário Cleverson nõa foi encontrado!')
    }
})

myPrmomise3
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log('Aconteceu um erro: ' + err)
})

// Resolver várias promessas com all

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 ok! Timeout')
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log('Depois do all()') 

// Várias promessas com race 

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P4 ok! Timeout')
    }, 2000)
})
  
const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
})
  
const p6 = new Promise((resolve, reject) => {
      resolve('P6 ok!')
})
  
const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
      console.log(data)
})

// Fetch request na API do GitHub
// Fetch API 

const userName = 'JkDeV31'

fetch(`https://api.github.com/users/${userName}`, {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
})
.then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(`Onome do usuário é: ${data.name}`)
})
.catch((err) => {
    console.log(`Houve algum erro: ${err}`)
})

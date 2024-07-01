// CEP:
const regexpCEP = /\d{5}[-\s]?\d{3}/g

const ceps = [
  '00000-000',
  '00000 000',
  '00000000',
]

for (let cep of ceps) {
  console.log(cep, cep.match(regexpCEP))
}

// CPF:
const regexpCPF = /(?:\d{3}[.-]?){3}\d{2}/g

const cpfs = [
  '000.000.000-00',
  '000-000-000-00',
  '000.000.000.00',
  '000000000-00',
  '00000000000',
]

for (let cpf of cpfs) {
  console.log(cpf, cpf.match(regexpCPF))
}

// CNPJ:
const regexpCNPJ = /\d{2}[.-\s]?(?:\d{3}[.-\s]?){2}\/?\d{4}[.-\s]?\d{2}/g

const cnpjs = [
  '00.000.000/0000-00',
  '00.000.000/0000 00',
  '00-000-000/0000-00',
  '00 000 000/0000 00',
  '00.000.000.0000.00',
  '00.000.000.0000 00',
  '00000000000000',
]

for (let cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexpCNPJ))
}

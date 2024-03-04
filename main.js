const form = document.getElementById('form-contato');
let tbody = document.querySelector('tbody')
let numtelefone = document.querySelector('numero-telefone')



form.addEventListener( 'submit',function (e){
    e.preventDefault();

    let nomeContato = document.getElementById('nome-contato');
    let numTelefone = document.getElementById('numero-telefone');

/* 
    alert(`atividade: ${nomeatv.value} ${notaatv.value}`);
  let linha = `<tr>
               <td>${nomeatv.value}</td>
               <td>${notaatv.value}</td>
               <td>${notaatv.value >= 7 ? imgAprovado:imgReprovado} </td> 
               </tr>`
    tbody.innerHTML = linha        */    
  insertTable(nomeContato.value, numTelefone.value)
  if(notas.length >= 2){
  calculaMedia();
  }
  nomeContato.value = ''
  numTelefone.value = ''
});

function insertTable(nomeContato, numTelefone){

  let table = document.getElementById('tb-agenda');
  linha = table.insertRow(1)
  linha.insertCell(0).innerHTML = nomeContato;
  linha.insertCell(1).innerHTML = numTelefone;


}


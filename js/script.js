var agora = new Date();
var horas = agora.getHours();

if (horas >= 7 && horas <= 12) {
    alert('Bom dia caro leitor(a)')
} else 
    if (horas >= 12 && horas <= 18) {
        alert('Boa tarde caro leitor(a)')
    } else 
        if(horas >= 19 && horas <= 23){
            alert('Boa noite caro leitor(a)')
        } else {
            console.log('Madrugada')
        }

/*function contar(){
    let ini =  document.getElementById('txtinicio');
    let fim =  document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso');
    let msg = document.getElementById('msg');

            
    if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
    } else {
        let i = parseInt(ini.value);
        let f = parseInt(fim.value);
        let p = parseInt(passo.value);

        let c = i + p; // após primeiro passo

         msg.innerHTML = `Contando: <br> ` //início e após primeiro passo

        if(p <= 0){
            alert('Passo inválido! Contando PASSO 1.')
            p=1;
        } else {
            msg.innerHTML += `${i}\u{1F449} ${c}\u{1F449}`
            while(c <= f){ //contagem crescente
            
            c += p
                     
         msg.innerHTML += `${c}\u{1F449}`;

            }
        }
                       
        msg.innerHTML += `\u{1F3C1}` 

        }
     }
}*/

    function contar()  {

      let ini = document.getElementById('txtinicio');
      let fim = document.getElementById('txtfim')
      let passo = document.getElementById('txtpasso')
      let res = document.getElementById('msg')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'

        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p<=0){
            alert('Passo inválido! Considerando PASSO 1');
            p=1;
        }
        if( i< f){ // contagem crescente
            for(let c=i; c<=f; c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }else{ //contagem decrescente
            for(c=i ; c >= f ; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }

        }
            res.innerHTML += ` \u{1F3C1}` //comando fora pra adicionar bandeirinha
            
    }

  }             

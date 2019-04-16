var N = 3;

// int main(){
    var arvore = null;
    arvore = insereValor(arvore,30);
    arvore = insereValor(arvore,20);
    arvore = insereValor(arvore,10);

    arvore = insereValor(arvore,5);
    arvore = insereValor(arvore,7);

    arvore = insereValor(arvore,23);
    arvore = insereValor(arvore,26);
    arvore = insereValor(arvore,29);

    console.log("Ordem");
    imprimirOrdem(arvore);
    console.log("Pos-Ordem");
    imprimirPosOrdem(arvore);
    console.log("Pre-Ordem");
    imprimirPreOrdem(arvore);
    
//}

function imprimirPosOrdem(arv){
    let i;
    if(arv!=null){
        for(i=0;i<arv.qtd+1;i++){
            imprimirPreOrdem(arv.filhos[i]);
        }

        for(i=0;i<arv.qtd;i++){
            console.log("["+arv.valores[i]+"]");
        }
    }
}

function imprimirOrdem(arv){
    let i;
    if(arv!=null){
        for(i=0;i<arv.qtd;i++){
            imprimirPreOrdem(arv.filhos[i]);
            console.log("["+arv.valores[i]+"]");
        }
        imprimirPreOrdem(arv.filhos[i]);
    }
}

function imprimirPreOrdem(arv){
    let i;
    if(arv!=null){
        for(i=0;i<arv.qtd;i++){
            console.log("["+arv.valores[i]+"]");
        }

        for(i=0;i<arv.qtd+1;i++){
            imprimirPreOrdem(arv.filhos[i]);
        }
    }
}

function injetValor(no,vl){
    if(no!=null){
        if(no.qtd<N){
            let i=no.qtd-1;
            while(i>=0){
                no.valores[i+1] = no.valores[i];
                i--;
            }
            no.valores[i+1]=vl;
            no.qtd++;
            return no;
        }
    }
}


function insereValor(arv,vl){
    if(arv==null){
        arv = novoN();
        arv = injetValor(arv,vl);
    }else{
        if(arv.qtd<N){
            arv = injetValor(arv,vl);
        }else{
            let cont=0;
            while(cont < N && vl > arv.valores[cont]){
                cont++;
            }
            arv.filhos[cont] = insereValor(arv.filhos[cont],vl);
        }
    }
    return arv;
}

//Retorna um nó alocado.
function novoN(){
    var no={
        valores:[],
        filhos:[],
        qtd:0
    }
    for(var i=0;i<N;i++){
        no.valores[i] = 0;
        no.filhos[i]=null;
    }
    return no;
}
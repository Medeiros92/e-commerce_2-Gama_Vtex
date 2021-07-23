//=====CLOSE PROMO DIV=====
const close = document.getElementById("closepromo");

    close.addEventListener('click', function() {

        var closeBlock = document.getElementById("blockpromo");

        if(closeBlock.style.display === 'none'){
            closeBlock.style.display = 'block';
        }else{
            closeBlock.style.display = 'none';
        }
    });

//=====SHOW PROMO DIV=====
function showPromodiv(){
    document.getElementById("blockpromo").style.visibility="visible";
} 
    setTimeout("showPromodiv()", 4000);

const btsubpromo = document.getElementById("btpromo");
 

btsubpromo.addEventListener("click", function(){
    const inputemail = document.getElementById("inputemailpromo");
    const email = inputemail.value;
    if(email !== "" ){

            
        localStorage.setItem('email promocao', email);
       
  
        alert('Inscrição Realizada com Sucesso! Em Breve Você Rebecerá Grandes Ofertas em Seu Endereço de Email.');
    }else {
     alert('PREENCHA O CAMPO CORRETAMENTE');
    }

    //Limpa campos ao enviar o formulario
    inputemail = document.getElementById('inputemailpromo').value='';
});

//=====CLOSE/OPEN MENU MOBILE=====
const closeopenmenumob = document.getElementById("grid-mm");

closeopenmenumob.addEventListener('click', () => {

        let menum = document.getElementById("menu-nav");

        if(menum.classList.contains('hide')){
            menum.classList.add('show');
            menum.classList.remove('hide');
        }else{
            menum.classList.add('hide');
            menum.classList.remove('show');
        }
    });

//=====COUNT ADD SACOLA=====
var count = 0;
function addsacola(){
    const countcart = document.querySelector('.count_item');
    count++;
    localStorage.setItem('QtItensSacola', count);
    countcart.innerHTML = count;
}

const countcartPersist = document.querySelector('.count_item');
const qtItens = localStorage.getItem('QtItensSacola');
countcartPersist.innerHTML = qtItens;


//=====RECEBE ID DO BOTAO=====
function getid(id){

    //=====PASSA O ID DO BOTAO PARA VARIAVEL P=====
    const p = id;
    //=====VARIAVEL BT RECEBE O ID DO BOTAO CLICADO=====
    const bt = document.getElementById(`${p}`);
    //=====IDPAI RECEBE O ID PAI DO BOTAO=====
    const idpai = bt.parentNode;
    //=====RECEBE O VALOR DA TAG DA CLASSE PRICE FILHA DO IDPAI=====
    const pricedes  =  idpai.querySelector('.price').innerHTML;
    //=====ALTERA VALORES DOS CARACTERS POR OUTRO=====
    const priceord = pricedes.replace(/<small>/g, "").replace(/small/g, "");
    //=====FATIA A STRING =====
    const price = priceord.slice(0,7);
    const nomeProd = idpai.querySelector('.nome-pod').innerHTML;
    
    //=====PEGANDO DIV PAI DE TODOS OS PRODUTOS=====
    const divPaitodas = idpai.parentNode;
    //=====PEGANDO DIV PAI DA IMAGEM=====
    const divFoto = divPaitodas.querySelector('.imgBx');
    //=====PEGANDO O CAMINHO DA IMAGEM=====
    const foto = divFoto.querySelector('img').src;
    
    
    //=====OBJETO RECEBE OS VALORES DA DIV DO ID PAI SELECIONADO=====
    const produtobj = {
        Item: nomeProd,
        Preço: price,
        Foto: foto
    }

    //=====CONVERTE OBJETO EM ARRAY=====
    const prodserialize = JSON.stringify(produtobj);
    //=====CRIA ARRAY=====
    const qtProdutos = [produtobj];

    //=====INSERE PRODUTOS NO ARRAY ENQUANTO O BOTAO BUY NOW FOR CLICADO=====
   

    

    const varProdutos = JSON.stringify(qtProdutos);

    //=====INSERE O ARRAY NO LOCALSTORAGE=====
    localStorage.setItem('Produto', prodserialize);

    window.location.href ='./pages/carrinho.html'
}
    





    
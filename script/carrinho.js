
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

    //=====PEGA QUANTIDADE DE ITENS NO LOCALSTORAGE=====
    const qtItens = localStorage.getItem('QtItensSacola');
    const countcart = document.querySelector('.count_item');
    countcart.innerHTML = qtItens;

    //=====RECUPERA DADOS DO OBJETO DO LOCALSTORAGE=====
    const itenCarrinho =JSON.parse(localStorage.getItem('Produto'));
    const divprodutos = document.querySelector('.produtos');

    //=====VARRE O OBJETO E COLOCA CADA VALOR EM CADA VARIÁVEL=====
    Object.keys(itenCarrinho).forEach(function(item){
        if(item == 'Item'){
            //=====CRIA TAG NO HTML=====
            var it = document.createElement('p');
            //=====CRIA CLASSE PARA A TAG=====
            it.classList.add('item');
            //=====RECEBE O DADO DO OBJETO=====
            it.textContent = itenCarrinho[item];
            //=====MOSTRA NA TELA=====
            divprodutos.appendChild(it);
        }

        if(item == 'Preço'){
            var price = document.createElement('p');
            price.classList.add('price');
            price.textContent = itenCarrinho[item];
            divprodutos.appendChild(price);
        }

        if(item == 'Foto'){
            var foto = document.createElement('img');
            foto.classList.add('foto');
            foto.src = itenCarrinho[item];
            divprodutos.appendChild(foto);
        }

       });

       var bntcad = document.createElement('button');
       bntcad.classList.add('bntcadastro');
       bntcad.textContent = "Finalizar comprar"
       divprodutos.appendChild(bntcad);

      
       bntcad.addEventListener('click', () =>{

        window.location.href ='cadastro.html'
       });
   



    



    
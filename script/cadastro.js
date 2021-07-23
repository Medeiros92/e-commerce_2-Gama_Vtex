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


  const btnsub = document.querySelector('#submit');

  btnsub.addEventListener('click', () => {
    const nomef = document.querySelector('#nome');
    const sobnomef = document.querySelector('#sobrenome');
    const emailf = document.querySelector('#email');
    const telf = document.querySelector('#telefone');

    if(nomef.value !=='' && sobnomef.value !=='' && emailf.value !=='' && telf.value !==''){
        let nome = nomef.value;
        let sobnome = sobnomef.value;
        let email = emailf.value;
        let tel =  telf.value;
        const clienteobj = {
            Nome: nome,
            Sobrenome: sobnome,
            Email: email,
            Telefone: tel
        };

        //=====CONVERTE OBJETO EM ARRAY=====
        const clientserialize = JSON.stringify(clienteobj);

         //=====INSERE O ARRAY NO LOCALSTORAGE=====
        localStorage.setItem('Cliente', clientserialize);

        alert('PEDIDO REALIZADO COM SUCESSO! Enviaremos para o seu email as informações da compra.');

        window.location.href ='../index.html'
    }else{
        alert('PREENCHA OS CAMPOS CORRETAMENTE');
    }

    //Limpa campos ao enviar o formulario
    nomef = document.querySelector('#nome').value='';
    sobnomef = document.querySelector('#sobrenome').value='';
    emailf = document.querySelector('#email').value='';
    telf = document.querySelector('#telefone').value='';
  });
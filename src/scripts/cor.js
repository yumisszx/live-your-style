document.addEventListener('DOMContentLoaded', () => {
    const btnCor = document.querySelectorAll('.btn-cor');
    const txtCor = document.querySelectorAll('.nav-txt');
    const border = document.querySelectorId('.txt-cores');

    btnCor.forEach(button => {
        button.addEventListener('click', () => {
            //remover ativo
            btnCor.forEach(btnCor  => btnCor.classList.remove('ativo'));
            txtCor.forEach(txtCor => txtCor.classList.remove('ativo'));

            //colocar ativo no clicado
            button.classList.add('ativo');
            const cor = button.getAttribute('data-cor');
            document.getElementById(cor).classList.add('ativo');

            
        });
    });
});
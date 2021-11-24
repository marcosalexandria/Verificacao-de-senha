//função que verificará a validade da senha
const validar=()=>{
    let senha=document.getElementById("senha").value
    let res=document.getElementById("res")
    //array que receberá as mensagens de erros
    let erro=[]

    //se o número de caracteres na senha for menor que 8 ou maior que 15
    if(senha.length<8 || senha.length>15){
        //menssagem adicionada em erro
        erro.push("A senha deve conter no minimo 8 caracteres e no máximo 15")
        res.innerHTML=erro
        res.style.color="red"
    }
    //se a senha não tiver letras minusculas
    if(!senha.match(/[a-z]/g)){
        erro.push(" sua senha deve conter ao menos uma letra minuscula")
        res.innerHTML=erro
        res.style.color="red"
    }
    //se a senha não tiver letras maiúsculas
    if(!senha.match(/[A-Z]/g)){
        erro.push(" sua senha deve conter polomenos uma letra maiuscula")
        res.innerHTML=erro
        res.style.color="red"
    }
    //se a senha não tiver caracter especial
    if(!senha.match(/\W|_/g)){
        erro.push(" sua senha deve conter ao menos uma caractere especial como por exemplo: @,#,&,?")
        res.innerHTML=erro
        res.style.color="red"
    }
    //se a senha não tiver números
    if(!senha.match(/[0-9]/g)){
        erro.push(" sua senha deve conter ao menos um numero")
        res.innerHTML=erro
        res.style.color="red"
    }
    //se o arrai erro estiver vazio
    if(erro==0){
        res.innerHTML="Senha válida!"
        res.style.color="green"
    }
}
document.getElementById("validar").addEventListener("click", validar)
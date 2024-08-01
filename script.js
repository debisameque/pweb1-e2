//Questão 1
const campo1 = document.getElementById("campo1");
function validarCampo1(e){
    if(campo1.value.trim() == ""){
        alert("Preencha o campo");
        e.preventDefault();  
    }
    return true;
    
}

//Questão 2
const campo2 = document.getElementById("campo2");
function validarCampo2(e){
    if(campo2.value.trim() != "" && campo2.value.length >= 1 && campo2.value.length <= 10){
        return true;   
    }else{
        alert("O texto deve ter no mínimo 1 caractere e no máximo 10.");
        e.preventDefault();
    }
}

//Questão 3
const campo3 = document.getElementById("campo3");
function validarCampo3(e){
    
    if(campo3.value.trim() != "" && /^\d+$/.test(campo3.value) && campo3.value > 0){
        return true;   
    }else{
        alert("O valor deve ser maior que 0.");
        e.preventDefault();
    }
}

//Questão 4
const selecao4 = document.getElementById("selecao4");
function validarCampo4(e){
    if(selecao4.value == "default"){
            alert("É obrigatório selecionar alguma fruta");
            e.preventDefault();
              
    }
}

//Questão 5
const campo5 = document.getElementById("campo5");
function validarCampo5(e){
    e.preventDefault();
    if(campo5.checked){
        alert("O checkbox foi selecionado");
    }else{
        alert("O checkbox não foi selecionado")
    }
}

//Questão 6
function validarCheckboxes6(e){
    e.preventDefault();
    var checkSelected = 0;
    for(var i = 1; i < 6; i++){
        var field = document.getElementById("check0"+i);
        if(field.checked){
            checkSelected++;
        }
    }

    alert("Foram selecionados " + checkSelected + " checkboxes");
    
}

//Questão 7
function validarRadios7(e){
    var radioSelecionado = 0;
    for(var i = 1; i < 4; i++){
        var field = document.getElementById("radio0"+i);
        if(field.checked){
            radioSelecionado++;
        }
    }

    if(radioSelecionado > 0){
        alert("Pelo menos um radio foi selecionado");
    }   else{
        alert("Selecione pelo menos um radio");
    }
    
    
}

//Questão 8
const nome = document.getElementById("nome8");

const login = document.getElementById("login8");

const senha = document.getElementById("senha8");
function validarCampos8(e){
    if(nome.value.trim() == "" || login.value.trim() == "" || senha.value.trim() == "" ){
        alert("É obrigatório preencher todos os campos");
        e.preventDefault();
    }else{
        if(senha.value.length < 4 || !(/[A-Z]/.test(senha.value)) || !(/[a-z]/.test(senha.value)) || !(/[!@#$%^&*(),.?":{}|<>]/.test(senha.value))){
            alert("Sua senha deve conter:\n - Pelo menos 4 caracteres\n - Um caractere maiúsculo\n - Um caractere minúsculo\n - Um caractere especial");
            e.preventDefault();
        }
    }
    return true;
}
//USEUNIT SGH_PEP
//USEUNIT Encerrar_teste_Steps
//USEUNIT SGH_PERMISSOES_Steps
//USEUNIT Validar_permissoes_envio_STEPS 

 
 // Se não tiver nenhum email enviado então ele cria uma nova notificação
function cria_nc (){ 
 //Sys.WaitProcess("Se o btn email estiver desabilitado ele fecha a tela",1000);
 //eval(SGH_PEP.btn_fechar).Click();  
 //Sys.WaitProcess("Se o email for falso ele fecha a tela",1000);
 // Clica no botão notificar sem cid
// eval(SGH_PEP.notificar_sem).Click();
 //Sys.WaitProcess("Faz uma notificação compulsória",3000);
 //Aqui ele informa qual notificação o sistema vai usar
 //eval(SGH_PEP.preenche_notificacao).Keys("TUMORLET");
 //Sys.WaitProcess("Escolhendo a notificação que vai usar",3000);
 //Aqui ele clica no botão selecionar para selecionar a notificação
 //eval(SGH_PEP.selecionar_notificacao).Click();
 //Sys.WaitProcess("Clicando no selecionar",3000);
 //Aqui ele clica no combobox
 
  Sys.WaitProcess("************************",2000);
var contador;
var teste = 3;
var tipo_net;

for (contador = 1; contador <= teste; contador ++ ){

//ShowMessage("Teste" + contador)
var tipo_notificacao = "Aliases.sghpep.VCLObject(\"PrFormPadrao_" + contador + "\")";

ShowMessage(tipo_notificacao);
} 


 
 
 eval(SGH_PEP.tipo_notificacao).Click();
 Sys.WaitProcess("Clicando no combobox para escolher o tipo",2000);
 //Aqui ele escolhe o timpo da notificação 
 eval(SGH_PEP.tipo_notificacao).Keys("Inq");
 Sys.WaitProcess("Informando o código IBGE",3000);
 //Aqui ele preenche o campo do IBGE que está como obrigatório
 eval(SGH_PEP.ibge).keys("555");
 Sys.WaitProcess("Informando o código",3000);
 //Aqui ele informa o campo código
 
 if (eval(SGH_PEP.codigo).keys != "" ){
    
      eval(SGH_PEP.codigo).keys("26");  
      Sys.WaitProcess("Clicando no confirmar",3000);
 } else {
 
 Sys.WaitProcess("Clicando no confirmar",3000);
 //Aqui ele clica no Ok e finaliza a notificação
 eval(SGH_PEP.ok_notificacao).Click();
 }
}

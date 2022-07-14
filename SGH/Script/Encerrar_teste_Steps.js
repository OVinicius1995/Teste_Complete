//USEUNIT SGH_PEP
//USEUNIT SGH_PERMISSOES_Steps
//USEUNIT Validar_permissoes_envio_STEPS    
    
    function finalizando_teste(){
      
     
     //Preparando para encerrar o teste
 
     //Se o teste passou por todas as etapas acima ele começa a ser encerrado
     Sys.WaitProcess("Iniciando o encerramento do teste (Fechando a tela de histórico)",3000);
    //Fecha a tela do histórico
     eval(SGH_PEP.btn_fechar).Click();  
     Sys.WaitProcess("Iniciando o encerramento do teste (Fechando a tela de histórico)",3000);
    //Fecha a tela de pendencias
      Sys.WaitProcess("Iniciando o encerramento do teste (Fechando a tela de histórico)",3000);
      Sys.Process("sghpep").Terminate(); 
    
} 


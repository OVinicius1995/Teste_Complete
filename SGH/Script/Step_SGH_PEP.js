//USEUNIT SGH_PEP
//USEUNIT Encerrar_teste_Steps
//USEUNIT SGH_PERMISSOES_Steps
//USEUNIT Validar_permissoes_envio_STEPS
//USEUNIT Criar_Nova_NC_Steps
//USEUNIT Variaveis_Globais
function Abrir_PEP(){
  
  
     eval(SGH_PEP.click_pep).Click();     
     Sys.WaitProcess("Esperando o tempo de carregamento do P.E.P",7000)

      
     if(Aliases.sghpep.Prlogoff.Exists){
       
       ShowMessage("OK --> Abriu o page_logoff");
       Log.Message("Não passou");
       
        eval(SGH_PEP.preenche_page_logoff).Keys("a12345678");
        Sys.WaitProcess("Esperando pela digitação",1000);
        eval(SGH_PEP.btn_OK_pagelogoff).Click();
       // Abre a notificação compulsória
       eval(SGH_PEP.abre_compulsoria).Click();
       // Bloco que faz aparecer o campo para pesquisa  
       eval(SGH_PEP.busca_paciente).Click();
       eval(SGH_PEP.busca_hint).Click();
       // Bloco que digita o usuário e tecla enter
       eval(SGH_PEP.digita_usu).Keys(Variaveis_Globais.usuario_vitima);
       Sys.WaitProcess("Esperando pela digitação",1000);
       eval(SGH_PEP.digita_usu).Keys("[Enter]");
       Sys.WaitProcess("Esperando pelo enter",3000);
       // Bloco para pesquisar a notificação
       eval(SGH_PEP.selecionar).Click();
       Sys.WaitProcess("Clicando no btn histórico",3000);
       eval(SGH_PEP.historico).Click();
       Sys.WaitProcess("Clicando no pesquisar",3000);
       eval(SGH_PEP.pesquisar).Click();
       //Aqui é no caso de já ter uma notificação        
       Sys.WaitProcess("Espera carregar a tela de histório de notificações",8000); 
       //Aqui ele clica no botão para enviar o email
       
       if (eval(btn_enviar).Enabled == false) {
        
        ShowMessage("Botão enviar desabilitado.");
        Log.Message("Valida se o botão de enviar está desabilitado por provavelmente não ter notificação lançada. Se for pela rotina do page_logoff.");
        cria_nc();
       Sys.WaitProcess("Clicando no btn histórico",3000);
       eval(SGH_PEP.historico).Click();
       Sys.WaitProcess("Clicando no pesquisar",3000);
       eval(SGH_PEP.pesquisar).Click();
       //Aqui é no caso de já ter uma notificação        
       Sys.WaitProcess("Espera carregar a tela de histório de notificações",8000); 
       //Aqui ele clica no botão para enviar o email
        eval(SGH_PEP.btn_enviar).Click();
       //Chama a função que valida se o usuário tem permissão para enviar o email. 
        //valida_permissoes();
        //Iniciando a finalização do teste
       Sys.WaitProcess("Iniciando a finalização do teste",3000);
       finalizando_teste();
       
      
      }else{
      
      ShowMessage("Botão habilitado.");
        
       eval(SGH_PEP.btn_enviar).Click()
       valida_permissoes();
       //Iniciando a finalização do teste
       Sys.WaitProcess("Iniciando a finalização do teste",3000);
       finalizando_teste();
       
      }
      
     //Esse fechamnto da esquerda está fechando o page_logoff  if(Aliases.sghpep.Prlogoff.Exists    
     } else { 
       
     ShowMessage("Não abriu o page_logoff rotina principal.");
     Log.Message("Não foi encontrada a pagina de page_logoff então o sistema vai prosseguir");
     
     
      //Abre a notificação compulsória
      eval(SGH_PEP.abre_compulsoria).Click();
      // Bloco que faz aparecer o campo para pesquisa  
      eval(SGH_PEP.busca_paciente).Click();
      eval(SGH_PEP.busca_hint).Click();
      // Bloco que digita o usuário e tecla enter
      eval(SGH_PEP.digita_usu).Keys(Variaveis_Globais.usuario_vitima);
      Sys.WaitProcess("Esperando pela digitação",1000);
      eval(SGH_PEP.digita_usu).Keys("[Enter]");
      Sys.WaitProcess("Esperando pelo enter",3000);
      // Bloco para pesquisar a notificação
      eval(SGH_PEP.selecionar).Click();
      Sys.WaitProcess("Clicando no btn histórico",3000);
      eval(SGH_PEP.historico).Click();
      Sys.WaitProcess("Clicando no pesquisar",3000);
      eval(SGH_PEP.pesquisar).Click();
      
      if (eval(btn_enviar).Enabled == false) {
               
        ShowMessage("Botão enviar desabilitado. Ele fará a criação de uma notificação compulsória");
            
        Log.Message("Valida se o botão de enviar está desabilitado por provavelmente não ter permissão.");
        
        //Chama a função que valida se o usuário tem permissão para enviar o email.Na função de validar permissão ao fim dela é reiniciado o processo de envio do email.
        //valida_permissoes();
        
       //Esse cria_nc é uma funcção que faz a criação de notificação compulsória rsrs
       cria_nc();
       //Tempinho de espera para o clic
       Sys.WaitProcess("Clicando no btn histórico",3000);
       //Clic no histórico.
       eval(SGH_PEP.historico).Click();
       //Tempinho de espera para o clic novamente
       Sys.WaitProcess("Clicando no pesquisar",3000);
       eval(SGH_PEP.pesquisar).Click();
       //Aqui é no caso de já ter uma notificação        
       Sys.WaitProcess("Espera carregar a tela de histório de notificações",8000); 
       //Aqui ele clica no botão para enviar o email
       eval(SGH_PEP.btn_enviar).Click();
       Log.Message("Feito o envio do email e iniciando o encerramento do teste");
       //Iniciando a finalização do teste
       Sys.WaitProcess("Iniciando a finalização do teste",3000);
       finalizando_teste();
       
      
      }else{
      
      if (eval(SGH_PEP.btn_reenviar) == "Reenviar") {
        
        ShowMessage(eval(SGH_PEP.btn_reenviar)); 
      
      } else {
      
      ShowMessage("Botão habilitado rotina principal.");
      
       
      
       eval(SGH_PEP.btn_enviar).Click()
       //valida_permissoes();
       
       //Nas variáveis eu passei para selecionar o envio interno  
       Sys.WaitProcess("Espera selecionar o tipo de envio",5000); //Espera a seleção.
       eval(SGH_PEP.email_interno).Click();        
       //Aqui clica no botão para confirmar o envio
       eval(SGH_PEP.confirmar).Click();
       //Nessa ultima espera projetei o teste para esperar pelo fim do processo de envio
       Sys.WaitProcess("Esperando o envio do e-mail",10000);
       
       //Iniciando a finalização do teste
       Sys.WaitProcess("Iniciando a finalização do teste",3000);
       finalizando_teste();
       
           
       }
     } 
  } 
}       

      

//USEUNIT SGH_PEP
//USEUNIT Encerrar_teste_Steps
//USEUNIT SGH_PERMISSOES_Steps
//USEUNIT Variaveis_Globais

    function valida_permissoes(){  
      if(Aliases.sghpep.dlgInforma_o.Exists){
  
      var i;
      i = MkSet(mbYes, mbNo);
      i = MessageDlg("O usuário não possui permissão deseja realizar novo teste marcando a permissão?", mtConfirmation, i,0);
      
   
      if(i == 6){
          
       //Clicando no OK da mensagem
       Sys.WaitProcess("Clicando no OK da mensagem",2500);
       NameMapping.Sys.Process("sghpep").Window("#32770", "Informação", 1).UIAObject("Informação").Window("CtrlNotifySink", "", 7).Window("Button", "OK", 1).Click();
       //Se o usuario clicar em YES então e feito o encerramento do P.E.P e o direcionamento para tela de permissões
       finalizando_teste();
       //Inicia o processo para dar as permissões
       Abrir_Permissoes();
       
       //Abre novamente o P.E.P
       eval(SGH_PEP.click_pep).Click(); 
       //Espera o carregamento do P.E.P
       
       if(Aliases.sghpep.Prlogoff.Exists){     
      
       //Se caso abrir a tela de page_logoff
        ShowMessage("Abriu o page_logoff pela função valida permissões");
        Log.Message("Teve uma tela de page_logoff");
       
        eval(SGH_PEP.preenche_page_logoff).Keys("a12345678");
        eval(SGH_PEP.btn_OK_pagelogoff).Click();
        Sys.WaitProcess("Esperando pela digitação",1000);
      
       
       Sys.WaitProcess("Esperando o tempo de carregamento do P.E.P",7000)
       //Abre a notificação
       eval(SGH_PEP.abre_compulsoria).Click(); 
       // Bloco que faz aparecer o campo para pesquisar o paciente  
       eval(SGH_PEP.busca_paciente).Click();
       // Bloco que faz aparecer o campo para pesquisar o paciente
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
       // Bloco para enviar email
       //Faz o click no botão enviar
       eval(SGH_PEP.btn_enviar).Click();
       //Aqui espera aparecer a tela com as opções de email interno ou externo
       Sys.WaitProcess("Espera aparecer a tela para selecionar se será envio interno ou epidemiolóigico",5000);
       //Nas variáveis eu passei para selecionar o envio interno  
       eval(SGH_PEP.email_interno).Click(); 
       Sys.WaitProcess("Espera selecionar o tipo de envio",5000);
       //Aqui clica no botão para confirmar o envio
       eval(SGH_PEP.confirmar).Click();
       //Nessa ultima espera projetei o teste para esperar pelo fim do processo de envio
       Sys.WaitProcess("Esperando o envio do e-mail",10000);
       
       } else {
   
        ShowMessage("Não abriu o page_logoff da função valida permissões");
        Log.Message("Não teve uma tela de page_logoff");

      
       //Clicando no OK da mensagem
       Sys.WaitProcess("Clicando no OK da mensagem",2500);
       NameMapping.Sys.Process("sghpep").Window("#32770", "Informação", 1).UIAObject("Informação").Window("CtrlNotifySink", "", 7).Window("Button", "OK", 1).Click();
       //Se o usuario clicar em YES então e feito o encerramento do P.E.P e o direcionamento para tela de permissões
       finalizando_teste();
       //Inicia o processo para dar as permissões
       Abrir_Permissoes();
       
       //Abre novamente o P.E.P
       eval(SGH_PEP.click_pep).Click(); 
       //Espera o carregamento do P.E.P
       
       
       
       Sys.WaitProcess("Esperando o tempo de carregamento do P.E.P",7000)
       //Abre a notificação
       eval(SGH_PEP.abre_compulsoria).Click(); 
       // Bloco que faz aparecer o campo para pesquisar o paciente  
       eval(SGH_PEP.busca_paciente).Click();
       // Bloco que faz aparecer o campo para pesquisar o paciente
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
       // Bloco para enviar email
       //Faz o click no botão enviar
       eval(SGH_PEP.btn_enviar).Click();
       //Aqui espera aparecer a tela com as opções de email interno ou externo
       Sys.WaitProcess("Espera aparecer a tela para selecionar se será envio interno ou epidemiolóigico",5000);
       //Nas variáveis eu passei para selecionar o envio interno  
       eval(SGH_PEP.email_interno).Click(); 
       Sys.WaitProcess("Espera selecionar o tipo de envio",5000);
       //Aqui clica no botão para confirmar o envio
       eval(SGH_PEP.confirmar).Click();
       //Nessa ultima espera projetei o teste para esperar pelo fim do processo de envio
       Sys.WaitProcess("Esperando o envio do e-mail",10000);
       
 }
       
       } else{
          
          ShowMessage("Encerrando o teste resposta da show message");  
          NameMapping.Sys.Process("sghpep").Window("#32770", "Informação", 1).UIAObject("Informação").Window("CtrlNotifySink", "", 7).Window("Button", "OK", 1).Click();
          Log.Message("Usuário encerrou o teste");          
          
       
       }

  
  } 
}
  
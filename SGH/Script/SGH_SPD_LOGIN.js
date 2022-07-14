//USEUNIT Steps_SGH_SPD_login
//USEUNIT Step_SGH_PEP
//USEUNIT SGH_PEP
//USEUNIT Encerrar_teste_Steps
//USEUNIT Variaveis_Globais

function SGHCT01_Login(){
  TestedApps.sghspd.Run();
  Setcod_hospital(Variaveis_Globais.cod_hospit);
  Setusuario(Variaveis_Globais.usuario);
  Set_Senha(Variaveis_Globais.senha);
  ClickOK();
  //Setusuario_externo("vinicius.oliveira");
  //SetSenha_Externa("Vinicius95*");
  //Click_OK_Externo();
  Abrir_PEP();
  
  //Finalizando o teste do P.E.P
  //Sys.WaitProcess("Finalizando o teste no P.E.P",2000);
  //finalizando_teste();
}



//USEUNIT SGH_PERMISSOES


function Abrir_Permissoes (){
  
  eval(SGH_PERMISSOES.permissoes_click).Click();
  Sys.WaitProcess("Esperando pela digitação",1000);
  eval(SGH_PERMISSOES.seleciona).Click;
  Sys.WaitProcess("Esperando pela digitação",1000);
  eval(SGH_PERMISSOES.seleciona).Keys("P.");
  Sys.WaitProcess("Esperando pela digitação",1000);
  eval(SGH_PERMISSOES.seleciona).Keys("[Enter]")
  Sys.WaitProcess("Esperando pela digitação",1000);
  eval(SGH_PERMISSOES.papel).Click();
  Sys.WaitProcess("Esperando pela digitação",1000);
  eval(SGH_PERMISSOES.informa_papel).Click;
  Sys.WaitProcess("Esperando pela digitação",1000);
  eval(SGH_PERMISSOES.informa_papel).keys("OPERADOR DE S");
  Sys.WaitProcess("Esperando pela digitação",1000);
  eval(SGH_PERMISSOES.informa_papel).keys("[Enter]");
  Sys.WaitProcess("Esperando pelo carregamento da tela",10000);
  eval(SGH_PERMISSOES.ocultar).Click();
  Sys.WaitProcess("Esperando pela digitação",1000);
  //eval(SGH_PERMISSOES.treeview).keys("[Alt26]")
  //eval(SGH_PERMISSOES.treeview).Click;
  //eval(SGH_PERMISSOES.minimiza).Click;
  
 //Expands the '|Prontuário Eletrônico do paciente' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente");
  Sys.WaitProcess("Esperando pela digitação",1000);
  //Expands the '|Prontuário Eletrônico do paciente|Movimentações' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente|Movimentações");
  Sys.WaitProcess("Esperando pela digitação",1000);
  //Rotates the mouse wheel to -4 over the 'jvctvOpcoesSistema' object.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.MouseWheel(-4);
  Sys.WaitProcess("Esperando pela digitação",1000);
  //Selects the '|Prontuário Eletrônico do paciente' item of the 'jvctvOpcoesSistema' tree view.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.SelectItem("|Prontuário Eletrônico do paciente");
  Sys.WaitProcess("Esperando pela digitação",1000);
  //Enters 'no' in the 'jvctvOpcoesSistema' object.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.Keys("no");
  Sys.WaitProcess("Esperando pela digitação",1000);
  //Expands the '|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória");
  Sys.WaitProcess("Esperando pela digitação",1000);
  //Expands the '|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]");
  Sys.WaitProcess("Esperando pela digitação",1000);
  //Sets the check box of the '|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|[3]' item of the 'jvctvOpcoesSistema' control to the False state.
  Sys.WaitProcess("Esperando pela digitação",1000);
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.CheckItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|[2]", true);
  //Sys.WaitProcess("Esperando pela digitação",1000);
  //Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.CheckItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|[5]", false);
  //Sys.WaitProcess("Esperando pela digitação",1000);
  //Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.CheckItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|[6]", false);
  Aliases.sghspd.frmSGHPermissoes.w_Panel_Botoes.w_Gravar.Click();
  Sys.WaitProcess("Esperando finalizar a gravação",1000);
  Aliases.sghspd.frmSGHPermissoes.w_Panel_Botoes.VCLObject("w_Fechar").Click();
     
}
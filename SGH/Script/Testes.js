﻿function teste (){
  
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
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.CheckItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|[4]", false);
  Sys.WaitProcess("Esperando pela digitação",1000);
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.CheckItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|[5]", false);
  Sys.WaitProcess("Esperando pela digitação",1000);
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.CheckItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|[6]", false);
  

  
  //var teste = Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.CheckItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|[6]").Value; 
  //ShowMessage(teste);  

}

function teste_msg (){
  
  var w;
  w = Sys.Desktop.FocusedWindow().Picture();
  //Regions.AddPicture(w, "Image1_bmp");
  Log.Picture(w,"Teste2");
  
  var i;
  i = MkSet(mbYes, mbNo, mbCancel);
  i = MessageDlg("Você deseja realizar novo teste marcando a permissão?", mtConfirmation, i,0);
   
  if(i == 6){
  
    
    ShowMessage("OK!"); 
  
  }else{
  
    Log.Message("Não obg!"); 
    
    ShowMessage("Findou!");
  
  }

}
















































 

function Test2()
{
  //Clicks the 'imgMenu13' object.
  Aliases.sghspd.FSgh.pnlMenu.pnlMenu13.imgMenu13.Click(44, 26);
  //Enters 'p.[Enter]' in the 'Edit' object.
  Aliases.sghspd.frmSGHPermissoes.gbxModulos.cbxModulos.Edit.Keys("p.[Enter]");
  //Clicks the 'sbtnPapelPermissao' object.
  Aliases.sghspd.frmSGHPermissoes.sbtnPapelPermissao.Click(18, 23);
  //Sets the 'VScroll' scrollbar control to position 5.
  Aliases.sghspd.FPesquisaPapel.w_GB_Resultados.DBGrid.VScroll.Pos = 5;
  OCR.Recognize(Aliases.sghspd.FPesquisaPapel.w_GB_Resultados.DBGrid).BlockByText("SISTEMA", spNearestToCenter).DblClick();
  //Expands the '|Prontuário Eletrônico do paciente' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente");
  //Clicks the 'sbtnComprimir' object.
  Aliases.sghspd.frmSGHPermissoes.sbtnComprimir.Click(19, 34);
  //Expands the '|Prontuário Eletrônico do paciente' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente");
  //Expands the '|Prontuário Eletrônico do paciente|Movimentações' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente|Movimentações");
  //Selects the '|Prontuário Eletrônico do paciente' item of the 'jvctvOpcoesSistema' tree view.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.SelectItem("|Prontuário Eletrônico do paciente");
  //Enters 'not' in the 'jvctvOpcoesSistema' object.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.Keys("not");
  //Expands the '|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória");
  //Expands the '|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]");
  //Sets the check box of the '|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|Enviar - [Envio do e-mail da notificação compulsória]' item of the 'jvctvOpcoesSistema' control to the True state.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.CheckItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|Enviar - [Envio do e-mail da notificação compulsória]", true);
  //Clicks the 'w_Gravar' button.
  Aliases.sghspd.frmSGHPermissoes.w_Panel_Botoes.w_Gravar.ClickButton();
  if(Aliases.sghpep.dlgInforma_o.Exists);
  if(Aliases.sghpep.Prlogoff.Exists);
  if(Aliases.sghpep.Prlogoff.pnlLogin.edtSenha.Exists);
}

function Test3()
{
  //Clicks the 'imgMenu13' object.
  Aliases.sghspd.FSgh.pnlMenu.pnlMenu13.imgMenu13.Click(44, 26);
  //Enters 'p.[Enter]' in the 'Edit' object.
  Aliases.sghspd.frmSGHPermissoes.gbxModulos.cbxModulos.Edit.Keys("p.[Enter]");
  //Clicks the 'sbtnPapelPermissao' object.
  Aliases.sghspd.frmSGHPermissoes.sbtnPapelPermissao.Click(18, 23);
  //Sets the 'VScroll' scrollbar control to position 5.
  Aliases.sghspd.FPesquisaPapel.w_GB_Resultados.DBGrid.VScroll.Pos = 5;
  OCR.Recognize(Aliases.sghspd.FPesquisaPapel.w_GB_Resultados.DBGrid).BlockByText("SISTEMA", spNearestToCenter).DblClick();
  //Expands the '|Prontuário Eletrônico do paciente' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente");
  //Clicks the 'sbtnComprimir' object.
  Aliases.sghspd.frmSGHPermissoes.sbtnComprimir.Click(19, 34);
  //Expands the '|Prontuário Eletrônico do paciente' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente");
  //Expands the '|Prontuário Eletrônico do paciente|Movimentações' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente|Movimentações");
  //Selects the '|Prontuário Eletrônico do paciente' item of the 'jvctvOpcoesSistema' tree view.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.SelectItem("|Prontuário Eletrônico do paciente");
  //Enters 'not' in the 'jvctvOpcoesSistema' object.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.Keys("not");
  //Expands the '|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória");
  //Expands the '|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]' item of the 'jvctvOpcoesSistema' tree.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.ExpandItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]");
  //Sets the check box of the '|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|Enviar - [Envio do e-mail da notificação compulsória]' item of the 'jvctvOpcoesSistema' control to the True state.
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.CheckItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|Enviar - [Envio do e-mail da notificação compulsória]", true);
  //Clicks the 'w_Gravar' button.
  Aliases.sghspd.frmSGHPermissoes.w_Panel_Botoes.w_Gravar.ClickButton();
  if(Aliases.sghpep.dlgInforma_o.Exists);
  if(Aliases.sghpep.Prlogoff.Exists);
}

function Test1()
{
  //Clicks the 'TSghComboBox' object.
  Aliases.sghpep.PrFormPadrao_9.TScrollBox.TPanel.TPanel.TSghComboBox.Click(110, 13);
  //Clicks the 'TSghComboBox' object.
  Aliases.sghpep.PrFormPadrao_9.TScrollBox.TPanel.TPanel.TSghComboBox.Click(85, 10);
  //Enters 'inq' in the 'TSghComboBox' object.
  Aliases.sghpep.PrFormPadrao_9.TScrollBox.TPanel.TPanel.TSghComboBox.Keys("inq");
}

function Test4()
{
  //Clicks the 'TSghComboBox' object.
  Aliases.sghpep.PrFormPadrao_10.TScrollBox.TPanel.TPanel.TSghComboBox.Click(53, 12);
  //Enters 'inq[Enter]' in the 'TSghComboBox' object.
  Aliases.sghpep.PrFormPadrao_10.TScrollBox.TPanel.TPanel.TSghComboBox.Keys("inq[Enter]");
}
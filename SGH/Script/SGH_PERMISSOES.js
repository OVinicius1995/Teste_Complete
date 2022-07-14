var permissoes_click = "Sys.Process(\"sghspd\").VCLObject(\"FSgh\").VCLObject(\"pnlMenu\").VCLObject(\"pnlMenu13\").VCLObject(\"lblMenu13\")";

var seleciona = "Sys.Process(\"sghspd\").VCLObject(\"frmSGHPermissoes\").VCLObject(\"gbxModulos\").VCLObject(\"cbxModulos\").Window(\"Edit\", \"\", 1)";

var grupo = "Sys.Process(\"sghspd\").VCLObject(\"frmSGHPermissoes\").VCLObject(\"sbtnGrupoPermissao\")";

var papel = "Sys.Process(\"sghspd\").VCLObject(\"frmSGHPermissoes\").VCLObject(\"sbtnPapelPermissao\")";

var informa_grupo = "Sys.Process(\"sghspd\").VCLObject(\"FPesquisaGrupoUsuarios\").VCLObject(\"w_GB_Localizar\").VCLObject(\"w_Localizar\")";

var informa_papel = "Sys.Process(\"sghspd\").VCLObject(\"FPesquisaPapel\").VCLObject(\"w_GB_Localizar\").VCLObject(\"w_Localizar\")";

var ocultar = "Sys.Process(\"sghspd\").VCLObject(\"frmSGHPermissoes\").VCLObject(\"sbtnComprimir\")";

var treeview = "Sys.Process(\"sghspd\").VCLObject(\"frmSGHPermissoes\").VCLObject(\"w_GB_Grid\").VCLObject(\"jvctvOpcoesSistema\")";

var minimiza = "Sys.Process(\"sghspd\").VCLObject(\"frmSGHPermissoes\").VCLObject(\"w_GB_Grid\").VCLObject(\"jvctvOpcoesSistema\").CollapseItem(\"|Prontuário Eletrônico do paciente|Movimentações\")";

function Liberar_permissao()
{
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
  Aliases.sghspd.frmSGHPermissoes.w_GB_Grid.jvctvOpcoesSistema.CheckItem("|Prontuário Eletrônico do paciente|Movimentações|Notificação compulsória|Histórico - [Visualizar o histórico das notificações]|[3]", false);
}
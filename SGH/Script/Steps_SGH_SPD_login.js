//USEUNIT SGHSPD_Login_Page

function Setcod_hospital(texto){
  eval(SGHSPD_Login_Page.cod_hospital).Keys("");
  eval(SGHSPD_Login_Page.cod_hospital).Keys(texto); 

}

function Preenche_Codigo_hospital (){
  Setcod_hospital("");
  
}

function Setusuario(texto){
  eval(SGHSPD_Login_Page.usuario).keys(texto);  
}

function Preenche_Usuario(){
  Setusuario("");
  
}

function Set_Senha(texto){
  eval(SGHSPD_Login_Page.senha).keys(texto);  
}

function Preenche_Senha(){
  Setsenha("");
  
}

function ClickOK(){
  eval(SGHSPD_Login_Page.OK).Click();
}

function Setusuario_externo(texto){
  eval(SGHSPD_Login_Page.usuario_externo).Keys("");
  eval(SGHSPD_Login_Page.usuario_externo).Keys(texto);
}

function Preenche_Usuario_Externo(){
  Setusuario_externo("");
}

function SetSenha_Externa(texto){
  eval(SGHSPD_Login_Page.senha_exerna).Keys("");
  eval(SGHSPD_Login_Page.senha_exerna).Keys(texto);  
}

function Preenche_Senha_Externa(){
  SetSenha_Externa("");
}

function Click_OK_Externo(){
  eval(SGHSPD_Login_Page.confirma).Click();
}


class Login {





//identification

txt_username = 'input[name="username"]'
txt_password = 'input[name="password"]'
btn_login = 'button[type="submit"]'


//methods 
enterUserName(user){

    cy.get(this.txt_username).type(user)

}

enterpass(pwd){

    cy.get(this.txt_password).type(pwd)

}

clickLoginButton(){

    cy.get(this.btn_login).click()

}



}

export default Login;



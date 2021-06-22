<template>
    <h2>Login here:</h2>
    <hr>
    <div class="login-components">
        <br>
        <form @submit="formSubmit" class="add-form">
            <p id="error_message"></p>
            <div class="mb-3">
                <label for="login_email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="login_email" aria-describedby="emailHelp" v-model="user_email">
                
            </div>
            <div class="mb-3">
                <label for="login_password" class="form-label">Password</label>
                <input type="password" class="form-control" id="login_password" v-model="user_pass">
            </div>
            <button type="submit" class="btn btn-warning">Sign in using Email</button>
        </form>
        
        <button class="btn btn-danger" @click="toggleRegister" style="margin-left:auto;">Register</button>
        <!-- google btn -->
        <button class="g-signin2" @click={onSignIn} data-theme="dark"></button>
        <button type="submit" class="btn btn-primary">Sign in using Facebook</button>
        
        <!--<a class="btn btn-primary" href="#" onclick="signOut();">Sign out</a>-->
        <br><br>
        
        <!--Registration form-->
        <div v-show="showRegisterMenu">
            <h4><b><i>Register here!</i></b></h4>
            <hr>
            <form @submit="registerUser" class="add-form">
            <p id="error_message"></p>
            <div class="mb-3">
                <label for="firstname" class="form-label">First Name:</label>
                <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp" v-model="firstname">                
            </div>
            
            <div class="mb-3">
                <label for="lastname" class="form-label">Last Name:</label>
                <input type="text" class="form-control" id="lastname" v-model="lastname">
            </div>
            <div class="mb-3">
                <label for="mobileno" class="form-label">Mobile No.</label>
                <input type="text" class="form-control" id="mobileno" v-model="mobileNo">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control" id="email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="current-password" class="form-control" id="current-password" v-model="password">
            </div>
            <button type="submit" class="btn btn-warning">Register Now !</button>
        </form>

        </div>
    
    </div>
    <br><br>
   
</template>

<script>

export default{
    name:"Login",
    data(){
        return{
            user_email:'waziullah@live.com',
            user_pass:'123456',
            showRegisterMenu:false,
            firstname:'Kazi',
            lastname:'Wazi',
            mobileNo:'01735152470',
            email:'waziullah@live.com',
            password:'123456'   
        }
    },
    methods:{
        //UI Elements
        toggleRegister(){
            this.showRegisterMenu=!this.showRegisterMenu
        },
        async formSubmit(e){
            e.preventDefault()
            console.log("Button clicked")

            var user={email:this.user_email,password:this.user_pass}
            console.log(user)
            //this.$router.push('Home');
            //implement axios right here
            
            let data= await this.getConnection()
            console.log(data);
        },
        registerUser(e){
            e.preventDefault()
            console.log("Registration form submitted")

            //add fetch api right here:
            
        },
        onSignIn(googleUser) {
            // Useful data for your client-side scripts:
            console.log(googleUser)
            
            console.log(JSON.stringify(googleUser.getAuthResponse().id_token))
            
            //document.getElementById("message").innerText=JSON.stringify(googleUser.getAuthResponse().id_token)
            /*
            console.log(JSON.stringify(googleUser.getAuthResponse()))
            // The ID token you need to pass to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
            console.log("ID Token: " + id_token);
            */
        },
        //Api calls right here
        async getConnection(){
            return fetch('https://localhost:44319/api/users/test')
                .then(response => response.json())
                .then(data => 
                    {
                        //console.log(data); 
                        return data
                    }
                )
        }
    },
}
</script>

<style scoped>
    .login-components{
        width: 300px;
        height:400px;
        margin: auto;
    }
    #error_message{
        color: red;
    }
</style>
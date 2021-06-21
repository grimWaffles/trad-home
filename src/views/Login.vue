<template>
    <h2>Login here:</h2>
    <hr>
    <div class="login-components">
        <h5>Right here</h5>
        <button class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></button>
        <a class="btn btn-primary" href="#" onclick="signOut();">Sign out</a>
    </div>
</template>

<script>

export default{
    name:"Login",
    methods:{
        
    }
}
</script>

<style scoped>
    .login-components{
        max-width: 30%; margin: auto;
    }
</style>
<template>
<div>
    <b-navbar type="dark" class="nav" variant="dark" fixed="top">
        <b-navbar-nav>
        <b-nav-item class="label">Cuong's Portfolio</b-nav-item>
        <b-nav-item><router-link style="text-decoration: none; color: inherit;" to="/" class="home">Home</router-link></b-nav-item>

        <b-nav-item><router-link style="text-decoration: none; color: inherit;" to="/resume" class="resume">Resume</router-link></b-nav-item>
        

        <b-nav-item><router-link style="text-decoration: none; color: inherit;" to="/contact" class="contact">Contact</router-link></b-nav-item>
        </b-navbar-nav>

    </b-navbar>
</div>
    

</template>

<script>

</script>


<style scoped>
    .nav{
        width: 100%;
    }   
    .contact{
        color: #adb5bd;
    }
    .contact:hover {
        color: #e9ecef;
    }

    .home{
        color: #adb5bd;
    }

    .home:hover{
        color: #e9ecef;
    }

    .label{
        font-size:20px;
    }

</style>
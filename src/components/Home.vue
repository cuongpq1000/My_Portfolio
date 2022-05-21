<template>
    <div class="home">
        <div class="full-container">
            <div class="row-container">
                <div class="banner">
                    <h1>Quoc Cuong Pham</h1>
                    <img class="image3" src="../assets/avatar.jpg" style="width: 150px; height: 150px; border-radius: 50%; display: flex; justify-content: center; align-items: center; transition: all 0.5s ease 0s;">
                    <div class="text">
                    <p>I am a Computer Science senior in Virginia Tech. I'm going to graduate in December 2022 and currently looking for a Software Engineer internship during a summer. I have experience with Android Studio, Web development and Data Visualization. This knowledge will be an asset to this position. I would be thrilled to learn more alongside your cross-functional team of engineers, scientists, and developers.</p>

                    </div>

                    <a href="https://docs.google.com/document/d/1OncI50UviAizahYDePmF6LSDc1cI4MLKg25i-adgaKk/edit#" target="_blank" class="btn">Linked Resume</a>
                       
                </div>

            </div>
        </div>
        <div class="title">
            <h2>SOME OF MY PROJECTS</h2>
            <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="4">
                <div style="margin-top: 5%;">
                    <b-card style="max-width: 30rem; background-color:#cecece; box-shadow: 0 6px 20px rgb(56 125 255 / 17%)">
                    <img src="../assets/Burger.png" class="picture5">
                    <img src="../assets/Burger2.png" class="picture5" >
                        <b-card-title>
                            <a href="https://github.com/cuongpq1000/Burger_app1" target="_blank" id="text">Burger App</a>
                        </b-card-title>
                        <b-card-text style="color: black;">This app will ask the user to build their own burger base on three different steps: bun, patty, toppings and show the total price and calories.</b-card-text>
                    </b-card>
                </div>
                
            </b-col>
            <b-col cols="4">
                <div style="margin-top: 5%">
                    <b-card style="max-width: 30rem; background-color:#cecece; box-shadow: 0 6px 20px rgb(56 125 255 / 17%)">
                    <img src="../assets/Movie.png" class="picture">
                    <img src="../assets/Movie2.png" class="picture">
                        <b-card-title>
                            <a href="https://github.com/cuongpq1000/Movie-Database" target="_blank" id="text">Movie Database</a>
                        </b-card-title>
                        <b-card-text style="color: black;">This app allows users to see a list of currently playing movies, sort the movie by name or author, and display details about each movie by calling movie API.</b-card-text>
                    </b-card>
                </div>
                
            </b-col>
            
            </b-row>
            <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="4">
                    <b-card style="max-width: 30rem; background-color:#cecece; box-shadow: 0 6px 20px rgb(56 125 255 / 17%); margin-top: 5%; display: flex;">
                    <img src="../assets/TicTacToe.png" class="picture2">
                    <img src="../assets/TicTacToe2.png" class="picture3">
                        <b-card-title>
                            <a href="https://github.com/cuongpq1000/TicTacToe" target="_blank" id="text">Tic Tac Toe</a>
                        </b-card-title>
                        <b-card-text style="color: black;">A Tic Tac Toe game built utilizing the Object-Oriented Programming paradigm, allowing the player to play against an AI player.</b-card-text>
                        <b-card-text style="color: black; font-weight: bold;">Python, Android Studio</b-card-text>
                    </b-card>
                
            </b-col>
            <b-col cols="4">
                <div style="margin-top: 5%">
                    <b-card style="max-width: 30rem; background-color:#cecece; box-shadow: 0 6px 20px rgb(56 125 255 / 17%);">
                        <img src="../assets/fitness.png" class="picture4">
                        <b-card-title>
                            <a href="https://github.com/cuongpq1000/fitness_frontend" target="_blank" id="text">Fitness App</a>
                        </b-card-title>
                        <b-card-text style="color: black;">The web application keeps track of activity records by creating the PArecords and comparing the average minutes across all PArecords.</b-card-text>
                    </b-card>
                </div>
                
            </b-col>
            
            </b-row>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Home"    
    }
</script>

<style scoped>
    .title{
        padding: 4rem;
        background: #cecece;
        box-sizing: border-box;
            display: block;
    }
    .picture5{
        height: 330px;
        width: 170px;
        margin-bottom: 5%;
        margin-left: 10%;
    }
    .picture4{
        margin-bottom: 10%;
        height: 350px;
        width: 440px;
        margin-right: 5%;
    }
    .picture2{
        margin-bottom: 10%;
        height: 200px;
        width: 250px;
        margin-right: 5%;
    }
    .picture{
        height: 330px;
        width: 170px;
        margin-bottom: 5%;
        margin-left: 10%;
    }
    .picture3{
        height: 330px;
        width: 170px;
        margin-bottom: 5%;

    }
    #text{
        color: black; 
        margin-bottom:10%;
        text-decoration: none;
    }
    #text:hover{
        text-decoration: underline;
    }
    .title {
        padding: 2.5rem;
        background: #cecece;
    }
    h2{
        text-align: center;
        color: black;
        
    }
    .btn{
        color: #212529;
        background-color: red;
        border-color: white;
    }
    .btn:hover{
        color:red;
        background-color:white;
        border-color: red;
    }
    .text{
    width: 70%;
        border-bottom: 2px solid #d3d3d3;
        margin-bottom: 20px;
    }
    .text, p{
        margin-top: 8px;
        color: #dfdfdf;
    }
    .banner-text, h1 {
        color: #fff;
        font-size: 100px;
        font-family: "Trebuchet MS","Lucida Sans Unicode","Lucida Grande","Lucida Sans",Arial,sans-serif;
    }
    .full-container {
        background: url("../assets/home.jpg") 50%/cover no-repeat;
        height: 100vh;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-align-items: center;
        align-items: center;
        box-shadow: inset 0 0 0 1000px rgb(0 0 0 / 20%);
        object-fit: contain;
    }
    .banner{
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    margin: 50px;
    }
    .row-container {
        background-color: rgba(51,49,49,.6);
        text-align: center;
        width: 80%;
    }
    @media only screen and (max-width: 1307px) {
    .home {
        padding-top: 100px;
    }
    @media only screen and (max-width: 1024px) {
	b-card {
		margin-bottom: 2rem;
	}
}
@media only screen and (min-width: 1024px) {
	b-card {
		display: flex;
	}
}
}
</style>

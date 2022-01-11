<template>
    <div class="resume">
       <b-row>
           <b-col cols="2"></b-col>
            <b-col cols="2">
                <nav class="navi">
                    <ul>
                        <scrollactive class="my-nav">
                            <a href="#Education" class="current">Education</a><br><br>
                            <a href="#Projects" class="current">Projects</a><br><br>
                            <a href="#Skills" class="current">Skills </a><br><br>
                            <a href="#Awards" class="current">Awards</a><br><br>
                        </scrollactive>
                    </ul>
                </nav>
            </b-col>

            <b-col cols="6">
                <!--Education -->
                <div>
                <h4 class="heading" id="Education">Education</h4>
                <div class="Education">
                    <div id="edu">
                        <h6>
                            <font-awesome-icon icon="graduation-cap" class="circle-icon" size="2x"/>
                            2018-2020
                        </h6>

                            <h6>Associate degree in Computer Science and Mathematics</h6>
                            <h8>Richard Bland College of William & Marry</h8><br><br>

                            <h8>Graduation May 2018</h8><br>
                            <h8>GPA: 3.67</h8>

                    </div>
                </div>

                <div class="Education">
                    
                    <div>
                        <h6>
                            <font-awesome-icon icon="graduation-cap" class="circle-icon" size="2x"/>
                            2020-2022
                        </h6>
                        <h6>Bachelor Degree in Computer Science</h6>
                        <h8>Virginia Institute Of Technology</h8><br><br>

                        <h8>Expected Graduation Date: 12/2022</h8><br>
                        <h8>GPA: 3.54</h8>
                    </div>

                </div>
            </div>  
            <!--Project -->
            <h4 class="heading" id="Projects">Project</h4>
            <div class="Education">
                <div>
                    <h6>
                        <font-awesome-icon icon="briefcase" class="circle-icon" size="2x"/>
                        October-2021
                    </h6><br><br>

                    <h6 class="title">Movie Database</h6>
                    <h8> This app allows users to see a list of currently playing movies, sort the movie by name or author, and display details about each movie by calling movie API.</h8><br><br>
                    <h6>Android Studio, Kotlin</h6>

                </div>
            </div>

            <div class="Education">
                <div>
                    <h6>
                        <font-awesome-icon icon="briefcase" class="circle-icon" size="2x"/>
                       September-2021
                    </h6><br><br>

                    <h6 class="title">Burger App</h6>
                    <h8> This app will ask the user to build their own burger base on three different steps: bun, patty, toppings and show the total price and calories.</h8><br><br>
                    <h6>Android Studio, Kotlin</h6>

                </div>
            </div>

            <div class="Education">
                <div>
                    <h6>
                        <font-awesome-icon icon="briefcase" class="circle-icon" size="2x"/>
                        December-2020
                    </h6><br><br>

                    <h6 class="title">Covid-19 Case-fatality Ratio by Race/Ethnicity Visualization</h6>
                    <h8>  A Data Visualization Project allowed users to view multidimensional data from different perspectives and gave insight into data patterns.</h8><br><br>
                    <h6>Java</h6>

                </div>
            </div>

            <div class="Education">
                <div>
                    <h6>
                        <font-awesome-icon icon="briefcase" class="circle-icon" size="2x"/>
                        April-2020
                    </h6><br><br>

                    <h6 class="title">Rock Paper Scissor</h6>
                    <h8> A Rock Paper Scissors game used an AI to recognize patterns in the human opponent’s moves and exploit those patterns to its advantage.</h8><br><br>
                    <h6>Java</h6>

                </div>
            </div>

            <div class="Education">
                <div>
                    <h6>
                        <font-awesome-icon icon="briefcase" class="circle-icon" size="2x"/>
                        March-2020
                    </h6><br><br>

                    <h6 class="title">Tic Tac Toe</h6>
                    <h8> A Tic Tac Toe game built utilizing the Object-Oriented  Programming paradigm, allowing the player to play against an AI player.</h8><br><br>
                    <h6>Java, Python, Android Studio</h6>

                </div>
            </div>

            





                
                <!--SKill -->
                <div class="skill">
                <h4 class="heading" id="Skills">Coding languages</h4>
                <h6>Java</h6>
                <b-progress :value="90" variant="success" striped :animated="animate"></b-progress>
                <h6>Kotlin & Python</h6>
                <b-progress :value="60" variant="info" striped :animated="animate" class="mt-2"></b-progress>
                <h6>C</h6>
                <b-progress :value="75" variant="warning" striped :animated="animate" class="mt-2"></b-progress>
                <h6>C++</h6>
                <b-progress :value="50" variant="warning" striped :animated="animate" class="mt-2"></b-progress>
                <h6>Java Script</h6>
                <b-progress :value="50" variant="danger" striped :animated="animate" class="mt-3"></b-progress>
                <h6>HTML & CSS</h6>
                <b-progress :value="75" variant="danger" striped :animated="animate" class="mt-3"></b-progress><br>
                </div>
                 <h5>Favorite Application</h5>
                <img class="image" src="../assets/android.png">
                <img class="image1" src="../assets/Eclipse.png">
                <img class="image2" src="../assets/Vue.png">
                <img class="image" src="../assets/Mongo.png">
            <img class="image3" src="../assets/Vscode.png">
            <img class="image4" src="../assets/Matlab.jpg">
            <img class="image4" src="../assets/Solidswork.png">
            <img class="image5" src="../assets/Github.png">
            <img class="image6" src="../assets/Springboot.png">
            <img class="image7" src="../assets/Firebase.png">
            <img class="image8" src="../assets/Angular.png">
            
            
            <!--Award -->
            <h4 class="heading" id="Awards">Awards</h4>
            <div class="Education">
                <div>
                    <h6>
                        <font-awesome-icon icon="award" class="circle-icon" size="3x"/>
                        2018-2020
                    </h6><br><br>

                    <h6 class="title">Richard Bland College of William & Marry GSSP scholarship</h6>
                    <h8>This scholarship supported international student</h8><br><br>

                </div>
            </div>

            <div class="Education">
                <div>
                    <h6>
                        <font-awesome-icon icon="award" class="circle-icon" size="3x"/>
                        2014-2015
                    </h6><br><br>

                    <h6 class="title">Junior High Regional Mathematics Competition</h6>
                    <h8>Received the second prize in the Junior High Regional Mathematics Competition</h8><br><br>

                </div>
            </div>
            
            </b-col>
        </b-row>
        

    </div>

</template>

<script>
    export default {
        name: "Resume",
        data() {
            return {
                animate: true
            }
        },
        methods: {
            setActive(e)
            {
                const elementId = e.currentTarget.innerText;
                const element = document.getElementById(elementId)
                element.addClass("active")
                
            }
        }    
    }
</script>

<style scoped>
    a{
        margin-top: 5%;
        text-decoration: none;
        color:black;
        position: fixed;
        transition: 0.3s;
    }
    a:active, a:hover {
    outline: 0;
}
    a:hover, a:focus {
    color: #23527c;
    text-decoration: underline;
}
    a:hover, a:active, a:focus{
        color:#90acd1;
        text-decoration: #90acd1;
        text-decoration: underline;
        list-style: none;
    }
    h4.heading{
        font-weight: 700;
        display: block;
        position: relative;
        padding-top: 70px; 
        margin-top: -40px;


    }
    .Education{
        margin-top: 2%;
        background-color: #f9f9ff;
        border-radius: 25px;
        margin-bottom: 5%;
        min-height: 150px; 
        padding: 40px 30px;
    }
    .Education:hover{
        background: #90acd1;
        color: white;
        
    }
    .Education .edu h6{
        font-size: 20px;
        font-weight: 700;
    }
    .h4{
        text-emphasis: black;
    }
    .image{
        height: 150px;
        width: 200px;
        margin-left: 20px;
    }
    .image6{
        height: 150px;
        width: 150px;
        margin-top: 2%;
        margin-left: 10px;
        margin-bottom: 100px;
    }
    .image8{
        height: 150px;
        width: 150px;
        margin-top: 5%;
        margin-left: 80px;
        margin-bottom: 100px;
    }
    .image1{
        height: 50px;
        width: 200px;
        margin-top: 2%;
        margin-left: 20px;
    }
    .image4{
        height: 100px;
        width: 150px;
        margin-top: 5%;
        margin-left: 12%;
    }
    .image2{
        height: 100px;
        margin-left: 20px;
        width: 200px;
    }
    .image3{
        margin-top: 5%;
        margin-left: 20px;
        height: 100px;
        width: 100px;
    }
    .image7{
        height: 150px;
        margin-left: 70px;
        width: 200px;
        margin-bottom: 90px;
    }
    .image5{
        margin-top: 5%;
        margin-left: 10%;
        height: 150px;
        width: 150px;
    }
    .navi{
        color: #90acd1;
        margin-left: 20px;
        position: relative;
    }
    .navi li a{
        color: black;
        text-decoration: none;
    }
    .li{
        display: list-item;
    text-align: -webkit-match-parent;
    }
    .navi li a:hover{
        color:black;
    }
    .navi li a.current {
    color: #90acd1;
    margin-left: 20px;
    position: relative;
}
   .resume {
       margin-top: 5%;
   }
</style>

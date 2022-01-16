<template>
  <div class="contact">
      <b-row class="text-center">
      <b-col cols="2"></b-col>
      <b-col cols="4">
        <h3 class="titles">CONTACT ME <font-awesome-icon icon="envelope-open-text" class="circle-icon" size="2x" style="margin-left: 2%;"/></h3>
        <p class="information">I'am happy to answer any questions you have or provide you with an estimate. Just send me a message with any questions you may have in the form below</p>
        <h4 style="text-align: left; margin-top: 3%; margin-bottom: 2%; font-size: 18px;">NAME: </h4>
        <b-form-input class="name" v-model="name" placeholder="Enter your name"></b-form-input>
        <h4 style="text-align: left; margin-top: 3%; margin-bottom: 2%; font-size: 18px;">EMAIL: </h4>
        <b-form-input class="email" v-model="email" placeholder="Enter your email"></b-form-input>
        <h4 style="text-align: left; margin-top: 3%; margin-bottom: 2%; font-size: 18px;">SUBJECT: </h4>
        <b-form-input class="title" v-model="title" placeholder="Enter subject"></b-form-input>
        <h4 style="text-align: left; margin-top: 3%; margin-bottom: 2%; font-size: 18px;">MESSAGE: </h4>
        <b-form-textarea
      class="subject"
      v-model="subject"
      placeholder="Enter message..."
      rows="6"
      max-rows="10"
    ></b-form-textarea>
    <b-button class="button" variant="primary" :disabled='!isComplete' data-va="toasted" @click="send">Submit</b-button>
      </b-col>


      <b-col cols="4" id="info">
        <div class="contact-info">
          <p style="color: #999999; margin-bottom: 8%;">You can contact me through:</p>
          <p style="color: #999999;">Email: <a href="mailto: cpham006@vt.edu" target="_blank">cpham006@vt.edu</a></p>
          <p style="color: #999999;">Phone Number: <a href="tel://">(757)-839 2294</a></p>
          <p style="color: #999999;">Linkedln: <a href="https://www.linkedin.com/in/cuong-pham-b2b79a196/" target="_blank">cuong pham</a></p>
          <p style="color: #999999;">Github: <a href="https://github.com/cuongpq1000" target="_blank">cuongpq1000</a></p>
        </div>
      </b-col>
  </b-row>
      
  </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "Contact",
        data() {
      return {
        name: '',
        email: '',
        title: '',
        subject: ''
      }
      
    },
    computed: {
      isComplete(){
        return this.name && this.email && this.title && this.subject;
      }
    },
    methods: {
        send(){
        const user = {
          name: this.name,
          email: this.email,
          title: this.title,
          subject: this.subject
        };
        alert('Thank you for getting in touch! I appreciate you contacting me. I will get back in touch with you soon!Have a great day!');
        axios.post("https://firstapplication12.herokuapp.com/api/create-user", user).then(this.name = "", this.email = "", this.title = "", this.subject = "");
      },
       getdata() {
                 axios.get("https://firstapplication12.herokuapp.com/api/user").then((res) => {
                     console.log(res)
                     console.log(res.data[0])
                     this.listPeople = res.data
                 });

            }
    }
    }
</script>

<style scoped>
  .button{
    margin-top: 5%;
    margin-right: 100%;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }
  .button:hover{
    background-color: #337ab7;
  }
  .contact-info, a{
    color: #337ab7;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    text-decoration: none;
}
  .contact-info{
    text-align: left;
    margin-left: 5%;
    margin-top: 10%;
  }
  .contact{
    margin-top: 5%;
  }
  .titles{
    text-align: left;
  } 
  .information{
    margin-right: 1%;
    margin-bottom: 1%;
    color: #c0bdbd;
    text-align: left;

  }            
  @media only screen and (max-width: 1307px) {
  .contact {
    padding-top: 70px;
  }
}

</style>

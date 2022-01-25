<template>
  <div class="container">
    <button
        type="button"
        class="button"
        @click="showModal"
    >
      Create New Card!
    </button>

    <Modalcreatecart
        v-show="isModalVisible"
        @close="closeModal"
    />

    <div class="container1">
      <div class="card">
        <img src="@/assets/images/avatar2.jpg" alt="Person" class="card__image">
        <p class="card__name">Name:</p>
        <div class="grid-container">

          <div class="grid-child-posts">
            <h3>Title: <span></span></h3>
          </div>

          <div class="grid-child-followers">
            <h3>Description: <span></span></h3>
          </div>

        </div>
        <ul class="social-icons">
          <li><a :href="links.instagram" target="_blank"><i class="fa fa-instagram"></i></a></li>
          <li><a :href="links.twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
          <li><a :href="links.linkedin" target="_blank"><i class="fa fa-linkedin"></i></a></li>
          <li><a :href="links.facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
        </ul>
        <div class="cart_control">
          <button class="btn draw-border">Edit Card</button>
          <button class="btn draw-border">Delete Card</button>
        </div>

      </div>
      <div class="card">
        <img src="@/assets/images/avatar2.jpg" alt="Person" class="card__image">
        <p class="card__name">Lily-Grace Colley</p>
        <div class="grid-container">

          <div class="grid-child-posts">
            <h3>Title: <span></span></h3>
          </div>

          <div class="grid-child-followers">
            <h3>Description: <span></span></h3>
          </div>

        </div>
        <ul class="social-icons">
          <li><a :href="links.instagram" target="_blank"><i class="fa fa-instagram"></i></a></li>
          <li><a :href="links.twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
          <li><a :href="links.linkedin" target="_blank"><i class="fa fa-linkedin"></i></a></li>
          <li><a :href="links.facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
        </ul>
        <div class="cart_control">
          <button class="btn draw-border">Edit Card</button>
          <button class="btn draw-border">Delete Card</button>
        </div>

      </div>
      <div class="card">
        <img src="@/assets/images/avatar2.jpg" alt="Person" class="card__image">
        <p class="card__name">Lily-Grace Colley</p>
        <div class="grid-container">

          <div class="grid-child-posts">
            <h3>Title: <span></span></h3>
          </div>

          <div class="grid-child-followers">
            <h3>Description: <span></span></h3>
          </div>

        </div>
        <ul class="social-icons">
          <li><a :href="links.instagram" target="_blank"><i class="fa fa-instagram"></i></a></li>
          <li><a :href="links.twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
          <li><a :href="links.linkedin" target="_blank"><i class="fa fa-linkedin"></i></a></li>
          <li><a :href="links.facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
        </ul>
        <div class="cart_control">
          <button class="btn draw-border">Edit Card</button>
          <button class="btn draw-border">Delete Card</button>
        </div>

      </div>
      <div class="card">
        <img src="@/assets/images/avatar2.jpg" alt="Person" class="card__image">
        <p class="card__name">Lily-Grace Colley</p>
        <div class="grid-container">

          <div class="grid-child-posts">
            <h3>Title: <span></span></h3>
          </div>

          <div class="grid-child-followers">
            <h3>Description: <span></span></h3>
          </div>

        </div>
        <ul class="social-icons">
          <li><a :href="links.instagram" target="_blank"><i class="fa fa-instagram"></i></a></li>
          <li><a :href="links.twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
          <li><a :href="links.linkedin" target="_blank"><i class="fa fa-linkedin"></i></a></li>
          <li><a :href="links.facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
        </ul>
        <div class="cart_control">
          <button class="btn draw-border">Edit Card</button>
          <button class="btn draw-border">Delete Card</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modalcreatecart from "@/components/Modalcreatecart";
export default {
  components: {
    Modalcreatecart
  },
  data: () => ({
    isModalVisible:false,
    links: {
      facebook: 'https://ru-ru.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/',
    },
  }),
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>

<style scoped lang="scss">
.container1 {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 50px;
  justify-content: center;
  height: auto;
}

.card {
  background-color: #222831;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.7);
  color: white;
}

.card__name {
  margin-top: 15px;
  font-size: 1.5em;
}

.card__image {
  height: 160px;
  width: 160px;
  border-radius: 50%;
  border: 5px solid #272133;
  margin-top: 20px;
  box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
}


.draw-border {
  box-shadow: inset 0 0 0 4px #58cdd1;
  color: #58afd1;
  -webkit-transition: color 0.25s 0.0833333333s;
  transition: color 0.25s 0.0833333333s;
  position: relative;
}

.draw-border::before,
.draw-border::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: '';
  pointer-events: none;
  position: absolute;
  width: 0rem;
  height: 0;
  bottom: 0;
  right: 0;
}

.draw-border::before {
  border-bottom-width: 4px;
  border-left-width: 4px;
}

.draw-border::after {
  border-top-width: 4px;
  border-right-width: 4px;
}

.draw-border:hover {
  color: #ffe593;
}

.draw-border:hover::before,
.draw-border:hover::after {
  border-color: #eb196e;
  -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
  transition: border-color 0s, width 0.25s, height 0.25s;
  width: 100%;
  height: 100%;
}

.draw-border:hover::before {
  -webkit-transition-delay: 0s, 0s, 0.25s;
  transition-delay: 0s, 0s, 0.25s;
}

.draw-border:hover::after {
  -webkit-transition-delay: 0s, 0.25s, 0s;
  transition-delay: 0s, 0.25s, 0s;
}

.cart_control{
  display: flex;
}
.btn {
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  font: 700 1.2rem "Roboto Slab", sans-serif;
  padding: 0.75em 0.4em;
  letter-spacing: 0.05rem;
  margin: 0.5em;
  width: 7em;
}

.btn:focus {
  outline: 2px dotted #55d7dc;
}


.social-icons {
  padding: 0;
  list-style: none;
  margin: 1em;
}

.social-icons li {
  display: inline-block;
  margin: 0.15em;
  position: relative;
  font-size: 1em;
}

.social-icons i {
  color: #fff;
  position: absolute;
  top: 0.95em;
  left: 0.96em;
  transition: all 265ms ease-out;
}

.social-icons a {
  display: inline-block;
}

.social-icons a:before {
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  content: " ";
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
  background: linear-gradient(45deg, #ff003c, #c648c8);
  transition: all 265ms ease-out;
}

.social-icons a:hover:before {
  transform: scale(0);
  transition: all 265ms ease-in;
}

.social-icons a:hover i {
  transform: scale(2.2);
  -ms-transform: scale(2.2);
  -webkit-transform: scale(2.2);
  color: #ff003c;
  background: -webkit-linear-gradient(45deg, #ff003c, #c648c8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 265ms ease-in;
}

.grid-container {
  display: grid;
  //grid-template-columns: 1fr 1fr;
  //grid-gap: 20px;
  font-size: 1.2em;
}
.container{
  height: auto;
  background-color: #34495e;
  padding: 15px;
}
.button{
  margin: 15px 30px;
  position: relative;
  background-color: black;
  border-radius: 4em;
  font-size: 16px;
  color: white;
  padding: 0.8em 1.8em;
  cursor:pointer;
  user-select:none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */
}

.button:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}

.button:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}

.button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}

.button:active {
  top: 1px;
}

.Personal_cart {
  width: 300px;
  height: 400px;
  background-color: red;
}
</style>

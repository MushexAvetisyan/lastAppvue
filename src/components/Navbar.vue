<template>
  <nav class="navbar">
    <a href="">
      <img src="@/assets/images/us-congress.svg" />
    </a>
    <ul>
      <li><a href=""><router-link to="/">Home</router-link></a></li>
      <li><a href=""><router-link to="/Aboutme">About Me</router-link></a></li>
      <li><a href=""><router-link to="/Portfolio">Portfolio</router-link></a></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  .navbar {
    background-color: black;
    display: flex;
    justify-content: space-around;
    color: white;
    img{
      width: 100px;
      height: 100px;
      padding: 10px;
    }
    ul{
      display: flex;
      align-items: center;
      li{
        margin-left: 20px;
        list-style-type: none;
        a{
          text-decoration: none;
          color: white;
          font-size: 25px;
        }
      }
    }
  }
</style>

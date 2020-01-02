<template>
  <div class="spinner" v-show="isLoading">
    <div>
      <ul>
        <li></li> <li></li> <li></li> <li></li> <li></li>
      </ul>
      <p>{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      isLoading: false,
      content: ''
    }
  }
}
</script>

<style scoped>
.spinner{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, .9);
  z-index: 999;
}
.spinner div{
  margin-top: px2rem(-40);
  margin-left: px2rem(-65);
  position: absolute;
  left: 50%;
  top: 40%;
  width: px2rem(80);
  height: px2rem(130);
}

.spinner div ul {
  width: px2rem(80);
  height: px2rem(100);
  text-align: center;
  font-size: px2rem(20);
}

.spinner div ul li {
  background-color: #67CF22;
  height: 100%;
  width: px2rem(9);
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner div ul li:nth-child(2){
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner div ul li:nth-child(3){
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.spinner div ul li:nth-child(4){
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner div ul li:nth-child(5){
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>

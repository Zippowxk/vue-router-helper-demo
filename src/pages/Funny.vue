<template>
  <div>
    <van-nav-bar title="Funny View" left-arrow @click-left="onClickLeft"/>
    <div class="container">
      <router-link  :to='`/funny?id=${Number($route.query.id)+1}`'>
         {{msg}}
      </router-link>
    </div>
  </div>
</template>

<script>
const message = ['always','create','a new','Vue Instance','when','pushing,','and','always']
const reverseMessage = ['On Github ↑','Star this Library','Thanks for Watching','when going back','Vue Instance','previous','destroy']
export default {
  name: 'Funny',
  data(){
    return {
      msg:undefined,
    }
  },
  activated(){
    if(this.msg===undefined){
      this.msg = this.$route.query.id > message.length-1 ? "always": message[this.$route.query.id]
    }else{
      this.msg = this.$route.query.id > reverseMessage.length-1 ? "always" : reverseMessage[this.$route.query.id]
    }
  },
  methods:{
    onClickLeft() {
      this.$router.back();
    }
  }
}
</script>

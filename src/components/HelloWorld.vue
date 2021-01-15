<template>
  <div class="hello">
    <router-link  to='/foo'>
      go to Foo
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

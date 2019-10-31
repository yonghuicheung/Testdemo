<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      text值为：{{getText}}
      <button type="button" @click="setText">修改text值</button>
    </div>
    <div>
      groups值为：{{getGroups}}
      <button type="button" @click="setGroup(getGroups.length + 1)">修改groups值</button>
    </div>
    <div>
      http值为：{{dataStatus}}
      <button type="button" @click="getHttpData">获取github数据</button>
    </div>
    <div>
      账号：<input type="text" v-model="username">
      密码：<input type="text" v-model="password">
    </div>
    <div>
      登陆结果：{{loginStatus}}
      <button type="button" @click="getLogin">获取登陆结果</button>
    </div>
    <div>
        <input type="text" v-model="str1">
        <input type="text" v-model="str2">
        <div>{{ sliceUpperCase(str1) }}</div>
        <div>{{ sliceUpperCase(str2) }}</div>
    </div>
    <HelloAbout v-bind:msg="helloAboutMsg">
      <template slot="customize">
        <div v-bind:class="classItem">aaa</div>
      </template>
    </HelloAbout>
    <button @click="setToast" msg="hello">弹窗</button>
  </div>
</template>
<script>
import HelloAbout from '_com/HelloAbout.vue'
import { mapGetters, mapActions } from 'vuex'
import { getTestData } from '../services/moduleA'
import { getLoginData } from '../services/loginData'
export default {
  name: 'about',
  components: {
    HelloAbout,
  },
  data() {
    return {
      dataStatus: '未获取',
      loginStatus: '未登录',
      username: '',
      password: '',
      str1: '',
      str2: '',
      classItem: 'aaa',
      helloAboutMsg: {
        msg: 'Hello, About',
        msg2: 'Hello, About2'
      }
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'getText',
      'getGroups'
    ])
  },
  methods: {
    ...mapActions([
      'setText', // 将 `this.setText()` 映射为 `this.$store.dispatch('setText')`
      'setGroup'
    ]),

    sliceUpperCase(val){
      return val.slice(1).toUpperCase()
    },

    // 获取 github 数据
    getHttpData() {
      getTestData()
      .then(response => {
        console.log(response)
        this.dataStatus = '获取成功'
      })
    },

    //获取登陆数据
    getLogin() {
      let params = {
          username: this.username,
          password: this.password
      }
      getLoginData(params)
      .then(response => {
        console.log(response)
        this.loginStatus = '登陆成功'
      })
    },

    setToast(){
      this.$toast('Hello World', 2000);
    }
  },
}
</script>
<style scoped>
button{
  border: 1px solid #ccc;
  border-radius: 5px;
}
.aaa{
  color: green
}
</style>


<template>
    <div>
        <ul v-show="!seen" ref="box">
            <li v-for="(item, index) in arr" :key="index"></li>
        </ul>
        <div>
            <input v-model="message">
        </div>
        <div v-if="seen" v-bind:title="message2" v-on:click="reverseMessage" v-bind:[attributeName]="url">
            {{ message }}
            <span v-html="rawHtml"></span>
            <a :href="url" v-on:click.prevent="reverseMessage" v-text="url" v-bind:class="httpClass"></a>
            <span v-text="fullName" class="static" v-bind:class="{active: isActive, 'text-danger': hasError}" v-bind:style="{'text-stroke': '1px #f00'}"></span>
        </div>
        <div>
            <template v-if="loginType === 'username'">
                <label>Username</label>
                <input placeholder="please enter your username" key="user-name-input">
            </template>
            <template v-else>
                <label>Email</label>
                <input placeholder="please enter your email" key="email-input">
            </template>
            <button @click="changeLogin">切换login</button>
        </div>
        <div>
            <button @click="changeShow">切换ok</button>
            <span v-show="isShow">Hello</span>
            <span v-text="counter"></span>
            <button @click.ctrl.exact="counterEvent">加1</button>
        </div>
        <div>
            <input type="checkbox" v-model="checkNames" value="Jack" id="jack">
            <label for="jack">Jack</label>
            <input type="checkbox" v-model="checkNames" value="Rose" id="rose">
            <label for="rose">Rose</label>
            <span v-text="checkNames"></span>
            <select v-model="selected">
                <option disabled value="">请选择</option>
                <option v-for="(item, index) in toDoListToComputed" :key="index" v-bind:value="item.text" v-text="item.text"></option>
            </select>
            <span>Selected: {{ selected }}</span>
            <input v-model.lazy.number.trim="age" ref="age">
        </div>
        <div>
            <ol v-if="!seen">
                <li v-for="(item, index) in toDoListToComputed" :key="index" v-text="item.text" v-bind:[attributeName2(index)]="item.text"></li>
            </ol>
        </div>
        <div>
            <button-counter></button-counter>
            <button-counter></button-counter>
            <div>
                <blog-post
                    v-for="(item) in toDoListToComputed"
                    :key="item.id"
                    :post="item"
                    @enlarge-text="onLargeText"
                    :style="{fontSize: postFontSize + 'em'}"
                >
                    <template v-slot:ver>
                        <span>版本</span>
                    </template>
                </blog-post>
            </div>
        </div>
        <div v-if="!seen">
            <button @click="show = !show">Toggle</button>
            <transition name="bounce">
                <p v-if="show">hello</p>
            </transition>
        </div>
        <div v-if="!seen">
            <button @click="addList">AddList</button>
            <button @click="removeList">RemoveList</button>
            <transition-group name="list" tag="p">
                <span v-for="item in items" :key="item" class="list-item" v-text="item"></span>
            </transition-group>
        </div>
        <div>
            <span>{{msg | capitalize}}</span>
        </div>
    </div>
</template>
<script>
import buttonCounter from '_com/buttonCounter.vue'
import blogPost from '_com/blogPost.vue'
export default {
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    components: {
        buttonCounter,
        blogPost
    },
    data() {
        return {
            arr: [],
            msg: 'abc',
            message: 'Hello, Vue!',
            message2: '页面加载于 ' + new Date().toLocaleString(),
            seen: true,
            toDoList: [
                {id: 1, text: '学习 Javascript'},
                {id: 2, text: '学习Vue'},
                {id: 3, text: '整个牛项目'}
            ],
            rawHtml: '<span style="color: red">This should be red.</span>',
            attributeName: 'data-url',
            url: 'http',
            firstName: 'Li',
            lastName: 'Lei',
            isActive: true,
            hasError: false,
            httpClass: {
                isActive: true,
                hasError: true
            },
            loginType: 'username',
            isShow: true,
            counter: 0,
            checkNames: [],
            selected: '',
            age: 1,
            postFontSize: 1,
            show: true,
            items: [1,2,3,4,5,6,7,8,9],
            nextNum: 10
        }
    },
    mounted() {
        this.getData();
        this.fullName = 'Han Meimei'
        this.toDoList.push({id: 0, text: '啊啊'})
        this.toDoList.reverse()
        // this.toDoList = this.toDoList.filter(item => {
        //     return item.text.length > 2
        // })
        this.$set(this.toDoList, 1, {id: 6, text: '第一'})
        // this.toDoList = Object.assign({}, this.toDoList, [
        //     {text: 'aaaaaa'},
        //     {text: 'bbbbbb'}
        // ])
        var a = () => {
            console.log('abc')
        }
        a()
    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        },
        toDoListToComputed: function () {
            return this.toDoList.filter(item => item.text.length > 2)
        },
    },
    methods: {
        attributeName2: function (index) {
            return 'id' + index
        },
        async getData() {
            this.arr = [1, 2, 3];
            await this.$nextTick();
            this.$refs.box.getElementsByTagName('li')[0].innerHTML = 'hello';
        },
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        },
        changeLogin() {
            this.loginType = this.loginType === 'username' ? 'email' : 'username'
        },
        changeShow() {
            this.isShow = !this.isShow
        },
        counterEvent: function (event) {
            this.counter += 1
            if (event) {
                console.log(event.target.tagName)
            }
        },
        onLargeText: function (event) {
            this.postFontSize += event
        },
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        addList: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        removeList: function () {
            this.items.splice(this.randomIndex(), 1)
        }
    }
}
</script>
<style lang="less" scoped>
li{
    text-align: left;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

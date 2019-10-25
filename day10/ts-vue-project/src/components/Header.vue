<template>
  <div>
    {{name}}
    {{test()}}
    {{numComputed()}}
    <button @click="test">ok</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 选项
  // 所有的组件选项都可以放在这里
  //   computed: {
  //     numComputed() {
  //       return 11111;
  //     }
  //   }
})
export default class MyComponent extends Vue {
  template: string = '<button @click="onClick">Click!</button>';
  // 选项
  // 初始数据可以直接声明为实例的属性
  name: string = "Hello!";
  age: number = 18;
  // 组件方法也可以直接声明为实例的方法
  onClick(): void {
    window.console.log(this.name);
  }
  test(num: number): number {
    window.console.log(this.name);
    return 1888;
  }
  numComputed(): number {
    return 11111;
  }
}
</script>
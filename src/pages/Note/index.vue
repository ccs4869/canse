<template>
  <main class="note">
    <Code>
      <template #codeTit>
        <h2>TypeScript Yest</h2>
        <em>2022/07/04</em>
      </template>
      When you build multiple entries in a single package, you exports them with
      exports syntax. Like

      <template #codeMain>
        <code
          >public class Java { <br />
          public static void main(String []){ <br />
          System.out.println('Hello World') <br />
          } <br />
          }</code
        >
      </template>
    </Code>
    <Code>
      <template #codeTit>
        <h2>TypeScript Yest</h2>
        <em>2022/07/04</em>
      </template>
      When you build multiple entries in a single package, you exports them with
      exports syntax. Like

      <template #codeMain>
        <code
          >public class Java { <br />
          public static void main(String []){ <br />
          System.out.println('Hello World') <br />
          } <br />
          }</code
        >
      </template>
    </Code>
    <Code>
      <template #codeTit>
        <h2>TypeScript Yest</h2>
        <em>2022/07/04</em>
      </template>
      When you build multiple entries in a single package, you exports them with
      exports syntax. Like

      <template #codeMain>
        <code
          >public class Java { <br />
          public static void main(String []){ <br />
          System.out.println('Hello World') <br />
          } <br />
          }</code
        >
      </template>
    </Code>
    <!-- <code
      >public class Java { public static void main(String []){
      System.out.println('Hello World') } }</code
    >
    <pre>code</pre>
    <code>Java</code> -->
  </main>
</template>

<script setup lang="ts">
import {} from "vue"
import Code from "@/components/Code.vue"
</script>
<style lang="scss" scoped>
@use "@/assets/css/var.scss";
.note {
  width: var.$width;
  margin: 0 auto;
}
</style>

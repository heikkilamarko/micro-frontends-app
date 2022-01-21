<script>
  let clazz;
  export { clazz as class };
  export let href;
</script>

<a class={clazz} on:click|preventDefault {href}>
  <slot />
</a>

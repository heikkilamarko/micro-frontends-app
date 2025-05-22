<script>
  let clazz;
  export { clazz as class };
  export let href;
</script>

<a class={clazz} {href} data-link>
  <slot />
</a>

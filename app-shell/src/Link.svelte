<script>
  export let clazz;
  export let href;
</script>

<a class={clazz} on:click {href}>
  <slot />
</a>

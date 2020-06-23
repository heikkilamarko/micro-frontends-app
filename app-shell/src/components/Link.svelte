<script>
  export let clazz;
  export let href;
</script>

<a class={clazz} on:click|preventDefault {href}>
  <slot />
</a>

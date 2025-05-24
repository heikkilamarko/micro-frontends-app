<script>
  let { class: clazz, href, children } = $props();
</script>

<a class={clazz} {href} data-link>
  {@render children?.()}
</a>

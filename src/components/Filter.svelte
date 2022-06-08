<script>
  import { createEventDispatcher } from 'svelte'

  let value = ''
  const dispatch = createEventDispatcher()
  const onKeyPress = (e) => {
    if (e.charCode === 13)
      dispatch('value', {
        text: 'Hello!',
      })
  }
</script>

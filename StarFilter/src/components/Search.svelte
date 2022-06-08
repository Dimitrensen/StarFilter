<script>
  import { createEventDispatcher } from 'svelte'
  $: mobile = innerWidth < 600
  let value = ''
  const dispatch = createEventDispatcher()
  const onKeyPress = (e) => {
    if (e.charCode === 13)
      dispatch('value', {
        value,
      })
  }
</script>

<div class:mt-25={!mobile} class:mt-55={mobile}>
  <h1 class="h">Starry</h1>
  <input class="in" type="search" on:keypress={onKeyPress} bind:value placeholder="github handler" />
</div>

<style>
  .h {
    font-size: 6rem;
    margin-bottom: 0;
  }

  .in {
    max-width: 16rem;
  }

  .mt-55 {
    margin-top: 55%;
  }

  .mt-25 {
    margin-top: 15%;
  }
</style>

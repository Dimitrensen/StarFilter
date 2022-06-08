<script>
  import Filter from './components/Filter.svelte'
  import Search from './components/Search.svelte'
  import Loading from './components/Loading.svelte'

  let handle = ''
  let loading = false

  function setHandle(e) {
    handle = e.detail.value
    loading = true
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
</svelte:head>

<main>
  {#if loading}
    <Loading />
  {:else if handle === ''}
    <Search on:value={setHandle} />
  {:else}
    <Filter />
  {/if}
</main>

<!-- https://github.com/EmilTholin/svelte-routing -->
<style>
  :global(body) {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    text-align: center;
  }
</style>

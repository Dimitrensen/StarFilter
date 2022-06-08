<script>
  $: mobile = innerWidth < 600
</script>

<img class:mt-25={!mobile} class:mt-55={mobile} src="three-dots.svg" alt="sppiner" />

<style>
  .mt-55 {
    margin-top: 80%;
  }

  .mt-25 {
    margin-top: 25%;
  }
</style>

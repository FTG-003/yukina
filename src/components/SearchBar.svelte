<script>
  let searchTerm = '';

  function handleInput(event) {
    searchTerm = event.target.value;
    // In a real application, you would trigger a search function here
    console.log('Search term:', searchTerm);
  }
</script>

<div class="search-bar">
  <input
    type="text"
    placeholder="Search..."
    bind:value={searchTerm}
    on:input={handleInput}
  />
  <button on:click={() => console.log('Searching for:', searchTerm)}>Search</button>
</div>

<style>
  .search-bar {
    display: flex;
    gap: 8px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
<template>
  <div class="PageNotFound">
  </div>
</template>

<script>
  export default {
    name: 'PageNotFound',
    created: function() {
        // Redirect outside the app using plain old javascript
        window.location.href = "/login";
    }
  }
</script>


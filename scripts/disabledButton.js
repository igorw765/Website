 <script>
      function disableprv() {
        var element = document.getElementById("btn");
        element.classList.toggle("disabledpreviousbutton");
        element.disabled = true;
      }

      function enableprv() {
        var element = document.getElementById("btn");
        element.classList.toggle("previousbutton");
        element.disabled = true;
      }

      function disablenxt() {
        var element = document.getElementById("btn");
        element.classList.toggle("disablednextbutton");
        element.disabled = true;
      }

      function enablenxt() {
        var element = document.getElementById("btn");
        element.classList.toggle("nextbutton");
        element.disabled = true;
      }
</script>

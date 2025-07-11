$(document).ready(function() {
    $("#pesquisar-button").click(function(event) {
      event.preventDefault(); // Prevent the default form submission  
      if ($("#search-form input[type='search']").val() === "Cauan") {
            alert("Esse nome é Cauan, o criador do site!");
            $("#pesquisar-button").width("500px").text("Pesquisar");
        } 
        else {
            alert("Esse nome não é Cauan, o criador do site! SAIA DAQUI!");
            $("#pesquisar-button").removeAttr("style").text("").html('<i class="bi bi-search"></i>');
        }
    });
});
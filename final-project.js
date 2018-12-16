function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#button2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

document.ready(function() {
    const productPage = $('.productpage-tech');
    if(productPage){
        productpageTech();
    }
});

function productpageTech()
{
    var jsontextData = JSON.parse(technology);
    for(var i = 0; i < jsontextData.length; i++)
    {
      console.log(jsonData[i].name);
      console.log(jsonData[i].src);
      console.log(jsonData[i].price);
    }
}
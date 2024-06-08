
function changePicture(color) {
    var imagePath = '';

    switch (color) {
        case 'color1':
            imagePath = './images/electroguitars/b41ecbd7-2b8f-43f5-85f2-cf3650d2252c__91051.jpg';
            break;
        case 'color2':
            imagePath = './images/electroguitars/522ec4b9-ee17-4523-9b40-4fe209242929__08259.jpg';
            break;
        case 'color3':
            imagePath = './images/electroguitars/60174eb5-7bf3-4386-be15-f53c6c2a642f__67681.jpg';
            break;
        case 'color4':
            imagePath = './images/electroguitars/057fdcfd-937f-4ff5-bf5c-c08dc8024f4f__67014.jpg';
            break;
        case 'color5':
            imagePath = './images/electroguitars/703aa163-3661-4f59-b1b7-bff0aef3a8c3__34602.jpg';
            break;
        case 'color6':
            imagePath = './images/electroguitars/754a3497-eefe-493d-ae18-86fbb11b4334__67491.jpg';
            break;
    }

    document.getElementById('guitarImage').src = imagePath;
}


function openForm(){
  document.getElementById("myForm").style.display="block";
}
function closeForm(){
  document.getElementById("myForm").style.display="none";
}

$(document).ready(function () {
  $(".buynow").click(function () {
      event.preventDefault();
      var productName = $(this).closest(".card").find(".card-title").text();

      $("#productModalLabel").text("Item Added to Cart");
      $("#modalBody").html("<p>You've added <strong>" + productName + "</strong> to your cart!</p>");

      $("#productModal").modal("show");
  });
});


function change1(){
  document.getElementById("img1").src = "./images/electroguitars/6ec6d2cb-5cdb-4e72-9fc8-6ddcededf6e5__91884.jpg"
}
function change2(){
  document.getElementById("img1").src = "./images/electroguitars/1f93f831-dbde-470c-92b7-e7a0147ba703__77566.jpg"
}

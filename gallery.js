//add an event handler so that when the thumbnail image is clicked the full image shows //

var image = document.getElementsByClassName('galleryImages');
var thisImage = this.image;

thisImage.addEventListener("click", function(e){
    thisImage.hide();
});
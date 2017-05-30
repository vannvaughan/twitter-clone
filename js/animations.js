$(document).ready(function() {
var $tweetControls = $('#tweet-controls')
var $tweetSubmit = $('#tweet-submit')
var $charCount = $('#char-count')
var $tweetCompose = $('.tweet-compose')

$tweetControls.hide();

$('.tweet-actions').hide();

$tweetCompose.click(function(){
    $tweetControls.show();
    $(this).css("height", "5em")
})

$tweetCompose.on('keydown', function() {
    var count = 140 - $(this).val().length
    $charCount.text(count)
    if (count >= 10) {
      $charCount.css('color', '#999')
    }
    else if (count <= 10 && count >= 0) {
      $charCount.css('color', 'red')
      $tweetSubmit.removeAttr("disabled")

   }
    else if (count < 0) {
      $tweetSubmit.attr("disabled", "disabled")
    }
     else if (count > 0) {
      $tweetSubmit.attr("enabled", "enabled")   
     }
     else if (count === 0) {
      $tweetSubmit.reset(count)
     }
  })

$tweetCompose.on('click', function() {

})




});
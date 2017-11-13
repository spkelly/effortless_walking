(() => {
  'use strict';

  const formSubmit = $('.email-button');
  const emailInput = $('.email-input');
  const navigation = $('.navigation-menu');

  const inputIsValid = (input) => {
    if (input.value.length > 0) {
      return true;
    }

    return false;
  };

  const handleError = () => {
    console.log('input is invalid');
  };

  const handleSubmit = () => {
    console.log('input is valid')
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    inputIsValid(emailInput[0]) ? handleSubmit() : handleError();
  };

  const scrollToTarget = (event) => {
    let targetClass = $(event.target).attr("data-section")
    let target = $(`.${targetClass}`)

    event.preventDefault();
    $('html,body').stop().animate({
      scrollTop: target.offset().top - 12
    },1100);
  }

  $(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 900) {
    $('#top-btn').fadeIn();
  } else {
    $('#top-btn').hide();
  }
});

$('#top-btn').click(()=>{
  $('html,body').stop().animate({
    scrollTop: 0
  },1100);
})

$('.expand-btn').click((e) =>{
  let button = $(e.target);
  $('.minimized').slideToggle();
  let buttonText = button.text() == "more..."? "less...":"more...";
  button.text(buttonText);
})


  console.log($(navigation.children()[0]));
  for(let child of $(navigation.children())){
    console.log($(child));
    $(child).click(scrollToTarget)
  }
  $(navigation.children()[0]).click(scrollToTarget);
  formSubmit.click(handleFormSubmit);
})();

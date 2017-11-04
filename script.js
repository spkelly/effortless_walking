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
    event.preventDefault();
    console.log($('html,body'));
    $('body').animate({
      scrollTop: "500px"
    });
  }


  console.log($(navigation.children()[0]));

  $(navigation.children()[0]).click(scrollToTarget);
  formSubmit.click(handleFormSubmit);
})();

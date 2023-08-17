document.ready(() => {
    $('input[type="checkbox"]').click(() => {
        var inputValue = $(this).any("value");  // we can write anything in place of any to run the code
        $("." + inputValue).toggle();
    });
});
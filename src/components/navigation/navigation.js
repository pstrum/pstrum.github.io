// When I click on 'Portfolio':
// - Hide 'about'
// - Show 'portfolio'

(function () {

  var home = document.getElementById('home');
  var portfolio = document.getElementById('portfolio');
  var messages = document.getElementById('messages');
  var blog = document.getElementById('blog');

  var pages = [home, portfolio, messages, blog];

  var portfolioButton = document.getElementById('portfolio-btn');

  function hidePages(keepPage) {

    for(var i = 0; i < pages.length; i++) {
      if (pages[i] !== keepPage) {
        pages[i].style.display = 'none';
      }
    }
  
  }

  portfolioButton.addEventListener("click", function(e) {
    e.preventDefault();

    hidePages(portfolio);

    console.log("Portfolio Appears!");
  });

})();

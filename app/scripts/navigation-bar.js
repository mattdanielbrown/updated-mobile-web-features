
function main() {

  const mobileNavigation = document.getElementById('navigation-list');
  const mobileNavigationToggleSwitch = document.getElementById('page-nav-toggle');


  function toggleMobileNavigationMenu() {
    mobileNavigation.classList.toggle('display-on-mobile');
  }



  mobileNavigationToggleSwitch.addEventListener('change', function () {
    // if (this.checked) {
    //   toggleMobileNavigationMenu();
    // } else {
    //   toggleMobileNavigationMenu();
    // }
    toggleMobileNavigationMenu();
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  main();
});

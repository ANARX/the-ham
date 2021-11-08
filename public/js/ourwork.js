const tabsContents = document.querySelectorAll('.our-work-pic'), loadMoreBtn = document.querySelector('.load-more'),
    clickHandler = (event) => {
      const clickedTab = event.target;
      const activeTab = document.querySelectorAll('.our-work-active-tab');

      if (activeTab.length > 0) activeTab[0].classList.remove('our-work-active-tab');
      clickedTab.classList.add('our-work-active-tab');
      for (let element of tabsContents) {
        element.classList.add('hide-tabs');
        if (clickedTab.dataset.category === 'all') {
          for (let counter = 0; counter < 12; counter++) {
            tabsContents[counter].classList.remove('hide-tabs');
            loadMoreBtn.hidden = false;
          }
        } else if (element.dataset.category === clickedTab.dataset.category) {
          element.classList.remove('hide-tabs');
        } else if (clickedTab.dataset.category !== 'all') {
          loadMoreBtn.hidden = true;
        }
      }
    };
document.querySelectorAll('.our-work-tab').forEach((tab)=>{
  tab.addEventListener('click', clickHandler);
});

loadMoreBtn.addEventListener('click',()=>{
  for (let counter = 0; counter < 24; counter++){
    tabsContents[counter].classList.remove('hide-tabs');
    loadMoreBtn.hidden = true;
  }
});
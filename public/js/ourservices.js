const serviceTabs = document.querySelector('.our-services-btn'),
    serviceTabsContent = document.querySelector('.our-services-desc'), serviceTabsChildren = serviceTabs.children,
    serviceTabsLength = serviceTabsChildren.length, serviceTabsContentChildren = serviceTabsContent.children;


for (let counter = 0; counter < serviceTabsLength; counter++){
  serviceTabsChildren[counter].dataset.index = String(counter);
  if (counter !== 0) {
    serviceTabsContentChildren[counter].hidden = true;
  }
}

serviceTabs.addEventListener('click', ()=>{
  let toggle = serviceTabs.querySelector('.active-tab').classList.toggle('active-tab');
  serviceTabsContent.querySelector('li:not([hidden])')["hidden"] = true;
  event.target.classList.toggle('active-tab');
  serviceTabsContentChildren[event.target.dataset.index].hidden = false;
});
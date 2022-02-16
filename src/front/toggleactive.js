function toggleActive(event) {
   const sidebarItems = document.querySelectorAll('.sidebar-item')
   event.stopPropagation();
   sidebarItems.forEach(item => {
      item.classList.remove('activated')
   });
   event.currentTarget.classList.add('activated')

}

export { toggleActive }
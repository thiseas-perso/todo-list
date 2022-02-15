function toggleActive(event) {
   const sidebarItems = document.querySelectorAll('.sidebar-item')
   sidebarItems.forEach(item => {
      item.classList.remove('activated')
   });
   event.target.classList.add('activated')
}

export { toggleActive }
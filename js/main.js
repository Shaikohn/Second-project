function phoneNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  /* Collapsible buttons */

// toggle collapse of items in info section

$(document).ready(function() {
  function toggleContent(content) {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }

  // collapse all open content
  function collapseAllOpenContent() {
   const colls = document.getElementsByClassName('collapsible');
    for (const coll of colls) {
      if (coll.classList.contains('btnactive')) {
        coll.classList.remove('btnactive');
        toggleContent(coll.nextElementSibling);
      }
    }
  }

  const colls = document.getElementsByClassName('collapsible');
  for (const coll of colls) {
    coll.addEventListener('click', function() {
      if (!this.classList.contains('btnactive')) {
        collapseAllOpenContent();
      }
      this.classList.toggle('btnactive');
      toggleContent(this.nextElementSibling);
    });
  }
    }); 
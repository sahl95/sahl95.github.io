document.addEventListener("DOMContentLoaded", function() {

  const filters = document.querySelectorAll(".filter:not(.merged-button)"); // normal buttons
  const subfilters = document.querySelectorAll(".merged-button .subfilter"); // merged type buttons
  const items = document.querySelectorAll("#talkList li");

  let activeType = "all";      // currently selected type
  let last4YearsActive = false; // last 4 years toggle

  function filterItems() {
    const currentYear = new Date().getFullYear();

    items.forEach(item => {
      const types = (item.dataset.type || "").split(" ");
      const year = parseInt(item.dataset.year) || 0;

      let show = true;

      // type filtering (mutually exclusive)
      if(activeType !== "all") {
        show = types.includes(activeType);
      }

      // last 4 years filtering (additive)
      if(last4YearsActive) {
        show = show && year >= currentYear - 4;
      }

      item.style.display = show ? "" : "none";
      item.classList.remove("first-visible");
    });

    // mark first visible
    for(const item of items) {
      if(item.style.display !== "none") {
        item.classList.add("first-visible");
        break;
      }
    }
  }

  // normal buttons
  filters.forEach(filter => {
    filter.addEventListener("click", (event) => {
      event.preventDefault();
      const type = filter.dataset.filter;

      if(type === "recent") {
        // toggle last 4 years
        last4YearsActive = !last4YearsActive;
        filter.classList.toggle("active", last4YearsActive);
      } else {
        // exclusive type buttons
        activeType = type;
        filters.forEach(f => {
          if(f.dataset.filter !== "recent") f.classList.remove("active");
        });
        subfilters.forEach(sf => sf.classList.remove("active"));
        filter.classList.add("active");
      }

      filterItems();
    });
  });

  // merged subfilters (type buttons)
  subfilters.forEach(sub => {
    sub.addEventListener("click", (event) => {
      event.preventDefault();
      const type = sub.dataset.filter;

      activeType = type;
      subfilters.forEach(sf => sf.classList.remove("active"));
      sub.classList.add("active");

      // keep last 4 years button as-is
      filters.forEach(f => {
        if(f.dataset.filter === "recent") {
          f.classList.toggle("active", last4YearsActive);
        } else if(f.dataset.filter === "all" && activeType === "all") {
          f.classList.add("active");
        } else {
          f.classList.remove("active");
        }
      });

      filterItems();
    });
  });

});
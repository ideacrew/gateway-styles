
// clickable rows on a table
function addRowHandlers(table_id) {
	var rows = document.getElementById(table_id).rows;
	for (i = 0; i < rows.length; i++) {
	  rows[i].onclick = function(){ return function(){
	    this.classList.add("active")
	  };}(rows[i]);
	}
}
function hideButton(e) {
  e.closest("tr").previousElementSibling.classList.remove("active");
}

// table search
function searchTable(input) {
  // Declare variables
  var table_id, filter, table, tr, td, i, txtValue;
  table_id = input.dataset.tableid;
  filter = input.value.toUpperCase();
  table = document.getElementById(table_id);
  tr = table.rows;

  if(filter !== "") {
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        txtValue = tr[i].textContent || tr[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }

    }
  } else {
    for (i = 0; i < tr.length; i++) {
      tr[i].removeAttribute('style')
    }
  }
}

// go to specific page w/ kaminari pagination
function goToPage(inputObj) {
  let url = new URL(window.location.href);
  url.searchParams.set('page', inputObj.value);
  window.location.href = url;
}
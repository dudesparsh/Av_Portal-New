// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();


function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var company=document.getElementById("company_row"+no);
 var price=document.getElementById("price_row"+no);
 var status=document.getElementById("status_row"+no);

 var name_data=name.innerHTML;
 var company_data=company.innerHTML;
 var price_data=price.innerHTML;
 var status_data=status.innerHTML;

	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 company.innerHTML="<input type='text' id='company_text"+no+"' value='"+company_data+"'>";
 price.innerHTML="<input type='text' id='price_text"+no+"' value='"+price_data+"'>";
 status.innerHTML="<input type='text' id='status_text"+no+"' value='"+status_data+"'>";

}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var company_val=document.getElementById("company_text"+no).value;
 var price_val=document.getElementById("price_text"+no).value;
 var status_val=document.getElementById("status_text"+no).value;


 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("company_row"+no).innerHTML=company_val;
 document.getElementById("price_row"+no).innerHTML=price_val;
 document.getElementById("status_row"+no).innerHTML=status_val;


 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_company=document.getElementById("new_company").value;
 var new_price=document.getElementById("new_price").value;
 var new_status=document.getElementById("new_status").value;

	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='company_row"+table_len+"'>"+new_company+"</td><td id='price_row"+table_len+"'>"+new_price+"</td><td id='status_row"+table_len+"'>"+new_status+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_company").value="";
 document.getElementById("new_price").value="";
 document.getElementById("new_status").value="";

}
 function myFunction(){
            var input, filter, div, tr, td;
            input=document.getElementById("myInput");
            filter=input.value.toUpperCase();
            div=document.getElementById("myTable");
            tr=div.getElementsByTagName("tr");
            for(i=0;i<tr.length;i++){
                td=tr[i].getElementsByTagName("td")[0];
                if(td.innerHTML.toUpperCase().indexOf(filter)>-1){
                    tr[i].style.display="";
                }else{
                    tr[i].style.display="none";
                }
            }
        }

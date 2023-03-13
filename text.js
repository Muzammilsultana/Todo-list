const listitems=["Pray","walk","Read"];
var edititem="";
function ghtml()
{
    
    var html = '<ul class="list-group">';
    for(let i=0;i<listitems.length;i++)
        {
            html += '<li class="list-group-item" style="padding-left:38%" > '+listitems[i] + ' <input id="'+listitems[i]+'" onclick="removeitem(this)"; class="btn btn-danger"  type="button" value="X"> <input id="'+listitems[i]+'" onclick="itemedit(this);"  class="btn btn-secondary"  type="button" value="Edit"></li>';
        }
        html += '</ul>';
        //document.getElementById("editsave").style.visibility = "hidden";
        document.getElementById("editsave").disabled=true;
      return html;
    }
    document.getElementById("displayitem").innerHTML=ghtml();



    function newitem()
    {
        var a=document.getElementById("txtnewItem").value;
        listitems.push(a);
        buildinnerhtml();
    }

    function removeitem(obj)
    {
       // alert("ok");
        const index = listitems.indexOf(obj.id);
            if (index > -1) 
            { // only splice array when item is found
                listitems.splice(index, 1); // 2nd parameter means remove one item only
            }
            buildinnerhtml();
    }

    function buildinnerhtml(){
        document.getElementById("displayitem").innerHTML=ghtml();
    }

    function itemedit(obj)
    {
        document.getElementById("txtnewItem").value = obj.id;
        //document.getElementById("add").style.visibility = "hidden";
        //document.getElementById("editsave").style.visibility = "visible";
        
        document.getElementById("add").disabled=true; //; = "hidden";
        document.getElementById("editsave").disabled=false; //.style.visibility = "visible";

        edititem = obj.id;
    }
    
    function removefromlist()
    {
        const index = listitems.indexOf(edititem); // 👉️  0
        if (index !== -1) 
        {
            listitems[index] = document.getElementById("txtnewItem").value;
            buildinnerhtml(); 
            //document.getElementById("add").style.visibility = "visible";

            document.getElementById("add").disabled=false;

            document.getElementById("editsave").disabled=true;
            //document.getElementById("editsave").style.visibility = "hidden";
            
        }
    }
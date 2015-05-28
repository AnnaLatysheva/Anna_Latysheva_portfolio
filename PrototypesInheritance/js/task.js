function loadXMLDoc()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("info").value=xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET",'json/employeesCollection.json',true);
    xmlhttp.send();
}









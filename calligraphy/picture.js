<script type="text/javascript">  
var id = 1;  
  
function next(){  
    id = (id + 1) % 7;  
    document.getElementById("image").src = './' + id + '.jpg'; //动态设定src  
    console.log(id);  
}  
  
</script>  
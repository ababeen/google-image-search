<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
<script>
$(document).ready(function() {
$.ajax({
url: “http://api.ababeen.com/api/images.php?q=tiger",
success: function(data) {

if ($.type(“data") == “string") {
data = $.parseJSON(data);

}
var elem = “";
$.each(data, function(index, value) {
document.write('<div>’ + index + '<br/><a href="#"><img src ="' + value.tbUrl + '"></a><br/></div>’);
var str = JSON.stringify(value);
str = JSON.stringify(value, null, 4); // (Optional) beautiful indented output.
document.write(str); // Logs output to dev tools console.
});
},
error: function(jqXHR, textStatus, errorThrown) {
alert(“You can not send Cross Domain AJAX requests : " + errorThrown);
}
});
});
</script>

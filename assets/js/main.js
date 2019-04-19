var count = 0;
$('#plusClick').click(function(){
  count++;
  $('#countClick').attr('value', count);
});

$('#lessClick').click(function(){
  count--;
  $('#countClick').attr('value', count);
});

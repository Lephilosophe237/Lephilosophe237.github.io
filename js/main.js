$(function() {

  // rome(inline_cal, { time: false });

  var moment = rome.moment;
  var today = moment().format();
  const date = new Date();
  const month = date.getMonth();
  const monthNames = ["January", "February", "March" , "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  document.getElementById('result').value = monthNames[month]+" "+String(date.getDate()).padStart(2, '0')+", "+date.getFullYear();
	rome(inline_cal, {time: false, inputFormat: 'MMMM DD, YYYY', dateValidator : rome.val.afterEq(today)}).on('data', function (value) {
	  result.value = value;
	});

});
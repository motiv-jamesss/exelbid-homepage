var url =
"http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2128609248"
$(document).ready(function () {
$('.ftc').click(function () {
  window.open(url, "bizCommPop", "width=750, height=700;");
  return false;
});
});
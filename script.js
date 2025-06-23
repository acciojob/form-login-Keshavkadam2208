function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");
	const firstname = form.elements["fname"].value.trim();
	const lastname = form.elements["lname"].value.trim();
	const fullname = '${firstname} ${lastname}'.trim();
	alert(fullname);

}

function getFormvalue() {
    //Write your code here
   const form = document.getElementById("form1");
      const firstName = form.elements["fname"].value.trim();
      const lastName = form.elements["lname"].value.trim();
      const fullName = `${firstName} ${lastName}`.trim(); // avoids extra space if one field is empty
      alert(fullName);
      return false;

}

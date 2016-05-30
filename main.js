

function myFunction() {
    var x;
    if (confirm("SiteWide User Distress Alert! X User is in Distress! Join a Chat Group With @User Now!") == true) {
        x = "You pressed OK!";
    } else {
        x = "You pressed Cancel!";
 }
    document.getElementById("demo").innerHTML = x;
}
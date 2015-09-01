function logIn(userid, passwd, callback) {
    alert("inside alert");
    Parse.initialize("qBdvfo0DiEgfG663HaF3XAjE7B3h4vNmaNVgDNHS", "D6IraIFCysf6XScYZFf4lUNimncSmucJSRqOxIP2");
    var user = new Parse.User({
        username: '' + userid,
        password: '' + passwd
    });
    user.logIn({
        success:
            function (result) {
                if (typeof (Storage) != "undefined") {
                    localStorage.setItem("username", userid);
                    localStorage.setItem("IsAdmin", result.get("IsAdmin"));
                    setUserOnline();
                    callback(true);
                }
            }, error: function (error) {
                callback(false);
            }
    });



}
function setUserOnline() {
    var currentUser = Parse.User.current();
    currentUser.set('IsOnline', true);
    currentUser.save(null, {
        success: function (results) {

            // Execute any logic that should take place after the object is saved.

        },
        error: function (newWord, error) {
            alert('Failed to create new object, with error code: ' + error.description);
        }
    });

}
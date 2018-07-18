// make all fields with noedit class readonly
$('.noedit').attr('readOnly',true);

// get form fields we'll be working with
var vnumField=$form.find('[data-name="ALL: VNumber"]');
var fnameField=$form.find('[data-name="ALL: First Name"]');
var lnameField=$form.find('[data-name="ALL: Last Name"]');

// set event handler for when VNumber is entered (note the "change.Form")
var setFields=function(user) { 
    vnumField.changeVal(user.vnumber);
    if(fnameField) {
        fnameField.changeVal(user.firstName);
    }
    if(lnameField) {
        lnameField.changeVal(user.lastName);
    }
};

// only make the ajax call if the V# field exists!
if(vnumField) {
    var url='https://www2.wou.edu/nora/eclipse.cors2';
    var authUrl='https://www2.wou.edu/nora/eclipse.auth2';
    var authOk=true;
    $.ajax({
        url:url,
        xhrFields: {
            withCredentials: false
        },
        success: function(data) {
            var arr=data.split(',');
            setFields({ vnumber:arr[0], lastName:arr[1], firstName:arr[2] });
            authOk=true;
        },
        error: function(data) {
            authOk=false;
        }
    });
}

// make sure to always include this if you're trapping events
window.formCleanup.unbindFunction = function() {
    $.off('.Form');//Removes all bindings with a Form namespace
};
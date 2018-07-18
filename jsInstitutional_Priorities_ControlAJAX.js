/***************************** Form Cleanup **********************************
* The window.formCleanup object is provided to remove event bindings         *
* and timing events created by your javascript.                              *
* Report bindings and timing event functions to window.formCleaup            *
* per the following examples to ensure proper operation of your form.        *
* [Timers]                                                                   *
* var handle = setTimeout(function() { ... }, 100);                          *
* window.formCleanup.timeOuts.push(handle);                                  *
* handle = setInterval(function() { ... });                                  *
* window.formCleanup.intervals.push(handle); // push handles into intervals  *
* [Bindings]                                                                 *
* $form is a provided shortcut for $('#masterForm.js');                      *
* $form.find('input[name="InvoiceAmount"]').on('keyup.Form',                 *
*          function(e) { ... });                                             *
* $form.find('input[name="InvoiceDate"]').on('keyup.Form',                   *
*          function(e) { ... });                                             *
* window.formCleanup.unbindFunction = function() {                           *
*     $.off('.Form');//Removes all bindings with a Form namespace            *
* };                                                                         *
*****************************************************************************/

/***************************** Updating Values *******************************
* To set a value for a field use .changeVal()                                *
*     $form.find('input').changeVal('value');                                *
* To check or uncheck a checkbox or radio field use .changeChecked()         *
*     $form.find('input[type="checkbox"]').changeChecked({true or false});   *
*                                                                            *
* To correctly obtain a value for math operations use parseFloat             *
*     var val = parseFloat($form.find('input').val());                       *
*****************************************************************************/

//Control times to call ajax, we only want to connect to server once
if(window.itclicked==undefined) {
    window.itclicked=0;
} else {
    window.itclicked++;
}
console.log(window.itclicked);

//get add Names/Units button
var addbtn = document.getElementsByClassName("FormAddGroupSetButton")[0];

//function to return boolean value for click or not 



    // get form fields we'll be working with
    //var field=document.getElementsByClassName("cf_displayVal");
    //var vnum=field[4];
    var vnum=$form.find('[data-name="ALL: VNumber"]');
    var fname=$form.find('[data-name="ALL: First Name"]');
    var lname=$form.find('[data-name="ALL: Last Name"]');
    var date=$form.find('[data-name="BP: submission date"]');
    

    // get system date
    var today =  new Date();
    var d = today.getDate();
    var m = today.getMonth()+1; // starts from 0 
    var y = today.getFullYear();
    today = m + "/" + d + "/" + y;
    date.changeVal(today);
    



        var url='https://www2.wou.edu/nora/eclipse.cors2';
        var authUrl='https://www2.wou.edu/nora/eclipse.auth2';
        var authOk=true;
        var infoArray = [];
    
        // success to connect to server return value from server and set fields value
        // ex: V#,LastName,FirstName
        var success=(data)=>{
            infoArray= data.split(",");
        
            //vnum.innerText = infoArray[0];
            vnum.changeVal(infoArray[0]);
        
            if(fname){
                fname.changeVal(infoArray[2]);
            }
            if(lname){
                lname.changeVal(infoArray[1]);
            }
        
            authOk = true;
        };
    
        // fail to connect to server
        var error=()=>{
            authOk = false;
            //redirect to portal
        }
    
        // Only make the ajax call if the V# field exists!
        var param = {
            url: url,
            xhrFields: {withCredentials: false},
            success: success,
            error: error
        };
        
if(!(window.itclicked)){
   $.ajax(param);
    
    // make sure to always include this if you're trapping events
    window.formCleanup.unbindFunction = function() {
        $.off('.Form');//Removes all bindings with a Form namespace
    };
}

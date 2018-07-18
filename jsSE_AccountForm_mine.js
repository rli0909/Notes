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
$('.noedit').attr('readOnly',true);

// get Part object
var part = document.getElementById("nativeViewerNav");
// get <input> tag   return HTMLCollection [input, currentPage: input]
var subObject = part.getElementsByTagName("input");
//get currentPage
var page = subObject.currentPage.value;


// a function to get vNum from input field
var getVN = () =>{
    // @return HTMLCollection [input.vnumfield.noedit]
    var fieldValue = document.getElementsByClassName("vnumfield noedit");
    // @return <input .....>
    var o = fieldValue[0];
    // @return v Number
    fieldValue = o.value;
    
    return fieldValue;
}


    
if(page == 2 && getVN() === "" )
{
    // get form fields we'll be working with
    var vnum=$form.find('[data-name="ALL: VNumber"]');
    var fname=$form.find('[data-name="ALL: First Name"]');
    var lname=$form.find('[data-name="ALL: Last Name"]');
    var date=$form.find('[data-name="ALL: Date"]');
    

    // get system date
    var today =  new Date();
    var d = today.getDate();
    var m = today.getMonth()+1; // starts from 0 
    var y = today.getFullYear();
    today = m + "/" + d + "/" + y;
    date.changeVal(today);



    // only make the ajax call if the V# field exists!
    if(vnum){
        var url='https://www2.wou.edu/nora/eclipse.cors2';
        var authUrl='https://www2.wou.edu/nora/eclipse.auth2';
        var authOk=true;
        var infoArray = [];
    
        // success to connect to server return value from server and set fields value
        // ex: V#,LastName,FirstName
        var success=(data)=>{
            infoArray= data.split(",");
        
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
    
        $.ajax(param);
    }else{
        window.location = "https://www.wou.edu/portal/";
    }


    // make sure to always include this if you're trapping events
    window.formCleanup.unbindFunction = function() {
        $.off('.Form');//Removes all bindings with a Form namespace
    };

}
    
    
    




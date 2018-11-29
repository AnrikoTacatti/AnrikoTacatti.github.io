jQuery(document).ready(function(){
    
	jQuery(".rmm-button").click(function(){

            jQuery('.mobilemenu').toggle().slideDown(slow);

	});
    
    
	jQuery("html").click(function(){
	    if (!jQuery("#language-list").is(":hidden"))
        {
            jQuery('#language-list').hide();
        }
	});
    
    jQuery("#language-switch").mouseenter(function() {
        jQuery("#language-list").show();
    });
    
    jQuery.validate({
  		form : '#userform'
	});
    
/*    
    // Forms
    var validationSettings = {
        errorElementClass: 'invalid',
        borderColorOnError : ''
    };
*/
/*    
    jQuery.validate({
	  form : '#userform',
		validateOnBlur : true,
		showHelpOnFocus : false,
		addSuggestions : false
	});
	*/
    /*
    jQuery('#userform')
        .submit(function() {
            if (!jQuery(this).validate(false, validationSettings)) return false;
        })
        .validateOnBlur(false, validationSettings);
        */
    jQuery(".website_installation").change(function() {
        var selected = jQuery("#userform input[type='radio']:checked").val();
        if (selected == 'auto')
        {
            jQuery(".website_installation_fld").attr("data-validation", "required");
            jQuery("#website_installation_block").show(300);
        }
        if (selected == 'manual')
        {
            jQuery(".website_installation_fld").removeAttr("data-validation"); 
            jQuery("#website_installation_block").hide(300);   
        }
    });
    
    jQuery("#website_url").focus(function() {
        if (jQuery("#website_url").val() == '') jQuery("#website_url").val('http://');
    });
    
    
    jQuery(".webmaster_payout").change(function() {
        var selected = jQuery("#userform input[type='radio']:checked").val();
        if (selected == 'paypal')
        {
            jQuery("#paypal_account").attr("data-validation", "required");
            jQuery("#skrill_account").removeAttr("data-validation"); 
            jQuery("#bank_details").removeAttr("data-validation"); 
        }
        if (selected == 'skrill')
        {
            jQuery("#paypal_account").removeAttr("data-validation");
            jQuery("#skrill_account").attr("data-validation", "required"); 
            jQuery("#bank_details").removeAttr("data-validation"); 
        }
        if (selected == 'bank')
        {
            jQuery("#paypal_account").removeAttr("data-validation");
            jQuery("#skrill_account").removeAttr("data-validation");
            jQuery("#bank_details").attr("data-validation", "required"); 
        }
        
        jQuery(".block_all").hide(300);
        jQuery(".block_"+selected).show(300);
    });


});


function OpenListLink(id)
{
    var link = jQuery("#redirect_"+id).attr("href");
    window.location = link;
}

function OpenVideoBlock()
{
    jQuery("#video_how_it_works").show(300);
}
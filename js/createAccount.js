$(document).ready(function(){
    // enterprise form
    // here is logic to add another block of fields
    // if user wants to add more than one address
    // also he can check 'same as billing' checkbox
    // in this case additional block will be hided
    // and pre-filled in future
    $('#showShippingEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#sameShippingEnterprise').parent().removeClass('hidden');
            $('#shippingBlockEnterprise').removeClass('hidden');
        } else {
            $('#sameShippingEnterprise').parent().addClass('hidden');
            $('#shippingBlockEnterprise').addClass('hidden');
        }
    });
    $('#showServiceEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#sameServiceEnterprise').parent().removeClass('hidden');
            $('#serviceBlockEnterprise').removeClass('hidden');
        } else {
            $('#sameServiceEnterprise').parent().addClass('hidden');
            $('#serviceBlockEnterprise').addClass('hidden');
        }
    });
    $('#sameServiceEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#serviceBlockEnterprise').addClass('hidden');
        } else {
            $('#serviceBlockEnterprise').removeClass('hidden');
        }
    });
    $('#sameShippingEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#shippingBlockEnterprise').addClass('hidden');
        } else {
            $('#shippingBlockEnterprise').removeClass('hidden');
        }
    });

    // showing additional phone number in case it is needed
    $('.addNumber').click(function(e){
        e.preventDefault();
        var $this = $(this);
        $(this).parent().next().removeClass('hidden');
        $(this).parent().addClass('hidden');
        $(this).parent().prev().remove();
    });

    // autocomplete countries and states
    $(".js-example-basic-single").select2();

    // temp remove of selection arrow
    // it doesn't match to default browser styles
    $(".select2-selection__arrow").remove();

    // select countries and states for USA
    $('#countriesBilling').on('change', function(){
        if ($("#select2-countriesBilling-container").text() !== 'United States') {
            $('#state').parent().removeClass('hidden');
            $('#statesUS').parent().addClass('hidden');
        } else {
            $('#state').parent().addClass('hidden');
            $('#statesUS').parent().removeClass('hidden');
        }
    });
    $('#countriesService').on('change', function(){
        if ($("#select2-countriesService-container").text() !== 'United States') {
            $('#stateServiceOthers').parent().removeClass('hidden');
            $('#statesUSService').parent().addClass('hidden');
        } else {
            $('#stateServiceOthers').parent().addClass('hidden');
            $('#statesUSService').parent().removeClass('hidden');
        }
    });
    $('#countriesShipping').on('change', function(){
        if ($("#select2-countriesShipping-container").text() !== 'United States') {
            console.log('shipping others working');
            $('#stateShippingOthers').parent().removeClass('hidden');
            $('#statesUSShipping').parent().addClass('hidden');
        } else {
            console.log('shipping working');
            $('#stateShippingOthers').parent().addClass('hidden');
            $('#statesUSShipping').parent().removeClass('hidden');
        }
    });
    $("#enterprise").validate({
        onfocusout: function(element) {
            this.element(element);
        },
        focusCleanup: true,
        onkeyup: false,
        rules: {
            corporateEmail: {
                email: true
            },
            firstName: {
                minlength: 3,
                maxlength: 20
            },
            LastName: {
                minlength: 3,
                maxlength: 20
            },
            companyName: {
                minlength: 2,
                maxlength: 20
            },
            tax: {
                minlength: 2,
                maxlength: 20,
                number: true
            },
            address1Billing: {
                minlength: 5,
                maxlength: 20
            },
            cityBilling: {
                minlength: 3,
                maxlength: 20
            },
            postalCodeBilling: {
                minlength: 2,
                maxlength: 20,
                number: true
            },
            state: {
                minlength: 2,
                maxlength: 20
            },
            // service addresses
            address1Shipping: {
                minlength: 5,
                maxlength: 20
            },
            cityShipping: {
                minlength: 3,
                maxlength: 20
            },
            postalCodeShipping: {
                minlength: 2,
                maxlength: 20,
                number: true
            },
            stateShippingOthers: {
                minlength: 2,
                maxlength: 20
            }
        },
        errorElement: "div",
        submitHandler: function(form, event) {
            console.log("before");
            event.preventDefault();
            console.log("after");
            $("#enterprise :input").prop("disabled", true);
            $("#enterprise :checkbox").prop("disabled", true);
            $("#accountSpinner").css("display", "block");
            $("#accountSpinner").css("opacity", "0.7");
            
            setTimeout(function(){
            // adding required fields logic after click on submit button
                $("#accountSpinner").css("display", "none");
                $("#enterprise :input").prop("disabled", false);
                $("#enterprise :checkbox").prop("disabled", false);
                $("#accountSpinner").css("display", "none");
                $("#accountSpinner").css("opacity", "1");
                $("#corporateEmail").rules("add", {
                    required: true,
                    messages: {
                        required: "Email is required"
                    }
                });
                $("#firstName").rules("add", {
                    required: true,
                    messages: {
                        required: "First name field is required"
                    }
                });
                $("#LastName").rules("add", {
                    required: true,
                    messages: {
                        required: "Last name field is required"
                    }
                });
                $("#companyName").rules("add", {
                    required: true,
                    messages: {
                        required: "Company name field is required"
                    }
                });
                $("#billCycle").rules("add", {
                    required: true,
                    messages: {
                        required: "Please select an item"
                    }
                });
                $("#invoiceType").rules("add", {
                    required: true,
                    messages: {
                        required: "Please select an item"
                    }
                });
                $("#accountCategory").rules("add", {
                    required: true,
                    messages: {
                        required: "Please select an item"
                    }
                });
                $("#address1Billing").rules("add", {
                    required: true,
                    messages: {
                        required: "Address field is required"
                    }
                });
                $("#cityBilling").rules("add", {
                    required: true,
                    messages: {
                        required: "City field is required"
                    }
                });
                $("#postalCodeBilling").rules("add", {
                    required: true,
                    messages: {
                        required: "Postal Code is required"
                    }
                });
                // we should also add/remove some validation for additional address fields
                // in cases it is showing or not
                if($("#showShippingEnterprise").is(":checked") && !($("#sameShippingEnterprise").is(":checked"))) {
                    console.log("condition works");
                } else {
                    console.log("some shit happened");
                }

                // required logic for state field will be applied
                // only if state relates not to US
                // in this case there is required text field on the page
                // if coutry is US
                // state is filled by default, there will be no possibility
                // to make it empty
                if(!($("#state").parent().is(":visible"))) {
                    $("#state").rules("add", {
                        required: true,
                        messages: {
                            required: "State is required"
                        }
                    });
                } else {
                    $("#state").rules("add", {
                        required: false
                    });
                }
                if ($("#enterprise").valid()){
                    // here validation from backend should be applied
                    $("#errormessages").parent().removeClass('hidden');
                    $('html, body').animate({
                        scrollTop: $("#errormessages").offset().top + (-40)
                    }, 100);
                    
                    //form.submit();
                } else {
                    // here added behaviors for temporary removal of 'required' errors
                    // this should be done after click on related field
                    $('html, body').animate({
                        scrollTop: $(".error:first").offset().top + (-40)
                    }, 100);
                    $('#corporateEmail').on('focus', function(){
                        $("#corporateEmail").rules("add", {
                            required: false
                        });
                    });
                    $('#firstName').on('focus', function(){
                        $("#firstName").rules("add", {
                            required: false
                        });
                    });
                    $('#LastName').on('focus', function(){
                        $("#LastName").rules("add", {
                            required: false
                        });
                    });
                    $('#companyName').on('focus', function(){
                        $("#companyName").rules("add", {
                            required: false
                        });
                    });
                    $('#billCycle').on('focus', function(){
                        $("#billCycle").rules("add", {
                            required: false
                        });
                    });
                    $('#invoiceType').on('focus', function(){
                        $("#invoiceType").rules("add", {
                            required: false
                        });
                    });
                    $('#accountCategory').on('focus', function(){
                        $("#accountCategory").rules("add", {
                            required: false
                        });
                    });
                    $('#address1Billing').on('focus', function(){
                        $("#address1Billing").rules("add", {
                            required: false
                        });
                    });
                    $('#cityBilling').on('focus', function(){
                        $("#cityBilling").rules("add", {
                            required: false
                        });
                    });
                    $('#postalCodeBilling').on('focus', function(){
                        $("#postalCodeBilling").rules("add", {
                            required: false
                        });
                    });
                    $('#state').on('focus', function(){
                        $("#state").rules("add", {
                            required: false
                        });
                    });
                }
            }, 3000)
        }
    });
});
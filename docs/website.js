$(document).ready(function () {

    //------------------------
    //START DEBUG
    // if debug is true add some value for fast debugging
    var debug = false;

    if (debug) {
        console.log('Debug is ON');

        $('.out').val('P');
        $('.arg1').val('T');
        $('.arg2').val('Q');
        $('.arg3').val('R134a');
        $('.val1').val('296.15');
        $('.val2').val('0.5');

        $('.HAout').val('V');
        $('.HAarg1').val('T');
        $('.HAarg2').val('R');
        $('.HAarg3').val('P');
        $('.HAval1').val('296.15');
        $('.HAval2').val('0.0');
        $('.HAval3').val('101325');
    };
    // END DEBUG
    //------------------------

    // START OF PROGRAM

    //------------------------------------------------------------
    // button for duplicating 
    $('.duplicate').click(function () {
        
        // get entire div from which the button was pressed
        var $box = $(this).closest('div.function');

        // create a new div (clone must use true to copy also events)
        var $copy = $box.clone(true);

        // set the new id
        $copy.attr('id', Date.now());

        // Add new div after the current one
        $box.after($copy);

    });//end $('.duplicate').click

    //------------------------------------------------------------
    // button for deleting 
    $('.delete').click(function () {
        
        // delete entire div
        $(this).closest('div.function').remove();

    });//end $('.delete').click
    
    //------------------------------------------------------------
    // button for new
    $('button.new').click(function () {
        
        //get the second part of the class
        //new PropsSI -> get only PropsSI
        var class_name = $(this).attr('class').split(' ')[1];
        //console.log(class_name);

        // copy the template with class = class_name
        var $copy = $(`div.${class_name}#T0,div.${class_name}#T1`).clone(true);
        //console.log($copy);

        // set the new id
        $copy.attr('id', Date.now());

        // Add new div after the current one
        $('div.workplace').append($copy);

    });//end $('button.new').click
    
    //------------------------------------------------------------
    // button for calculating PropsSI
    $('button.Calc.PropsSI').click(function () {
        console.log('Pressed Calc PropsSI');

        // get entire div from which the button was pressed
        var $box = $(this).closest('div.PropsSI');

        // extract the value
        var out = $box.find('.out').val();
        var arg1 = $box.find('.arg1').val();
        var arg2 = $box.find('.arg2').val();
        var arg3 = $box.find('.arg3').val();
        var val1 = Number($box.find('.val1').val().replace(',', '.'));
        var val2 = Number($box.find('.val2').val().replace(',', '.'));

        // log comand template
        // console.log(`PropsSI(${out}, ${arg1}, ${val1}, ${arg2}, ${val2}, ${arg3})`)

        // compute results
        var result = Module.PropsSI(out, arg1, val1, arg2, val2, arg3);
        
        // log comand template
        console.log(`PropsSI(${out}, ${arg1}, ${val1}, ${arg2}, ${val2}, ${arg3}) = ${result}`);

        // populate results
        $box.find('.output').text(result);
    });

    //------------------------------------------------------------
    // button for calculating HAPropsSI
    $('button.Calc.HAPropsSI').click(function () {
        console.log('Pressed Calc HAPropsSI');

        // get entire div from which the button was pressed
        var $box = $(this).closest('div.HAPropsSI');

        // extract the value
        var out = $box.find('.HAout').val();
        var arg1 = $box.find('.HAarg1').val();
        var arg2 = $box.find('.HAarg2').val();
        var arg3 = $box.find('.HAarg3').val();
        var val1 = Number($box.find('.HAval1').val().replace(',', '.'));
        var val2 = Number($box.find('.HAval2').val().replace(',', '.'));
        var val3 = Number($box.find('.HAval3').val().replace(',', '.'));

        // compute results
        var result = Module.HAPropsSI(out, arg1, val1, arg2, val2, arg3, val3);
        
        // log comand template
        console.log(`HAPropsSI(${out}, ${arg1}, ${val1}, ${arg2}, ${val2}, ${arg3}, ${val3}) = ${result}`);

        // populate results
        $box.find('.output').text(result);
    });



});//$(document).ready(function()
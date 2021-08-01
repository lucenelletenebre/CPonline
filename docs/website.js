$(document).ready(function () {

    //------------------------
    //START DEBUG
    // if debug is true add some value for fast debugging
    var debug = true;

    if (debug) {
        console.log('Debug is ON');

        $('#out').val('P');
        $('#arg1').val('T');
        $('#arg2').val('Q');
        $('#arg3').val('R134a');
        $('#val1').val('296.15');
        $('#val2').val('0.5');
    };
    // END DEBUG
    //------------------------

    // button for calculating PropsSI
    $('.Calc_PropsSI').click(function () {
        console.log('Pressed Calc PropsSI 5');

        // get entire div from which the button was pressed
        var $box = $(this).closest('.PropsSI');

        // extract the value
        var out = $box.find('#out').val();
        var arg1 = $box.find('#arg1').val();
        var arg2 = $box.find('#arg2').val();
        var arg3 = $box.find('#arg3').val();
        var val1 = parseFloat($box.find('#val1').val());
        var val2 = parseFloat($box.find('#val2').val());

        // compute results
        var result = Module.PropsSI(out, arg1, val1, arg2, val2, arg3);
        
        // log comand template
        console.log(`PropsSI(${out}, ${arg1}, ${val1}, ${arg2}, ${val2}, ${arg3}) = ${result}`);

        // populate results
        $box.find('.output').text(result);
    });




});//$(document).ready(function()
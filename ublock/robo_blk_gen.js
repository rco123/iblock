

Blockly.Python['fun_robo'] = function(block) {
    // TODO: Assemble Python into code variable.

    let strout = 'robo = Robot()'
    var code = strout + '\n';
    return code;
  };

Blockly.Python['fun_robo_delay'] = function(block) {
var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
// TODO: Assemble Python into code variable.

strout = 'robo.delay(' + value_name + ')';

var code = strout + '\n';
return code;
};

Blockly.Python['fun_robo_move'] = function(block) {
var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
// TODO: Assemble Python into code variable.
strout = 'robo.move(' + value_angle + ', ' + value_speed + ')';
var code = strout + '\n';
return code;
};

Blockly.Python['fun_user'] = function(block) {
  var text_code = block.getFieldValue('code');
  // TODO: Assemble Python into code variable.
  var strout = text_code;
  var code =  strout + '\n';
  return code;
};

Blockly.Python['fun_user_input'] = function(block) {
  var text_user_input = block.getFieldValue('user_input');
  // TODO: Assemble Python into code variable.
  let strout = text_user_input;
  var code = strout;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['fun_import_blk'] = function(block) {
  // TODO: Assemble Python into code variable.
  var strout = 'from robot import Ps4_controller\n' + 
               'from robot import Ai_controller\n' +
               'from robot import Robot\n' ;

  var code = strout;
  return code;
};

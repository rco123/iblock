
Blockly.Python['fun_ai'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var strout = 'ai = Ai_controller()'
  var code =  strout + '\n';
  return code;
};

Blockly.Python['fun_ai_cam_img_get'] = function(block) {
  // TODO: Assemble Python into code variable.

  let strout = 'ai.cam_img_get()'
  var code = strout + '\n';
  return code;
};

Blockly.Python['fun_ai_cam_open'] = function(block) {
  // TODO: Assemble Python into code variable.
  let strout = 'ai.cam_open()'
  var code = strout + '\n';
  return code;
};

Blockly.Python['fun_ai_img_display'] = function(block) {
  // TODO: Assemble Python into code variable.
  let strout = 'ai.img_display()'
  var code = strout + '\n';
  return code;
};


Blockly.Python['fun_ai_cam_img_to_angle'] = function(block) {
  // TODO: Assemble Python into code variable.
  let strout = 'ai.cam_img_to_angle()'
  var code = strout + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['fun_ai_img_read'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var strout = 'ai.img_read(' + value_name + ')';
  var code =  strout + '\n';
  return code;
};

Blockly.Python['fun_ai_img_write'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var strout = 'ai.img_write(' + value_name + ')';
  var code =  strout + '\n';
  return code;
};
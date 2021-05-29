
Blockly.Python['fun_ps'] = function(block) {
  // TODO: Assemble Python into code variable.
  var strout = 'ps = Ps4_controller()'
  var code = strout + '\n';
  return code;
};

Blockly.Python['fun_ps_read_angle'] = function(block) {
  // TODO: Assemble Python into code variable.
  var strout = 'ps.read_angle()'
  var code = strout;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['fun_ps_read_speed'] = function(block) {
  // TODO: Assemble Python into code variable.
  var strout = 'ps.read_speed()'
  var code = strout;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['fun_ps_check_event'] = function(block) {
  // TODO: Assemble Python into code variable.
  var strout = 'ps.check_event()'
  var code = strout;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['fun_ps_key_read'] = function(block) {
  // TODO: Assemble Python into code variable.
  var strout = 'ps.key_read()'
  var code = strout;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

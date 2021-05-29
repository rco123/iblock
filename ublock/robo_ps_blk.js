

Blockly.Blocks['fun_ps'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps = Ps4_controller( )");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fun_ps_read_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps.read_angle( )");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fun_ps_read_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps.read_speed( )");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fun_ps_check_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps.check_event(  )");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fun_ps_key_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps.key_read(  )");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
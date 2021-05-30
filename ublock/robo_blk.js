Blockly.Blocks['fun_robo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("robo = Robot()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['fun_robo_delay'] = {
init: function() {
    this.appendDummyInput()
        .appendField("robo.delay(");
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['fun_robo_move'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("robo.move( angle=");
      this.appendValueInput("angle")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(",")
          .appendField("speed=");
      this.appendValueInput("speed")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['fun_user'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("user code ")
          .appendField(new Blockly.FieldTextInput("..."), "code");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['fun_user_input'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("user_input")
          .appendField(new Blockly.FieldTextInput("..."), "user_input");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['fun_import_blk'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("import user blk");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

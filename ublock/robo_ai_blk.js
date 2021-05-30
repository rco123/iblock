

Blockly.Blocks['fun_ai'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ai = Ai_controller()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['fun_ai_cam_open'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ai.cam_open(  )");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
Blockly.Blocks['fun_ai_cam_img_get'] = {
init: function() {
    this.appendDummyInput()
        .appendField("ai.cam_img_get(  )");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}
};


Blockly.Blocks['fun_ai_img_display'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ai.img_display(  )");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['fun_ai_cam_img_to_angle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ai.cam_img_to_angle(  )");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['fun_ai_img_read'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("ai.img_read(");
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

    
  Blockly.Blocks['fun_ai_img_write'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("ai.img_write(");
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
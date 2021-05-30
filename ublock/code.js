

Blockly.Blocks['func_test_input'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("test_input");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Python['func_test_input'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `print(${value_name})`;
    return code;
}


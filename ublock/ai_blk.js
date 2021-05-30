Blockly.Blocks['fun_sequential'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model = Sequential()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['fun_model_add_input'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("model.add(Input(shape=")
          .appendField(new Blockly.FieldTextInput("None"), "NAME")
          .appendField("))");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
Blockly.Blocks['fun_model_add_dense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model.add(Dense(output");
    this.appendValueInput("output")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",activation=")
        .appendField(new Blockly.FieldDropdown([["relu","relu"], ["softmax","softmax"], ["sigmoid","sigmoid"]]), "act")
        .appendField("))");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fun_model_compile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model.compile(");
    this.appendDummyInput()
        .appendField("optimizer=")
        .appendField(new Blockly.FieldDropdown([["Adam()","Adam()"], ["SGD()","SGD()"], ["RMSprop()","RMSprop()"]]), "opti")
        .appendField(",");
    this.appendDummyInput()
        .appendField("loss='")
        .appendField(new Blockly.FieldDropdown([["binary_crossentropy","binary_crossentropy"], ["categorical_crossentropy","categorical_crossentropy"], ["mes","mes"]]), "loss")
        .appendField("',");
    this.appendDummyInput()
        .appendField("metrics=['")
        .appendField(new Blockly.FieldDropdown([["accuracy","accuracy"], ["precision","precision"], ["recall","recall"]]), "metrics")
        .appendField("'])");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fun_model_fit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model.fit(");
    this.appendDummyInput()
        .appendField("")
        .appendField(new Blockly.FieldTextInput("train_x"), "train_x")
        .appendField(",");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("train_y"), "train_y")
        .appendField(",");
    this.appendDummyInput()
        .appendField("epochs=");
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendValueInput("batch")
        .setCheck("Number")
        .appendField(",batch_size=");
    this.appendDummyInput()
        .appendField(",validation_data=(")
        .appendField(new Blockly.FieldTextInput("vali_x"), "vali_x");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("vali_y"), "vali_y");
    this.appendDummyInput()
        .appendField("))");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fun_model_evaluate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model.evaluate(");
    this.appendDummyInput()
        .appendField("")
        .appendField(new Blockly.FieldTextInput("test_x"), "test_x")
        .appendField(",");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("test_y"), "test_y");
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

Blockly.Blocks['fun_model_predict'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("model.predict(")
          .appendField("data =")
          .appendField(new Blockly.FieldTextInput("None"), "NAME");
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

Blockly.Blocks['fun_model_save'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model.save(");
    this.appendDummyInput()
        .appendField("'")
        .appendField(new Blockly.FieldTextInput("model.h5"), "NAME");
    this.appendDummyInput()
        .appendField("')");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fun_load_model'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model = load_model(");
    this.appendDummyInput()
        .appendField("'")
        .appendField(new Blockly.FieldTextInput("model.h5"), "NAME");
    this.appendDummyInput()
        .appendField("')");
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
          .appendField("user input =")
          .appendField(new Blockly.FieldTextInput("..."), "text_input");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
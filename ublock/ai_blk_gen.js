Blockly.Python['fun_sequential'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'model=Sequential()\n';
  return code;
};

Blockly.Python['fun_model_add_input'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.

  var str1 = text_name;

  var strout = `model.add(Input(shape=${str1}))`

  var code =  strout + '\n';
  return code;
};

Blockly.Python['fun_model_add_dense'] = function(block) {
  var value_output = Blockly.Python.valueToCode(block, 'output', Blockly.Python.ORDER_ATOMIC);
  var dropdown_act = block.getFieldValue('act');
  // TODO: Assemble Python into code variable.

  console.log(value_output);
  console.log(dropdown_act);
  let str1 = value_output;
  let str2 = dropdown_act; 
  let strout = `model.add(Dense(${str1}, activation='${str2}' ))`
  var code = strout + '\n';
  return code;
};

Blockly.Python['fun_model_compile'] = function(block) {
  var dropdown_opti = block.getFieldValue('opti');
  var dropdown_loss = block.getFieldValue('loss');
  var dropdown_metrics = block.getFieldValue('metrics');
  // TODO: Assemble Python into code variable.

  let str1 = dropdown_opti;
  let str2 = dropdown_loss;
  let str3 = dropdown_metrics;

  let strout = `model.compile(optimizer=${str1},loss='${str2}',metrics= ['${str3}'])`
  var code =  strout + '\n';
  return code;
};


Blockly.Python['fun_model_fit'] = function(block) {
  var text_train_x = block.getFieldValue('train_x');
  var text_train_y = block.getFieldValue('train_y');
  
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_batch = Blockly.Python.valueToCode(block, 'batch', Blockly.Python.ORDER_ATOMIC);

  var text_vali_x = block.getFieldValue('vali_x');
  var text_vali_y = block.getFieldValue('vali_y');
  // TODO: Assemble Python into code variable.

  let str1 = text_train_x;
  let str2 = text_train_y;
  let str3 = value_name;
  let str4 = value_batch;
  let str5 = text_vali_x;
  let str6 = text_vali_y;

  let strout = `model.fit( ${str1}, ${str2}, epochs=${str3}, batch_size=${str4}, validation_data=(${str5},${str6}))                      `

  var code = strout + '\n';
  return code;
};

Blockly.Python['fun_model_evaluate'] = function(block) {
  var text_test_x = block.getFieldValue('test_x');
  var text_test_y = block.getFieldValue('test_y');
  // TODO: Assemble Python into code variable.

  let str1 = text_test_x;
  let str2 = text_test_y;
  let strout = `model.evaluate(${str1},${str2})`;

  var code = strout + '\n';
  return code;
};

Blockly.Python['fun_model_predict'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  let str1 = text_name;
  let strout = `model.predict(data = ${str1})`
  var code =  strout + '\n';
  return code;
};




Blockly.Python['fun_model_save'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.

  let str1 = text_name;
  let strout = `model.save('${str1}')`;
  var code = strout + '\n';
  return code;
};

Blockly.Python['fun_load_model'] = function(block) {
  var text_name = block.getFieldValue('NAME');

  let str1 = text_name;
  let strout = `model=load_model('${str1}');`

  // TODO: Assemble Python into code variable.
  var code = strout + '\n';
  return code;
};

Blockly.Python['fun_user_input'] = function(block) {
  var text_text_input = block.getFieldValue('text_input');
  // TODO: Assemble Python into code variable.

  strout = '...';

  if(text_text_input != strout){
    strout = text_text_input;
  }

  var code = strout;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
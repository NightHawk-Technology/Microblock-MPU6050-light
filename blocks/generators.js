Blockly.JavaScript['mpu6050_init'] = function(block) {
Blockly.JavaScript.definitions_['include']['Wire.h'] = '#include <Wire.h>';
Blockly.JavaScript.definitions_['include']['MPU6050_light.h'] = '#include <MPU6050_light.h>';
Blockly.JavaScript.definitions_['define']['mpu'] = `MPU6050 mpu(Wire);`;
  var code = `Wire.begin();
mpu.begin();
mpu.calcOffsets(true, true);\n`;
  return code;
};

Blockly.JavaScript['mpu6050_update'] = function(block) {
  var code = `mpu.update();\n`;
  return code;
};

Blockly.JavaScript['mpu6050_get_acc'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');

  var code = "";
  if (dropdown_axis === "0") {
    code = "mpu.getAccX()";
  } else if (dropdown_axis === "1") {
    code = "mpu.getAccY()";
  } else if (dropdown_axis === "2") {
    code = "mpu.getAccZ()";
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mpu6050_get_gyro'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');
  
  var code = "";
  if (dropdown_axis === "0") {
    code = "mpu.getGyroX()";
  } else if (dropdown_axis === "1") {
    code = "mpu.getGyroY()";
  } else if (dropdown_axis === "2") {
    code = "mpu.getGyroZ()";
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mpu6050_get_angle'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');
  
  var code = "";
  if (dropdown_axis === "0") {
    code = "mpu.getAngleX()";
  } else if (dropdown_axis === "1") {
    code = "mpu.getAngleY()";
  } else if (dropdown_axis === "2") {
    code = "mpu.getAngleZ()";
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};
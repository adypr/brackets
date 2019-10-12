module.exports = function check(str, bracketsConfig) {
  // your solution
  let template = /\d/.test(bracketsConfig[0][0]) ? `${bracketsConfig[0][0]}${bracketsConfig[0][1]}` : `\\${bracketsConfig[0][0]}\\${bracketsConfig[0][1]}`;
  
  bracketsConfig.forEach(element => {
    let newTemplate = /\d/.test(element[0]) ? `${element[0]}${element[1]}` : `\\${element[0]}\\${element[1]}`;
    template = `${template}\|${newTemplate}`;
  });
  let tempExpression = new RegExp(template, 'g');

  let resStr = str;

  while (tempExpression.test(resStr) && (resStr !== '')) {
    resStr = resStr.replace(tempExpression, '');
  }
  
  return resStr === '';
  
}


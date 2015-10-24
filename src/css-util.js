/**
 * const {createStyleContext} = require('tingle-css-util');
 * let style = createStyleContext('tGroupListStyleEl');
 *
 * style.addRule(`
 *     body{
 *         background-color: red;
 *     }
 * `);
 */
const doc = document;
const headEl  = doc.getElementsByTagName('head')[0];
let styleEl = headEl.getElementsByTagName('style')[0];//style有可能不存在

//如果不存在style标签则创建
if(!styleEl){
    styleEl = doc.createElement('style');
    styleEl.setAttribute("type", "text/css");
    headEl.appendChild(styleEl);
}

//插入CSS Rules
let addCSSRule = (styleEl, rule) => {
    styleEl.appendChild(doc.createTextNode(rule));
};

// 删除多余的缩进 更方便阅读
let clearRuleIndent = (rule) => {
    // 为了取出正确的首行缩进数量 需要去掉第一行的换行
    rule = rule.replace(/^\n/, '');
    let whiteSpaceLength = rule.match(/^\s*/)[0].length;
    let firstLineIndentRegExp = new RegExp('^\\s{' + whiteSpaceLength + '}');
    let otherLinesIndentResExp = new RegExp('\\n\\s{' + whiteSpaceLength + '}', 'mg');
    //console.log(rule.match(otherLinesIndentResExp));
    //console.log(rule = rule.replace(firstLineIndentRegExp, '').replace(otherLinesIndentResExp, '\n'));
    return rule;
}

let createStyleContext = (id) => {
    let styleEl = doc.createElement('style');
    // TODO id check
    styleEl.id = id;
    styleEl.setAttribute("type", "text/css");
    headEl.appendChild(styleEl);

    let addedId = [];
    return {
        addRule: (id, rule) => {
            if (rule === undefined) {
                rule = id;
                addCSSRule(styleEl, clearRuleIndent(rule));
            } else if (-1 === addedId.indexOf(id)) {
                addedId.push(id);
                addCSSRule(styleEl, '/* '+ id +' */\n' + clearRuleIndent(rule));
            }
        }
    }
}
module.exports = {
    createStyleContext
};
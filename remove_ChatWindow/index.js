const config = require('./config.json');
module.exports = function Chat(m) {
    let disabled = config.disabled;
    if(!disabled)
        m.installGPK("S1UI_Chat2.gpk");
    return;
}
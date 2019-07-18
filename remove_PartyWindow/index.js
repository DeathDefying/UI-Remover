const config = require('./config.json');
module.exports = function PartyWindow(m) {
    let disabled = config.disabled;
    if(!disabled)
        m.installGPK("S1UI_PartyWindow.gpk");
    return;
}
const config = require('./config.json');
module.exports = function RaidWindow(m) {
    let disabled = config.disabled;
    if(!disabled)
        m.installGPK("S1UI_PartyWindowRaidInfo.gpk");
    return;
}
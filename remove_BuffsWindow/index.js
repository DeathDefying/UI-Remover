const config = require('./config.json');
module.exports = function BossWindow(m) {
    let disabled = config.disabled;
    if(!disabled)
    {
        m.installGPK("S1UI_Abnormality.gpk");
    }
    return;
}
const config = require('./config.json');
module.exports = function ProgressBar(m) {
    let disabled = config.disabled;
    if(!disabled)
        m.installGPK("S1UI_ProgressBar.gpk");
    return;
}
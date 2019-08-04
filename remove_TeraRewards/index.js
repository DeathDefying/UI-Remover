const config = require('./config.json');
module.exports = function TeraRewards(m) {
    let disabled = config.disabled;
    if(!disabled)
	{
        m.installGPK("S1UI_Benefit.gpk");
	}
    return;
}
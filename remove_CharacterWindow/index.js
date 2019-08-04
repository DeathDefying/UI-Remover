const config = require('./config.json');
module.exports = function CharacterWindow(m) {
    let disabled = config.disabled;
    if(!disabled)
	{
        m.installGPK("S1UI_CharacterWindow.gpk");
	}
    return;
}
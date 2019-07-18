const config = require('./config.json');
module.exports = function PartyBoard(m) {
    let disabled = config.disabled;
    if(!disabled)
	{
        m.installGPK("S1UI_PartyBoard.gpk");
		m.installGPK("S1UI_PartyBoardMemberInfo.gpk");
	}
    return;
}
const config = require('./config.json');
module.exports = function QuestTracker(m) {
    let disabled = config.disabled;
    if(!disabled)
	{
        m.installGPK("S1UI_QuestTaskInfo.gpk");
	}
    return;
}
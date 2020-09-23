exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            installer.gpk("S1UI_PartyWindow.gpk");
            installer.gpk("S1UI_PartyWindowRaidInfo.gpk");
        };
    }
}
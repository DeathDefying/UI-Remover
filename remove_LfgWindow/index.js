exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            installer.gpk("S1UI_PartyBoard.gpk");
            installer.gpk("S1UI_PartyBoardMemberInfo.gpk");
        };
    }
}
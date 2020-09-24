exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            mod.log("This mod has been merged into TCC main module and can be uninstalled.");
            return;
    
            installer.gpk("S1UI_PartyBoard.gpk");
            installer.gpk("S1UI_PartyBoardMemberInfo.gpk");
        };
    }
}
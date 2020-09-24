exports.ClientMod = class
{
    constructor(mod)
    {
        mod.log("This mod has been merged into TCC main module and can be uninstalled.");
        return;

        this.install = function(installer)
        {
            installer.gpk("S1UI_Abnormality.gpk");
        };
    }
}
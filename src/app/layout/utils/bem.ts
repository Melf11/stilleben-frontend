export class Bem {

    private base: string;

    constructor(base: string) {
        this.base = base;
    }

    public setMods(base: string, mods: Array<any>) {
        mods.unshift(base);
        const preparedMods = mods.filter(element => element);
        return preparedMods.join(' ');
    }

    public setModifier(attr: string, prefix: string = '') {
        let modifier: string = '';
        if (attr != null) {
            modifier = this.base + '--' + prefix + attr;
        }
        return modifier;
    }

    public checkModifier(attr: boolean, val: string) {
        if (attr != null && attr) return this.setModifier(val);
        return '';
    }

}

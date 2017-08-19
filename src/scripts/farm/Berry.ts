class Berry {
    public type: GameConstants.BerryType;
    public harvestTime: number;
    public moneyValue: number;
    public farmValue: number;

    constructor(type: GameConstants.BerryType, harvestTime: number, moneyValue: number, farmValue: number) {
        this.type = type;
        this.harvestTime = harvestTime;
        this.moneyValue = moneyValue;
        this.farmValue = farmValue;
    }
}

const BerryList: { [type: number]: Berry } = {};
BerryList["Cheri"] = new Berry(GameConstants.BerryType.Cheri, 30, 3, 3);
BerryList["Chesto"] = new Berry(GameConstants.BerryType.Chesto, 30, 3, 3);
BerryList["Pecha"] = new Berry(GameConstants.BerryType.Pecha, 30, 3, 3);
BerryList["Rawst"] = new Berry(GameConstants.BerryType.Rawst, 30, 3, 3);
BerryList["Aspear"] = new Berry(GameConstants.BerryType.Aspear, 30, 3, 3);
BerryList["Leppa"] = new Berry(GameConstants.BerryType.Leppa, 30, 3, 3);
BerryList["Oran"] = new Berry(GameConstants.BerryType.Oran, 30, 3, 3);
BerryList["Sitrus"] = new Berry(GameConstants.BerryType.Sitrus, 30, 3, 3);
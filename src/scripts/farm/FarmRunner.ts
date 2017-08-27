class FarmRunner {
    public static curBerry: Berry = BerryList["Cheri"];
    public static counter: number = 0;

    public static openFarmModal() {
        if (FarmRunner.accessToFarm()) {
            $('#farmModal').modal('show');
        } else {
            Notifier.notify("You don't have access to this location yet", GameConstants.NotificationOption.warning);
        }
    }

    public static accessToFarm() {
        //TODO implement
        return true;
    }

    public static isEmpty(index: number) {
        return player.plotList[index]().isEmpty();
    }


    public static tick() {
        this.counter = 0;
        for (let i = 0; i < 25; i++) {
            player.plotList[i]().timeLeft(Math.max(0, player.plotList[i]().timeLeft() - 1));
        }
    }

    public static plantAll() {
        for (let i = 0; i < player.plotList.length; i++) {
            FarmRunner.plant(i);
        }
    }

    public static harvestAll() {
        console.log("Harvesting all");
        for (let i = 0; i < player.plotList.length; i++) {
            FarmRunner.harvest(i);
        }
    }

    public static isEmpty(plotId) {
        return ko.computed(function () {
            return player.plotList[plotId]().berry() == null;
        }, this);
    }

    public static plant(plotId) {
        if (!player.plotList[plotId]().isEmpty()) {
            console.log("Full");
            return;
        }

        if (!player.plotList[plotId]().isUnlocked) {
            console.log("Locked");
            return;
        }
        console.log("planting on " + plotId);
        player.plotList[plotId]().berry(FarmRunner.curBerry);
        player.plotList[plotId]().timeLeft(FarmRunner.curBerry.harvestTime);

    }

    public static harvest(plotId) {
        console.log("Harvesting plot: " + plotId);
        if (player.plotList[plotId]().berry() !== null && player.plotList[plotId]().timeLeft() <= 0) {

            FarmRunner.gainPlotExp(plotId);
            player.gainFarmPoints(player.plotList[plotId]().berry().farmValue);
            player.plotList[plotId]().berry(null);
        } else {
            console.log("Not ready");
        }
    }

    public static gainPlotExp(plotId) {
        player.plotList[plotId]().exp += player.plotList[plotId]().berry().farmValue;
    }

    public static gainBerryByName(berryname: string, amount: number = 1) {
        player.berryList(player.berryList()[GameConstants.BerryType[berryname]] + amount);
    }

    public static getImage(plot: Plot) {
        if (plot.getStage() <= 1) {
            return "assets/images/farm/AllTreeSeedIII.png"
        }
        return "assets/images/farm/" + GameConstants.BerryType[plot.berry().type] + "Tree" + GameConstants.PlotStage[plot.getStage()] + "III.png";
    }
}
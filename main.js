//Created by 0x415374
//Based on MoreHeavenlyUpgrades by RubyChan42

if (MoreHeavenlyUpgradesRemastered === undefined) var MoreHeavenlyUpgradesRemastered = {};
MoreHeavenlyUpgradesRemastered.name = 'More Heavenly Upgrades Remastered';
MoreHeavenlyUpgradesRemastered.version = '2.0.0';
MoreHeavenlyUpgradesRemastered.GameVersion = '2.052';

//debug
//Game.Notify('More Heavenly Upgrades Remastered loaded', '', [19, 7], 6);

//TODO: Goal is to have cps, lumps and utility trees with 7 specials and 40 incremential bonuses each
MoreHeavenlyUpgradesRemastered.launch = function() {
    let cpsUpgrade = 0;
    let lumpUpgrade = 0;
    let utilityUpgrade = 0;

    const heavenlyUpgradeBase = 1_111_111;
    const heavenlyUpgradePow = 2.5;

    const second = 1_000;
    const minute = second * 60;
    const hour = minute * 60;

    const pointOnePercent = 0.001;
    const onePercent = 0.01;

    //Map that contains building tier as keys which maps to an enum of [name, {Sugar Lump}staticReduce, {Sugar Lump}scalingReduce, {CPS}baseCps]
    const buildingTiers = {
        '1': ['Cursor', 'Lump rubbers', 'Velvet gloves', 'Embrace Cursors', 'Cursors on your hands', 'Better Luck I'],
        '2': ['Grandma', 'Lump caregiver', 'My lovely sugar lumps', 'Embrace Grandmas', 'Gramdmas on your hands', 'Better Luck II'],
        '3': ['Farm', 'Sugar lump farm', 'Sugar Farming process', 'Embrace Farms', 'Farms on your hands', 'Better Luck III'],
        '4': ['Mine', 'Sugar water', 'Dirt extraction process', 'Embrace Mines', 'Mines on your hands', 'Better Luck IV'],
        '5': ['Factory', 'Specialized greenhouse', 'Overclocked potion making process', 'Embrace Factories', 'Factories on your hands', 'Better Luck V'],
        '6': ['Bank', 'Sweet and tasty fertilizer', 'Lump banking process', 'Embrace Banks', 'Banks on your hands', 'Better Luck VI'],
        '7': ['Temple', 'Lofi hip-hop beats to chill and grow to', 'Praying process', 'Embrace Temples', 'Temples on your hands', 'Better Luck VII'],
        '8': ['Wizard tower', 'A nice fairy', 'Sugar magical growing process', 'Embrace Wizard towers', 'Wizard towers on your hands', 'Better Luck VIII'],
        '9': ['Shipment', 'Lump-growing calculator', 'Intergalactic Extrauniversal investigation process', 'Embrace Shipment', 'Shipments on your hands', 'Better Luck IX'],
        '10': ['Alchemy lab', 'Lump-growing potion', 'Overclocked potion crafting process', 'Embrace Alchemy labs', 'Alchemy labs on your hands', 'Better Luck X'],
        '11': ['Portal', 'Praying to the elder ones', 'Other-worldly lump-growing process', 'Embrace Portals', 'Portals on your hands', 'Better Luck XI'],
        '12': ['Time machine', 'Benevolent elder Lump god', 'Time-altering process', 'Embrace Time machine','Time machines on your hands', 'Better Luck XII'],
        '13': ['Antimatter condenser', 'Elder Lump demon', 'Multiversal antimatterial process', 'Embrace Antimatter condensers', 'Antimatter condensers on your hands', 'Better Luck XIII'],
        '14': ['Prism', 'True Elder Lump demon', 'Ilumination-based growing process', 'Embrace Prisms', 'Prisms on your hands', 'Better Luck XIV'],
        '15': ['Chancemaker', 'Even Elder Lump demon', 'Sheer luck lump-growing process', 'Embrace Chancemakers', 'Chancemakers on your hands', 'Better Luck XV'],
        '16': ['Fractal engine', 'THE Even truer and eldererer Lump demon', 'Extreme lump-growing with recursive lumping and lump recursiving process', 'Embrace Fractal engines', 'Fractal engines on your hands', 'Better Luck XVI'],
        '17': ['Javascript console', 'Mind opening', 'True evil process', 'Embrace Javascript consoles', 'Javascript consoles on your hands', 'Better Luck XVII'],
        '18': ['Idleverse', 'Santa-summoning spell', 'Idle lump-growing process', 'Embrace Idleverses', 'Idleverses on your hands', 'Better Luck XVIII'],
        '19': ['Cortex baker', 'The ancient cookie dragon', 'Super Brainz', 'Embrace Cortex bakers', 'Cortex bakers on your hands', 'Better Luck XIX'],
        '20': ['You', 'A book', 'I', 'Embrace Yoursef', 'You on your hands', 'Better Luck XX']
    };

    //Sugar lumps
    const scalingBaseReduce = 250;
    const staticBasereduce = minute * 3;
    const minTimeReduce = minute * 18;
    let goldenSummoner = undefined;
    const sugarLumpSpecial = {
        '1': 'Sugar lump farming 101',
        '2': 'Ancient Lump-growing scroll',
        '3': 'Infinite knowledge',
        '4': 'Auto-clicking process',
        '5': 'Laid back lumping',
        '6': 'Call on the luck',
        '7': 'Faster and lumpier clicking process'
    }

    //CPS
    const baseCpsIncrease = 1;
    const boostClick = 1;
    const atheismMultiplier = 3;
    const cpsSpecial = {
        '1': 'Flora',
        '2': 'Hades',
        '3': 'Xipe Totec',
        '4': 'God of Construction',
        '5': 'Some god of farming',
        '6': 'Spell casterinos',
        '7': 'Atheism'
    }

    //Utility
    const goldenSpawnpercent = 5;
    const buffDuration = 5;
    const buffPower = 5;
    let newGamePlus = undefined;
    const utilitySpecial = {
        '1': 'Channel Your Luck',
        '2': 'Non lazy Wizards',
        '3': 'Random Drop rate increase',
        '4': 'Sugar Lump unusuality',
        '5': 'More Wrinklers or faster spawn',
        '6': 'Mutation chance garden / anything in the garden?',
        '7': 'Click has a 1 in 10.000 chance to be worth 1000x click?'
    }


    const toPointOnePercent = function (number) {
        number = Math.floor(number / 10);
        return number / 100;
    };

    const toPercent = function (number) {
        return number / 100;
    }




    MoreHeavenlyUpgradesRemastered.init = function() {
        MoreHeavenlyUpgradesRemastered.isLoaded = 1;

        //CPS block
        //CPS BASE
        CCSE.NewHeavenlyUpgrade(cpsSpecial[1], 'Doubles CPS as long as the total number of buildings is divisible by 10', heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1500, -450, ['Keepsakes']);

        //CPS TIER 1
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][3], `Increases the base CPS of ${buildingTiers[1][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1750, -500, [cpsSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][3], `Increases the base CPS of ${buildingTiers[2][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1600, -650, [cpsSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][3], `Increases the base CPS of ${buildingTiers[3][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1900, -550, [buildingTiers[1][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][3], `Increases the base CPS of ${buildingTiers[4][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1700, -800, [buildingTiers[2][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][3], `Increases the base CPS of ${buildingTiers[5][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -2100, -650, [buildingTiers[3][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][3], `Increases the base CPS of ${buildingTiers[6][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1900, -900, [buildingTiers[4][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][3], `Increases the base CPS of ${buildingTiers[7][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -2200, -750, [buildingTiers[5][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][3], `Increases the base CPS of ${buildingTiers[8][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -2100, -950, [buildingTiers[6][3]]);
        CCSE.NewHeavenlyUpgrade(cpsSpecial[2], `Increases you CPS by .1% for every Sugar Lump collected, stacking additively`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -2300, -950, [buildingTiers[7][3], buildingTiers[8][3]]);

        //CPS TIER 2
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][3], `Increases the base CPS of ${buildingTiers[9][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1250, -500, [cpsSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][3], `Increases the base CPS of ${buildingTiers[10][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1400, -650, [cpsSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][3], `Increases the base CPS of ${buildingTiers[11][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1100, -550, [buildingTiers[9][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][3], `Increases the base CPS of ${buildingTiers[12][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1300, -800, [buildingTiers[10][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][3], `Increases the base CPS of ${buildingTiers[13][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -900, -650, [buildingTiers[11][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][3], `Increases the base CPS of ${buildingTiers[14][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1100, -900, [buildingTiers[12][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][3], `Increases the base CPS of ${buildingTiers[15][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -800, -750, [buildingTiers[13][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][3], `Increases the base CPS of ${buildingTiers[16][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -900, -950, [buildingTiers[14][3]]);
        CCSE.NewHeavenlyUpgrade(cpsSpecial[3], `Increases CPS by .1% for each golden cookie clicked, stacking additively`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -700, -950, [buildingTiers[15][3], buildingTiers[16][3]]);
       

        //CPS TIER 3
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][3], `Increases the base CPS of ${buildingTiers[17][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1500, -600, [cpsSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][3], `Increases the base CPS of ${buildingTiers[18][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1500, -750, [buildingTiers[17][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][3], `Increases the base CPS of ${buildingTiers[19][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1500, -900, [buildingTiers[18][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][3], `Increases the base CPS of ${buildingTiers[20][0]} by ${baseCpsIncrease}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1500, -1050, [buildingTiers[19][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][4], `${buildingTiers[1][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1500, -1200, [buildingTiers[20][3]]);     
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][4], `${buildingTiers[2][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1500, -1350, [buildingTiers[1][4]]);
        CCSE.NewHeavenlyUpgrade(cpsSpecial[4], `Increases CPS by .1% for each building owned, stacking additively`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1500, -1500, [buildingTiers[2][4]]);
        
        //CPS TIER 4
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][4], `${buildingTiers[3][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1575, -1500, [cpsSpecial[4]]);     
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][4], `${buildingTiers[4][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1675, -1525, [buildingTiers[3][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][4], `${buildingTiers[5][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1775, -1575, [buildingTiers[4][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][4], `${buildingTiers[6][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1825, -1650, [buildingTiers[5][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][4], `${buildingTiers[7][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1850, -1725, [buildingTiers[6][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][4], `${buildingTiers[8][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1850, -1825, [buildingTiers[7][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][4], `${buildingTiers[9][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1825, -1900, [buildingTiers[8][4]]);
        CCSE.NewHeavenlyUpgrade(cpsSpecial[5], `Increases CPS by .1% mature plant harvested, stacking additively`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1725, -2000, [buildingTiers[9][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][4], `${buildingTiers[10][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1650, -1925, [cpsSpecial[5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][4], `${buildingTiers[11][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1575, -2000, [buildingTiers[10][4]]);

        // //CPS TIER 5
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][4], `${buildingTiers[12][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1425, -1500, [cpsSpecial[4]]);     
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][4], `${buildingTiers[13][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1325, -1525, [buildingTiers[12][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][4], `${buildingTiers[14][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1225, -1575, [buildingTiers[13][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][4], `${buildingTiers[15][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1175, -1650, [buildingTiers[14][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][4], `${buildingTiers[16][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1150, -1725, [buildingTiers[15][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][4], `${buildingTiers[17][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1150, -1825, [buildingTiers[16][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][4], `${buildingTiers[18][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1175, -1900, [buildingTiers[17][4]]);
        CCSE.NewHeavenlyUpgrade(cpsSpecial[6], `Increases CPS by 1% for each spell cast, stacking additively`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1275, -2000, [buildingTiers[18][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][4], `${buildingTiers[19][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1350, -1925, [cpsSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][4], `${buildingTiers[20][0]} levels boost clicks by ${boostClick}%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1425, -2000, [buildingTiers[19][4]]);

        // //Final
        CCSE.NewHeavenlyUpgrade(cpsSpecial[7], `multiplies your CPS by ${1 * atheismMultiplier} if you have no Jade slot spirit, by ${2 * atheismMultiplier} if you have no Ruby slot spirit, and by ${3 * atheismMultiplier} if you have no Diamond slot spirit`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1500, -2125, [buildingTiers[11][4], buildingTiers[20][4]]);
    

        //Building Cps calculation
        //This contributes almost nothing to total CPS
        //This messes uo the % distribution of buildings in the stats - maybe global additively stacking mult?
        for (let i = 1; i <= Object.keys(buildingTiers).length; i++) {
            Game.customBuildings[buildingTiers[i][0]].cpsMult.push(function () {
                let cpsMultiplier = 1;
                if(buildingTiers[i][3] && Game.Has(buildingTiers[i][3])) cpsMultiplier *= 1 + toPercent(Game.Objects[buildingTiers[i][0]].amount);
                return cpsMultiplier;
            });
        }



        //Sugar Lumps Block
        //Sugar Lumps TIER 1
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[1], `This is the start of your ascension to become a true sugar lump farmer. The minimum time to grow a sugar lump is now reduced to 1 hour. Also ripen and fall time are dependant on maturing time`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 9], -100, -1500, ['Sucralosia Inutilis']);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][1], `Sugar lumps mature <b>${1*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [0, 0], -750, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][2], `Sugar lumps mature <b>${1*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[1][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [0, 1], -650, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][1], `Sugar lumps mature <b>${2*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [1, 0], -450, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][2], `Sugar lumps mature <b>${2*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[2][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [1, 1], -350, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][1], `Sugar lumps mature <b>${3*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [2, 0], -150, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][2], `Sugar lumps mature <b>${3*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[3][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [2, 1], -50, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][1], `Sugar lumps mature <b>${4*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [3, 0], 150, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][2], `Sugar lumps mature <b>${4*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[4][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [3, 1], 250, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][1], `Sugar lumps mature <b>${5*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [4, 0], 450, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][2], `Sugar lumps mature <b>${5*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[5][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [4, 1], 550, -1700, [sugarLumpSpecial[1]]);

        //Sugar Lumps TIER 2
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[2], `You are an adept sugar lump farmer. The minimum time to grow a sugar lump is reduced by ${minTimeReduce/minute} minutes`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 9], -100, -1900, [buildingTiers[1][1], buildingTiers[1][2], buildingTiers[2][1], buildingTiers[2][2], buildingTiers[3][1], buildingTiers[3][2], buildingTiers[4][1], buildingTiers[4][2], buildingTiers[5][1], buildingTiers[5][2]]);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][1], `Sugar lumps mature <b>${6*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [6, 0], -750, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][2], `Sugar lumps mature <b>${6*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[6][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [6, 1], -650, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][1], `Sugar lumps mature <b>${7*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [7, 0], -450, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][2], `Sugar lumps mature <b>${7*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[7][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [7, 1], -350, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][1], `Sugar lumps mature <b>${8*staticBasereduce/minute} minutes</b> soonecial[5]er`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [8, 0], -150, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][2], `Sugar lumps mature <b>${8*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[8][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [8, 1], -50, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][1], `Sugar lumps mature <b>${9*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [9, 0], 150, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][2], `Sugar lumps mature <b>${9*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[9][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [9, 1], 250, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][1], `Sugar lumps mature <b>${10*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [10, 0], 450, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][2], `Sugar lumps mature <b>${10*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[10][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [10, 1], 550, -2100, [sugarLumpSpecial[2]]);

        //Sugar Lumps TIER 3
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[3], `You are an advanced sugar lump farmer. The minimum time to grow a sugar lump is reduced by ${minTimeReduce/minute} minutes`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 9], -100, -2300, [buildingTiers[6][1], buildingTiers[6][2], buildingTiers[7][1], buildingTiers[7][2], buildingTiers[8][1], buildingTiers[8][2], buildingTiers[9][1], buildingTiers[9][2], buildingTiers[10][1], buildingTiers[10][2]]);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][1], `Sugar lumps mature <b>${11*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [11, 0], -750, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][2], `Sugar lumps mature <b>${11*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[11][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [11, 1], -650, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][1], `Sugar lumps mature <b>${12*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [12, 0], -450, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][2], `Sugar lumps mature <b>${12*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[12][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [12, 1], -350, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][1], `Sugar lumps mature <b>${13*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [13, 0], -150, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][2], `Sugar lumps mature <b>${13*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[13][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [13, 1], -50, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][1], `Sugar lumps mature <b>${14*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [14, 0], 150, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][2], `Sugar lumps mature <b>${14*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[14][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [14, 1], 250, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][1], `Sugar lumps mature <b>${15*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 0], 450, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][2], `Sugar lumps mature <b>${15*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[15][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 1], 550, -2500, [sugarLumpSpecial[3]]);

        //Sugar Lumps TIER 4
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[4], `You are an expert sugar lump farmer. The minimum time to grow a sugar lump is reduced by ${minTimeReduce/minute} minutes`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 9], -300, -2700, [buildingTiers[11][1], buildingTiers[11][2], buildingTiers[12][1], buildingTiers[12][2], buildingTiers[13][1]]);
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[5], `Your sugar lump mastery now carries over to offline progress`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 9], 100, -2700, [buildingTiers[13][2], buildingTiers[14][1], buildingTiers[14][2], buildingTiers[15][1], buildingTiers[15][2]]);
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[6], `Unlocks the golden cookie summoner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 9], -100, -2700, [sugarLumpSpecial[4], sugarLumpSpecial[5]]);

        CCSE.NewHeavenlyUpgrade(buildingTiers[16][1], `Sugar lumps mature <b>${16*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [16, 0], -750, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][2], `Sugar lumps mature <b>${16*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[16][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [11, 1], -650, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][1], `Sugar lumps mature <b>${17*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [17, 0], -450, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][2], `Sugar lumps mature <b>${17*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[17][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [12, 1], -350, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][1], `Sugar lumps mature <b>${18*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [13, 0], -150, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][2], `Sugar lumps mature <b>${18*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[18][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [13, 1], -50, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][1], `Sugar lumps mature <b>${19*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [14, 0], 150, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][2], `Sugar lumps mature <b>${19*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[19][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [14, 1], 250, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][1], `Sugar lumps mature <b>${20*staticBasereduce/minute} minutes</b> sooner`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 0], 450, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][2], `Sugar lumps mature <b>${20*scalingBaseReduce/second} seconds</b> sooner for each ${buildingTiers[20][0]}`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 1], 550, -2900, [sugarLumpSpecial[6]]);

        //Sugar Lumps TIER 5
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[7], `Your minimum time to mature lumps is reduced by <b>${second/second} second<b> for every upgrade level of your buildings, down to a cap of one second`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 9], -100, -3300, [buildingTiers[16][1], buildingTiers[16][2], buildingTiers[17][1], buildingTiers[17][2], buildingTiers[18][1], buildingTiers[18][2], buildingTiers[19][1], buildingTiers[19][2], buildingTiers[20][1], buildingTiers[20][2]]);


        //Other necessary upgrades
        goldenSummoner = CCSE.NewUpgrade('Golden summoner', 'Summons an amount of golden cookies equal to your stored sugar lumps', 0, [23, 6]);
        goldenSummoner.priceLumps = 1;
        goldenSummoner.pool = 'toggle';
        goldenSummoner.canBuyFunc = function () { return Game.lumps > 0 };
        goldenSummoner.clickFunction = Game.spendLump(1, 'Call on the Cookie Summoner!', function () {
            let price = Game.lumps + 1;
            for (let i = 0; i < price; i++) {
                let newShimmer = new Game.shimmer('golden');
                newShimmer.spawnLead = 1;
            }
            Game.lumps = 0;
        });


        //Sugar lump calculations
        Game.customComputeLumpTimes.push(function() {
            let minMatureTime = hour * 12;
            if (Game.Has(sugarLumpSpecial[1])) minMatureTime -= hour * 11
            if (Game.Has(sugarLumpSpecial[2])) minMatureTime -= minute * 18;
            if (Game.Has(sugarLumpSpecial[3])) minMatureTime -= minute * 18;
            if (Game.Has(sugarLumpSpecial[4])) minMatureTime -= minute * 18;
            if (Game.Has(sugarLumpSpecial[7])) minMatureTime -= (() => {
                let objKeys = Object.keys(Game.Objects);
                let sum = 0;
                objKeys.forEach((e) => sum += Game.Objects[e].level);
                return sum * second;
              })();
            minMatureTime = Math.max(minMatureTime, second);

            for (let i = 1; i <= Object.keys(buildingTiers).length; i++) {
                if(buildingTiers[i][1] && Game.Has(buildingTiers[i][1])) Game.lumpMatureAge -= staticBasereduce * i;
                if(buildingTiers[i][2] && Game.Has(buildingTiers[i][2])) Game.lumpMatureAge -= scalingBaseReduce * i * Game.Objects[buildingTiers[i][0]].amount;
            };

            Game.lumpMatureAge = Math.max(Game.lumpMatureAge, minMatureTime);
            Game.lumpRipeAge = Math.min(Game.lumpRipeAge, (Math.ceil((Game.lumpMatureAge * 1.5) / second) * second));
            Game.lumpOverripeAge = Math.min(Game.lumpOverripeAge, (Math.ceil((Game.lumpRipeAge * 1.5) / second) * second));
        });
        Game.customComputeLumpTimes.push(function offlineLumps () {
            if (Game.Has(sugarLumpSpecial[5])) Game.gainLumps(Math.floor((Math.abs(Date.now() - Game.lastDate) / Game.lumpOverripeAge)));
            let thisHasToLeave = offlineLumps.toString();
            let index = Game.customComputeLumpTimes.findIndex(fn => fn.toString() === thisHasToLeave);
            Game.customComputeLumpTimes.splice(index, 1);
        });


        // Utility Block
        // UTILITY TIER 1
        let allLuckies = CCSE.NewHeavenlyUpgrade(utilitySpecial[1], `Channels your luck and unlocks an missing instances of: Lucky digit, Lucky number and/or Lucky payout for their respective cost.<br>Also unlocks new Game+`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [15, 9], 2000, -1000, ['Legacy'], function () {
            if (!Game.Has('Lucky digit')) Game.Upgrades['Lucky digit'].buy();
            if (!Game.Has('Lucky number')) Game.Upgrades['Lucky number'].buy();
            if (!Game.Has('Lucky payout')) Game.Upgrades['Lucky payout'].buy();
        });
        allLuckies.showIf = function () {
            let heavenlyChipsRequirement = 0;
            heavenlyChipsRequirement += Game.Upgrades[utilitySpecial[1]].getPrice();
            if (!Game.Has('Lucky digit')) heavenlyChipsRequirement += Game.Upgrades['Lucky digit'].getPrice();
            if (!Game.Has('Lucky number')) heavenlyChipsRequirement += Game.Upgrades['Lucky number'].getPrice();
            if (!Game.Has('Lucky payout')) heavenlyChipsRequirement += Game.Upgrades['Lucky payout'].getPrice();
            return heavenlyChipsRequirement < Game.heavenlyChips;
        }

        //UTILITY TIER 2
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1750, -1000, [utilitySpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1500, -1050, [buildingTiers[1][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1350, -1150, [buildingTiers[2][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1250, -1300, [buildingTiers[3][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1200, -1500, [buildingTiers[4][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1200, -1700, [buildingTiers[5][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1200, -1900, [buildingTiers[6][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1200, -2100, [buildingTiers[7][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1200, -2300, [buildingTiers[8][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1200, -2500, [buildingTiers[9][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1300, -2600, [buildingTiers[10][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1500, -2600, [buildingTiers[11][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1600, -2500, [buildingTiers[12][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1600, -2300, [buildingTiers[13][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1600, -2100, [buildingTiers[14][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1600, -1900, [buildingTiers[15][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1600, -1700, [buildingTiers[16][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1600, -1550, [buildingTiers[17][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1700, -1450, [buildingTiers[18][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often and the effect lasts ${buffDuration}% longer`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [16, 0], 1850, -1400, [buildingTiers[19][5]]);

        //UTILITY TIER 5
        CCSE.NewHeavenlyUpgrade(utilitySpecial[2], `Increases the chance of random drops by 50%`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [15, 9], 2000, -1400, [buildingTiers[20][5]])
        CCSE.NewHeavenlyUpgrade(utilitySpecial[3], `Your wizards are no longer lazy. They always work at the maximum efficiency, independant of your current magic value <q>I was too lazy to adjust the tooltip in the wizard tower</q>`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [15, 9], 2000, -1200, [utilitySpecial[1], utilitySpecial[2]])


        //Other necessary upgrades
        //TODO Does not work right now
        newGamePlus = CCSE.NewUpgrade('NewGamePlus', 'Again!', 500_000, [30, 20]);
        newGamePlus.pool = 'toggle';
        newGamePlus.canBuyFunc = function () { return false };
        /*
        newGamePlus.clickFunction = function (sure) {
            if (!sure) {
                Game.Prompt(
                  '<id Ascend><h3>' + loc("Ascend") + '</h3>' +
                  '<div class="block">' +
                  tinyIcon([19, 7]) +
                  '<div class="line"></div>' +
                  loc("Do you REALLY want to ascend?<div class=\"line\"></div>You will lose your progress and start over from scratch.<div class=\"line\"></div>All your cookies will be converted into prestige and heavenly chips.") +
                  '<div class="line"></div>' +
                  (Game.canLumps() ?
                    loc("You will keep your achievements, building levels and sugar lumps.") :
                    loc("You will keep your achievements.")
                  ) +
                  '<div class="optionBox">' +
                  '<a class="option smallFancyButton" style="margin:16px;padding:8px 16px;animation:rainbowCycle 5s infinite ease-in-out,pucker 0.2s ease-out;box-shadow:0px 0px 0px 1px #000,0px 0px 1px 2px currentcolor;background:linear-gradient(to bottom,transparent 0%,currentColor 500%);width:auto;text-align:center;" ' + Game.clickStr + '="PlaySound(\'snd/tick.mp3\');Game.ClosePrompt();Game.Updates.NewGamePlus.clickFunction(1);" id="promptOption0">' + loc("Ascend") + '</a>' +
                  '</div>' +
                  '</div>',
                  [
                    [loc("Yes"), 'Game.ClosePrompt();Game.Updates.NewGamePlus.clickFunction(1);', 'float:left;display:none;'],
                    [loc("Cancel"), 0, 'float:right']
                  ]
                );
            } else {
                Object.values(buildingTiers).forEach((e) => Game.Objects[e[0]].amount = 0);
                Game.cookies = 0;
                Game.cookiesEarned = 0;
                Game.cookiesReset = 0;
                Game.heavenlyChips = 0
                Game.prestige = 0;
                Game.permanentUpgrades = [-1, -1, -1, -1, -1];
                //if (Game.Has('Egg')) Game.Lock('Egg');
                Game.PrestigeUpgrades.forEach((e) => Game.Lock(e.name));
                for (let tier in buildingTiers) {
                    let buildings = buildingTiers[tier];
                    for (let i = 1; i < buildings.length; i++) {
                        Game.Lock(buildings[i]);
                    }
                }
                for (let value in sugarLumpSpecial) {
                    Game.Lock(sugarLumpSpecial[value]);
                }s
                for (let value in cpsSpecial) {
                    Game.Lock(cpsSpecial[value]);
                }
                Game.Ascend(true);
            }
        };
        */
        //Utility calculations
        Game.customShimmerTypesAll.getTimeMod.push(function () {
            let multiplier = 1;
            Object.values(buildingTiers).forEach((e) => Game.Has(e[5]) ? multiplier *= 0.95 : multiplier);
            return multiplier;
        });
        Game.customShimmerTypes['golden'].customEffectDurMod.push(function () {
            let multiplier = 1;
            Object.values(buildingTiers).forEach((e) => Game.Has(e[5]) ? multiplier *= 1.05 : multiplier);
            return multiplier;
        });
        Game.customDropRateMult.push(function () {
            let dropRate = 1;
            if (Game.Has(utilitySpecial[2])) dropRate *= 1 + toPercent(50);
            return dropRate;
        })

    }


    //Game Hooks
    Game.registerHook('logic', function () {
        if (Game.Has(utilitySpecial[3]) && Game.Objects['Wizard tower']?.minigame?.magic && Game.Objects['Wizard tower']?.minigame?.magicPS) Game.Objects['Wizard tower'].minigame.magic += 0.002 - Game.Objects['Wizard tower'].minigame.magicPS;
        if (Game.Has(sugarLumpSpecial[6])) Game.Unlock('Golden summoner');
        goldenSummoner.priceLumps = Game.lumps > 1 ? Game.lumps : 1;
        if (Game.Has(utilitySpecial[1])) Game.Unlock('NewGamePlus');
    });

   Game.registerHook('cps', function(cps) {
        let cpsMultiplier = 1;
        if (Game.Has(cpsSpecial[1]) && Game.BuildingsOwned % 10 == 0) cpsMultiplier *= 1 + toPercent(100);
        if (Game.Has(cpsSpecial[2])) cpsMultiplier *= 1 + toPointOnePercent(Game.lumpsTotal);
        if (Game.Has(cpsSpecial[3])) cpsMultiplier *= 1 + toPointOnePercent(Game.goldenClicks);
        if (Game.Has(cpsSpecial[4])) cpsMultiplier *= 1 + toPointOnePercent(Game.BuildingsOwned);
        if (Game.Has(cpsSpecial[5]) && Game.Objects['Farm']?.minigame?.harvestsTotal) cpsMultiplier *= 1 + toPointOnePercent(Game.Objects['Farm'].minigame.harvestsTotal);
        if (Game.Has(cpsSpecial[6]) && Game.Objects['Wizard tower']?.minigame?.spellsCastTotal) cpsMultiplier *= 1 + toPercent(Game.Objects['Wizard tower'].minigame.spellsCastTotal);
        if (Game.Has(cpsSpecial[7]) && Game.Objects['Temple']?.minigame?.slot) {
            let slots = Game.Objects['Temple'].minigame.slot;
            if (slots[0] === -1) cpsMultiplier *= 3 * atheismMultiplier;
            if (slots[1] === -1) cpsMultiplier *= 2 * atheismMultiplier;
            if (slots[2] === -1) cpsMultiplier *= 1 * atheismMultiplier;
        }
        //Game.Notify('More Heavenly Upgrades Remastered loaded', '' + cpsMultiplier, [19, 7], 6);
        return cps * cpsMultiplier;
    });

    Game.registerHook('cookiesPerClick', function (cpc) {
        let cpcMultiplier = 1;
        for (let i = 1; i <= Object.keys(buildingTiers).length; i++) {
            if(buildingTiers[i][4] && Game.Has(buildingTiers[i][4])) cpcMultiplier *= 1 + toPercent(Game.Objects[buildingTiers[i][0]].level);
        }
        return cpc * cpcMultiplier;
    });


    if (CCSE.ConfirmGameVersion(MoreHeavenlyUpgradesRemastered.name, MoreHeavenlyUpgradesRemastered.version, MoreHeavenlyUpgradesRemastered.GameVersion)) Game.registerMod(MoreHeavenlyUpgradesRemastered.name, MoreHeavenlyUpgradesRemastered);
    Game.Notify('More Heavenly Upgrades Remastered loaded', '', [19, 7], 6);

}

if (!MoreHeavenlyUpgradesRemastered.isLoaded) {
    if (CCSE && CCSE.isLoaded) {
        MoreHeavenlyUpgradesRemastered.launch();
    } else {
        if (!CCSE) var CCSE = {};
        if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(MoreHeavenlyUpgradesRemastered.launch);
    }
}



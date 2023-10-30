//Created by 0x415374
//Based on MoreHeavenlyUpgrades by RubyChan42

if (MoreHeavenlyUpgradesRemastered === undefined) var MoreHeavenlyUpgradesRemastered = {};
MoreHeavenlyUpgradesRemastered.name = 'More Heavenly Upgrades Remastered';
MoreHeavenlyUpgradesRemastered.version = '2.111';
MoreHeavenlyUpgradesRemastered.GameVersion = '2.052';

//debug
//Game.Notify('More Heavenly Upgrades Remastered loaded', '', [19, 7], 6);

MoreHeavenlyUpgradesRemastered.launch = function() {
    let forcedLuckTimer = 1_000_000;
    let cpsUpgrade = 0;
    let lumpUpgrade = 0;
    let utilityUpgrade = 0;
    let originalBuffFunctionsStrings = [];
    let buffedBuffFunctionsStrings = [];
    for (let i = 0; i < Object.keys(Game.buffTypes).length; i++) {
        originalBuffFunctionsStrings.push(Game.buffTypes[i].func.toString());
    }

    const heavenlyUpgradeBase = 1_111_111;
    const heavenlyUpgradePow = 2.5;

    const second = 1_000;
    const minute = second * 60;
    const hour = minute * 60;

    const pointOnePercent = 0.001;
    const onePercent = 0.01;

    //Map that contains building tier as keys which maps to an enum of [name, {Sugar Lump}staticReduce, {Sugar Lump}scalingReduce, {CPS}baseCps, {CPS}clickBuff, {Utility}goldenCookieSpawnRateAndDuration, {Utility}buffIntensity]
    const buildingTiers = {
        '1': ['Cursor', 'Sugar lump rubbers', 'Velvet gloves', 'Embrace Cursors', 'Cursors on your hands', 'Better Luck I', 'Intensified Luck I'],
        '2': ['Grandma', 'Sugar lump caregiver', 'My lovely sugar lumps', 'Embrace Grandmas', 'Gramdmas on your hands', 'Better Luck II', 'Intensified Luck II'],
        '3': ['Farm', 'Sugar lump farm', 'Sugar Farming process', 'Embrace Farms', 'Farms on your hands', 'Better Luck III', 'Intensified Luck III'],
        '4': ['Mine', 'Sugar lump mining', 'Dirt extraction process', 'Embrace Mines', 'Mines on your hands', 'Better Luck IV', 'Intensified Luck IV'],
        '5': ['Factory', 'Sugar lump automatons', 'Overclocked potion making process', 'Embrace Factories', 'Factories on your hands', 'Better Luck V', 'Intensified Luck V'],
        '6': ['Bank', 'Sugar lump loans', 'Lump banking process', 'Embrace Banks', 'Banks on your hands', 'Better Luck VI', 'Intensified Luck VI'],
        '7': ['Temple', 'Sugar lump growing ritual', 'Praying process', 'Embrace Temples', 'Temples on your hands', 'Better Luck VII', 'Intensified Luck VII'],
        '8': ['Wizard tower', 'Sugar lump summoning nice fairy', 'Sugar magical growing process', 'Embrace Wizard towers', 'Wizard towers on your hands', 'Better Luck VIII', 'Intensified Luck VIII'],
        '9': ['Shipment', 'Sugar lump fertilizing trails', 'Intergalactic Extrauniversal investigation process', 'Embrace Shipments', 'Shipments on your hands', 'Better Luck IX', 'Intensified Luck IX'],
        '10': ['Alchemy lab', 'Sugar lump growing potion', 'Overclocked potion crafting process', 'Embrace Alchemy labs', 'Alchemy labs on your hands', 'Better Luck X', 'Intensified Luck X'],
        '11': ['Portal', 'Sugar lump interdimensional growing pact', 'Other-worldly lump-growing process', 'Embrace Portals', 'Portals on your hands', 'Better Luck XI', 'Intensified Luck XI'],
        '12': ['Time machine', 'Sugar lumps from the past', 'Time-altering process', 'Embrace Time machines','Time machines on your hands', 'Better Luck XII', 'Intensified Luck XII'],
        '13': ['Antimatter condenser', 'Sugar lump creation process', 'Multiversal antimatterial process', 'Embrace Antimatter condensers', 'Antimatter condensers on your hands', 'Better Luck XIII', 'Intensified Luck XIII'],
        '14': ['Prism', 'Sugar lump sunlight compressing method', 'Ilumination-based growing process', 'Embrace Prisms', 'Prisms on your hands', 'Better Luck XIV', 'Intensified Luck XIV'],
        '15': ['Chancemaker', 'Sugar lump luck conversion', 'Sheer luck lump-growing process', 'Embrace Chancemakers', 'Chancemakers on your hands', 'Better Luck XV', 'Intensified Luck XV'],
        '16': ['Fractal engine', 'Sugar lump duplication process', 'Extreme lump-growing with recursive lumping and lump recursiving process', 'Embrace Fractal engines', 'Fractal engines on your hands', 'Better Luck XVI', 'Intensified Luck XVI'],
        '17': ['Javascript console', 'Sugar lumps binary processing', 'In the zone', 'Embrace Javascript consoles', 'Javascript consoles on your hands', 'Better Luck XVII', 'Intensified Luck XVII'],
        '18': ['Idleverse', 'Sugar lump hacking technique', 'Idle lump-growing process', 'Embrace Idleverses', 'Idleverses on your hands', 'Better Luck XVIII', 'Intensified Luck XVIII'],
        '19': ['Cortex baker', 'Sugar lumps beyond imagination', 'Super Brainz', 'Embrace Cortex bakers', 'Cortex bakers on your hands', 'Better Luck XIX', 'Intensified Luck XIX'],
        '20': ['You', 'Sugar lump yourself', 'I', 'Embrace Yourselves', 'You on your hands', 'Better Luck XX', 'Intensified Luck XX']
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
        '4': 'Ptah',
        '5': 'Renenutet',
        '6': 'Freyja',
        '7': 'Abandon the old gods'
    }

    //Utility
    const goldenSpawnpercent = 5;
    const buffDuration = 5;
    const buffPower = 3;
    let newGamePlus = undefined;
    const utilitySpecial = {
        '1': 'Redefine Luck',
        '2': 'Lucky\'s Lucky Charm',
        '3': 'Non-lazy Wizards',
        '4': 'It\'s raining sugar lumps... sometimes',
        '5': 'Is this considered lucky?',
        '6': 'Lucky Deal',
        '7': 'Unintended Results'
    }


    //New Game Plus
    const NGPCpsBuffPercent = 300;
    const NGPMhurPriceIncrease = 1;
    const NGPAchievements = {
        '1': 'New Game+',
        '2': 'New Game+2',
        '3': 'New Game+3',
        '4': 'New Game+4',
        '5': 'New Game+5',
        '6': 'New Game+6',
        '7': 'New Game+7',
    }


    //Helper functions
    function calculateNGPCycle () {
        let ngpCycle = 0;
        const keys = Object.keys(NGPAchievements).sort((a, b) => a - b);
        for (let i = 0; i < keys.length; i++) {
            if (!Game.HasAchiev(NGPAchievements[keys[i]])) {
                ngpCycle = parseInt(keys[i]) - 1;
                break;
            }
            if (i === keys.length - 1) {
                ngpCycle = parseInt(keys[i]);
            }
        }
        return ngpCycle;
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

        //New Game Plus Achievemens
        CCSE.NewAchievement(NGPAchievements[1], `You embarked on your second journey to unveil the enigmas of cookies.<br>Cookie production multiplier <b>+${NGPCpsBuffPercent}% permanently</b>.<br><u>Heavenly Upgrades are more expensive.</u>`, [18, 0]);
        CCSE.NewAchievement(NGPAchievements[2], `You embarked on your third journey to unveil the enigmas of cookies.<br>Cookie production multiplier <b>+${NGPCpsBuffPercent}% permanently</b>.<br><u>Heavenly Upgrades are more expensive.</u>`, [18, 1]);
        CCSE.NewAchievement(NGPAchievements[3], `You embarked on your fourth journey to unveil the enigmas of cookies.<br>Cookie production multiplier <b>+${NGPCpsBuffPercent}% permanently</b>.<br><u>Heavenly Upgrades are more expensive.</u>`, [18, 2]);
        CCSE.NewAchievement(NGPAchievements[4], `You embarked on your fifth journey to unveil the enigmas of cookies.<br>Cookie production multiplier <b>+${NGPCpsBuffPercent}% permanently</b>.<br><u>Heavenly Upgrades are more expensive.</u>`, [18, 13]);
        CCSE.NewAchievement(NGPAchievements[5], `You embarked on your sixth journey to unveil the enigmas of cookies.<br>Cookie production multiplier <b>+${NGPCpsBuffPercent}% permanently</b>.<br><u>Heavenly Upgrades are more expensive.</u>`, [18, 14]);
        CCSE.NewAchievement(NGPAchievements[6], `You embarked on your seventh journey to unveil the enigmas of cookies.<br>Cookie production multiplier <b>+${NGPCpsBuffPercent}% permanently</b>.<br><u>Heavenly Upgrades are more expensive.</u>`, [18, 15]);
        CCSE.NewAchievement(NGPAchievements[7], `You embarked on your eigth journey to unveil the enigmas of cookies.<br>Cookie production multiplier <b>+${NGPCpsBuffPercent}% permanently</b>.<br><u>Heavenly Upgrades are more expensive.</u>`, [18, 16]);


        //CPS blocks
        //CPS BASE
        CCSE.NewHeavenlyUpgrade(cpsSpecial[1], `As long as the total number of buildings is divisible by 10 all cookie production is <b>multiplied by 2</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 19], -1500, -450, ['Keepsakes']);

        //CPS TIER 1
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][3], `Each ${buildingTiers[1][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[1][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [0, 32], -1750, -500, [cpsSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][3], `Each ${buildingTiers[2][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[2][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [1, 32], -1600, -650, [cpsSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][3], `Each ${buildingTiers[3][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[3][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [2, 32], -1900, -550, [buildingTiers[1][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][3], `Each ${buildingTiers[4][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[4][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [3, 32], -1700, -800, [buildingTiers[2][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][3], `Each ${buildingTiers[5][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[5][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [4, 32], -2100, -650, [buildingTiers[3][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][3], `Each ${buildingTiers[6][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[6][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [15, 32], -1900, -900, [buildingTiers[4][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][3], `Each ${buildingTiers[7][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[7][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [16, 32], -2200, -750, [buildingTiers[5][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][3], `Each ${buildingTiers[8][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[8][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [17, 32], -2100, -950, [buildingTiers[6][3]]);
        CCSE.NewHeavenlyUpgrade(cpsSpecial[2], `Increases CPS by .1% for every Sugar Lump collected, stacking additively`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [23, 18], -2300, -950, [buildingTiers[7][3], buildingTiers[8][3]]);

        //CPS TIER 2
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][3], `Each ${buildingTiers[9][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[9][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [5, 32], -1250, -500, [cpsSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][3], `Each ${buildingTiers[10][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[10][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [6, 32], -1400, -650, [cpsSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][3], `Each ${buildingTiers[11][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[11][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [7, 32], -1100, -550, [buildingTiers[9][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][3], `Each ${buildingTiers[12][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[12][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [8, 32], -1300, -800, [buildingTiers[10][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][3], `Each ${buildingTiers[13][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[13][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [13, 32], -900, -650, [buildingTiers[11][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][3], `Each ${buildingTiers[14][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[14][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [14, 32], -1100, -900, [buildingTiers[12][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][3], `Each ${buildingTiers[15][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[15][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [19, 32], -800, -750, [buildingTiers[13][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][3], `Each ${buildingTiers[16][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[16][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [20, 32], -900, -950, [buildingTiers[14][3]]);
        CCSE.NewHeavenlyUpgrade(cpsSpecial[3], `Increases CPS by .1% per golden cookie clicked, stacking additively`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [24, 18], -700, -950, [buildingTiers[15][3], buildingTiers[16][3]]);


        //CPS TIER 3
        let stem = CCSE.NewHeavenlyUpgrade(buildingTiers[17][3], `Each ${buildingTiers[17][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[17][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [32, 32], -1500, -600, [cpsSpecial[1]]);
        stem.showIf = function () {
            if (Game.Has(cpsSpecial[2]) && Game.Has(cpsSpecial[3])) return true;
        }
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][3], `Each ${buildingTiers[18][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[18][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [33, 32], -1500, -750, [buildingTiers[17][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][3], `Each ${buildingTiers[19][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[19][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [34, 32], -1500, -900, [buildingTiers[18][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][3], `Each ${buildingTiers[20][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[20][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [35, 32], -1500, -1050, [buildingTiers[19][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][4], `${buildingTiers[1][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [0, 29], -1500, -1200, [buildingTiers[20][3]]);     
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][4], `${buildingTiers[2][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [1, 29], -1500, -1350, [buildingTiers[1][4]]);
        CCSE.NewHeavenlyUpgrade(cpsSpecial[4], `Increases CPS by .1% per building owned, stacking additively`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [28, 18], -1500, -1500, [buildingTiers[2][4]]); 
            
        //CPS TIER 4
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][4], `${buildingTiers[3][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [2, 29], -1575, -1500, [cpsSpecial[4]]);     
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][4], `${buildingTiers[4][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [3, 29], -1675, -1525, [buildingTiers[3][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][4], `${buildingTiers[5][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [4, 29], -1775, -1575, [buildingTiers[4][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][4], `${buildingTiers[6][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [15, 29], -1825, -1650, [buildingTiers[5][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][4], `${buildingTiers[7][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [16, 29], -1850, -1725, [buildingTiers[6][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][4], `${buildingTiers[8][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [17, 29], -1850, -1825, [buildingTiers[7][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][4], `${buildingTiers[9][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [5, 29], -1825, -1900, [buildingTiers[8][4]]);
        CCSE.NewHeavenlyUpgrade(cpsSpecial[5], `Increases CPS by .1% per mature plant harvested, stacking additively`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [29, 18], -1725, -2000, [buildingTiers[9][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][4], `${buildingTiers[10][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [6, 29], -1650, -1925, [cpsSpecial[5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][4], `${buildingTiers[11][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [7, 29], -1575, -2000, [buildingTiers[10][4]]);

        // //CPS TIER 5
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][4], `${buildingTiers[12][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [8, 29], -1425, -1500, [cpsSpecial[4]]);     
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][4], `${buildingTiers[13][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [13, 29], -1325, -1525, [buildingTiers[12][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][4], `${buildingTiers[14][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [14, 29], -1225, -1575, [buildingTiers[13][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][4], `${buildingTiers[15][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [19, 29], -1175, -1650, [buildingTiers[14][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][4], `${buildingTiers[16][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [20, 29], -1150, -1725, [buildingTiers[15][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][4], `${buildingTiers[17][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [32, 29], -1150, -1825, [buildingTiers[16][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][4], `${buildingTiers[18][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [33, 29], -1175, -1900, [buildingTiers[17][4]]);
        CCSE.NewHeavenlyUpgrade(cpsSpecial[6], `Increases CPS by 1% per spell cast, stacking additively`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [22, 18], -1275, -2000, [buildingTiers[18][4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][4], `${buildingTiers[19][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [34, 29], -1350, -1925, [cpsSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][4], `${buildingTiers[20][0]} levels boost clicks by <b>${boostClick}%</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [35, 29], -1425, -2000, [buildingTiers[19][4]]);

        // //Final
        CCSE.NewHeavenlyUpgrade(cpsSpecial[7], `Multiplies your CPS by ${1 * atheismMultiplier} if you have no Jade slot spirit, by ${2 * atheismMultiplier} if you have no Ruby slot spirit, and by ${3 * atheismMultiplier} if you have no Diamond slot spirit`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [27, 18], -1500, -2125, [buildingTiers[11][4], buildingTiers[20][4]]);
    

        //Building Cps calculation
        for (let i = 1; i <= Object.keys(buildingTiers).length; i++) {
            Game.customBuildings[buildingTiers[i][0]].cpsMult.push(function () {
                let cpsMultiplier = 1;
                if(buildingTiers[i][3] && Game.Has(buildingTiers[i][3])) cpsMultiplier *= 1 + toPercent(Game.Objects[buildingTiers[i][0]].amount);
                return cpsMultiplier;
            });
        }


        //Sugar Lumps Block
        //Sugar Lumps TIER 1
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[1], `This is the start of your ascension to become a true sugar lump farmer. The minimum time to grow a sugar lump is now <b>reduced to 1 hour</b>.<br>Additionally, the periods for ripening and falling now correspond to the time it takes for the sugar lump to mature.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [26, 20], -100, -1500, ['Sucralosia Inutilis']);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][1], `Sugar lumps mature <b>${1*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [0, 30], -750, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][2], `Sugar lumps mature <b>${1*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[1][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [0, 36], -650, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][1], `Sugar lumps mature <b>${2*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [1, 30], -450, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][2], `Sugar lumps mature <b>${2*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[2][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [1, 36], -350, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][1], `Sugar lumps mature <b>${3*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [2, 30], -150, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][2], `Sugar lumps mature <b>${3*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[3][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [2, 36], -50, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][1], `Sugar lumps mature <b>${4*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [3, 30], 150, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][2], `Sugar lumps mature <b>${4*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[4][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [3, 36], 250, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][1], `Sugar lumps mature <b>${5*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [4, 30], 450, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][2], `Sugar lumps mature <b>${5*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[5][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [4, 36], 550, -1700, [sugarLumpSpecial[1]]);

        //Sugar Lumps TIER 2
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[2], `You are an adept sugar lump farmer. The minimum time to grow a sugar lump is reduced by <b>${minTimeReduce/minute} minutes</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 9], -100, -1900, [buildingTiers[1][1], buildingTiers[1][2], buildingTiers[2][1], buildingTiers[2][2], buildingTiers[3][1], buildingTiers[3][2], buildingTiers[4][1], buildingTiers[4][2], buildingTiers[5][1], buildingTiers[5][2]]);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][1], `Sugar lumps mature <b>${6*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 30], -750, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][2], `Sugar lumps mature <b>${6*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[6][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [15, 36], -650, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][1], `Sugar lumps mature <b>${7*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [16, 30], -450, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][2], `Sugar lumps mature <b>${7*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[7][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [16, 36], -350, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][1], `Sugar lumps mature <b>${8*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [17, 30], -150, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][2], `Sugar lumps mature <b>${8*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[8][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [17, 36], -50, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][1], `Sugar lumps mature <b>${9*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [5, 30], 150, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][2], `Sugar lumps mature <b>${9*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[9][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [5, 36], 250, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][1], `Sugar lumps mature <b>${10*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [6, 30], 450, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][2], `Sugar lumps mature <b>${10*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[10][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [6, 36], 550, -2100, [sugarLumpSpecial[2]]);

        //Sugar Lumps TIER 3
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[3], `You are an advanced sugar lump farmer. The minimum time to grow a sugar lump is reduced by <b>${minTimeReduce/minute} minutes</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [22, 12], -100, -2300, [buildingTiers[6][1], buildingTiers[6][2], buildingTiers[7][1], buildingTiers[7][2], buildingTiers[8][1], buildingTiers[8][2], buildingTiers[9][1], buildingTiers[9][2], buildingTiers[10][1], buildingTiers[10][2]]);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][1], `Sugar lumps mature <b>${11*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [7, 30], -750, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][2], `Sugar lumps mature <b>${11*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[11][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [7, 36], -650, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][1], `Sugar lumps mature <b>${12*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [8, 30], -450, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][2], `Sugar lumps mature <b>${12*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[12][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [8, 36], -350, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][1], `Sugar lumps mature <b>${13*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [13, 30], -150, -2500, [sugarLumpSpecial[3]]);
        
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[4], `You are an expert sugar lump farmer. The minimum time to grow a sugar lump is reduced by <b>${minTimeReduce/minute} minutes</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [22, 11], -300, -2700, [buildingTiers[11][1], buildingTiers[11][2], buildingTiers[12][1], buildingTiers[12][2], buildingTiers[13][1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][2], `Sugar lumps mature <b>${13*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[13][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [13, 36], -50, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][1], `Sugar lumps mature <b>${14*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [14, 30], 150, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][2], `Sugar lumps mature <b>${14*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[14][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [14, 36], 250, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][1], `Sugar lumps mature <b>${15*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [19, 30], 450, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][2], `Sugar lumps mature <b>${15*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[15][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [19, 36], 550, -2500, [sugarLumpSpecial[3]]);

        //Sugar Lumps TIER 4
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[5], `Your sugar lump mastery now carries over to offline progress.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [16, 5], 100, -2700, [buildingTiers[13][2], buildingTiers[14][1], buildingTiers[14][2], buildingTiers[15][1], buildingTiers[15][2]]);
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[6], `Unlocks the <b>golden summoner</b>. You can offer sugar lumps to the golden summoner to spawn golden cookies.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [2, 7], -100, -2700, [sugarLumpSpecial[4], sugarLumpSpecial[5]]);

        CCSE.NewHeavenlyUpgrade(buildingTiers[16][1], `Sugar lumps mature <b>${16*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [20, 30], -750, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][2], `Sugar lumps mature <b>${16*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[16][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [20, 36], -650, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][1], `Sugar lumps mature <b>${17*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [32, 30], -450, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][2], `Sugar lumps mature <b>${17*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[17][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [32, 36], -350, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][1], `Sugar lumps mature <b>${18*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [33, 30], -150, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][2], `Sugar lumps mature <b>${18*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[18][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [33, 36], -50, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][1], `Sugar lumps mature <b>${19*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [34, 30], 150, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][2], `Sugar lumps mature <b>${19*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[19][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [34, 36], 250, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][1], `Sugar lumps mature <b>${20*staticBasereduce/minute} minutes</b> sooner.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [35, 30], 450, -2900, [sugarLumpSpecial[6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][2], `Sugar lumps mature <b>${20*scalingBaseReduce/second} seconds</b> sooner per ${buildingTiers[20][0]}.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [35, 36], 550, -2900, [sugarLumpSpecial[6]]);

        //Sugar Lumps TIER 5
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[7], `Your minimum time to mature lumps is reduced by <b>${second/second} second</b> for every upgrade level of your buildings, down to a minimum of one second.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** lumpUpgrade++), [29, 26], -100, -3300, [buildingTiers[16][1], buildingTiers[16][2], buildingTiers[17][1], buildingTiers[17][2], buildingTiers[18][1], buildingTiers[18][2], buildingTiers[19][1], buildingTiers[19][2], buildingTiers[20][1], buildingTiers[20][2]]);


        //Other necessary upgrades
        goldenSummoner = CCSE.NewUpgrade('Golden summoner', 'Summons an amount of golden cookies equal to your stored sugar lumps', 0, [2, 7]);
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
        let allLuckies = CCSE.NewHeavenlyUpgrade(utilitySpecial[1], `Redefines what 'luck' actaually means.<br>Unlocks any missing instances of: 'Lucky digit', 'Lucky number' and 'Lucky payout' for their respective costs.<br>Unlocks the 'New Game Plus' switch.<br><u>Prohibits buff durations from stacking!</u><q>It feels like this forces specific luck based events...</q>`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [9, 9], 2000, -1000, ['Legacy'], function () {
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
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [10, 14], 1750, -1000, [utilitySpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [10, 14], 1500, -1050, [buildingTiers[1][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [10, 14], 1350, -1150, [buildingTiers[2][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [10, 14], 1250, -1300, [buildingTiers[3][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [10, 14], 1200, -1500, [buildingTiers[4][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [22, 6], 1200, -1700, [buildingTiers[5][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [22, 6], 1200, -1900, [buildingTiers[6][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [22, 6], 1200, -2100, [buildingTiers[7][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [22, 6], 1200, -2300, [buildingTiers[8][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [22, 6], 1200, -2500, [buildingTiers[9][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [23, 6], 1300, -2600, [buildingTiers[10][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [23, 6], 1500, -2600, [buildingTiers[11][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [23, 6], 1600, -2500, [buildingTiers[12][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [23, 6], 1600, -2300, [buildingTiers[13][5]]);
        
        CCSE.NewHeavenlyUpgrade(utilitySpecial[2], `Random drops are <b>50% more common</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [15, 6], 1400, -2300, [buildingTiers[9][5], buildingTiers[14][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [23, 6], 1600, -2100, [buildingTiers[14][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [21, 33], 1600, -1900, [buildingTiers[15][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [21, 33], 1600, -1700, [buildingTiers[16][5]]);
        
        CCSE.NewHeavenlyUpgrade(utilitySpecial[3], `Your wizards are no longer lazy. They always work at the maximum efficiency, independant of your current magic value.<q>I was too lazy to adjust the tooltip in the Grimoire</q>`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [17, 5], 1400, -1700, [buildingTiers[6][5], buildingTiers[17][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [21, 33], 1600, -1550, [buildingTiers[17][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [21, 33], 1700, -1450, [buildingTiers[18][5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][5], `Golden cookies appear <b>${goldenSpawnpercent}%</b> more often.<br>Golden cookie effects last <b>${buffDuration}%</b> longer.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [21, 33], 1850, -1400, [buildingTiers[19][5]]);
        
   
        //UTILITY TIER 3
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [27, 6], 2250, -1000, [utilitySpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [27, 6], 2500, -1050, [buildingTiers[1][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [27, 6], 2650, -1150, [buildingTiers[2][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [27, 6], 2750, -1300, [buildingTiers[3][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [27, 6], 2800, -1500, [buildingTiers[4][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [19, 14], 2800, -1700, [buildingTiers[5][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [19, 14], 2800, -1900, [buildingTiers[6][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [19, 14], 2800, -2100, [buildingTiers[7][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [19, 14], 2800, -2300, [buildingTiers[8][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [19, 14], 2800, -2500, [buildingTiers[9][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [20, 10], 2700, -2600, [buildingTiers[10][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [20, 10], 2500, -2600, [buildingTiers[11][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [20, 10], 2400, -2500, [buildingTiers[12][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [20, 10], 2400, -2300, [buildingTiers[13][6]]);
        
        CCSE.NewHeavenlyUpgrade(utilitySpecial[4], `You have a <b>1 in 777</b> chance to gain a sugar lump each second.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [29, 27], 2600, -2300, [buildingTiers[9][6], buildingTiers[14][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [20, 10], 2400, -2100, [buildingTiers[14][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [26, 11], 2400, -1900, [buildingTiers[15][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [26, 11], 2400, -1700, [buildingTiers[16][6]]);
        
        CCSE.NewHeavenlyUpgrade(utilitySpecial[5], `Wrinklers are <b>four times as likely</b> to appear.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [24, 12], 2600, -1700, [buildingTiers[6][6], buildingTiers[17][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [26, 11], 2400, -1550, [buildingTiers[17][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [26, 11], 2300, -1450, [buildingTiers[18][6]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][6], `Buffs are <b>${buffPower}%</b> stronger.<br>This does include debuffs!`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [26, 11], 2150, -1400, [buildingTiers[19][6]]);


        //UTILITY TIER 4
        CCSE.NewHeavenlyUpgrade(utilitySpecial[6], `You seem to always get the best deals! Buildings are <b>99% cheaper</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [25, 11], 2000, -1400, [buildingTiers[20][5], buildingTiers[20][6]]);
        CCSE.NewHeavenlyUpgrade(utilitySpecial[7], `Your clicks have a <b>1% chance</b> to be boosted by a <b>factor of 1000</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** utilityUpgrade++), [12, 14], 2000, -1200, [utilitySpecial[1], utilitySpecial[6]]);

        //Other neccessary upgrades
        Game.customWrinklerSpawnChance.push(function () {
            let spawnRate = 1;
            if (Game.Has(utilitySpecial[5])) spawnRate *= 4;
            return spawnRate;
        });

        Game.customModifyBuildingPrice.push(function () {
            let price = 1;
            if (Game.Has(utilitySpecial[6])) price *= 0.01;
            return price;
        });

        //Other necessary upgrades
        newGamePlus = CCSE.NewUpgrade('NewGamePlus', 'Again!', 1, [24, 15]);
        newGamePlus.descFunc = function () { 
            let str = '';
            let amount = 1;
            Object.values(NGPAchievements).forEach((e) => {
                if (Game.HasAchiev(e)) {
                    str += CCSE.MenuHelper.TinyIcon(Game.Achievements[e].icon);
                    amount++;
                }
            });
            let lastDigit = amount % 10;
            let lastTwoDigits = amount % 100;
            if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
                amount = amount.toString() + "th";
            } else {
                switch (lastDigit) {
                    case 1:
                        amount = amount.toString() + "st";
                        break;
                    case 2:
                        amount = amount.toString() + "nd";
                        break;
                    case 3:
                        amount =  amount.toString() + "rd";
                        break;
                    default:
                        amount =  amount.toString() + "th";
                }
            }
            return ('<div style="text-align:center;">' +
            str + '<br>' +
            'You are on your <b>' + amount + ' journey</b> to uncover the truth about cookies.<br>' +
            'You can start another journey once you\'ve purchased all heavenly upgrades.<br>'+
            '<div class="line"></div>'+
            'All <b>heavenly upgrades</b> will be sacrificed.<br>All your <b>prestige</b> will be sacrificed.<br>All <b>cookie related stats</b> will be reset.' +
            '<div class="line"></div>' + 
            'For each new journey started, you will gain a permanent <b>cookie production multiplier</b>.</br><u>All heavenly upgrades will become more expensive.</u>' 
        )}
        newGamePlus.pool = 'toggle';
        newGamePlus.canBuyFunc = function () {
            if (Game.cookies < 1) return false;
            let totalPrestigeUpgrades = 0;
            let currentPrestigeUpgrades = 0; 
            for (let i in Game.Upgrades) {
                if (Game.Upgrades[i].pool == 'prestige') {
                    totalPrestigeUpgrades++;
                    if (Game.Has(Game.Upgrades[i].name)) currentPrestigeUpgrades++;
                }
            }
            return totalPrestigeUpgrades === currentPrestigeUpgrades;
        };
        newGamePlus.clickFunction = function (sure) {
            if (!this.canBuyFunc()) return;
            if (!sure) {
                Game.Prompt(
                  '<id NewGamePlus><h3>' + "Start your next journey?" + '</h3>' +
                  '<div class="block">' +
                  tinyIcon([19, 7]) +
                  '<div class="line"></div>' +
                  "Do you REALLY want to start a new Game?<div class=\"line\"></div>You will lose ALL your heavenly upgrades and prestige. Your cookie production stats will be reset.<div class=\"line\"></div>You will gain a boost to your CpS but all heavenly upgrades will be more expensive!" +
                  '<div class="line"></div>' +
                    "You will keep your achievements, building levels and sugar lumps." +
                  '<div class="optionBox">' +
                  '<a class="option smallFancyButton" style="margin:16px;padding:8px 16px;animation:rainbowCycle 5s infinite ease-in-out,pucker 0.2s ease-out;box-shadow:0px 0px 0px 1px #000,0px 0px 1px 2px currentcolor;background:linear-gradient(to bottom,transparent 0%,currentColor 500%);width:auto;text-align:center;" ' + Game.clickStr + '="PlaySound(\'snd/tick.mp3\');Game.ClosePrompt();Game.Upgrades.NewGamePlus.clickFunction(1);" id="promptOption0">' + "Again!" + '</a>' +
                  '</div>' +
                  '</div>',
                  [
                    ["Yes", 'Game.ClosePrompt();Game.Upgrades.NewGamePlus.clickFunction(1);', 'float:left;display:none;'],
                    ["Cancel", 0, 'float:right']
                  ]
                );
            } else {
                if (Game.Has('"egg"')) Game.Lock('"egg"');
                Object.values(buildingTiers).forEach((e) => Game.Objects[e[0]].amount = 0);
                Game.cookies = 0;
                Game.cookiesEarned = 0;
                Game.cookiesReset = 0;
                Game.heavenlyChips = 0
                Game.prestige = 0;
                Game.permanentUpgrades = [-1, -1, -1, -1, -1];
                for (let i in Game.Upgrades) {
                    if (Game.Upgrades[i].pool == 'prestige' && Game.Has(Game.Upgrades[i].name)) {
                        Game.Lock(Game.Upgrades[i].name);
                    }
                }
                Game.Ascend(true);
                if (NGPAchievements[(calculateNGPCycle() + 1).toString()]) {
                    Game.Win(NGPAchievements[(calculateNGPCycle() + 1).toString()]);
                    for (let i in Game.Upgrades) {
                        if (Game.Upgrades[i].pool == 'prestige') {
                            Game.Upgrades[i].basePrice = Math.ceil(Game.Upgrades[i].basePrice * heavenlyUpgradePow);
                        }
                    }
                }
            }
        };

        //Adjust Buffpow
        for (let i = 0; i < originalBuffFunctionsStrings.length; i++) {
            let functionString = originalBuffFunctionsStrings[i];
            let split = functionString.split('\t\t{');
            let keys = Object.keys(buildingTiers);
            for (let i = 0; i < keys.length; i++) {
                split.splice(1, 0, '\n\t\tif (Game.Has("' + buildingTiers[keys[i]][6] + '")) pow *= ' + (1 + toPercent(buffPower)).toString());
            }
            split[0] += '\t\t{'
            let modifiedFunctionString = split.join('');
            buffedBuffFunctionsStrings.push(modifiedFunctionString);
            let modifiedFunction = eval('(' + modifiedFunctionString + ')');
            Game.buffTypes[i].func = modifiedFunction;
        }

        //Utility calculations
        Game.customShimmerTypesAll.getTimeMod.push(function () {
            let multiplier = 1;
            Object.values(buildingTiers).forEach((e) => Game.Has(e[5]) ? multiplier *= (1 - toPercent(goldenSpawnpercent)) : multiplier);
            return multiplier;
        });
        Game.customShimmerTypes['golden'].customEffectDurMod.push(function () {
            let multiplier = 1;
            Object.values(buildingTiers).forEach((e) => Game.Has(e[5]) ? multiplier *= (1 + toPercent(buffDuration)) : multiplier);
            return multiplier;
        });
        Game.customDropRateMult.push(function () {
            let dropRate = 1;
            if (Game.Has(utilitySpecial[2])) dropRate *= 1 + toPercent(50);
            return dropRate;
        })


        //Readjust Heavenly Cookies on every reset
        Game.customAscend.push(function realHeavenlyChips() {
            if (Game.ascensionMode === 1) return;
            let sumOfHeavenlyChips = 0;
            for (let i in Game.Upgrades) {
                if (Game.Upgrades[i].pool == 'prestige' && Game.Has(Game.Upgrades[i].name)) {
                    sumOfHeavenlyChips += Game.Upgrades[i].basePrice;
                }
            }
            Game.heavenlyChips = Game.prestige - sumOfHeavenlyChips;
        });
    }


    //Game Hooks
    Game.registerHook('logic', function () {
        if (Game.Has(utilitySpecial[3]) && Game.Objects['Wizard tower']?.minigame?.magic && Game.Objects['Wizard tower']?.minigame?.magicPS) Game.Objects['Wizard tower'].minigame.magic += 0.002 - Game.Objects['Wizard tower'].minigame.magicPS;
        if (Game.Has(sugarLumpSpecial[6])) Game.Unlock('Golden summoner');
        goldenSummoner.priceLumps = Game.lumps > 1 ? Game.lumps : 1;
        if (Game.Has(utilitySpecial[1])) Game.Unlock('NewGamePlus');
        if (Game.Has(utilitySpecial[4]) && Game.T%(Game.fps) === 0 && Math.random() < 1 / 777) Game.gainLumps(1);
        if (Game.T%(Game.fps) === 0 && forcedLuckTimer > 0 && Game.Has(utilitySpecial[1])) forcedLuckTimer--;
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
        if (Game.ascensionMode != 1) cpsMultiplier *= ((1 + toPercent(NGPCpsBuffPercent)) ** calculateNGPCycle());
        return cps * cpsMultiplier;
    });

    Game.registerHook('cookiesPerClick', function (cpc) {
        let cpcMultiplier = 1;
        for (let i = 1; i <= Object.keys(buildingTiers).length; i++) {
            if(buildingTiers[i][4] && Game.Has(buildingTiers[i][4])) cpcMultiplier *= 1 + toPercent(Game.Objects[buildingTiers[i][0]].level);
        }
        if (Game.Has(utilitySpecial[7]) && Math.random() < onePercent) cpcMultiplier *= 1_000;
        return cpc * cpcMultiplier;
    });

    Game.registerHook('check', function () {
        if (forcedLuckTimer === 0 && !Game.HasAchiev('Just plain lucky') && Game.Has(utilitySpecial[1])) Game.Win('Just plain lucky');
        if (Game.Upgrades[sugarLumpSpecial[1]].basePrice === heavenlyUpgradeBase) {
            let ngpPriceIncrease = calculateNGPCycle() * NGPMhurPriceIncrease;
            for (let i in Game.Upgrades) {
                if (Game.Upgrades[i].pool == 'prestige') {
                    Game.Upgrades[i].basePrice = Math.ceil(Game.Upgrades[i].basePrice * (heavenlyUpgradePow ** ngpPriceIncrease));
                }
            }
        }
        /* 
        //lock all NG+ Achievements for testing purposes
        const keys = Object.keys(NGPAchievements).sort((a, b) => a - b);
        for (let i = 0; i < keys.length; i++) {
            Game.Achievements[NGPAchievements[keys[i]]].won = 0
        }
        */
        if (Game.Has(utilitySpecial[1])) {
            //Set maxduration for every buff
            for (let i = 0; i < buffedBuffFunctionsStrings.length; i++) {
                let functionString = buffedBuffFunctionsStrings[i]
                let modifiedFunctionString = functionString.replace('add:true', 'max:true');
                let modifiedFunction = eval('(' + modifiedFunctionString + ')');
                Game.buffTypes[i].func = modifiedFunction;
            }
        } else {
            for (let i = 0; i < buffedBuffFunctionsStrings.length; i++) {
                let functionString = buffedBuffFunctionsStrings[i];
                let unmodifiedFunction = eval('(' + functionString + ')');
                Game.buffTypes[i].func = unmodifiedFunction;
            }
       }
    });

    MoreHeavenlyUpgradesRemastered.save = function() {
		let saveFile = {
			Upgrades: {},
			Achievements: {},
            ForcedLuck: forcedLuckTimer.toString()
		}
		Object.keys(buildingTiers).forEach((tier) => {
			let prestigeUpgradeList = buildingTiers[tier];
			for(let i = 1; i < prestigeUpgradeList.length; i++) {
				let name = buildingTiers[tier][i];
				saveFile.Upgrades[name] = CCSE.config.Upgrades[name];
			}
		});
		Object.keys(sugarLumpSpecial).forEach((tier) => {
			let upgrade = sugarLumpSpecial[tier];
			saveFile.Upgrades[upgrade] = CCSE.config.Upgrades[upgrade];
		});
		Object.keys(cpsSpecial).forEach((tier) => {
			let upgrade = cpsSpecial[tier];
			saveFile.Upgrades[upgrade] = CCSE.config.Upgrades[upgrade];
		});
		Object.keys(utilitySpecial).forEach((tier) => {
			let upgrade = utilitySpecial[tier];
			saveFile.Upgrades[upgrade] = CCSE.config.Upgrades[upgrade];
		});
		Object.keys(NGPAchievements).forEach((tier) => {
			let achievement = NGPAchievements[tier];
			saveFile.Achievements[achievement] = CCSE.config.Achievements[achievement];
		});
		return JSON.stringify(saveFile);
	}

	MoreHeavenlyUpgradesRemastered.load = function(json) {
        let saveFile = JSON.parse(json);
        Object.keys(saveFile.Upgrades).forEach((e) => {
            CCSE.config.Upgrades[e] = saveFile.Upgrades[e];
        });
        Object.keys(saveFile.Achievements).forEach((e) => {
            CCSE.config.Achievements[e] = saveFile.Achievements[e];
        });
        forcedLuckTimer = parseInt(saveFile.ForcedLuck);
	}

    MoreHeavenlyUpgradesRemastered.resetUpgrades = function() {
        for (let i in Game.Upgrades) {
            if (Game.Upgrades[i].pool == 'prestige' && Game.Has(Game.Upgrades[i].name)) {
                Game.Lock(Game.Upgrades[i].name);
            }
        }
    }  

    Game.customOptionsMenu.push(() => CCSE.AppendCollapsibleOptionsMenu(MoreHeavenlyUpgradesRemastered.name,
        '<div class="listing">' +
        CCSE.MenuHelper.ActionButton("MoreHeavenlyUpgradesRemastered.resetUpgrades();", "Locks all Heavenly Upgrades") +
        '<label>Consider this if you have negative Heavenly Chips when ascending.</label></div>'
    ));

    Game.customStatsMenu.push(() => {
        let div = document.createElement('div');
        let str = '<b>Waiting for Luck to kick in:</b> ' + forcedLuckTimer;
        div.className = 'listing';
        div.innerHTML = str;
        CCSE.AppendStatsGeneral(div);
    });

    if (CCSE.ConfirmGameVersion(MoreHeavenlyUpgradesRemastered.name, MoreHeavenlyUpgradesRemastered.version, MoreHeavenlyUpgradesRemastered.GameVersion)) Game.registerMod(MoreHeavenlyUpgradesRemastered.name, MoreHeavenlyUpgradesRemastered);
    Game.Notify('More Heavenly Upgrades Remastered loaded', 'Version 2.111', [19, 7], 6);

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


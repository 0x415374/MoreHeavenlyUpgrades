//new Game.Upgrade('Lucky payout',loc("<b>+%1%</b> prestige level effect on CpS.<br><b>+%2%</b> golden cookie effect duration.<br><b>+%3%</b> golden cookie lifespan.",[1,1,1])+'<q>This upgrade took an oath of complete seclusion from the rest of the world and only appears when your prestige level contains four 7\'s.</q>',77777777,[24,15]);Game.last.pool='prestige';Game.last.parents=['Lucky number','Decisive fate'];Game.last.showIf=function(){return (Math.ceil(((Game.prestige+'').split('7').length-1))>=4);};

//Created by 0x415374
//Based on MoreHeavenlyUpgrades by RubyChan42

if (MoreHeavenlyUpgradesRemastered === undefined) var MoreHeavenlyUpgradesRemastered = {};
MoreHeavenlyUpgradesRemastered.name = 'More heavenly upgrades Remastered';
MoreHeavenlyUpgradesRemastered.version = '2.00';
MoreHeavenlyUpgradesRemastered.GameVersion = '2.052';

//debug
//Game.Notify('More Heavenly Upgrades Remastered loaded', '', [19, 7], 6);

MoreHeavenlyUpgradesRemastered.launch = function() {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const scalingBaseReduce = 250;
    const staticBasereduce = minute * 3;

    //Map that contains building tier as keys which maps to an enum of [name, {Sugar Lump}staticReduce, {Sugar Lump}scalingReduce, {CPS}baseCps]
    const buildingTiers = {
        '1': ['Cursor', 'Lump rubbers', 'Velvet gloves', 'Geras'],
        '2': ['Grandma', 'Lump caregiver', 'My lovely sugar lumps', 'Chaos'],
        '3': ['Farm', 'Sugar lump farm', 'Sugar Farming process', 'Faunus'],
        '4': ['Mine', 'Sugar water', 'Dirt extraction process', 'Khonsu'],
        '5': ['Factory', 'Specialized greenhouse', 'Overclocked potion making process', 'Sobek'],
        '6': ['Bank', 'Sweet and tasty fertilizer', 'Lump banking process', 'Asbest'],
        '7': ['Temple', 'Lofi hip-hop beats to chill and grow to', 'Praying process', 'Teer'],
        '8': ['Wizard tower', 'A nice fairy', 'Sugar magical growing process', 'Kegel'],
        '9': ['Shipment', 'Lump-growing calculator', 'Intergalactic Extrauniversal investigation process', 'Porno'],
        '10': ['Alchemy lab', 'Lump-growing potion', 'Overclocked potion crafting process', 'Penis'],
        '11': ['Portal', 'Praying to the elder ones', 'Other-worldly lump-growing process', 'Sex'],
        '12': ['Time machine', 'Benevolent elder Lump god', 'Time-altering process', null],
        '13': ['Antimatter condenser', 'Elder Lump demon', 'Multiversal antimatterial process', null],
        '14': ['Prism', 'True Elder Lump demon', 'Ilumination-based growing process', null],
        '15': ['Chancemaker', 'Even Elder Lump demon', 'Sheer luck lump-growing process', null],
        '16': ['Fractal engine', 'THE Even truer and eldererer Lump demon', 'Extreme lump-growing with recursive lumping and lump recursiving process', null],
        '17': ['Javascript console', 'Mind opening', 'True evil process', null],
        '18': ['Idleverse', 'Santa-summoning spell', 'Idle lump-growing process', null],
        '19': ['Cortex baker', 'The ancient cookie dragon', 'Super Brainz', null],
        '20': ['You', 'A book', 'I', null]
    };

    const sugarLumpSpecial = {
        '1': 'Sugar lump farming 101',
        '2': 'Ancient Lump-growing scroll',
        '3': 'Infinite knowledge',
        '4': 'Auto-clicking process',
        '5': 'Laid back lumping',
        '6': 'Faster and lumpier clicking process'
    }

    const cpsSpecial = {
        '1': 'Flora',
        '2': 'Hades'
    }

    const toPointOnePercent = function (number) {
        number = Math.floor(number / 10);
        return number / 100;
    };

    const toPercent = function (number) {
        return number / 100;
    }

    const pointOnePercent = 0.001
    const onePercent = 0.01


    MoreHeavenlyUpgradesRemastered.init = function() {
        MoreHeavenlyUpgradesRemastered.isLoaded = 1;
        Game.Notify('More Heavenly Upgrades Remastered loaded', '', [19, 7], 6);


        //CPS block
        //CPS BASE
        CCSE.NewHeavenlyUpgrade(cpsSpecial[1], 'Increases you CPS by .1% for every Sugar Lump collected', 6.6E1, [22, 19], -1500, -450, ['Keepsakes']);

        //CPS TIER 1
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][3], `Increases the base CPS of ${buildingTiers[1][0]} by 5%`, 6.6E2, [22, 19], -1750, -500, [cpsSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][3], `Increases the base CPS of ${buildingTiers[2][0]} by 5%`, 6.6E3, [22, 19], -1600, -650, [cpsSpecial[1]]);

        CCSE.NewHeavenlyUpgrade(buildingTiers[3][3], `Increases the base CPS of ${buildingTiers[3][0]} by 5%`, 6.6E4, [22, 19], -1900, -550, [buildingTiers[1][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][3], `Increases the base CPS of ${buildingTiers[4][0]} by 5%`, 6.6E5, [22, 19], -1700, -800, [buildingTiers[2][3]]);

        CCSE.NewHeavenlyUpgrade(buildingTiers[5][3], `Increases the base CPS of ${buildingTiers[5][0]} by 5%`, 6.6E6, [22, 19], -2100, -650, [buildingTiers[3][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][3], `Increases the base CPS of ${buildingTiers[6][0]} by 5%`, 6.6E7, [22, 19], -1900, -900, [buildingTiers[4][3]]);

        CCSE.NewHeavenlyUpgrade(buildingTiers[7][3], `Increases the base CPS of ${buildingTiers[7][0]} by 5%`, 6.6E8, [22, 19], -2200, -750, [buildingTiers[5][3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][3], `Increases the base CPS of ${buildingTiers[8][0]} by 5%`, 6.6E9, [22, 19], -2100, -950, [buildingTiers[6][3]]);

        CCSE.NewHeavenlyUpgrade(cpsSpecial[2], `Doubles CPS as long as the total number of buildings is divisible by 10`, 6.6E10, [22, 19], -2300, -950, [buildingTiers[7][3], buildingTiers[8][3]]);
        //TODO: change names and add special to end of the leaf

        //CCSE.NewHeavenlyUpgrade(buildingTiers[10][3], `Increases the base CPS of ${buildingTiers[10][0]} by 5%`, 6.6E5, [22, 19], -1700, -700, [buildingTiers[2][3]]);
        //CCSE.NewHeavenlyUpgrade(buildingTiers[11][3], `Increases the base CPS of ${buildingTiers[11][0]} by 5%`, 6.6E4, [22, 19], -1800, -500, [buildingTiers[1][3]]);
        //CCSE.NewHeavenlyUpgrade(buildingTiers[12][3], `Increases the base CPS of ${buildingTiers[12][0]} by 5%`, 6.6E5, [22, 19], -1700, -700, [buildingTiers[2][3]]);       




        //
        //Atheism I increase cps by x2 if no ruby god
        //Atheism II increases cps by x4 if no jade slot
        //Atheism III increases cps by x8 if no diamond slot


        //Building Cps calculation
        for (let i = 1; i <= Object.keys(buildingTiers).length; i++) {
            if(buildingTiers[[i]][3] && Game.Has(buildingTiers[[i]][3])) {
                CCSE.Game.customBuildings[obj.name].cpsMult.push(function () {
                    return 1.05;
                });
            }
        }







/*


        CCSE.NewHeavenlyUpgrade('Divine round numbers', 'Doubles CpS as long as the total number of buildings is divisible by 10', 999999999999999, [22, 19], -800, 675, ['Divine buildings']);



        CCSE.NewHeavenlyUpgrade('Divine savings', 'Has absolutely no effect right now as it was way too overpowered', 7777777777, [20, 7], -631, 218, ['Lucky digit', 'Lucky number', 'Lucky payout']);
        CCSE.NewHeavenlyUpgrade('Divine gains', 'Increases CpS by .1% for each golden cookie clicked', 7777777777777, [28, 12], -595, 576, ['Divine savings', 'Divine bakeries']);
        CCSE.NewHeavenlyUpgrade('Divine buildings', 'Increases CpS by .1% for each building owned', 88888888888888, [33, 12], -700, 675, ['Divine gains']);
        CCSE.NewHeavenlyUpgrade('Divine unascended gains', 'Has absolutely no effect right now as it was way too overpowered', 999999999999999, [25, 7], -600, 775, ['Divine buildings']);

        CCSE.NewHeavenlyUpgrade('Call on the luck', 'Unlocks the golden cookie summoner', 2000000000000000, [23, 6], -700, 775, ['Divine unascended gains', 'Divine round numbers']);

        let goldenSummoner = new Game.Upgrade('Golden summoner', 'Summons an amount of golden cookies equal to your stored sugar lumps', 500000, [23, 6]);
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

        Game.registerHook('logic', function() {
            if (Game.Has('Call on the luck')) Game.Unlock('Golden summoner');
            goldenSummoner.priceLumps = Game.lumps > 0 ? Game.lumps : 1;
        });
/*
        //Starter Kits
        var cursorBasePrice = 15
        var everythingBasePrice = cursorBasePrice;
        var grandmaBasePrice = 100;
        everythingBasePrice += grandmaBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter kitchen 2: Electric boogaloo', 'You start with 5 more grandmas <q>Just round it to 10</q>', grandmaBasePrice * 10, [1, 0], -475, -475, ['Starter kitchen']);

        var farmsBasePrice = 1100;
        everythingBasePrice += farmsBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter gardening kit', 'You start with 10 farms<q>A little help from my ferns</q>', farmsBasePrice * 10, [2, 0], -575, -450, ['Starter kitchen 2: Electric boogaloo']);
        Game.last.showIf = function() { return (Game.Achievements["Reap what you sow"].won == 1); };

        var minesBasePrice = 12000;
        everythingBasePrice += minesBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter picks and shovels', 'You start with 10 mines<q>You now start a bit deeper</q>', minesBasePrice * 10, [3, 0], -675, -460, ['Starter gardening kit']);
        Game.last.showIf = function() { return (Game.Achievements["Excavation site"].won == 1); };

        var factoryBasePrice = 128700;
        everythingBasePrice += factoryBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter toolbox', 'You start with 10 factories<q>You now start <br><br>The engies</q>', factoryBasePrice * 10, [4, 0], -775, -450, ['Starter picks and shovels']);
        Game.last.showIf = function() { return (Game.Achievements["Industrial revolution"].won == 1); };

        var bankBasePrice = 1400000;
        everythingBasePrice += bankBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter stonks', 'You start with 10 factories<q>A head start in the market</q>', bankBasePrice * 10, [15, 0], -875, -425, ['Starter toolbox']);
        Game.last.showIf = function() { return (Game.Achievements["Fit the bill"].won == 1); };

        var templeBasePrice = 20000000;
        everythingBasePrice += templeBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter prayers', 'You start with 10 temples<q>godtouched</q>', templeBasePrice * 10, [16, 0], -975, -415, ['Starter stonks']);
        Game.last.showIf = function() { return (Game.Achievements["Shady sect"].won == 1); };

        //Wizard tower
        var wizardBasePrice = 330000000;
        everythingBasePrice += wizardBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter pointy hat', 'You start with 10 wizard towers<q>A little bit of magic</q>', wizardBasePrice * 10, [17, 0], -1075, -430, ['Starter prayers']);
        Game.last.showIf = function() { return (Game.Achievements["The sorcerer's apprentice"].won == 1); };

        var shipmentBasePrice = 5100000000;
        everythingBasePrice += shipmentBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter hyperdrive', 'You start with 10 shipments<q>To the stars!</q>', shipmentBasePrice * 10, [5, 0], -1175, -440, ['Starter pointy hat']);
        Game.last.showIf = function() { return (Game.Achievements["Galactic highway"].won == 1); };

        var alchemyBasePrice = 75000000000;
        everythingBasePrice += alchemyBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter philosopher\'s stone', 'You start with 10 Alchemy labs<q>Get your lab coats boys!</q>', alchemyBasePrice * 10, [6, 0], -1275, -455, ['Starter hyperdrive']);
        Game.last.showIf = function() { return (Game.Achievements["Transmogrification"].won == 1); };

        var portalBasePrice = 1000000000000;
        everythingBasePrice += portalBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter cookieverse map', 'You start with 10 Portals<q>See you on the other side cookie cowboy</q>', portalBasePrice * 10, [7, 0], -1375, -445, ['Starter philosopher\'s stone']);
        Game.last.showIf = function() { return (Game.Achievements["Now you're thinking"].won == 1); };

        var timeMachineBasePrice = 14000000000000;
        everythingBasePrice += timeMachineBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter flux capacitor', 'You start with 10 time machines<q>Just wait untill this baby hits 140kmh</q>', timeMachineBasePrice * 10, [8, 0], -1475, -435, ['Starter cookieverse map']);
        Game.last.showIf = function() { return (Game.Achievements["Alternate timeline"].won == 1); };

        var antimatteBasePrice = 170000000000000;
        everythingBasePrice += antimatteBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter molecules', 'You start with 10 antimatter condensers<q>This is what matters the most</q>', antimatteBasePrice * 10, [13, 0], -1575, -445, ['Starter flux capacitor']);
        Game.last.showIf = function() { return (Game.Achievements["Quirky quarks"].won == 1); };

        var prismBasePrice = 2100000000000000;
        everythingBasePrice += prismBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter photons', 'You start with 10 prisms<q>Let\'s light this place up</q>', prismBasePrice * 10, [14, 0], -1675, -440, ['Starter molecules']);
        Game.last.showIf = function() { return (Game.Achievements["Dazzling glimmer"].won == 1); };

        var chancemakerBasePrice = 26000000000000000;
        everythingBasePrice += chancemakerBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter dice set', 'You start with 10 chancemakers<q>you just got real lucky</q>', chancemakerBasePrice * 10, [19, 0], -1775, -420, ['Starter photons']);
        Game.last.showIf = function() { return (Game.Achievements["What are the odds"].won == 1); };

        var fractalBasePrice = 310000000000000000;
        everythingBasePrice += chancemakerBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter kit for starter kits', 'You start with 10 fractal engines<q>There are just infinite kits inside this one</q>', fractalBasePrice * 10, [20, 0], -1875, -410, ['Starter dice set']);
        Game.last.showIf = function() { return (Game.Achievements["Threw you for a loop"].won == 1); };

        var consoleBasePrice = 71000000000000000000;
        everythingBasePrice += consoleBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter {hello world}', 'You start with 10 javascript consoles<q>hack the planet</q>', consoleBasePrice * 10, [32, 0], -1975, -405, ['Starter kit for starter kits']);
        Game.last.showIf = function() { return (Game.Achievements["Variable success"].won == 1); };

        var idlevereBasePrice = 1.2e+22;
        everythingBasePrice += idlevereBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter multiverse', 'You start with 10 idleverses<q>Your little pocket of the multiverse to play around in</q>', idlevereBasePrice * 10, [33, 0], -2075, -415, ['Starter {hello world}']);
        Game.last.showIf = function() { return (Game.Achievements["Well-versed"].won == 1); };

        CCSE.NewHeavenlyUpgrade('Starter 100 pack', 'You start with 100 of everything<q>You\'ve gotten here once before</q>', everythingBasePrice * 90, [6, 6], -2175, -425, ['Starter multiverse']);
        Game.last.showIf = function() { return (Game.Achievements["Centennial"].won == 1); };

        let heavenlyPacksNumbers = 100;
        let heavenlyPacksStarting_X = -2175;
        let heavenlyPacksAchievs = ['Centennial and a half', 'Bicentennial', 'Bicentennial and a half', 'Tricentennial', 'Tricentennial and a half', 'Quadricentennial', 'Quadricentennial and a half', 'Quincentennial', 'Quincentennial and a half', 'Sexcentennial'];
        let heavenlyPacks_Last = 'Starter 100 pack';

        for (let i = 0; i < 10; i++) {
            heavenlyPacksNumbers += 50;
            heavenlyPacksStarting_X -= 100;
            let achievName = heavenlyPacksAchievs[i];
            let icon = Game.Achievements[achievName].icon;
            let name = 'Starter ' + heavenlyPacksNumbers + ' pack';
            let desc = 'You start with ' + heavenlyPacksNumbers + ' of everything<q>You are only buying 50 of each now</q>';
            let price = (everythingBasePrice * 50) * (i + 1);

            CCSE.NewHeavenlyUpgrade(name, desc, price, icon, heavenlyPacksStarting_X, -410, [heavenlyPacks_Last]);
            Game.last.showIf = function() { return (Game.Achievements[achievName].won == 1); };

            heavenlyPacks_Last = name;
        }
*/

        //Sugar Lump growing process
        //Sugar Lumps TIER 1
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[1], `This is the start of your ascension to become a true sugar lump farmer. The minimum time to grow a sugar lump is now reduced to 1 hour. Also ripen and fall time are dependant on maturing time`, 2.5E1, [15, 9], -100, -1500, ['Sucralosia Inutilis']);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][1], `Sugar lumps mature <b>${1*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E2, [0, 0], -750, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][2], `Sugar lumps mature <b>${1*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[1][0]}`, 2.5E2, [0, 1], -650, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][1], `Sugar lumps mature <b>${2*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E3, [1, 0], -450, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][2], `Sugar lumps mature <b>${2*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[2][0]}`, 2.5E3, [1, 1], -350, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][1], `Sugar lumps mature <b>${3*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E4, [2, 0], -150, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][2], `Sugar lumps mature <b>${3*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[3][0]}`, 2.5E4, [2, 1], -50, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][1], `Sugar lumps mature <b>${4*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E5, [3, 0], 150, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][2], `Sugar lumps mature <b>${4*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[4][0]}`, 2.5E5, [3, 1], 250, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][1], `Sugar lumps mature <b>${5*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E6, [4, 0], 450, -1700, [sugarLumpSpecial[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][2], `Sugar lumps mature <b>${5*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[5][0]}`, 2.5E6, [4, 1], 550, -1700, [sugarLumpSpecial[1]]);

        //Sugar Lumps TIER 2
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[2], `You are an adept sugar lump farmer. The minimum time to grow a sugar lump is reduced by 15 minutes`, 2.5E7, [15, 9], -100, -1900, [buildingTiers[1][1], buildingTiers[1][2], buildingTiers[2][1], buildingTiers[2][2], buildingTiers[3][1], buildingTiers[3][2], buildingTiers[4][1], buildingTiers[4][2], buildingTiers[5][1], buildingTiers[5][2]]);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][1], `Sugar lumps mature <b>${11*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E8, [6, 0], -750, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][2], `Sugar lumps mature <b>${11*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[6][0]}`, 2.5E8, [6, 1], -650, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][1], `Sugar lumps mature <b>${12*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E9, [7, 0], -450, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][2], `Sugar lumps mature <b>${12*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[7][0]}`, 2.5E9, [7, 1], -350, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][1], `Sugar lumps mature <b>${13*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E10, [8, 0], -150, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][2], `Sugar lumps mature <b>${13*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[8][0]}`, 2.5E10, [8, 1], -50, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][1], `Sugar lumps mature <b>${14*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E11, [9, 0], 150, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][2], `Sugar lumps mature <b>${14*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[9][0]}`, 2.5E11, [9, 1], 250, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][1], `Sugar lumps mature <b>${15*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E12, [10, 0], 450, -2100, [sugarLumpSpecial[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][2], `Sugar lumps mature <b>${15*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[10][0]}`, 2.5E12, [10, 1], 550, -2100, [sugarLumpSpecial[2]]);

        //Sugar Lumps TIER 3
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[3], `You are an advanced sugar lump farmer. The minimum time to grow a sugar lump is reduced by 15 minutes`, 2.5E13, [15, 9], -100, -2300, [buildingTiers[6][1], buildingTiers[6][2], buildingTiers[7][1], buildingTiers[7][2], buildingTiers[8][1], buildingTiers[8][2], buildingTiers[9][1], buildingTiers[9][2], buildingTiers[10][1], buildingTiers[10][2]]);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][1], `Sugar lumps mature <b>${11*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E14, [11, 0], -750, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][2], `Sugar lumps mature <b>${11*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[11][0]}`, 2.5E14, [11, 1], -650, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][1], `Sugar lumps mature <b>${12*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E15, [12, 0], -450, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][2], `Sugar lumps mature <b>${12*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[12][0]}`, 2.5E15, [12, 1], -350, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][1], `Sugar lumps mature <b>${13*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E16, [13, 0], -150, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][2], `Sugar lumps mature <b>${13*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[13][0]}`, 2.5E16, [13, 1], -50, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][1], `Sugar lumps mature <b>${14*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E17, [14, 0], 150, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][2], `Sugar lumps mature <b>${14*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[14][0]}`, 2.5E17, [14, 1], 250, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][1], `Sugar lumps mature <b>${15*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E18, [15, 0], 450, -2500, [sugarLumpSpecial[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][2], `Sugar lumps mature <b>${15*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[15][0]}`, 2.5E18, [15, 1], 550, -2500, [sugarLumpSpecial[3]]);

        //Sugar Lumps TIER 4
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[4], `You are an expert sugar lump farmer. The minimum time to grow a sugar lump is reduced by 15 minutes`, 2.5E19, [15, 9], -100, -2700, [buildingTiers[11][1], buildingTiers[11][2], buildingTiers[12][1], buildingTiers[12][2], buildingTiers[13][1], buildingTiers[13][2], buildingTiers[14][1], buildingTiers[14][2], buildingTiers[15][1], buildingTiers[15][2]]);
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[5], `Your sugar lump mastery now carries over to offline progress`, 2.5E20, [15, 9], -100, -2900, [sugarLumpSpecial[4]]);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][1], `Sugar lumps mature <b>${16*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E21, [16, 0], -750, -3100, [sugarLumpSpecial[5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][2], `Sugar lumps mature <b>${16*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[16][0]}`, 2.5E21, [11, 1], -650, -3100, [sugarLumpSpecial[5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][1], `Sugar lumps mature <b>${17*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E22, [17, 0], -450, -3100, [sugarLumpSpecial[5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][2], `Sugar lumps mature <b>${17*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[17][0]}`, 2.5E22, [12, 1], -350, -3100, [sugarLumpSpecial[5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][1], `Sugar lumps mature <b>${18*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E23, [13, 0], -150, -3100, [sugarLumpSpecial[5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][2], `Sugar lumps mature <b>${18*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[18][0]}`, 2.5E23, [13, 1], -50, -3100, [sugarLumpSpecial[5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][1], `Sugar lumps mature <b>${19*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E24, [14, 0], 150, -3100, [sugarLumpSpecial[5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][2], `Sugar lumps mature <b>${19*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[19][0]}`, 2.5E24, [14, 1], 250, -3100, [sugarLumpSpecial[5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][1], `Sugar lumps mature <b>${20*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E25, [15, 0], 450, -3100, [sugarLumpSpecial[5]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][2], `Sugar lumps mature <b>${20*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[20][0]}`, 2.5E25, [15, 1], 550, -3100, [sugarLumpSpecial[5]]);

        //Sugar Lumps TIER 5
        CCSE.NewHeavenlyUpgrade(sugarLumpSpecial[6], `Your minimum time to mature lumps is reduced by <b>${second/1000} second<b> for every upgrade level of your buildings, down to a cap of one second`, 2.5E26, [15, 9], -100, -3300, [buildingTiers[16][1], buildingTiers[16][2], buildingTiers[17][1], buildingTiers[17][2], buildingTiers[18][1], buildingTiers[18][2], buildingTiers[19][1], buildingTiers[19][2], buildingTiers[20][1], buildingTiers[20][2]]);


        //Sugar lump calculations
        Game.customComputeLumpTimes.push(function() {
            let minMatureTime = hour * 12;
            if (Game.Has(sugarLumpSpecial[1])) minMatureTime -= hour * 11
            if (Game.Has(sugarLumpSpecial[2])) minMatureTime -= minute * 15;
            if (Game.Has(sugarLumpSpecial[3])) minMatureTime -= minute * 15;
            if (Game.Has(sugarLumpSpecial[4])) minMatureTime -= minute * 15;
            if (Game.Has(sugarLumpSpecial[6])) minMatureTime -= (() => {
                let objKeys = Object.keys(Game.Objects);
                let sum = 0;
                objKeys.forEach((e) => sum += Game.Objects[e].level);
                return sum * second;
              })();
            minMatureTime = Math.max(minMatureTime, second);

            for (let i = 1; i <= Object.keys(buildingTiers).length; i++) {
                if(buildingTiers[[i]][1] && Game.Has(buildingTiers[[i]][1])) Game.lumpMatureAge -= staticBasereduce * i;
                if(buildingTiers[[i]][2] && Game.Has(buildingTiers[[i]][2])) Game.lumpMatureAge -= scalingBaseReduce * i * Game.Objects[buildingTiers[[i]][0]].amount;
            };

            Game.lumpMatureAge = Math.max(Game.lumpMatureAge, minMatureTime);
            Game.lumpRipeAge = Math.min(Game.lumpRipeAge, Game.lumpMatureAge * 2);
            Game.lumpOverripeAge = Math.min(Game.lumpOverripeAge, Game.lumpRipeAge * 2);
        });
        Game.customComputeLumpTimes.push(function offlineLumps () {
            if (Game.Has(sugarLumpSpecial[5])) Game.lumps += Math.floor(Math.abs(Date.now() - Game.lastDate) / Game.lumpOverripeAge);
            let thisHasToLeave = offlineLumps.toString();
            let index = Game.customComputeLumpTimes.findIndex(fn => fn.toString() === thisHasToLeave);
            Game.customComputeLumpTimes.splice(index, 1);
        });
    }

    





    /*

    var buy50ofEach = function() {
        for (let o = 0; o < Game.ObjectsById.length; o++) {
            Game.ObjectsById[o].getFree(50);
        }
    }

    Game.registerHook('reincarnate', function() {
        if (Game.ascensionMode != 1) {

            if (Game.Has('Starter kitchen 2: Electric boogaloo')) {
                Game.Objects['Grandma'].getFree(5);
                Game.Objects['Grandma'].free = 10;
            }
            if (Game.Has('Starter gardening kit')) {
                Game.Objects['Farm'].getFree(10);
            }
            if (Game.Has('Starter picks and shovels')) Game.Objects['Mine'].getFree(10);
            if (Game.Has('Starter toolbox')) Game.Objects['Factory'].getFree(10);
            if (Game.Has('Starter stonks')) Game.Objects['Bank'].getFree(10);
            if (Game.Has('Starter prayers')) Game.Objects['Temple'].getFree(10);
            if (Game.Has('Starter pointy hat')) Game.Objects['Wizard tower'].getFree(10);
            if (Game.Has('Starter hyperdrive')) Game.Objects["Shipment"].getFree(10);
            if (Game.Has('Starter philosopher\'s stone')) Game.Objects["Alchemy lab"].getFree(10);
            if (Game.Has('Starter cookieverse map')) Game.Objects["Portal"].getFree(10);
            if (Game.Has('Starter flux capacitor')) Game.Objects["Time machine"].getFree(10);
            if (Game.Has('Starter molecules')) Game.Objects["Antimatter condenser"].getFree(10);
            if (Game.Has('Starter photons')) Game.Objects["Prism"].getFree(10);
            if (Game.Has('Starter dice set')) Game.Objects["Chancemaker"].getFree(10);
            if (Game.Has('Starter kit for starter kits')) Game.Objects["Fractal engine"].getFree(10);
            if (Game.Has('Starter {hello world}')) Game.Objects["Javascript console"].getFree(10);
            if (Game.Has('Starter multiverse')) Game.Objects["Idleverse"].getFree(10);
            if (Game.Has('Starter 100 pack')) {
                for (let o = 0; o < Game.ObjectsById.length; o++) {
                    Game.ObjectsById[o].getFree(90);
                }
            };

            if (Game.Has('Starter 150 pack')) buy50ofEach();
            if (Game.Has('Starter 200 pack')) buy50ofEach();
            if (Game.Has('Starter 250 pack')) buy50ofEach();
            if (Game.Has('Starter 300 pack')) buy50ofEach();
            if (Game.Has('Starter 350 pack')) buy50ofEach();
            if (Game.Has('Starter 400 pack')) buy50ofEach();
            if (Game.Has('Starter 450 pack')) buy50ofEach();
            if (Game.Has('Starter 500 pack')) buy50ofEach();
            if (Game.Has('Starter 550 pack')) buy50ofEach();
            if (Game.Has('Starter 600 pack')) buy50ofEach();
 
            };

        }

    });
    */

    //Global CPS calculation
   Game.registerHook('cps', function(cps) {
        let cpsMultiplier = 1;
        if (Game.Has(cpsSpecial[1])) cpsMultiplier *= 1 + toPointOnePercent(Game.lumpsTotal);
        if (Game.Has(cpsSpecial[2]) && Game.BuildingsOwned % 10 == 0) cpsMultiplier *= 2;
        //if (Game.Has('Divine gains')) cps *= 1 + toPointOnePercent(Game.goldenClicks);
        //if (Game.Has('Divine buildings')) cps *= 1 + toPointOnePercent(Game.BuildingsOwned);
        //if (Game.Has('Divine savings') && Game.Objects['Farm']?.minigame?.harvestsTotal) cps *= 1 + (Game.Objects['Farm'].minigame.harvestsTotal / 1000);
        return cps * cpsMultiplier;
    });


    if (CCSE.ConfirmGameVersion(MoreHeavenlyUpgradesRemastered.name, MoreHeavenlyUpgradesRemastered.version, MoreHeavenlyUpgradesRemastered.GameVersion)) Game.registerMod(MoreHeavenlyUpgradesRemastered.name, MoreHeavenlyUpgradesRemastered);

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
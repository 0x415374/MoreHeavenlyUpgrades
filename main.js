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

    //Map that contains building tier as keys which maps to an enum of [name, staticReducer, scalingReducer]
    const buildingTiers = {
        '1': ['Cursor', 'Lump rubbers', 'Velvet gloves'],
        '2': ['Grandma', 'Lump caregiver', 'My lovely sugar lumps'],
        '3': ['Farm', 'Sugar lump farm', 'Sugar Farming process'],
        '4': ['Mine', 'Sugar water', 'Dirt extraction process'],
        '5': ['Factory', 'Specialized greenhouse', 'Overclocked potion making process'],
        '6': ['Bank', 'Sweet and tasty fertilizer', 'Lump banking process'],
        '7': ['Temple', 'Lofi hip-hop beats to chill and grow to', 'Praying process'],
        '8': ['Wizard tower', 'A nice fairy', 'Sugar magical growing process'],
        '9': ['Shipment', 'Lump-growing calculator', 'Intergalactic Extrauniversal investigation process'],
        '10': ['Alchemy lab', 'Lump-growing potion', 'Overclocked potion crafting process'],
        '11': ['Portal', 'Praying to the elder ones', 'Other-worldly lump-growing process'],
        '12': ['Time machine', 'Benevolent elder Lump god', 'Time-altering process'],
        '13': ['Antimatter condenser', 'Elder Lump demon', 'Multiversal antimatterial process'],
        '14': ['Prism', 'True Elder Lump demon', 'Ilumination-based growing process'],
        '15': ['Chancemaker', 'Even Elder Lump demon', 'Sheer luck lump-growing process'],
        '16': ['Fractal engine', 'THE Even truer and elder Lump demon', 'Extreme lump-growing with recursive lumping and lump recursiving process'],
        '17': ['Javascript console', 'Mind opening', 'True evil process'],
        '18': ['Idleverse', 'Santa-summoning spell', 'Idle lump-growing process'],
        '19': ['Cortex baker', 'The ancient cookie dragon', 'Super Brainz'],
        '20': ['You', 'A book', 'I']
    };

    const sugarLumpMinTime = {
        '1': 'Sugar lump farming 101',
        '2': 'Ancient Lump-growing scroll',
        '3': 'Infinite knowledge',
        '4': 'Auto-clicking process',
        '5': 'Faster and lumpier clicking process'
    }

    const pointOnePercent = function (number) {
        number = Math.floor(number /10);
        return 1 + (number / 100);
    };
    const onePercent = 0.01


    MoreHeavenlyUpgradesRemastered.init = function() {
        MoreHeavenlyUpgradesRemastered.isLoaded = 1;
        Game.Notify('More Heavenly Upgrades Remastered loaded', '', [19, 7], 6);
        /*let keys1 = Object.keys(sugarLumpMinTime);
        let keys2 = Object.keys(buildingTiers);
        keys1.forEach((e) => Game.Lock(sugarLumpMinTime[e]))
        keys2.forEach((e) => { 
            Game.Lock(sugarLumpMinTime[e][1]);
            Game.Lock(sugarLumpMinTime[e][2]);
        });*/
        //Game.registerHook('check', function () {
        //    Game.Notify('Test', `${Game.Has('Call on the luck')}`, [19, 7], 6);
        //});
        //-----------------------------------permanent upgrade slots maybe


        /*
        var desc = loc("Placing an upgrade in this slot will make its effects <b>permanent</b> across all playthroughs.");
        CCSE.NewHeavenlyUpgrade('Permanent upgrade slot VI', desc, 6000000000000, [0, 11], 463, 27, ['Permanent upgrade slot V']);
        Game.last.activateFunction = function() { Game.AssignPermanentSlot(5); };
        //Game.last.iconFunction = function() { return Game.PermanentSlotIcon(5); };

        CCSE.NewHeavenlyUpgrade('Permanent upgrade slot VII', desc, 700000000000000, [1, 11], 563, 47, ['Permanent upgrade slot VI']);
        Game.last.activateFunction = function() { Game.AssignPermanentSlot(6); };
        //Game.last.iconFunction = function() { return Game.PermanentSlotIcon(6); };

        CCSE.NewHeavenlyUpgrade('Permanent upgrade slot VIII', desc, 80000000000000000, [2, 11], 663, 35, ['Permanent upgrade slot VII']);
        Game.last.activateFunction = function() { Game.AssignPermanentSlot(7); };
        //Game.last.iconFunction = function() { return Game.PermanentSlotIcon(7); };

        CCSE.NewHeavenlyUpgrade('Permanent upgrade slot IX', desc, 9000000000000000000, [3, 11], 763, 20, ['Permanent upgrade slot VIII']);
        //Game.last.iconFunction = function() { return Game.PermanentSlotIcon(8); };
        Game.last.activateFunction = function() { Game.AssignPermanentSlot(8); };

        CCSE.NewHeavenlyUpgrade('Permanent upgrade slot X', desc, 100000000000000000000, [6, 11], 863, 26, ['Permanent upgrade slot IX']);
        Game.last.activateFunction = function() { Game.AssignPermanentSlot(9); };
        //Game.last.iconFunction = function() { return Game.PermanentSlotIcon(9); };*/


        CCSE.NewHeavenlyUpgrade('Divine savings', 'Has absolutely no effect right now as it was way too overpowered', 7777777777, [20, 7], -631, 218, ['Lucky digit', 'Lucky number', 'Lucky payout']);
        CCSE.NewHeavenlyUpgrade('Divine gains', 'Increases CpS by 1% for each golden cookie clicked', 7777777777777, [28, 12], -595, 576, ['Divine savings', 'Divine bakeries']);
        CCSE.NewHeavenlyUpgrade('Divine buildings', 'Increases CpS by 1% for each building owned', 88888888888888, [33, 12], -700, 675, ['Divine gains']);
        CCSE.NewHeavenlyUpgrade('Divine round numbers', 'Doubles CpS as long as the total number of buildings is divisible by 10', 999999999999999, [22, 19], -800, 675, ['Divine buildings']);
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


        //Sugar Lump growing process
        // TIER 1
        CCSE.NewHeavenlyUpgrade(sugarLumpMinTime[1], `This is the start of your ascension to become a true sugar lump farmer. The minimum time to grow a sugar lump is now reduced to 1 hour. Also ripen and fall time are dependant on maturing time`, 2.5E1, [15, 9], -100, -1500, ['Sucralosia Inutilis']);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][1], `Sugar lumps mature <b>${1*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E2, [0, 0], -750, -1700, [sugarLumpMinTime[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][2], `Sugar lumps mature <b>${1*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[1][0]}`, 2.5E2, [0, 1], -650, -1700, [sugarLumpMinTime[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][1], `Sugar lumps mature <b>${2*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E3, [1, 0], -450, -1700, [sugarLumpMinTime[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][2], `Sugar lumps mature <b>${2*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[2][0]}`, 2.5E3, [1, 1], -350, -1700, [sugarLumpMinTime[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][1], `Sugar lumps mature <b>${3*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E4, [2, 0], -150, -1700, [sugarLumpMinTime[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][2], `Sugar lumps mature <b>${3*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[3][0]}`, 2.5E4, [2, 1], -50, -1700, [sugarLumpMinTime[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][1], `Sugar lumps mature <b>${4*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E5, [3, 0], 150, -1700, [sugarLumpMinTime[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][2], `Sugar lumps mature <b>${4*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[4][0]}`, 2.5E5, [3, 1], 250, -1700, [sugarLumpMinTime[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][1], `Sugar lumps mature <b>${5*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E6, [4, 0], 450, -1700, [sugarLumpMinTime[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][2], `Sugar lumps mature <b>${5*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[5][0]}`, 2.5E6, [4, 1], 550, -1700, [sugarLumpMinTime[1]]);

        //TIER 2
        CCSE.NewHeavenlyUpgrade(sugarLumpMinTime[2], `You are an adept sugar lump farmer. The minimum time to grow a sugar lump is reduced by 15 minutes`, 2.5E7, [15, 9], -100, -1900, [buildingTiers[1][1], buildingTiers[1][2], buildingTiers[2][1], buildingTiers[2][2], buildingTiers[3][1], buildingTiers[3][2], buildingTiers[4][1], buildingTiers[4][2], buildingTiers[5][1], buildingTiers[5][2]]);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][1], `Sugar lumps mature <b>${11*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E8, [6, 0], -750, -2100, [sugarLumpMinTime[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[6][2], `Sugar lumps mature <b>${11*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[6][0]}`, 2.5E8, [6, 1], -650, -2100, [sugarLumpMinTime[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][1], `Sugar lumps mature <b>${12*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E9, [7, 0], -450, -2100, [sugarLumpMinTime[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[7][2], `Sugar lumps mature <b>${12*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[7][0]}`, 2.5E9, [7, 1], -350, -2100, [sugarLumpMinTime[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][1], `Sugar lumps mature <b>${13*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E10, [8, 0], -150, -2100, [sugarLumpMinTime[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[8][2], `Sugar lumps mature <b>${13*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[8][0]}`, 2.5E10, [8, 1], -50, -2100, [sugarLumpMinTime[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][1], `Sugar lumps mature <b>${14*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E11, [9, 0], 150, -2100, [sugarLumpMinTime[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[9][2], `Sugar lumps mature <b>${14*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[9][0]}`, 2.5E11, [9, 1], 250, -2100, [sugarLumpMinTime[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][1], `Sugar lumps mature <b>${15*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E12, [10, 0], 450, -2100, [sugarLumpMinTime[2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[10][2], `Sugar lumps mature <b>${15*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[10][0]}`, 2.5E12, [10, 1], 550, -2100, [sugarLumpMinTime[2]]);

        //TIER 3
        CCSE.NewHeavenlyUpgrade(sugarLumpMinTime[3], `You are an advanced sugar lump farmer. The minimum time to grow a sugar lump is reduced by 15 minutes`, 2.5E13, [15, 9], -100, -2300, [buildingTiers[6][1], buildingTiers[6][2], buildingTiers[7][1], buildingTiers[7][2], buildingTiers[8][1], buildingTiers[8][2], buildingTiers[9][1], buildingTiers[9][2], buildingTiers[10][1], buildingTiers[10][2]]);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][1], `Sugar lumps mature <b>${11*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E14, [11, 0], -750, -2500, [sugarLumpMinTime[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[11][2], `Sugar lumps mature <b>${11*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[11][0]}`, 2.5E14, [11, 1], -650, -2500, [sugarLumpMinTime[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][1], `Sugar lumps mature <b>${12*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E15, [12, 0], -450, -2500, [sugarLumpMinTime[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[12][2], `Sugar lumps mature <b>${12*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[12][0]}`, 2.5E15, [12, 1], -350, -2500, [sugarLumpMinTime[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][1], `Sugar lumps mature <b>${13*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E16, [13, 0], -150, -2500, [sugarLumpMinTime[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[13][2], `Sugar lumps mature <b>${13*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[13][0]}`, 2.5E16, [13, 1], -50, -2500, [sugarLumpMinTime[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][1], `Sugar lumps mature <b>${14*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E17, [14, 0], 150, -2500, [sugarLumpMinTime[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[14][2], `Sugar lumps mature <b>${14*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[14][0]}`, 2.5E17, [14, 1], 250, -2500, [sugarLumpMinTime[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][1], `Sugar lumps mature <b>${15*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E18, [15, 0], 450, -2500, [sugarLumpMinTime[3]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[15][2], `Sugar lumps mature <b>${15*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[15][0]}`, 2.5E18, [15, 1], 550, -2500, [sugarLumpMinTime[3]]);

        //TIER 4
        CCSE.NewHeavenlyUpgrade(sugarLumpMinTime[4], `You are an expert sugar lump farmer. The minimum time to grow a sugar lump is reduced by 15 minutes`, 2.5E19, [15, 9], -100, -2700, [buildingTiers[11][1], buildingTiers[11][2], buildingTiers[12][1], buildingTiers[12][2], buildingTiers[13][1], buildingTiers[13][2], buildingTiers[14][1], buildingTiers[14][2], buildingTiers[15][1], buildingTiers[15][2]]);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][1], `Sugar lumps mature <b>${16*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E20, [16, 0], -750, -2900, [sugarLumpMinTime[4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[16][2], `Sugar lumps mature <b>${16*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[16][0]}`, 2.5E20, [11, 1], -650, -2900, [sugarLumpMinTime[4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][1], `Sugar lumps mature <b>${17*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E21, [17, 0], -450, -2900, [sugarLumpMinTime[4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[17][2], `Sugar lumps mature <b>${17*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[17][0]}`, 2.5E21, [12, 1], -350, -2900, [sugarLumpMinTime[4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][1], `Sugar lumps mature <b>${18*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E22, [13, 0], -150, -2900, [sugarLumpMinTime[4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[18][2], `Sugar lumps mature <b>${18*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[18][0]}`, 2.5E22, [13, 1], -50, -2900, [sugarLumpMinTime[4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][1], `Sugar lumps mature <b>${19*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E23, [14, 0], 150, -2900, [sugarLumpMinTime[4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[19][2], `Sugar lumps mature <b>${19*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[19][0]}`, 2.5E23, [14, 1], 250, -2900, [sugarLumpMinTime[4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][1], `Sugar lumps mature <b>${20*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E24, [15, 0], 450, -2900, [sugarLumpMinTime[4]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[20][2], `Sugar lumps mature <b>${20*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[20][0]}`, 2.5E24, [15, 1], 550, -2900, [sugarLumpMinTime[4]]);

        //TIER 5
        CCSE.NewHeavenlyUpgrade(sugarLumpMinTime[5], `Your minimum time to mature lumps is reduced by <b>${second/1000} second<b> for every upgrade level of your buildings, down to a cap of one second`, 2.5E25, [15, 9], -100, -3100, [buildingTiers[16][1], buildingTiers[16][2], buildingTiers[17][1], buildingTiers[17][2], buildingTiers[18][1], buildingTiers[18][2], buildingTiers[19][1], buildingTiers[19][2], buildingTiers[20][1], buildingTiers[20][2]]);



        /*
        //True Santa
        CCSE.NewHeavenlyUpgrade('Santa-summoning spell', "Sugar lumps ripen and mature <b>20 minutes</b> sooner.<q>Apparently this scroll had the ritual to summon true santa, he promises knowledge in exchange of chips</q>", 999999999990, [19, 10], -600, -2175, ['Enchanted Lump-growing scroll']);
        Game.last.showIf = function() { return (Game.Achievements["All hail Santa"].won == 1); };
        CCSE.NewHeavenlyUpgrade('Santa\'s heavenly legacy', "Final claus will accompany you between ascensions<q>You have earned my trust</q>", 1423287606340478, [19, 9], -687, -2138, ['Santa-summoning spell']);
        //Ancient dragon
        CCSE.NewHeavenlyUpgrade('The ancient cookie dragon', "Sugar lumps ripen and mature <b>20 minutes</b> sooner.<q>They claim to know the secrets to grow Sugar lumps efficiently, but at a price</q>", 999999999990, [30, 12], -450, -2175, ['Enchanted Lump-growing scroll']);
        Game.last.showIf = function() { return (Game.Achievements["Here be dragon"].won == 1); };
        CCSE.NewHeavenlyUpgrade('Cookie dragon egg', "You start with your own dragon egg!<q>So you don't need to buy it everytime</q>", 1000000, [21, 12], -350, -2175, ['The ancient cookie dragon']);
        CCSE.NewHeavenlyUpgrade('Cookie hatchling', "You start with your dragon already hatched<q>It costs a bit more than buying it in the living world, but it's worth</q>", 32000000, [31, 15], -250, -2200, ['Cookie dragon egg']);
        CCSE.NewHeavenlyUpgrade('Dragon in training', "Krumblor starts halfway into their training<q>This tooth fell off when they grew up</q>", everythingBasePrice * 100, [30, 15], -150, -2190, ['Cookie hatchling']);
        CCSE.NewHeavenlyUpgrade('Dragon in baking', "Bake Krumblor<q>Delicious!</q>", everythingBasePrice * 50, [30, 14], -50, -2160, ['Dragon in training']);
        CCSE.NewHeavenlyUpgrade('Krumblor, The one and only', "Train Krumblor to their full potential<q>You got here many times already, no need to repeat it</q>", everythingBasePrice * 200, [31, 14], 50, -2170, ['Dragon in baking']);
*/
        /*
        var secretPrice = Game.Upgrades["Kitten helpers"].basePrice +
            Game.Upgrades["Kitten workers"].basePrice +
            Game.Upgrades["Kitten engineers"].basePrice +
            Game.Upgrades["Kitten overseers"].basePrice +
            Game.Upgrades["Kitten managers"].basePrice +
            Game.Upgrades["Kitten accountants"].basePrice +
            Game.Upgrades["Kitten specialists"].basePrice +
            Game.Upgrades["Kitten consultants"].basePrice +
            Game.Upgrades["Kitten assistants to the regional manager"].basePrice;

        CCSE.NewHeavenlyUpgrade('A secret gift from the cat', "Yes, I know it's expensive, but they swear it's worth it<q>You didn't come this far to not trust the cat</q>", secretPrice, [0, 7], -850, -2450, ['Infinite knowledge']);
        Game.last.showIf = function() { return (Game.Achievements["Jellicles"].won == 1); };

        CCSE.NewHeavenlyUpgrade('Permanent Kitten marketeers', "They stick with you<q>forever</q>", Game.Upgrades["Kitten marketeers"].basePrice, [18, 28], -950, -2550, ['A secret gift from the cat']);
        CCSE.NewHeavenlyUpgrade('Permanent Kitten analysts', "They stick with you<q>forever</q>", Game.Upgrades["Kitten analysts"].basePrice, [18, 30], -980, -2450, ['A secret gift from the cat']);
        CCSE.NewHeavenlyUpgrade('Permanent Kitten executives', "They stick with you<q>forever</q>", Game.Upgrades["Kitten executives"].basePrice, [18, 31], -950, -2350, ['A secret gift from the cat']);

        CCSE.NewHeavenlyUpgrade('A book', "The cat offers you this book containing knowledge and secrets <q>Sugar lumps now ripen and mature <b>3 hours</b> sooner </q>", 5555555555555500, [22, 12], -700, -2600, ['Infinite knowledge']);

        CCSE.NewHeavenlyUpgrade('The real secret...', "Was the friends we made along the way<q>Love is important<br>That was written in the book</q>", 1, [20, 3], -675, -2800, ['A book']);

        CCSE.NewHeavenlyUpgrade('Auto-clicking process', "The minimum time for a lump to mature is reduced by <b>1 second</b> for every <b>100 cursors owned<b/><br>But it will never go any lower than 1 second<q>You thought I wouldn\'t do anything with cursors did you?</q>", 5000000000000000000, [0, 17], -650, -3000, ['The real secret...']);

        CCSE.NewHeavenlyUpgrade('Faster and lumpier clicking process', "The minimum time for a lump to mature is reduced by <b>1 second</b> for every <b>2 cursor levels<b/><br>But it will never go any lower than 1 second<q>You thought I wouldn\'t do anything with cursors did you?</q>", 69000000000000000000000000, [1, 6], -630, -3200, ['Auto-clicking process']);
*/


        //Game.customShimmerTypes[key].getTimeMod --> adjust golden cookie spawn rate, <1 equals faster
        // Game.customShimmerTypes[key].durationMult


        Game.customComputeLumpTimes.push(function() {
            let minMatureTime = hour * 12;
            if (Game.Has(sugarLumpMinTime[1])) minMatureTime -= hour * 11
            if (Game.Has(sugarLumpMinTime[2])) minMatureTime -= minute * 15;
            if (Game.Has(sugarLumpMinTime[3])) minMatureTime -= minute * 15;
            if (Game.Has(sugarLumpMinTime[4])) minMatureTime -= minute * 15;
            if (Game.Has(sugarLumpMinTime[5])) minMatureTime -= (() => {
                let objKeys = Object.keys(Game.Objects);
                let sum = 0;
                objKeys.forEach((e) => sum += Game.Objects[e].level);
                return Math.floor(sum) * second;
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
            Game.lumps += Math.floor(Math.abs(Date.now() - Game.lastDate) / Game.lumpOverripeAge);
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

            if (Game.Has('Divine savings')) Game.Earn(Game.heavenlyChips);
            if (Game.Has('Santa\'s heavenly legacy')) {
                Game.Upgrades['A festive hat'].bought = 1;
                Game.santaLevel = 14;
                for (let i = 0; i < Game.santaDrops.length; i++) { Game.Upgrades[Game.santaDrops[i]].unlocked = 1 }
                Game.Upgrades['Santa\'s dominion'].unlock();
            }
            if (Game.Has('Cookie dragon egg')) {
                Game.Upgrades['A crumbly egg'].bought = 1;
                if (Game.Has('Cookie hatchling')) {
                    Game.dragonLevel = 5;
                    if (Game.Has('Dragon in training')) {
                        Game.dragonLevel = 23;
                        if (Game.Has('Dragon in baking')) {
                            Game.dragonLevel = 24;
                            if (Game.Has('Krumblor, The one and only')) {
                                Game.dragonLevel = 25;

                            }

                        }

                    }

                }
            };

            if (Game.Has('A secret gift from the cat')) {
                Game.Upgrades["Kitten helpers"].bought = 1;
                Game.Upgrades["Kitten workers"].bought = 1;
                Game.Upgrades["Kitten engineers"].bought = 1;
                Game.Upgrades["Kitten overseers"].bought = 1;
                Game.Upgrades["Kitten managers"].bought = 1;
                Game.Upgrades["Kitten accountants"].bought = 1;
                Game.Upgrades["Kitten specialists"].bought = 1;
                Game.Upgrades["Kitten consultants"].bought = 1;
                Game.Upgrades["Kitten assistants to the regional manager"].bought = 1;

                if (Game.Has('Permanent Kitten marketeers')) {
                    Game.Upgrades["Kitten marketeers"].bought = 1;
                }

                if (Game.Has('Permanent Kitten analysts')) {
                    Game.Upgrades["Kitten analysts"].bought = 1;
                }

                if (Game.Has('Permanent Kitten executives')) {
                    Game.Upgrades["Kitten executives"].bought = 1;
                }
                
            };

        }

    });
    */


   Game.registerHook('cps', function(cps) {
       if (Game.Has('Divine gains')) cps *= pointOnePercent(Game.goldenClicks);
       if (Game.Has('Divine buildings')) cps *= pointOnePercent(Game.BuildingsOwned);
       if (Game.Has('Divine round numbers') && Game.BuildingsOwned % 10 == 0) cps *= 2;
       if (Game.Has('Divine savings') && Game.Objects['Farm']?.minigame?.harvestsTotal) cps *= 1 + (Game.Objects['Farm'].minigame.harvestsTotal / 1000);
       return cps;
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
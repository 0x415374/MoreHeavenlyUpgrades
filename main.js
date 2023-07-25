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
        '19': ['Cortex baker', 'The ancient cookie dragon', null],
        '20': ['You', 'A book', null]
    };

    const sugarLumpMinTime = {
        '1': 'Sugar lump farming 101',
        '2': 'Enchanted Lump-growing scroll',
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
        CCSE.NewHeavenlyUpgrade(sugarLumpMinTime[1], `This is the start of your ascension to become a true sugar lump farmer. The minimum time to grow a sugar lump is now reduced to 1 hour. Also ripen and fall time are dependant on maturing time`, 2.5E1, [15, 9], -75, -1540, ['Sucralosia Inutilis']);
        
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][1], `Sugar lumps mature <b>${1*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E2, [10, 9], -100, -1550, [sugarLumpMinTime[1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[1][2], `Sugar lumps mature <b>${1*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[1][0]}`, 2.5E2, [1, 1], -125, -1540, [buildingTiers[1][1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][1], `Sugar lumps mature <b>${2*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E3, [10, 9], -150, -1550, [buildingTiers[1][2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[2][2], `Sugar lumps mature <b>${2*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[2][0]}`, 2.5E3, [1, 1], -175, -1540, [buildingTiers[2][1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][1], `Sugar lumps mature <b>${3*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E4, [10, 9], -200, -1550, [buildingTiers[2][2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[3][2], `Sugar lumps mature <b>${3*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[3][0]}`, 2.5E4, [1, 1], -225, -1540, [buildingTiers[3][1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][1], `Sugar lumps mature <b>${4*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E5, [10, 9], -250, -1550, [buildingTiers[3][2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[4][2], `Sugar lumps mature <b>${4*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[4][0]}`, 2.5E5, [1, 1], -275, -1540, [buildingTiers[4][1]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][1], `Sugar lumps mature <b>${5*staticBasereduce/1000/60} minutes</b> sooner`, 2.5E6, [10, 9], -300, -1550, [buildingTiers[4][2]]);
        CCSE.NewHeavenlyUpgrade(buildingTiers[5][2], `Sugar lumps mature <b>${5*scalingBaseReduce/1000} seconds</b> sooner for each ${buildingTiers[5][0]}`, 2.5E6, [1, 1], -325, -1540, [buildingTiers[5][1]]);

        //TIER 2

        CCSE.NewHeavenlyUpgrade('Lofi hip-hop beats to chill and grow to', "Sugar lumps mature <b>21 minutes</b> sooner.<q>Plants do actually grow better when listening to some sweet tunes</q>", 500000000, [28, 6], -250, -1540, ['Sweet and tasty fertilizer']);


        //TIER 2
        CCSE.NewHeavenlyUpgrade('Ancient lump-growing scroll', "You found this weird scroll, maybe it has some useful information<br><br>The minimum time for lumps to mature now is 7 minutes<q>What could posibly go wrong?</q>", 1000, [28, 26], -300, -1760, ['Lofi hip-hop beats to chill and grow to']);

        CCSE.NewHeavenlyUpgrade('A nice fairy', "Sugar lumps mature <b>24 minutes</b> sooner.<q>The scroll gave you a ritual to summon a fairy, she will cast some spells in exchange of heavenly chips</q>", 1500000000, [26, 11], -390, -1740, ['Ancient lump-growing scroll']);
        CCSE.NewHeavenlyUpgrade('Sugar magical growing process', "Each Wizard tower makes sugar lumps mature <b>2 seconds</b> sooner.<q>Wizards can power up the fairy, as it turns out</q>", 1200000000, [17, 17], -390, -1650, ['A nice fairy']);


        CCSE.NewHeavenlyUpgrade('Lump-growing calculator', "Sugar lumps mature <b>27 minutes</b> sooner.<q>Turns out all was in the numbers, the scroll had mathematical formulas to grow sugar lumps even faster</q>", 1500000000, [11, 10], -260, -1850, ['Ancient lump-growing scroll']);
        CCSE.NewHeavenlyUpgrade('Lump banking process', "Each Bank makes sugar lumps mature <b>1.5 seconds</b> sooner.<q>The interests created by the banks somehow help us calculate better...</q>", 1000000000, [15, 17], -170, -1870, ['Lump-growing calculator']);


        CCSE.NewHeavenlyUpgrade('Lump-growing potion', "Sugar lumps ripen and mature <b>20 minutes</b> sooner.<q>In the scroll there was also a formula for a potion that makes lumps grow faster!</q>", 1500000000, [33, 11], -370, -1850, ['Ancient lump-growing scroll', 'A nice fairy', 'Lump-growing calculator']);
        CCSE.NewHeavenlyUpgrade('Overclocked potion crafting process', "Each Alchemy lab (up to 300) makes sugar lumps ripen and mature <b>6 seconds</b> sooner.<q>Combining the power of factories and alchemy we can speed up the potion-making</q>", 1400000000, [6, 17], -550, -1790, ['Overclocked potion making process']);


        //TIER 3
        CCSE.NewHeavenlyUpgrade('Enchanted Lump-growing scroll', "A shining scroll lies before you, it emanates great power, will you take it?<br><br>The minimum time for lumps to mature now is 4 minutes<q>Your legs feel shaky</q>", 10000, [21, 7], -450, -1975, ['Lump-growing potion']);

        CCSE.NewHeavenlyUpgrade('Praying to the elder ones', "Sugar lumps ripen and mature <b>1 hour</b> sooner.<q>You just need to open the doors of 1 temple to awaken this old power... <br> there is someone inside?</q>", 500000000000, [13, 11], -600, -1975, ['Enchanted Lump-growing scroll']);
        CCSE.NewHeavenlyUpgrade('Praying process', "Each temple (up to 300) makes sugar lumps ripen and mature <b>6 seconds</b> sooner.<q>The more temples the more gods we can pray to</q>", 1100000000, [16, 17], -600, -1870, ['Praying to the elder ones']);

        //GODS
        CCSE.NewHeavenlyUpgrade('Benevolent elder Lump god', "Sugar lumps ripen <b>1 hour</b> sooner.<q>Will you accept the gift of this deity?</q>", 777000000000, [2, 7], -700, -2025, ['Praying to the elder ones']);

        CCSE.NewHeavenlyUpgrade('Elder Lump demon', "Sugar lumps mature <b>1 hour</b> sooner.<q>They seem nice :D</q>", 666000000000, [11, 8], -700, -1925, ['Praying to the elder ones']);
        CCSE.NewHeavenlyUpgrade('True Elder Lump demon', "Sugar lumps mature <b>1 hour</b> sooner.<q>TURNS OUT THE LAST ONE WAS A FAKER</q>", 6660000000000, [29, 6], -725, -1825, ['Elder Lump demon']);
        CCSE.NewHeavenlyUpgrade('Even Elder Lump demon', "Sugar lumps mature <b>1 hour</b> sooner.<q>The las one wasn't fake, but this one is much elder and wiser</q>", 66600000000000, [21, 25], -775, -1725, ['True Elder Lump demon']);
        CCSE.NewHeavenlyUpgrade('THE Even truer and elder Lump demon', "Sugar lumps mature <b>1 hour</b> sooner.<q>This trully has to be the las one of the lot</q>", 666000000000000, [21, 32], -875, -1625, ['Even Elder Lump demon']);
        CCSE.NewHeavenlyUpgrade('True evil process', "Each JS Console (up to 900) makes sugar lumps ripen and mature <b>6 seconds</b> sooner.<q>Hacking the game is trully evil and you should feel bad for it</q>", 2100000000, [32, 17], -1025, -1525, ['THE Even truer and elder Lump demon']);

        //Eternal Knowledge                                                                                                                                                                      
        CCSE.NewHeavenlyUpgrade('Mind opening', "Sugar lumps ripen and mature <b>20 minutes</b> sooner.<q>Praying to both deities gave you a mindblowing knowledge. Will you use it right?</q>", 999999999990, [27, 2], -800, -1975, ['Elder Lump demon', 'Benevolent elder Lump god']);
        CCSE.NewHeavenlyUpgrade('Ilumination-based growing process', "Each Prism (up to 300) makes sugar lumps ripen and mature <b>6 seconds</b> sooner.<q>One might say you've become enlightened<br><br>And the lump as well, the light from the prisms help it's growth</q>", 1800000000, [14, 17], -920, -2000, ['Mind opening']);
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


        //TIER 4 --> TELEPORTATION <--
        CCSE.NewHeavenlyUpgrade('Misterious portal', "With the knowledge from the eldest ones you manage to open a rift in time and space to aquire the ultimate secrets of growing <b>Sugar Lumps</p><q>Will there be a way back?</q>", 1000000000, [11, 5], -700, -2300, ['Mind opening', 'Santa-summoning spell', 'The ancient cookie dragon']);
        CCSE.NewHeavenlyUpgrade('Other-worldly lump-growing process', "Each portal (up to 300) makes sugar lumps ripen and mature <b>6 seconds</b> sooner.<q>You are not really sure how this works but it does somehow</q>", 1500000000, [7, 17], -795, -2250, ['Misterious portal']);
        CCSE.NewHeavenlyUpgrade('Idle lump-growing process', "Each Idleverse makes sugar lumps ripen and mature <b>6 seconds</b> sooner.<q>The portals brought us here... might as well use this place to grow the lump?</q>", 2200000000, [33, 17], -870, -2200, ['Other-worldly lump-growing process']);
        CCSE.NewHeavenlyUpgrade('Intergalactic Extrauniversal investigation process', "Each Shipment (up to 300) makes sugar lumps ripen and mature <b>6 seconds</b> sooner.<q>Now that you discovered these strage multiverses... Explore them to speed up the lump... maybe? we are not really sure how this works anymore</q>", 1300000000, [5, 17], -930, -2130, ['Idle lump-growing process']);
        CCSE.NewHeavenlyUpgrade('Multiversal antimatterial process', "Each Antimater condenser (up to 300) makes sugar lumps ripen and mature <b>6 seconds</b> sooner.<q>Your investigations have concluded that some of these...<br>planes of existance?<br>multiverses?<br>verses?<br>Anyway, some of them are entirely made out of antimatter<br>Knowing this may be useful to unravel the ultimate secrets of lump-growing<br><br>maybe</q>", 1700000000, [13, 17], -995, -2060, ['Intergalactic Extrauniversal investigation process']);
        CCSE.NewHeavenlyUpgrade('Extreme lump-growing with recursive lumping and lump recursiving process', "Each Fractal engine (up to 600) makes sugar lumps ripen and mature <b>6 seconds</b> sooner.<q>Okay, hear me out for a second here, turns out the antimatter particles are made of smaller antimatter particles and this happens infinitely.<br>Bring in the engines and we can start growing some lumps WHOOO</q>", 2000000000, [20, 17], -1070, -1950, ['Multiversal antimatterial process']);
        CCSE.NewHeavenlyUpgrade('Sheer luck lump-growing process', "Each Chancemaker (up to 300) makes sugar lumps ripen and mature <b>6 seconds</b> sooner.<q>What are the odds of this worknig out?</q>", 1900000000, [19, 17], -1170, -1850, ['Extreme lump-growing with recursive lumping and lump recursiving process']);


        CCSE.NewHeavenlyUpgrade('Infinite knowledge', "At the other side of the portal there is a.. Cat?<br>They seem to know you,<br>to know <b>everything</b><br>They ask you to forfeit a small amount of chips for all their knowledge<br><br>Also the minimum time for lumps to mature now is 1 minute<q>They are the key to the multiverse's secrets</q>", 10000000000, [26, 7], -700, -2450, ['Misterious portal']);
        CCSE.NewHeavenlyUpgrade('Time-altering process', "Each Time machine (up to 300) makes sugar lumps ripen and mature <b>6 seconds</b> sooner.<q>The cat gave you some formulas, that, combined with your flux capacitors would speed up the process of growing lumps</q>", 1800000000, [8, 17], -600, -2450, ['Infinite knowledge']);

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
                return Math.floor(sum);
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
    }

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
        Game.registerHook('cps', function(cps) {
            let cpsMult = 1;
            if (Game.Has('Divine gains')) cpsMult *= pointOnePercent(Game.goldenClicks);
            if (Game.Has('Divine buildings')) cpsMult *= pointOnePercent(Game.BuildingsOwned);
            if (Game.Has('Divine round numbers') && Game.BuildingsOwned % 10 == 0) cpsMult *= 2;
            if (Game.Has('Divine savings') && Game.Objects['Farm']?.minigame?.harvestsTotal) cpsMult *= 1 + (Game.Objects['Farm'].minigame.harvestsTotal / 1000);
            return cps * cpsMult;
        });
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
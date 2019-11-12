(function () {

    //Define our function responsible for extending the bot. Version 2.15.0001
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

/*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };
*/

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        autoWootBot: false,
        botName: "Larry the LAW",
        language: "english",
        chatLink: "https://rawcdn.githack.com/SZigmund/basicBot/f4b1a9d30a7e9f022ef600dd41cae07a91797bad/lang/en.json",
        maximumAfk: 60,
        afkRemoval: true,
        afk5Days: true,
        afk7Days: true,
        afkRemoveStart: 0,
        afkRemoveEnd: 24,
        maximumDc: 120,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 8,
        repeatSongs: true,
        repeatSongTime: 180,
        skipSound5Days: false,
        skipSound7Days: false,
        skipSoundStart: 7,
        skipSoundEnd: 15,
        skipSoundRange: "Monday-Friday between 7AM and 3PM EST",
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 30,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Temporary Message of the Day",
        filterChat: true,
        etaRestriction: true,
        welcome: true,
        opLink: null,
        rulesLink: "http://tinyurl.com/TastyTunesRules",
        themeLink: null,
        fbLink: "https://www.facebook.com/groups/226222424234128/",
        youtubeLink: null,
        website: "https://www.facebook.com/groups/226222424234128/",
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        suppressSongStats: false,
        blacklists: {
            BAN: "https://rawcdn.githack.com/SZigmund/basicBot-customization/1d035e64d1af8de06c22a19b9fe9571db012d5e1/blacklists/Banned.json",
            NSFW: "https://rawcdn.githack.com/SZigmund/basicBot-customization/1d035e64d1af8de06c22a19b9fe9571db012d5e1/blacklists/ExampleNSFWlist.json",
            OP: "https://rawcdn.githack.com/SZigmund/basicBot-customization/1d035e64d1af8de06c22a19b9fe9571db012d5e1/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawcdn.githack.com/SZigmund/basicBot/7216fef1dce5dd28a41908d2a9cdb8a5b5b682de/basicBot.js', extend);

}).call(this);

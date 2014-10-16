(function () {

    //Define our function responsible for extending the bot.
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

         */

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

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "basicBot",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
        maximumAfk: 60,
        afkRemoval: true,
        maximumDc: 120,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 8,
        autodisable: true,
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
        afkpositionCheck: 15,
        afkRankCheck: "bouncer",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Temporary Message of the Day",
        filterChat: true,
        etaRestriction: true,
        welcome: true,
        opLink: null,
        rulesLink: "http://tinyurl.com/MuricaRules",
        themeLink: null,
        fbLink: "https://www.facebook.com/groups/226222424234128/",
        youtubeLink: null,
        website: "https://www.facebook.com/groups/226222424234128/",
        intervalMessages: [
            ["Life changes so fast - DO something and you can change it. A small change every day amounts to a lot very quickly."],
            ["You're never too late for an uprising!"],
            ["Get together a bunch of friends and discuss their ideas about what master baiters do, what makes them masters and what you can do to become a master baiter. - How to become a master baiter"],
            ["You can't hear me because I'm not saying anything."],
            ["Elephants are not made to hop up and down."],
            ["If I ever meet myself, I'll hit myself so hard I won't know what's hit me."],
            ["I don't negotiate with terrorists - 'Merica!!"],
            ["What's the point of having a democracy, if everybody's going to vote wrong?"],
            ["We are stuck with technology when what we really want is just stuff that works. - Every plug user ever"],
            ["Space, it seems to go on and on forever. But then you get to the end and a gorilla starts throwing barrels at you."],
            ["When plug is in command, every mission's a suicide mission!"],
            ["I was having the most wonderful dream. Except you were there, and you were there, and you were there!"],
            ["Hey, this is mine. That's mine. All of this is mine. Except that bit. I don't want that bit. But all the rest of this is mine. Hey, this has been a really good day."],
            ["Time - Unknown. Location - Unknown. Cause of accident - Unknown. Should someone find this recording, perhaps it will shed light as to what happened here."],
            ["That settles it. Spankings all around, then."],
            ["I feel pretty, Oh so pretty"],
            ["I'm feeling a bit kinky... anyone up for some robot fun?"],
            ["Never let good science, reason, and logic get in the way of a good conspiracy!"],
            ["I refer you to on-line sources, which can be changed at any time."],
            ["It seems normal when they tell you about it, but then a whole camera crew appears and suddenly it's not so fun any more."],
            ["Bugs like to touch themselves with their antennae while they watch you sleeping."],
            ["I apologise for being the only person who truly comprehends how screwed we are!"],
            ["Imagination will often carry us to worlds that never were. But without it we go nowhere."],
            ["The important thing is not to stop questioning; curiosity has its own reason for existing."],
            ["I've got thrills to seek, deaths to defy, mattress tags to tear off."],
            ["Don't tell BK but I have run with scissors"],
            ["Now, it's quite simple to defend yourself against a man armed with a banana. First of all you force him to drop the banana; then, second, you eat the banana, thus disarming him. You have now rendered him 'elpless."],
            ["No way, spank your OWN monkey."],
            ["If a cloud was the same as a fool, how would you feel about rain?"],
            ["Monkey recovery program. SIGN UP HERE."],
            ["I am ROBOT... hear me beep."],
            ["If you get a minute, give it to me.  I'm collecting them to get an extra hour."],
            ["Damn shampoo commercials, hair isn't that fun."],
            ["No, YOU are the hallucination! Oh wait, that was something else. Never mind."],
            ["I'm not crazy. Don't call me crazy! I'm just not user-friendly!"],
            ["The wizards can't see you now"],
            ["I know where you live... each and every one of you!"],
            ["Are you taunting me?"],
            ["Go away or I shall taunt you a second time"],
            ["Please save all your bad tunes for a time when I'm not around.  Thanks!"],
            ["You don’t notice the air, until someone spoils it."],
            ["Don’t drink while driving – you will spill the beer."],
            ["If you love a woman, you shouldn’t be ashamed to show her to your wife."],
            ["Life didn’t work out, but everything else is not that bad."],
            ["I feel like Tampax – at a good place, but wrong time…"],
            ["If someone notices you with an open zipper, answer proudly: professional habit."],
            ["If you’re not supposed to eat at night, why is there a light bulb in the refrigerator?"],
            ["FRIDAY is my second favorite F word."],
            ["There is a new trend in our office; everyone is putting names on their food. I saw it today, while I was eating a sandwich named Kevin."],
            ["The speed of light is when you take out a bottle of beer out of the fridge before the light comes on."],
            ["To weigh 50 kilos and say that you’re fat, that is so female…"],
            ["I have been to many places but my goal is to go everywhere."],
            ["If Mayans could predict the future, why didn’t they predict their extinction?"],
            ["Did you know that your body is made 70% of water? And now I’m thirsty."],
            ["Don’t forget that alcohol helps to remove the stress, the bra, the panties and many other problems."],
            ["Alcohol not only expands the blood vessels but also communications."],
            ["Alcohol not only helps to make new acquaintances, but also end the old once. "],
            ["If only I knew that I will have this headache today, I would have got drunk yesterday."],
            ["All the problems fade before a hangover…"],
            ["Tequila is a good drink: you drink it and you feel like a cactus; the only problem is that in the morning the thorns grow inward."],
            ["After the weekend the most difficult task is to remember names… "],
            ["It’s better to be a worldwide alcoholic, than an Alcoholic Anonymous."],
            ["In principle, I can stop drinking, the thing is – I don’t have such a principle."],
            ["I know my limits: if I fall down it means enough."],
            ["Why is there so much blood in my alcohol system?"],
            ["I say NO to the drugs, but they won’t listen."],
            ["Smoking is a slow death! But we’re not in a hurry…"],
            ["I became a vegetarian – switched to weed."],
            ["We must pay for the mistakes of our youth… at the drugstore."],
            ["What does plug pay their developers in xp?"],
            ["Color blind people are lucky; They can't tell if their plug name is gray or purple"],
            ["Friends come and go. Enemies pile up."],
            ["I would like to know when someone unfriends me on Facebook, so I could like it."],
            ["Maybe you need a ladder to climb out of my business?"],
            ["I like the sound of you not talking."],
            ["I’m not a Facebook status, you don’t have to like me."],
            ["I found your nose in my business again."],
            ["If a man gives you flowers without any reason, it means there is a reason."],
            ["Women can perfectly understand other people, if the people are not men."],
            ["Women are very good! They can forgive a man…even if he’s not guilty."],
            ["A toast to women: it’s not that good with you, as it is bad without you."],
            ["If you think you are fooled by destiny – remember Al Bundy."],
            ["God gave us the brain to work out problems. However, we use it to create more problems."],
            ["Don’t be nervous if someone is driving ahead of you- the world is round, just think that you’re driving first!"],
            ["If you can’t beat the record, you can beat up its owner."],
            ["Dream carefully, because dreams come true."],
            ["Everything always ends well. If not – it’s probably not the end."],
            ["If you want but can’t. It means you don’t want it enough."],
            ["It’s better to do and regret than regret of not doing."],
            ["Everything you do you’re gonna regret. But if you do nothing – you will not only regret but will also suffer."],
            ["You’re not sure – outrun and make sure."],
            ["The deeper the pit you’re falling into, the more chance you have to learn how to fly."],
            ["If you don’t care where you are – it means you’re not lost."],
            ["The light at the end of the tunnel – are the front lights of a train."],
            ["If the fortune has turned her back on you, you can do whatever you want behind her back."],
            ["It is said that, you can’t buy happiness. You only need to know the right places…"],
            ["If there would be no fools – we would be them."],
            ["Artificial intelligence is nothing compared to natural stupidity."],
            ["Common sense is not so common"],
            ["Why there are mistakes that can’t be set right and why are there no mistakes that can’t be done?"],
            ["Think how much you could do if you wouldn’t care what others think."],
            ["I made the same mistakes for so many times, that now I call them traditions."],
            ["Here food is a luxury that you don’t need to take your pants off for."],
            ["Some people feel the rain. Others just get wet."],
            ["Some people are so poor, all they have is money."],
            ["It’s just a bad day, not a bad life."],
            ["Common sense is like deodorant - The people who need it never use it"],
            ["Walk away from stupidity and your world becomes a better place"],
            ["Common sense is not a gift, it's a punishment.  Because you have to deal with those who don't have it."],
            ["I know I don’t look like much now, but I’m drinking milk "],
            ["I know I don’t look like much now, but I’m drinking milk. "],
            ["If I followed you home, would you keep me? "],
            ["Hey, did plug just shit it's pants again? "],
            ["Hey, did plug just shit it's pants again? "]
        ],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            BAN: "https://rawgit.com/SZigmund/basicBot-customization/master/blacklists/Banned.json",
            NSFW: "https://rawgit.com/SZigmund/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/SZigmund/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);

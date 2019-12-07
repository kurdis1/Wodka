const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjUxODc4NjY2Mzk3MDI0MjY5.XelQag.cncfiTaGeMyyrzkdM51gkum54BU'

bot.on('message', function(message) {
    if(message.content === 'hallo wodka bot') {
        message.reply("Hallo")
    }
});


bot.on('message',function(message) {
    if(message.content === ">help") {
        message.reply("Mit denn befelen >wodka kannst du ein wodka bild sehen. >wodka info 1 kannst du info von wodka sehen")
    }
});

bot.on('message',function(message) {
    if(message.content === ">wodka") {
        message.reply("Das ist Wodka Gorbatschow mit 37,5% Vol ", {files:['https://images-na.ssl-images-amazon.com/images/I/81SjMMrIXIL._SL1500_.jpg']});
    }
});

bot.on('message',function(message) {
    if(message.content === ">clear") {
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            return
        }
        message.delete()
        message.channel.bulkDelete(100).then(() => {
            message.channel.send("Habe die Nachrichten gelöscht!").then(msg => msg.delete(1000));
        })
    }
});

bot.on('message', function(message) {
    if(message.content === '>wodka info 1') {
        message.reply("Wodka info 1. Wodka ist eine meist farblose Spirituose mit einem Alkoholgehalt von idealerweise 40 Volumenprozent. Er zeichnet sich besonders durch seinen fast neutralen Geschmack und das Fehlen jeglicher Fuselöle, künstlicher Aromen oder anderer fermentierter Stoffe aus. Er wird entweder pur getrunken oder in Cocktails vermischt.")
    }
});

bot.on('message', function(message) {
    if(message.content === '>wodka info 2') {
        message.reply("Wodka info 2. Wortherkunft. Das Wort Wodka kommt aus den slawischen Sprachen. Es ist ein Diminutiv des polnischen Wortes woda bzw. des russischen Wortes вода für ‚Wasser'. Früher wurde die Spirituose auf Deutsch Wutka genannt, was der polnischen Aussprache (wódka) am nächsten kommt.")
    }
});

bot.on('message', function(message) {
    if(message.content === '>wodka info 3') {
        message.reply("Wodka info 3. Er wird meist aus Weizen, Roggen, Gerste, Mais oder Kartoffeln hergestellt. Du kannst auch nur Zucker und Melasse verwenden oder sie zu anderen Zutaten hinzufügen. Ein Schnapsbrenner hat sogar aus Pinot Noir Wodka destilliert. Was auch immer du wählst, du brauchst Zucker oder Stärke, um Alkohol zu produzieren.")
    }
});

bot.on('ready', () => {
    console.log("der Wodka Bot gestartet!")
});

bot.login(process.env.BOT_TOKEN)

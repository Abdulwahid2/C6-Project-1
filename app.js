const { request, response } = require('express');
let express = require('express');
let nodemon = require('nodemon');
let app = express();


const port = 3000 || process.env.PORT

// 
app.get('/', (request, response) => {
  response.send('<p style="color: red;">running through the field,on a rainy night you come upon a hole in the old barn wall  you have never seen before,rain has soacked through your coat and into your furr,cold,hungery and battered by the wind you scurry into this new found refuge , you try to squeez the water out of youre hat and coat but to no avail,the cold entensfy your hunger,you need to find something to eat. <br><a href=/intro>Inspect the tunnle</a></p>');
});

//intro
app.get('/intro', (request, response) => {
  response.send('<p style="color: red;">you raise your nose to catch a sent, you smell something, is that cheese ? you ask your self. you see a long tunnel covered in cobwebs with insects that has been long stuck to it , you notice some of the insects are freshely wraped and still wriggling,there is a spider near by,and from what you can tell its a big one<br><a href=/proceed>Move down the tunnle</a></p>');
})

app.get('/proceed', (request, response) => {
  response.send('<p style="color: red;">you scurry quitely down the tunnle, the sound of rain is a distant noise,battering the walls in anger,the wind mad, howling and thrashing looking to abuse anyone and anything in its path, a feel of dread creeps up inside you, like you are being watched as soon as you clear the tunnel, a rock falls right on top of you,as if it was meant to crush you!, you are lucky to get out of the way in time <br><a href=/scene1>Explore your surroundings</a></p>');
})
//scene1 
app.get('/scene1', (request, response) => {
  response.send('<p style="color: red;">you look around and sniff the air,but its dark, and mice eventhough are nocturnal they have bad eyesight and you cant see anything but you can smell the cheese again,the smell is closer,you pin its direction and head that way , as  you get closer to the smell, you can make out 2 box shapes, one is small with a cover on it, the other is larger reflecting light when lighting strikes <br><a href=/smallbox>head to the smaller box</a><br><a href=/bigbox>head to the bigger box</a></p>');
});
//smallbox 
app.get('/smallbox',(request,response)=>{
  response.send('<p style="color: red;">you find 3 small wooden sticks with round pink tips that has a strong smell,and a wide rough strip on the side,you have found a match box,you strike the match against the rough strip on the side and light fills the room, a big spider shadow is reflected on the ceiling , you see it quickly move away from the light into the darkness, you gulp and turn around to the other box…<br><a href=/GrabCheesLight>head to the mousetrap</a></p>')
});
//bigbox
app.get('/bigbox',(request,response)=>{
  response.send('<p style="color: red;">you see a big wooden box with bent metal in wavy shapes , and you see a piece of cheese on its center, its old and a bit moldy, but its edible and right now looking delicious, you <br><a href=/smallbox>head to the smaller box</a><br><a href=/GrabCheesNoLight>grab the cheese</a></p>')
});


//cheese  no light //death1
app.get('/GrabCheesNoLight',(request,response)=>{
  response.send('<p style="color: red;">Mouth watering and nose filled with the toxic smell of delicious cheese you lean forward head first and take a deep breath, your body shivers in satisfaction as you lift the cheese with both of your hands and grin dumbly at it, pain shoots through your face, and you are filled with terror, it was a mouse trap ! you are stunned how am I  not dead yet you think, but your nose and hands are stuck, you hear the steps of a big creature, it must be the spider, you kick and scream and struggle, but you are not going anywhere, the spider lifts your hind legs and slash your stomach open, you are over come with pain and your shrieks fill the barn, you realize you are going to die..you know it, your entrails are dangling on top of the spider open mouth who is…laughing!You struggle and scream till your screams fade into the night and the only sound that is left is of the spider feasting on fresh mouse flesh<br><a href=/ >PlayAgain?</a></p>')
});

//cheese with light
app.get('/GrabCheesLight',(request,response)=>{
  response.send('<p style="color: red;">Now you have lit a match, you can see where the cheese is resting on, it’s a mouse trap!, you were lucky not to go for the cheese first,  It would have been a fatal mistake…you <br><a href=/scene2 > grab the cheese </a></p>  ')
});

//scene2
app.get('/scene2',(request,response)=>{
  response.send('<p style="color: red;">you sigh in satisfaction as you devour the last bit of cheese , you hold up your torch and decided to push forward , you take two steps to see 3 frogs stand on their hind legs, covered in leaf armor and 2 of them are wielding spears, and the other holding a big hooked axe, they wanted to be seen, you smile your best smile and move to the frogs<br><a href=/beCharsmatic > try charm them </a><br><a href=/beHostile > Try intimdate them</a></p> ')
});



//try charm
app.get('/beCharsmatic',(request,response)=>{
  response.send('<p style="color: red;">you walk up to the frogs and hold your hat to your chest and greet the frogs, the biggest most scared frog looks amused by your action, Hello mighty warriors you say, its my pleasure to meet your famed peoples, you reach out your hand to shake theirs, the big red from jabs you not to gently with the butt of his spear, it takes all your strength and will not to double over in pain, that’s close enough mouse, the only reason your are still alive is cause the old spider likes his victims fresh and alive, so I make you an offer, help us hunt the spider, do you think you can do that little mouse <br><a href=/acceptToHelp > Accept </a><br><a href=/refuseToHelp > Decline</a></p>')
});
//try intimdate
app.get('/beHostile',(request,response)=>{
  response.send('<p style="color: red;">Your ruffle up your fur and puff your chest and you walk to the frogs with all the menace you can muster, as your are getting closer you sqeek  I hope you boys aren’t…thwack,faster than you can see or think possible the big red spider sweeps you of your feet with his spear, and slams the spears butt into your mouth cracking your tooth, his companions croack short and fast laughing at your attempt,your mouth bleeding eyes filled with tears you feel the foot of the frog on your chest and the tip of the spear slightly touching your eyes, the red frog face splits into a smile and says, bait shouldn’t talk , if I didn’t need your cooperation my spear would have introduced its self to brain, what say you little mouse,help me and maybe save your life <br><a href=/acceptToHelp > Accept </a><br><a href=/refuseToHelp > Decline</a></p>')
});
//accept helping them
app.get('/acceptToHelp',(request,response)=>{
  response.send('<p style="color: red;">You agree to help the frogs, the red frog who did not bother introduce himself says we have to trap it,  the spider is canny and wont come out to face us or just wander into out trap, we need  you the mouse as bait, you ponder this for a bit, you either get eaten by the frogs here and now, or fight the spider and might survive and not be eaten , regardless its not going well for you<br><a href=/setATrap >Set a trap</a></p>')
});
//decline hellping them //death2
app.get('/refuseToHelp',(request,response)=>{
  response.send('<p style="color: red;">you stand in front of the frogs defiant and say, I will not help you while you bully me into being your bait! i rather work on my own if you are not going to work in an agile way !, the lead frog none to hastily jabs your leg with a spear which forces you to kneel and scream in pain, the frog with the axe takes a step and hacks in a downward motion at you, you bring up your hands in defense, but the axe goes through them and cuts over a courter of your snout, eyes wide you gasp for breath but nothing but blood flows into your lungs you cough and try scream, its hard to scream without a full tung and nothing but bloody gasps escapes from you, you are then dragged and tossed on the mouse trap which snaps hatefully at your body, it bears down hard on your are lost your grip on life and a shadow of a spider covers your vision, all you can hear as you fade into the dark is its excited teeth snapping hungerly…<br><a href=/ >PlayAgain?</a></p>')
});
//setting up trap
app.get('/setATrap',(request,response)=>{
  response.send('<p style="color: red;">You agree to trapping the spider, the frogs node , big red says it is the safest and most sure way of capturing the spider, he explains that you’ll be tied up and laid Infront of the trap the spider will be caught un aware and the frogs will be able to get the jump on him before he can get away, or possibly eat you<br><a href=/setUp >Nod...</a></p>')
});
//the setup
app.get('/setUp',(request,response)=>{
  response.send('<p style="color: red;">You are held down and tied up, the frogs are being rough, and fear grips you , if they are acting its pretty good acting but you don’t think they are, you tossed roughly by a camp fire, and the frogs start becoming loud , they speak of the best way to cook you , and argue weather you should be skinned or just cut to pieces while you still live to be fresh for as long as possible, they notice the spider now moving freely his meal is about to be eaten by someone else, the frogs mock him and sing and dance around the fire and your body, the spider descends and charges the frogs ,two of  the frogs fight him back carefully , pocking spears at him and hold him at bay while the third masterfully covers the mouse trap in dead leaves and places you on a big rock Infront of it, he calls for the other frogs to hold the spider back a bit longer he is about to slaughter you, the spider screeches in anger and rushes through the frogs knocking them down, he is moving pretty fast towards you, the frog stands over you protectively, his axe in hand, his confidence waver and he is  looking unsure, you can see the spider is going to walk right over the trap, and not step on it, the frog swings his axe in a cleaving arc forward, but even you can tell he swung too soon, as soon as his axe hit the floor he leaps back the spider screams in pain and falls forward nearly crushing you, you struggle to roll away from the screaming creature, the frog activated the trap and its nearly splitting the creature in half now, chaos followed, everything flowed in a broken pattern as if you were blinking too fast, a spear jabbing the spider in the throat, a screech, curses and more spear jabs and screeches and curses, and you fade away into darkness<br><a href=/conclusion >Open your eyes</a></p>')
});
app.get('/conclusion',(request,response)=>{
  response.send('<p style="color: red;">You wake to the smell of cooking, and the warmth of fire close to you, you jump up in fear and hear loud croaks, the frogs are laughing at you, how rude! you see the frogs scratched and wrapped up in bandages but none of them severely wounded, there is chunks of spiders pilled up neatly on top of each other’s, the big red frog, pulls a stick from the fire with spider meat on it and hands it to you, he smiles and nods his approval at you as you eat in silence…you survived the day, and think that you will never forget it anytime soon, the food fills you up with warmth and the pleasant chatter and cracking around the fire, is contagious and fills you with a warm sense of companionship, now you are alive and feeling somewhat safe, you reflect back and think  that this is something you might enjoy doing, you look at the big frog and say, are you guys looking for bait ? , the frogs laugh their croaky laughs and the one with the axe slaps your back, the rest of the night goes by laughing and singing and stories of victory’s won and loved one lost and you cant help but feel at home<br><a href=/ >PlayAgain?</a></p>')
});








app.listen(port, () => {
  console.log(`Game server listening at http://localhost:${port}`)
})
function startWebsite() {
  document.getElementById('startScreen').style.display = 'none';
  document.body.classList.add('loaded');

  const audio = document.getElementById('start-audio');
  if (audio) {
    audio.play().catch((e) => {
      console.log("Autoplay blocked by browser:", e);
    });
  }
}

const randomMessages = [
  { type: 'text', content: "i love my shemale gf <3" },
  { type: 'text', content: "im never letting you go" },
  { type: 'image', src: "images/2.jpg", alt: "Smile photo" },
  { type: 'image', src: "images/3.jpg", alt: "Smile photo" },
  { type: 'image', src: "images/4.jpg", alt: "Smile photo" },
  { type: 'image', src: "images/5.jpg", alt: "Smile photo" },
  { type: 'text', content: "i hope you like this gift " },
  { type: 'text', content: "do you love me ? " },
  { type: 'text', content: "backflip and shit idk bruh im brain dead " },
];
const challange = [
  { type: 'text', content: "Send me a voice note saying “I love you” in the softest voice you can." },
  { type: 'text', content: "Write a short poem about how you feel when we’re apart." },
  { type: 'text', content: "Set a reminder to say “Good Morning” and “Goodnight” with a new nickname every day for a week." },
  { type: 'text', content: "Record a video pretending I’m beside you — talk to me like I’m there." },
  { type: 'text', content: "Draw a heart on your hand, take a photo, and write “I’m yours” underneath it" },
  { type: 'text', content: "Tell me the exact moment you started missing me today." },
  { type: 'text', content: "Record a “Day in My Life Without You” video and send it." },
  { type: 'text', content: "Send me a “hug” photo — wrapping your arms around a pillow." },
  { type: 'text', content: "Make a list of 10 things you want us to experience together IRL." },
  { type: 'text', content: "Write 5 sentences starting with “If you were here, I would…" },
  { type: 'text', content: "Make a short video every day (3 seconds) telling me the moment you loved me even more." },
  { type: 'text', content: "Record yourself whispering a secret you’ve never told me before" },
  { type: 'text', content: "Send me a photo of the sunset or something beautiful with a message: “Wish you were here." },
  { type: 'text', content: "Try to imitate my laugh perfectly and send me the recording." },
  { type: 'text', content: "try to mimic the weird face i make that makes you laugh" },
  { type: 'text', content: "Send me a voice note singing “lebron lebron lebrooon james'" },
  
  

];
function openCard(type) {
  const popup = document.getElementById('popup');
  const body = document.getElementById('popup-body');

  let content = "";

  switch(type) {
    case 'Random':
  const randomItem = randomMessages[Math.floor(Math.random() * randomMessages.length)];

  if (randomItem.type === 'text') {
    content = `
      <h2>Just a Thought 💭</h2>
      <p>${randomItem.content}</p>
    `;
  } else if (randomItem.type === 'image') {
    content = `
      <h2>Here's something for you 💌</h2>
      <img src="${randomItem.src}" alt="${randomItem.alt}" style="max-width:100%; border-radius:10px;" />
    `;
  }
  break;
  case 'challange':
  const randItem = challange[Math.floor(Math.random() * challange.length)];

  if (randItem.type === 'text') {
    content = `
      <h2>Just a Thought 💭</h2>
      <p>${randItem.content}</p>
    `;
  } else if (randItem.type === 'image') {
    content = `
      <h2>Here's something for you 💌</h2>
      <img src="${randItem.src}" alt="${randItem.alt}" style="max-width:100%; border-radius:10px;" />
    `;
  }
  break;
    case 'sad':
              content = `
        <h2>Hey love </h2>
        <p>Take a deep breath. I wish I could be next to you right now. I hate knowing you're down. I'm here. Everything will be okay, I promise. Here's a hug </p>
        <img src="images/sad.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'happy':
              content = `
        <h2>MY PRINCESS !</h2>
        <p>YES BABE SMILE EVEN HARDER, im so proud of you , i dont know what made you happy but i know that im proud of you and know that you deserve to always be happy</p>
        <img src="images/happy.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'hungry':
              content = `
        <h2>my hungry queen </h2>
        <p>I wish i was with you now, id have made you cookies or my mid biryani ( im sry im still learning), can you eat a choclate now ? or a mango stick icecream ? OR GARLIC BREADDD, i love you !!</p>
        <img src="images/hungry.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
          <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'miss':
              content = `
        <h2> I MISS YOU TOO MERI CHOTE BANDRIA </h2>
        <p>i might be busy now ? working , studying , gym , or just with life , idk what im doing at that time, but i know one thing for sure , im thinking of you in the mean time </p>
        <img src="images/miss.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
      case 'dance':
              content = `
        <h2>HAHHA you thought</h2>
        <p>Suck it you beautiful idiot </p>
        <img src="images/dance.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'angry':
              content = `
        <h2>IM SORRYYYYY</h2>
        <p>i dont know what i did , i dont know if im wrong or not, but idc, im sorry my love, i cant stand a second knowing that you are angry at me, ill do anything to make it up to you, also this is who you are angry at</p>
        <img src="images/angry.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
      case 'love':
              content = `
        <h2>mei tum se pyaar carta ho !!! </h2>
        <p>you know i can write million words trying to describe how much i love you, but i also know you are kinda bored from all the paragraphs i made, so to make it short, to show you how much i truly love you, id start listening to my mortal enemy and nemesis and your gf "Billie"</p>
        <img src="images/love.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'worry':
              content = `
        <h2>worried my baby ?</h2>
        <p>"Whatever’s on your mind , we’ll deal with it. One thing at a time. You’re not on your own,eventhough im sure you can handle everything by your own, you are way stronger than you think</p>
        <img src="images/worry.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'birthday':
              content = `
        <h2>MY BIRTHDAY PRINCESSSSSS !!!</h2>
        <p>Today’s about you, and only you, And no matter how we celebrate , just know I’m glad you exist. my beautiful queen</p>
        <img src="images/birthday.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
          <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'Anniversary':
              content = `
        <h2>To my wife, the mother of my kids, and my lovely baby</h2>
        <p>Another checkpoint. Another reason I’m glad we’re doing together. Here’s to more</p>
        <img src="images/Anniversary.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'Pep':
              content = `
        <h2>RAAAAAAAAAAAAAAAH</h2>
        <p>WHAT ARE YOU THINKINGG !! ARE YOU DOUBTING YOURSELFF !!! THE SMARTEST, PRETTIEST, FUNNIEST, STRONGEST GIRL ??? BRUH WHAT CANT YOU DO ?? YOU CAN DO EVERYTHING ! WHATEVER YOURE GOING TO DO YOU GOT THISSSSSS, I BELIVEEEEE.</p>
        <img src="images/Pep.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
      case 'Valentine':
              content = `
        <h2>Will you be my Valentine ?</h2>
        <p>I love you, im addicted to you , you are all i think about !, im so fucking lucky that i have you, know that ill do anything i can for you. </p>
        <img src="images/Valentine.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'Lonely':
              content = `
        <h2>Hey love </h2>
        <p>you are feeling lonely, even though you might not be alone, its ok, just belive me, we all love you, we all adore you, and we will do everything for you,i know i will, im always here with you my beautiful baby, if not physically nor mentally then by soul.</p>
        <img src="images/Lonely.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'Christmas':
              content = `
        <h2>Hohohohoho</h2>
        <p>Iwill you be the cookies to my milk ? </p>
      `;
      break;
    case 'sleep':
              content = `
        <h2>Cant sleep my baby ??😔</h2>
        <p>It's okay just Try not to fight it. Just breathe, calm down, everything will be ok,can you take a hot shower and drink warm milk ? maybe eat a banana with a drizzle of honey, trust me , it works , i love you/p>
        <img src="images/sleep.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'Want':
              content = `
        <h2>really ?</h2>
        <p>Oh, you do? Good. I want you too , badly. I PROMISE IM DOING MY BEST TO BE BY YOURSIDE !</p>
      `;
      break;
      case 'Excited':
              content = `
        <h2>yesss i love this smile and this energy !!! </h2>
        <p>That spark in you when you’re excited ommggg im meltingg I love it. Don’t hold back — just go all in, i love youuuuuuuu</p>
      `;
      break;
    case 'Tired':
              content = `
        <h2>Hey love 😔</h2>
        <p>You’ve done enough today. you deserve rest, if i was by your side i would've given you the best massage</p>
        <img src="images/Tired.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'long':
              content = `
        <h2>Hey love </h2>
        <p>You don’t need to do anything right now. Just breathe. Today’s done</p>
        <img src="images/long.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
          <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'Overwhelmed':
              content = `
        <h2>my strong queen</h2>
        <p>Too much at once? Pause everything for 10 minutes. Just sit. You’ll handle it , bit by bit i belive on youu!</p>
      `;
      break;
    case 'Giveup':
              content = `
        <h2>give up ??? you ????</h2>
        <p>so you are telling me that aadya !! the strongest human is giving up ?? bruh stfu dude are you kidding me ? i dont even know what to write cuz i dont think you will ever give up, yeah you wont read this one, ig ill write anything , طيزك حمره لو قررتي تترجمي الكلام ده</p>
      `;
      break;
      case 'Afraid':
              content = `
        <h2>hiii my strong babyyyy </h2>
        <p>"It’s okay to be scared, Honestly. like you know that Life throws stuff at us that feels way too big, and sometimes we just freeze. But whatever it is you’re facing ,you’re not doing it alone. I’ve got your back. And I trust you more than you probably trust yourself right now. Breathe. Take it one step at a time. You’ll handle it , just like you always do."</p>
      `;
      break;
    case 'Decision':
              content = `
        <p>
          "I know this decision feels heavy. and I also know you , you are the smartest , wisest girl ,and you don’t rush into things. You think them through, you care, and you weigh everything. So trust your gut. Whatever you choose, even if it’s scary, I’ll be right here. you’re not alone, not even for a second."

          </p>
       
      `;
      break;
    case 'Sick':
              content = `
        <h2>my poor babyyyy</h2>
        <p>"I hate that you’re feeling like this and I’m not there to take care of you. I’d literally be making you soup and wrapping you up in a blanket like a cute idiot burito . But until I can be there, do me a favor , rest, drink something warm, don’t ignore how your body feels. And yeah, I know you’ll say you’re fine, but still, slow down. You don’t need to do anything right now except let yourself heal. And if you need someone to rant to or just send grumpy voice notes  I’m here meri chote bandria."</p>
        
      `;
      break;
    case 'jealous':
              content = `
        <h2>Hey asshole</h2>
        <p>"Okay, yeah maybe I was being a little jealous. I’m not proud of it, but I’m not gonna lie about it either,(also stop being an asshole, i know you thrive on me being jealous, just go marry em you asshole) Sometimes my brain just jumps into 'what if' mode, and I overthink. Doesn’t mean I don’t trust you , I really do. I just love you sm, and sometimes that turns into me being dumb for a second. Thanks for putting up with it."</p>
        <img src="images/jealous.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'Crazy':
              content = `
        <h2>sorry</h2>
        <p>did i drive you crazy ?, (probably your fault btw you asshole),im sorry love , idk whaht i did, If I crossed a line or pushed your buttons too hard, call me out. I can take it. And even if I’m annoying as hell, I’m still your annoying person, okay?"

</p>
      `;
      break;
      case 'Disappointed':
              content = `
        <h2>Hey love </h2>
        <p>"Disappointment hits different when you really cared. I don’t know what happened exactly, but I can tell you this , you’re allowed to feel what you feel. Don’t brush it off or pretend it didn’t matter. It mattered to you, so it matters. You’re allowed to be upset. Just don’t carry the blame that’s not yours. You did your part , that’s enough."</p>
       
      `;
      break;
    case 'Stressed':
              content = `
        <h2>Hey everything will be ok</h2>
        <p>"I know your brain feels full right now, like there’s too much going on and not enough time to handle any of it. You don’t even get a second to breathe without thinking of the next thing. But hey you don’t have to do everything perfectly. You don’t have to carry it all by yourself either. Whatever it is, break it down. Handle one thing. Then the next. And if nothing else, pause for a bit. Drink something. chill, relax, And if your chest still feels tight , talk to me. You don’t need to keep it all in, im always here you know that right ?"</p>
        
      `;
      break;
    case 'Bored':
              content = `
        <p>so you are bored , huh ? here are few suggestions , record a long ass voice note saying a random story , send me random reels , watch any of the shit that i suggested and you still didnt watch , maybe play the challanges i made for you , or text me so we can be bored together? (i cant be bored when im with you btw)</p>
       
      `;
      break;
    case 'I’m Angry':
              content = `
        <h2>Hey asshole</h2>
        <p>yeah its kinda obv im angry af, idk what is the reason but its probably about you doing something that i expressed that i dont like , if you want to make me feel better , just apologize while you actually mean it , and give me reasons to not worry or be angry, btw you do know that ill always love you, right ?</p>
    
      `;
      break;
    case 'Successful':
              content = `
        <h2>LETS GOOOOOOOOOOOOOOOOOOOO</h2>
        <p>I KNEW ITTT !!! , IM SO FUCKING PROUD OF YOU , YOU FUCKING IDIOT HAHAH, YOU DESERVE THIS , you worked so hard for this, even if you didnt say , i just know ,so celebrate and have fun and smile (dont drink) , i love you</p>
       
      `;
      break;
      case 'Doubt':
              content = `
        <h2>really ?</h2>
        <p>i just cant wrap my head around the idea of something so perfrect doubting it self, like bitch wtf , you are the greatest, anyways You’re more capable than you realize. You’ve gotten through worse. I’ve seen the way you try, the way you care, the way you show up , even when you feel like you’re failing. Don’t underestimate that. You’re doing way better than your mind’s telling you."</p>
       
      `;
      break;
    case 'Bad':
              content = `
        <h2>Hey love 😔</h2>
        <p>"Today’s just not it, huh? Everything feels heavier, slower, and probably nothing went your way. I wish I could be there right now to just sit next to you, But since I can’t, I’ll say this, bad days come. They’re annoying, and they suck, but they don’t last. Eat something, take a long shower, turn your brain off for a while , even if it's just scrolling through insta reels. I’ll be right here when you’re ready to talk or laugh or even fight idk. We’ve got this."</p>
      
      `;
      break;
    case 'Compliment':
              content = `
        <h2>MY BEAUTIFUL !!</h2>
        <p>first i love you so much, ok lets talk about anything i love about you , your beautiful hair, your pretty lips , your cheeks(your other cheeks too), YOUR CUTE NOSE , your eyebrows, aku and kira hehehe , your laugh , your voice , your weird ass humor , the way you treat and bully me you asshole, your intellignece , basically everything about you, i love you, also, just look at thie beautiful princess</p>
        <img src="images/Compliment.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
          <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'busy':
              content = `
        <h2>sorry love</h2>
        <p>"I hate that I can’t give you my full attention right now. You don’t deserve half-responses or delays , but you know I don’t want that either. Just know that I’m not ignoring you or forgetting you. I’ll be back as soon as I can, and I’ll want to hear about everything I missed , even the small, random stuff. So save it all for me."</p>
       
      `;
      break;
    case 'inspiration':
              content = `
        <p>just look in the mirror bruh, remember who the fuck you are</p>
        <img src="images/inspiration.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
      case 'date':
              content = `
        <h2>Hey wifeyyy!</h2>
        <p>"It’s crazy to think how far we’ve come. I still remember how it all started , that awkward excitement, the long talks, and all the little things that made me fall for you. And now look at us. We’ve changed, and still chose each other. I don’t know what the future holds exactly, but I do know I want to keep choosing you every single day. Happy us day."</p>
        <img src="images/date.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
      case 'ignore':
              content = `
        <h2>so you are ignoring me</h2>
        <p>this is who you are ignoring btw</p>
        <img src="images/ignore.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
          <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'my birthday':
              content = `
        <h2>this might seem cringe</h2>
        <p>i mean all of this is cringe ik, im sorry , but love is cringe , anyways, the only gift i want is you, just send me a pic of you smiling, thats it</p>
  
      `;
      break;
      case 'saidlove':
              content = `
        <h2>Hey love </h2>
        <p>That day wasn’t just a milestone , it was a shift, my life changed for the better , (just reminding you that you said i love you first hehehhehehehehehhe,(btw i would have told you the same day lmao , but you beat me to it))</p>
        <img src="images/saidlove.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
          <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
    case 'hitting':
              content = `
        <h2>FUCK THEM BITCHES</h2>
        <p>you are strong , kick the shit out of them , or curse them , do you know black magic ? if you want to rant and yap im here , want ideas for revenge ? im also here ,(unless you want to hit me , im sorry , -you can hit me btw-)</p>
      
      `;
      break;
      case 'wonder':
              content = `
        <h2>Hey love </h2>
        <p>im probably working , studying , at gym , or studying , or maybe at a family gathering, im not sure idk, but what i know is that im thinking about you while doing so, there is no passing moment without you just popping in my head, i love you</p>
  
      `;
      break;
    case 'forget':
              content = `
        <h2>sorry love</h2>
        <p>"I know I forgot something I shouldn’t have. I won’t make excuses ,I just wanna say I’m sorry. It doesn’t mean I care less.I hate that I made you feel like that. You have every right to be upset. But I promise I’m not brushing it off. I’m taking this in. And I’ll do better, because you matter to me more than I probably say out loud."</p>
      `;
      break;
    case 'vacation':
              content = `
        <p>"Okay wait , you went without me? Rude 😤
          ok fine. You deserve a break, new sights, fresh air, all of it. But don’t act like I’m not dying for a picture every five seconds. I wanna see the food, the view, your face, your face , your face , aku and kira , wait who said that -i said that-. I want to feel like I’m there, even if it’s through your camera roll. And when you get back, I’ll be needing the full debrief over snacks and long calls."</p>
      `;
      break;
    case 'advice':
              content = `
        <h2>sure</h2>
        <p>you didnt listen to myadvice huh , ok i know you think im an idiot , but thats on you , you are the reason im an idiot when im with you , anyways , its ok , i know im probably right and you feel guilty for not doing what i said , so i gotta tell you this .... I TOLD YOU SO HAHAAAAAA</p>

      `;
      break;
    case 'bathroom':
              content = `
        <h2>ok , read this little article i wrote</h2>
        <p>"I have acceptance, not satisfaction."
On a long journey through the pages of the manga Oyasumi Punpun—or Goodnight Punpun—by the exceptional author Inio Asano, I found myself in a constant confrontation with myself.
It wasn’t just a drawn story; it was a shattered mirror reflecting my broken parts, exposing what I was afraid to see, whispering to me in a soft voice:
"You’re here, in every detail, in every breakdown, in every deafening silence after the pain."
Punpun wasn’t just a story that made me understand the nature of my weakness, or my soul’s sad inclination toward “the pitch-black.”
It also taught me how to live with the contradiction inside me.
I won’t talk about the brilliance of the characters, or the deep psychological structure behind every detail.
Words would fail me, even if I tried.
But amidst all that intensity, there was one character who taught me a strange kind of survival.
The Uncle: Yuichi.
Yuichi appears as a “substitute father” after a series of painful events forced Punpun’s real father to disappear.
The uncle steps in—not just as a father figure—but as a heavy shadow of someone who lost inner peace long ago.
Yuichi is not an ordinary man.
He’s someone who’s being consumed from the inside—not just by his past—but by his inability to forgive himself.
As if he’s putting himself on trial every day,
Whipping himself every moment.
Not because he has to...
But because he simply doesn’t know how to do anything else.
And when we witness his development—his character arc—we realize he goes through a pivotal moment:
Should he end his life...
Or live with it?
Not to overcome the pain,
But to learn how to live with it.
In a crucial scene, while speaking with Midori, he says:
"I have acceptance, not satisfaction."
That line struck me somewhere deep.
I paused at it.
And I kept thinking…
At first, I thought acceptance and satisfaction were the same thing...
Just two steps on the same staircase.
But the truth?
They are completely different paths.
Acceptance is when you look at your reality and say:
"I see you... and I’ll live you, even if you're bitter."
Acceptance is awareness—it’s courage, not surrender.
It’s realizing that escape isn’t always a solution, and that some things you must live through in order to understand.
But satisfaction?
That’s a deeper level… a state of peace, a true internal surrender.
Not only do you see reality, but you see within it a meaning... a wisdom... a reason.
Like someone looking at a wound and saying:
"I didn’t want it... but maybe it taught me something."
And me?
Right now, I’m somewhere in between.
I accept, but I’m not satisfied.
I’m standing in the middle—I see my pain, but I can’t embrace it.
I’m not resisting it, but I also don’t find it beautiful.
Maybe acceptance is the first stage of maturity—
The first moment you understand that life is not fair, and it won’t always give you what you deserve.
A moment when you realize that some things won’t be fixed,
Won’t be forgotten,
But will live inside you… like a scar.
When Yuichi said that line,
He was declaring a bitter moment of awareness.
A moment of realizing that he may never reach satisfaction,
But he can live with acceptance.
Maybe he’s waiting for something to save him…
Himself?
Someone else?
Or perhaps the calm embrace of death that closes the story?
Who among us hasn’t been in a place like that?
We’ve all asked ourselves, in that silent inner voice:
Can I live with the scar, or will I surrender to it?
Maybe the journey isn’t always about arriving,
But about your ability to keep walking…
Even while carrying your pain.
And maybe the miracle isn’t in healing,
But in your ability to stay alive despite the fracture.
So when you reach the moment where you can say:
"I have acceptance, not satisfaction."
Know that—despite everything—
You’ve begun to understand the meaning of life.

</p>
      `;
      break;
       case 'beauty':
              content = `
        <h2>you kidding right ?</h2>
        <p>I can yap for hours, but ill let you be the judge , just fucking look at this angel</p>
        <img src="images/beauty.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
       case 'feet':
              content = `
        <h2>Hey babyy</h2>
        <p>OOOH POOR BABYY , oh , um , lemme see em , ill make you feel better</p>
        <img src="images/feet.jpg" alt="Hug" style="max-width:100%; border-radius:10px; margin-top:10px;" />
           <audio id="auto-audio" style="display:none;">
          <source src="music/comfort.mp3" type="audio/mpeg">
        </audio>
      `;
      break;
       case 'Fight':
              content = `
        <h2>Hey asshole 💔</h2>
        <p>ok , we can fix this, 
"I don’t like how we left things. I never want us to become distant or hurt each other, even unintentionally. Whatever we said, whatever happened, I’m still here. Still choosing you. I wanna fix things. Not pretend it didn’t happen, but actually talk through it. If you’re ready, so am I. Let’s not let one bad moment erase everything good we’ve built."</p>

      `;
      break;
  }

  body.innerHTML = content;
  popup.classList.remove('hidden');
  // Restart animation
const popupContent = document.getElementById('popup-content');
popupContent.style.animation = 'none';
void popupContent.offsetWidth; // trigger reflow
popupContent.style.animation = 'fadeScale 0.4s ease forwards';
  
  const audio = document.getElementById('auto-audio');
  if (audio) {
    audio.play().catch((e) => {
      console.log("Autoplay blocked by browser:", e);
    });
  }
}


function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');

  // وقف كل الأصوات
  const audios = popup.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
document.getElementById('theme-toggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode');
});

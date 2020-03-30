document.getElementById('date').innerHTML = new Date().toDateString();

// SET UP VARIABLES
var display = document.getElementById("display");
var words = document.getElementById("words");
var timer = document.getElementById("timer");
var acc_wpm = document.getElementById("acc_wpm");
var interval = null; // use this to stop the timer later
const MAX_SECONDS = 60; // how long should the user be able to type
var seconds = MAX_SECONDS;
var word_bank = ["the", "of", "to", "and", "a", "in", "is", "it", "you", "that", "he", "was", "for", "on", "are", "with", "as", "I", "his", "they", "be", "at", "one", "have", "this", "from", "or", "had", "by", "not", "word", "but", "what", "some", "we", "can", "out", "other", "were", "all", "there", "when", "up", "use", "your", "how", "said", "an", "each", "she", "which", "do", "their", "time", "if", "will", "way", "about", "many", "then", "them", "write", "would", "like", "so", "these", "her", "long", "make", "thing", "see", "him", "two", "has", "look", "more", "day", "could", "go", "come", "did", "number", "sound", "no", "most", "people", "my", "over", "know", "water", "than", "call", "first", "who", "may", "down", "side", "been", "now", "find", "any", "new", "work", "part", "take", "get", "place", "made", "live", "where", "after", "back", "little", "only", "round", "man", "year", "came", "show", "every", "good", "me", "give", "our", "under", "name", "very", "through", "just", "form", "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn", "cause", "much", "mean", "before", "move", "right", "boy", "old", "too", "same", "tell", "does", "set", "three", "want", "air", "well", "also", "play", "small", "end", "put", "home", "read", "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high", "such", "follow", "act", "why", "ask", "men", "change", "went", "light", "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point", "mother", "world", "near", "build", "self", "earth", "father", "head", "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", "hard", "start", "might", "story", "saw", "far", "sea", "draw", "left", "late", "run", "don't", "while", "press", "close", "night", "real", "life", "few", "north", "open", "seem", "together", "next", "white", "children", "begin", "got", "walk", "example", "ease", "paper", "group", "always", "music", "those", "both", "mark", "often", "letter", "until", "mile", "river", "car", "feet", "care", "second", "book", "carry", "took", "science", "eat", "room", "friend", "began", "idea", "fish", "mountain", "stop", "once", "base", "hear", "horse", "cut", "sure", "watch", "color", "face", "wood", "main", "enough", "plain", "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel", "talk", "bird", "soon", "body", "dog", "family", "direct", "pose", "leave", "song", "measure", "door", "product", "black", "short", "numeral", "class", "wind", "question", "happen", "complete", "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece", "told", "knew", "pass", "since", "top", "whole", "king", "space", "heard", "best", "hour", "better", "true", "during", "hundred", "five", "remember", "step", "early", "hold", "west", "ground", "interest", "reach", "fast", "verb", "sing", "listen", "six", "table", "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center", "love", "person", "money", "serve", "appear", "road", "map", "rain", "rule", "govern", "pull", "cold", "notice", "voice", "unit", "power", "town", "fine", "certain", "fly", "fall", "lead", "cry", "dark", "machine", "note", "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain", "front", "teach", "week", "final", "gave", "green", "oh", "quick", "develop", "ocean", "warm", "free", "minute", "strong", "special", "mind", "behind", "clear", "tail", "produce", "fact", "street", "inch", "multiply", "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "surface", "deep", "moon", "island", "foot", "system", "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "stead", "dry", "wonder", "laugh", "thousand", "ago", "ran", "check", "game", "shape", "equate", "hot", "miss", "brought", "heat", "snow", "tire", "bring", "yes", "distant", "fill", "east", "paint", "language", "among", "grand", "ball", "yet", "wave", "drop", "heart", "am", "present", "heavy", "dance", "engine", "position", "arm", "wide", "sail", "material", "size", "vary", "settle", "speak", "weight", "general", "ice", "matter", "circle", "pair", "include", "divide", "syllable", "felt", "perhaps", "pick", "sudden", "count", "square", "reason", "length", "represent", "art", "subject", "region", "energy", "hunt", "probable", "bed", "brother", "egg", "ride", "cell", "believe", "fraction", "forest", "sit", "race", "window", "store", "summer", "train", "sleep", "prove", "lone", "leg", "exercise", "wall", "catch", "mount", "wish", "sky", "board", "joy", "winter", "sat", "written", "wild", "instrument", "kept", "glass", "grass", "cow", "job", "edge", "sign", "visit", "past", "soft", "fun", "bright", "gas", "weather", "month", "million", "bear", "finish", "happy", "hope", "flower", "clothe", "strange", "gone", "jump", "baby", "eight", "village", "meet", "root", "buy", "raise", "solve", "metal", "whether", "push", "seven", "paragraph", "third", "shall", "held", "hair", "describe", "cook", "floor", "either", "result", "burn", "hill", "safe", "cat", "century", "consider", "type", "law", "bit", "coast", "copy", "phrase", "silent", "tall", "sand", "soil", "roll", "temperature", "finger", "industry", "value", "fight", "lie", "beat", "excite", "natural", "view", "sense", "ear", "else", "quite", "broke", "case", "middle", "kill", "son", "lake", "moment", "scale", "loud", "spring", "observe", "child", "straight", "consonant", "nation", "dictionary", "milk", "speed", "method", "organ", "pay", "age", "section", "dress", "cloud", "surprise", "quiet", "stone", "tiny", "climb", "cool", "design", "poor", "lot", "experiment", "bottom", "key", "iron", "single", "stick", "flat", "twenty", "skin", "smile", "crease", "hole", "trade", "melody", "trip", "office", "receive", "row", "mouth", "exact", "symbol", "die", "least", "trouble", "shout", "except", "wrote", "seed", "tone", "join", "suggest", "clean", "break", "lady", "yard", "rise", "bad", "blow", "oil", "blood", "touch", "grew", "cent", "mix", "team", "wire", "cost", "lost", "brown", "wear", "garden", "equal", "sent", "choose", "fell", "fit", "flow", "fair", "bank", "collect", "save", "control", "decimal", "gentle", "woman", "captain", "practice", "separate", "difficult", "doctor", "please", "protect", "noon", "whose", "locate", "ring", "character", "insect", "caught", "period", "indicate", "radio", "spoke", "atom", "human", "history", "effect", "electric", "expect", "crop", "modern", "element", "hit", "student", "corner", "party", "supply", "bone", "rail", "imagine", "provide", "agree", "thus", "capital", "won't", "chair", "danger", "fruit", "rich", "thick", "soldier", "process", "operate", "guess", "necessary", "sharp", "wing", "create", "neighbor", "wash", "bat", "rather", "crowd", "corn", "compare", "poem", "string", "bell", "depend", "meat", "rub", "tube", "famous", "dollar", "stream", "fear", "sight", "thin", "triangle", "planet", "hurry", "chief", "colony", "clock", "mine", "tie", "enter", "major", "fresh", "search", "send", "yellow", "gun", "allow", "print", "dead", "spot", "desert", "suit", "current", "lift", "rose", "continue", "block", "chart", "hat", "sell", "success", "company", "subtract", "event", "particular", "deal", "swim", "term", "opposite", "wife", "shoe", "shoulder", "spread", "arrange", "camp", "invent", "cotton", "born", "determine", "quart", "nine", "truck", "noise", "level", "chance", "gather", "shop", "stretch", "throw", "shine", "property", "column", "molecule", "select", "wrong", "gray", "repeat", "require", "broad", "prepare", "salt", "nose", "plural", "anger", "claim", "continent", "oxygen", "sugar", "death", "pretty", "skill", "women", "season", "solution", "magnet", "silver", "thank", "branch", "match", "suffix", "especially", "fig", "afraid", "huge", "sister", "steel", "discuss", "forward", "similar", "guide", "experience", "score", "apple", "bought", "led", "pitch", "coat", "mass", "card", "band", "rope", "slip", "win", "dream", "evening", "condition", "feed", "tool", "total", "basic", "smell", "valley", "nor", "double", "seat", "arrive", "master", "track", "parent", "shore", "division", "sheet", "substance", "favor", "connect", "post", "spend", "chord", "fat", "glad", "original", "share", "station", "dad", "bread", "charge", "proper", "bar", "offer", "segment", "slave", "duck", "instant", "market", "degree", "populate", "chick", "dear", "enemy", "reply", "drink", "occur", "support", "speech", "nature", "range", "steam", "motion", "path", "liquid", "log", "meant", "quotient", "teeth", "shell", "neck"];
var text_index = 0; // used for "text". tracks where the user is in the string while typing. also used to keep track of how many chars the user typed
var wrong_count = 0; // used to keep track of how many errors the user types before typing a correct char.
var total_wrong = 0; // total number of wrong characters typed by the user
var char_count = 36; // max num of chars that can be displayed in the words textbox 
var text = ""; // string that will contain all the chars the user needs to type
var state = 0; // keeps track of if the user started typing or not(0 = not started, 1 = started, 2 = ended)

function countdown() // timer that begins when the user starts typing. this function is run every second
{
    if (seconds == 0) // 60 seconds are up
    {
        // stop the timer
        clearInterval(interval);
        // set state to ended
        state = 2;
        // calculate wpm and accuracy
        // ACC: (correct chars - wrong chars) / correct chars * 100     (use toFixed to limit digits after the decimal)
        // WPM: (# of chars / 5) / 1 minute
        acc_wpm.innerText = "ACC: " + ((text_index - total_wrong)/text_index * 100).toFixed(2)
                          + "% WPM: " + (text_index / 5).toString();
        //
        words.textContent = "enter to try again"; // inform the user to type enter if they want to try again
    }

    else // still got time 
    {
        seconds--;
        timer.innerText = seconds.toString(); // update timer
    }
}

function generateText()
{
    // reset text
    text = "";
    // pick random words for the user to type
    // realistically the user won't type more than 300 words in a minute so just pick 300 random words
    for (let i = 0; i < 300; i++)
    {
        text += word_bank[Math.floor(Math.random() * 1000)] + " "; // add strings from the word bank to the text string, add spaces between each string
    }
    for (let i = 0; i < char_count; i++) // add only 36 characters so chars don't overflow out of the textbox
    {
        words.textContent += text[i];
    }
}

generateText(); // generate some random words the first time
document.addEventListener("keypress", typing); // typing function activates when any key is pressed on the page

function typing(event) // handle user's input
{
    switch (state)
    {
        case 0: // not started yet
            interval = setInterval(countdown, 1000); // start the timer
            state = 1; // next time this function will go straight to case 1

        case 1: // started
            var user_char = String.fromCharCode(event.keyCode); // get user's input
    
            // if the user types the correct character...
            if (user_char == text[text_index])
            {
                while (wrong_count != 0) // get rid of any wrong chars that were typed before this one
                {
                    display.removeChild(display.lastChild); // remove from end of list
                    wrong_count--;
                }
                text_index++; // go to the next char
                display.appendChild(document.createTextNode(user_char)); // add our typed char to the display box
                words.textContent = text.substring(text_index, text_index + char_count); // move the text box one char over
            }
            else // mistyped
            {
                wrong_count++, total_wrong++;
                let wrong = document.createElement("span"); // create a span element that will be added to the display
                wrong.setAttribute("class", "display-wrong"); // define its class as display-wrong to get proper formatting
                wrong.innerHTML = ((user_char == ' ') ? "&nbsp;" : user_char); // gotta do this because space doesn't show up normally without other characters
                display.appendChild(wrong); // add the span element to the display
            }
            break;
        
        case 2: // ended
            if (event.keyCode == 13) // user presses enter
                reset(); // reset everything
    }
}

function reset() // reset stuff so the user can type again
{
    text_index = 0;
    wrong_count = 0;
    total_wrong = 0;
    state = 0;
    seconds = MAX_SECONDS;
    timer.innerText = seconds.toString(); // reset timer text
    acc_wpm.innerText = "ACC: ## WPM: ##";  // reset ACC WPM text
    words.textContent = ""; // reset words box
    while (display.firstChild) // remove text from display box
    {
        display.removeChild(display.firstChild);
    }
    generateText(); // pick 300 new words
}
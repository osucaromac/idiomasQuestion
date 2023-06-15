//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

    {
        question: "Look at the photos of the Yanomami and the Amish, where do you think they live?",
        choices: ["a city", "a rainforest and farms", "a town in the amazon", "a flat"],
        imagenEnglish: "Yanomami-amish.jpg",
        answer: 2
    
    },
    
    {
        question: "In the photos A-L find...:",
        choices: ["A","B", "C", "D...", "E","F"],
        imagenEnglish: "A-L.jpg",
        answer: 3
    
    },
    {
        question: "Who ?. lives in the rainforest.",
        choices: ["Y","A","B"],
        imagenEnglish: "Yanomami-amish.jpg",
        history: "Read the introduction to the Yanomami and the Amish, Select Y, A or B (both)",
        answer: 1
    
    },
    {
        question: "Who ?. wears clothes.",
        choices: ["Y", "A", "B", "indefinido"],
        imagenEnglish: "Yanomami-amish.jpg",
        history: "Read the introduction to the Yanomami and the Amish, Select Y, A or B (both)",
        answer: 2
    
    },
    {/*5*/
        question: "Who ?. lives all together.",
        choices: ["Y", "A", "B", "indefinido"],
        imagenEnglish: "Yanomami-amish.jpg",
        history: "Read the introduction to the Yanomami and the Amish, Select Y, A or B (both)",
        answer: 1
    },
    {
        question: "Who ?. has big familes.",
        choices: ["Y", "A", "B", "indefinido"],
        imagenEnglish: "Yanomami-amish.jpg",
        history: "Read the introduction to the Yanomami and the Amish, Select Y, A or B (both)",
        answer: 3
    
    }, 
    {
        question: "Who ?. lives on farms.",
        choices: ["Y", "A", "B", "indefinido"],
        imagenEnglish: "Yanomami-amish.jpg",
        history: "Read the introduction to the Yanomami and the Amish, Select Y, A or B (both)",
        answer: 2
    
    }, 
    {
        question: "Who ?. doesn't have electricity.",
        choices: ["Y", "A", "B", "indefinido"],
        imagenEnglish: "Yanomami-amish.jpg",
        history: "Read the introduction to the Yanomami and the Amish, Select Y, A or B (both)",
        answer: 3
    
    }, 
    {
        question: "Who ?. lives in huts.",
        choices: ["Y", "A", "B", "indefinido"],
        imagenEnglish: "Yanomami-amish.jpg",
        history: "Read the introduction to the Yanomami and the Amish, Select Y, A or B (both)",
        answer: 1
    
    }, 
    {/*10*/
        question: "Read about the four children, Guiomar, Toin, Tomas, and Kristina on P25.",
        choices: ["OK"],
        imagenEnglish: "Questionp24.jpg",
        history: "Please, Your write answer the question in chalkboard",
        answer: 1
    
    }
                
];

var CSSquestions=[

    {
        question: "Question ?",
        choices: ["Id","text","class","name"],
        answer: 1
    
    }, 
    {
        question: "Question ?",
        choices: ["margin","clear","float","padding"],
        answer: 2
    
    },
    {
        question: "Question ?",
        choices: ["d-inex","s-index","x-index","z-index"],
        answer: 4
    
    }, 
    {/*4*/
        question: "Question ?",
        choices: ["Yes, we can","Not Possible","Depends on browser","Depends upon operating System"],
        answer: 2
    
    },
    {
        question: "Question ?",
        choices: ["wrap","push","float","align"],
        answer: 3
    
    },
    {/*6*/
        question: "Question ?",
        choices: ["pointer","default","arrow","arr"],
        answer: 2
    
    }, 
    {
        question: "Question ?",
        choices: ["border-color","border-decoration","border-style","border-line"],
        answer: 3
    
    },
    {/*8*/
        question: "Question ?",
        choices: ["empty-cell","blank-cell","noncontent-cell","void-cell"],
        answer: 1
    
    }, 
    {
        question: "Question ?",
        choices: ["640 pixels","100%","full-screen","1024px"],
        answer: 2
    
    },
    {
        question: "Question ?",
        choices: ["/* a comment */","// a comment //","/ a comment /","<' a comment'>"],
        answer: 1
    
    }
                
];
var JSquestions=[

    {
        question: "Question ?",
        choices: ["JavaScript variable names must begin with a letter or the underscore character.","JavaScript variable names are case sensitive.","Both of the above."," None of the above."],
        answer: 3
    
    }, 
    {/*wscubetech*/
        question: " Question ?",
        choices: ["Function","File","FilleUpload","Data"],
        answer: 2
    
    },
    {
        question: "Question ?",
        choices: ["False","True"],
        answer: 1
    
    }, 
    {
        question: "Question ?",
        choices: ["The number of days since January 1st, 1900","The number of seconds since January 1st, 1970","The number of milliseconds since January 1st, 1970","The number of picoseconds since January 1st, 1970"],
        answer: 3
    
    },
    {
        question: "Question ?",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "Question ?",
        choices: ["True","False"],
        answer: 2
    
    }, 
    {
        question: "Question ?",
        choices: ["Pathname","Protocol","Defaultststus","Host"],
        answer: 3
    
    },
    {
        question: "Question ?",
        choices: ["visibilty","visible","invisible","None of the above"],
        answer: 1
    
    }, 
    {
        question: " Question ?",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "Question ?",
        choices: ["LimeScript","ECMScript","Both of the above","ECMAScript"],
        answer: 4
    
    }
                
];
var PYquestions=[

    {
        question: "What is the output of the following program : print(Hello World'[::-1])",
        choices: ["dlroW olleH","Hello Worl","d","Error"],
        answer: 1
    
    }, 
    {
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        choices: ["int","bool","void","None"],
        answer: 4
    
    },
    {
        question: "Which module in Python supports regular expressions?",
        choices: ["re","regex","pyregex","None of the above"],
        answer: 1
    
    }, 
    {
        question: "What is the output of the following program : (tricky ques.)  print (0.1 + 0.2 == 0.3) ",
        choices: ["True","False","Machine Dependent","Error"],
        answer: 2
    
    },
    {
        question: "Which of the following is not a complex number?",
        choices: ["k = 2 + 3j","k = complex(2, 3)","k = 2 + 3l","k = 2 + 3J"],
        answer: 3
    
    },
    {
        question: "What does ~~~~~~5 evaluate to?",
        choices: ["+5","-11","+11","-5"],
        answer: 1
    
    }, 
    {
        question: "Given a string s = “Welcome”, which of the following code is incorrect?",
        choices: ["print s[0]","print s.lower()","s[1] = ‘r’","print s.strip()"],
        answer: 3
    
    },
    {
        question: "________ is a simple but incomplete version of a function.",
        choices: ["Stub","Function","A function developed using bottom-up approach","A function developed using top-down approach"],
        answer: 1
    
    }, 
    {
        question: "To start Python from the command prompt, use the command ______",
        choices: ["execute python","go python","python","run python"],
        answer: 3
    
    },
    {
        question: "Which of the following is correct about Python?",
        choices: ["It supports automatic garbage collection.","It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java","Both of the above","None of the above"],
        answer: 3
    
    }
                
];
var Cquestions=[

    {
        question: "C Language was developed in the year ____",
        choices: ["1970","1975","1980","1985"],
        answer: 1
    
    }, 
    {
        question: "Which one is not a reserve keyword in C Language?",
        choices: ["auto","main","case","register"],
        answer: 2
    
    },
    {
        question: "A C variable name can start with a ____",
        choices: ["Number","Plus Sign","Underscore","Asterisk"],
        answer: 3
    
    }, 
    {
        question: "Prototype of a function means _____",
        choices: ["Name of Function","Output of Function","Declaration of Function","Input of a Function"],
        answer: 3
    
    },
    {
        question: "Name the loop that executes at least once.",
        choices: ["for","If","do-while","while"],
        answer: 3
    
    },
    {
        question: "Far pointer can access _____",
        choices: ["Single memory location","No memory location","All memory location","First and Last Memory Address"],
        answer: 3
    
    }, 
    {
        question: "A pointer pointing to a memory location of the variable even after deletion of the variavle is known as _____",
        choices: ["far pointer","dangling pointer","null pointer","void pointer"],
        answer: 2
    
    },
    {
        question: "An uninitialized pointer in C is called ___",
        choices: ["Constructor","dangling pointer","Wild Pointer","Destructor"],
        answer: 3
    
    }, 
    {
        question: "A pointer that is pointing to NOTHING is called ____",
        choices: ["VOID Pointer","DANGLING Pointer","NULL Pointer","WILD Pointer"],
        answer: 3
    
    },
    {
        question: "Who is known as the father of C Language ?",
        choices: ["Digvijay","James A. Sosling","Dr. E. F. Codd","Dennis Ritchie"],
        answer: 4
    
    }
                
];





//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    document.querySelector(".history").innerHTML = "<h1>" + window[lang][countQues].history + "</h1>";
    document.querySelector('.use_image').src = window[lang][countQues].imagenEnglish;

//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    document.querySelector(".history").innerHTML = "<h1>" + window[lang][countQues].history + "</h1>";
    document.querySelector('.use_image').src = window[lang][countQues].imagenEnglish;


});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions of "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were Right and "+((countQues+1)-correct)+" were Wrong";
    
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: OutStanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, Keep Improving.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Satisfactory, Learn More.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: Unsatisfactory, Try Again.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Unimex - languages -  team 4 English");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/

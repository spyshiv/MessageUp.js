function fadeIn(e,t){if(e)if(e.style.opacity=0,e.style.filter="alpha(opacity=0)",e.style.display="block",e.style.visibility="visible",t)var o=0,i=setInterval(function(){o+=50/t,o>=1&&(clearInterval(i),o=1),e.style.opacity=o,e.style.filter="alpha(opacity="+100*o+")"},50);else e.style.opacity=1,e.style.filter="alpha(opacity=1)"}function messageup(){document.getElementById("message-box").innerHTML=message[iter%message.length];var e=document.getElementById("message-box");number>col_count?(e.style.color=color[col_count],col_count++):(col_count=0,e.style.color=color[col_count],col_count++),fadeIn(e,fade_time),iter++,iter==number&&0==stop?check_time=clearInterval(messageup,time):check_time=setTimeout(messageup,time)}var color="undefined"==typeof color?["#4d4d4d"]:color,time="undefined"==typeof time?1500:time;"undefined"==typeof speed?fade_time=500:"slow"==speed?fade_time=700:"fast"==speed&&(fade_time=200),"undefined"==typeof iteration?stop=1:"no-repeat"==iteration?stop=0:stop=1;var count,message=[],number=msg.length;for(count=0;number>count;count++)message[count]=msg[count];var col_count=0,iter=0,itr_dot=0;messageup();

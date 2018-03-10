var layer1;
var layer2;
var layer3;
var c1;
var c2;
var c3;
function init()
{
	layer1=document.getElementById('layer1');
	c1=layer1.getContext("2d");
	layer2=document.getElementById('layer2');
	c2=layer2.getContext("2d");
	layer3=document.getElementById('layer3');
	c3=layer3.getContext("2d");
	Draw();
	Draw1();
	Draw2();
}
init();
function Draw()
{
	layer1.width=window.innerWidth/4;
	layer1.height=window.innerHeight/2;
	var mouse={
	x:undefined,
	y:undefined
};
this.Mickey=function()
{
	
	var x=-150;
	var y=-120;
c1.strokeStyle="black";//jawline
c1.beginPath();
c1.moveTo(267+x,405+y);
c1.quadraticCurveTo(297+x,450+y,337+x,404+y);
c1.quadraticCurveTo(361+x,399+y,387+x,352+y);
c1.quadraticCurveTo(307+x,48+y,216+x,355+y);
c1.quadraticCurveTo(234+x,390+y,267+x,405+y);
//c.strokeStyle="blue";
c1.fillStyle="white";
c1.fill();
c1.fillStyle="black";
c1.stroke();
c1.closePath();

c1.beginPath();//hairs
c1.moveTo(300+x,200+y);
c1.lineTo(300+x,250+y);
c1.quadraticCurveTo(380+x,210+y,350+x,350+y);
c1.quadraticCurveTo(360+x,340+y,386+x,354+y);
c1.quadraticCurveTo(450+x,200+y,300+x,200+y);
c1.fill();
c1.stroke();
c1.closePath();

c1.fillStyle="black";//hairs
c1.beginPath();
c1.moveTo(300+x,200+y);
c1.lineTo(300+x,250+y);
c1.quadraticCurveTo(230+x,220+y,250+x,350+y);
c1.quadraticCurveTo(240+x,340+y,215+x,354+y);
c1.quadraticCurveTo(140+x,200+y,300+x,200+y);
c1.stroke();
c1.fill();
c1.closePath();

c1.beginPath();//lips
c1.moveTo(261+x,361+y);
c1.quadraticCurveTo(300+x,394+y,345+x,361+y);
c1.stroke();
c1.closePath();

/*c.beginPath();//tongue
c.moveTo(272+x,368+y);
c.quadraticCurveTo(300+x,421+y,335+x,367+y);
c.quadraticCurveTo(300+x,388+y,272+x,369+y);
c.fillStyle="#ff5b5b";
c.fill();
c.fillStyle="black";
c.stroke();
c.closePath();

for(var i=0;i<5000;++i)//eyebrow
{
c.beginPath();
c.moveTo(260+x,274+y);
c.quadraticCurveTo(270+x,255+y,280+x,274+y);
c.stroke();
c.closePath();
}

for(var i=0;i<5000;++i)//eyebrow
{
c.beginPath();
c.moveTo(310+x,274+y);
c.quadraticCurveTo(320+x,255+y,331+x,274+y);
c.stroke();
c.closePath();
}*/

c1.strokeStyle="black";
c1.beginPath();//eye
c1.ellipse(270+x,290+y,10,17,0,0,(Math.PI)*2);
c1.stroke();
c1.closePath();

c1.beginPath();//eye
c1.ellipse(320+x,289+y,10,17,0,0,(Math.PI)*2);
c1.stroke();
c1.closePath();

c1.beginPath();//eye
c1.ellipse(270+x,293+y,4,7,0,0,(Math.PI)*2);
c1.fill();
c1.stroke();
c1.closePath();

c1.beginPath();//eye
c1.ellipse(320+x,292+y,4,7,0,0,(Math.PI)*2);
c1.fill();
c1.stroke();
c1.closePath();

c1.beginPath();//nose
c1.ellipse(300+x,335+y,25,17,0,0,(Math.PI)*2);
c1.fill();
c1.stroke();
c1.closePath();

c1.beginPath();//nose 1
c1.ellipse(290+x,330+y,5,5,0,0,(Math.PI)*2);
c1.fillStyle="white";
c1.fill();
c1.stroke();
c1.fillStyle="black";
c1.closePath();

/*c.beginPath();
c.ellipse(300,322,90,90,0,0,(Math.PI)*2);
//c.strokeStyle="#f8a72bcf";
c.stroke();
c.closePath();*/

c1.strokeStyle="black";
c1.beginPath();//ear
c1.arc(210+x,210+y,50,0,(Math.PI)*2,false);
c1.fill();
c1.stroke();
c1.closePath();

c1.beginPath();//ear
c1.arc(390+x,210+y,50,0,(Math.PI)*2,false);
c1.fill();
c1.stroke();
c1.closePath();
}
this.Wink=function()
{
	var x=-150;
	var y=-120;
	if(this.dy==-5)
		this.dy=5;
	else
		this.dy=-5;
	for(var i=0;i<5000;++i)//eyebrow
{
c1.beginPath();
c1.moveTo(260+x,274+y);
c1.quadraticCurveTo(270+x,255+y+dy,280+x,274+y);
c1.stroke();
c1.closePath();
}

for(var i=0;i<5000;++i)//eyebrow
{
c1.beginPath();
c1.moveTo(310+x,274+y);
c1.quadraticCurveTo(320+x,255+y+dy,331+x,274+y);
c1.stroke();
c1.closePath();
}
}
this.Jeeb=function()
{
	var x=-150;
	var y=-120;
	if(this.dm==-5)
		this.dm=5;
	else
		this.dm=-5;
	c1.beginPath();//tongue
c1.moveTo(272+x,368+y);
c1.quadraticCurveTo(300+x,421+y+dm,335+x,367+y);
c1.quadraticCurveTo(300+x,388+y+dm,272+x,369+y);
c1.fillStyle="#ff5b5b";
c1.fill();
c1.fillStyle="black";
c1.stroke();
c1.closePath();
}
layer1.addEventListener('mousemove',function(event)
{
	var rect=layer1.getBoundingClientRect();
	mouse.x=(event.clientX-rect.left);
	mouse.y=(event.clientY-rect.top);
	animate();
	function animate()
	{
		var ss=setTimeout(animate,400);
		c1.clearRect(0,0,innerWidth,innerHeight);
		this.Mickey();
		this.Wink();
		this.Jeeb();
	}
	console.log("layer1 "+(mouse.x)+","+(mouse.y));
})
this.Mickey();
}


function Draw1()
{
	layer2.width=window.innerWidth/4;
	layer2.height=window.innerHeight/2;
	var mouse={
	x:undefined,
	y:undefined
};
this.Mickey1=function()
{
	
	var x=-150;
	var y=-120;
c2.strokeStyle="black";//jawline
c2.beginPath();
c2.moveTo(267+x,405+y);
c2.quadraticCurveTo(297+x,450+y,337+x,404+y);
c2.quadraticCurveTo(361+x,399+y,387+x,352+y);
c2.quadraticCurveTo(307+x,48+y,216+x,355+y);
c2.quadraticCurveTo(234+x,390+y,267+x,405+y);
//c.strokeStyle="blue";
c2.fillStyle="white";
c2.fill();
c2.fillStyle="black";
c2.stroke();
c2.closePath();

c2.beginPath();//hairs
c2.moveTo(300+x,200+y);
c2.lineTo(300+x,250+y);
c2.quadraticCurveTo(380+x,210+y,350+x,350+y);
c2.quadraticCurveTo(360+x,340+y,386+x,354+y);
c2.quadraticCurveTo(450+x,200+y,300+x,200+y);
c2.fill();
c2.stroke();
c2.closePath();

c2.fillStyle="black";//hairs
c2.beginPath();
c2.moveTo(300+x,200+y);
c2.lineTo(300+x,250+y);
c2.quadraticCurveTo(230+x,220+y,250+x,350+y);
c2.quadraticCurveTo(240+x,340+y,215+x,354+y);
c2.quadraticCurveTo(140+x,200+y,300+x,200+y);
c2.stroke();
c2.fill();
c2.closePath();

c2.beginPath();//lips
c2.moveTo(261+x,361+y);
c2.quadraticCurveTo(300+x,394+y,345+x,361+y);
c2.stroke();
c2.closePath();

/*c.beginPath();//tongue
c.moveTo(272+x,368+y);
c.quadraticCurveTo(300+x,421+y,335+x,367+y);
c.quadraticCurveTo(300+x,388+y,272+x,369+y);
c.fillStyle="#ff5b5b";
c.fill();
c.fillStyle="black";
c.stroke();
c.closePath();

for(var i=0;i<5000;++i)//eyebrow
{
c.beginPath();
c.moveTo(260+x,274+y);
c.quadraticCurveTo(270+x,255+y,280+x,274+y);
c.stroke();
c.closePath();
}

for(var i=0;i<5000;++i)//eyebrow
{
c.beginPath();
c.moveTo(310+x,274+y);
c.quadraticCurveTo(320+x,255+y,331+x,274+y);
c.stroke();
c.closePath();
}*/

c2.strokeStyle="black";
c2.beginPath();//eye
c2.ellipse(270+x,290+y,10,17,0,0,(Math.PI)*2);
c2.stroke();
c2.closePath();

c2.beginPath();//eye
c2.ellipse(320+x,289+y,10,17,0,0,(Math.PI)*2);
c2.stroke();
c2.closePath();

c2.beginPath();//eye
c2.ellipse(270+x,293+y,4,7,0,0,(Math.PI)*2);
c2.fill();
c2.stroke();
c2.closePath();

c2.beginPath();//eye
c2.ellipse(320+x,292+y,4,7,0,0,(Math.PI)*2);
c2.fill();
c2.stroke();
c2.closePath();

c2.beginPath();//nose
c2.ellipse(300+x,335+y,25,17,0,0,(Math.PI)*2);
c2.fill();
c2.stroke();
c2.closePath();

c2.beginPath();//nose 1
c2.ellipse(290+x,330+y,5,5,0,0,(Math.PI)*2);
c2.fillStyle="white";
c2.fill();
c2.stroke();
c2.fillStyle="black";
c2.closePath();

/*c.beginPath();
c.ellipse(300,322,90,90,0,0,(Math.PI)*2);
//c.strokeStyle="#f8a72bcf";
c.stroke();
c.closePath();*/

c2.strokeStyle="black";
c2.beginPath();//ear
c2.arc(210+x,210+y,50,0,(Math.PI)*2,false);
c2.fill();
c2.stroke();
c2.closePath();

c2.beginPath();//ear
c2.arc(390+x,210+y,50,0,(Math.PI)*2,false);
c2.fill();
c2.stroke();
c2.closePath();
}
this.Wink1=function()
{
	var x=-150;
	var y=-120;
	if(this.dy==-5)
		this.dy=5;
	else
		this.dy=-5;
	for(var i=0;i<5000;++i)//eyebrow
{
c2.beginPath();
c2.moveTo(260+x,274+y);
c2.quadraticCurveTo(270+x,255+y+dy,280+x,274+y);
c2.stroke();
c2.closePath();
}

for(var i=0;i<5000;++i)//eyebrow
{
c2.beginPath();
c2.moveTo(310+x,274+y);
c2.quadraticCurveTo(320+x,255+y+dy,331+x,274+y);
c2.stroke();
c2.closePath();
}
}
this.Jeeb1=function()
{
	var x=-150;
	var y=-120;
	if(this.dm==-5)
		this.dm=5;
	else
		this.dm=-5;
	c2.beginPath();//tongue
c2.moveTo(272+x,368+y);
c2.quadraticCurveTo(300+x,421+y+dm,335+x,367+y);
c2.quadraticCurveTo(300+x,388+y+dm,272+x,369+y);
c2.fillStyle="#ff5b5b";
c2.fill();
c2.fillStyle="black";
c2.stroke();
c2.closePath();
}
layer2.addEventListener('mousemove',function(event)
{
	var rect=layer2.getBoundingClientRect();
	mouse.x=(event.clientX-rect.left);
	mouse.y=(event.clientY-rect.top);
	animate1();
	function animate1()
	{
		var ss=setTimeout(animate1,400);
		c2.clearRect(0,0,innerWidth,innerHeight);
		this.Mickey1();
		this.Wink1();
		this.Jeeb1();
	}
	console.log("layer2 "+(mouse.x)+","+(mouse.y));
})
this.Mickey1();
}
function Draw2()
{
	layer3.width=window.innerWidth/4;
	layer3.height=window.innerHeight/2;
	var mouse={
	x:undefined,
	y:undefined
};
this.Mickey2=function()
{
	
	var x=-150;
	var y=-120;
c3.strokeStyle="black";//jawline
c3.beginPath();
c3.moveTo(267+x,405+y);
c3.quadraticCurveTo(297+x,450+y,337+x,404+y);
c3.quadraticCurveTo(361+x,399+y,387+x,352+y);
c3.quadraticCurveTo(307+x,48+y,216+x,355+y);
c3.quadraticCurveTo(234+x,390+y,267+x,405+y);
//c.strokeStyle="blue";
c3.fillStyle="white";
c3.fill();
c3.fillStyle="black";
c3.stroke();
c3.closePath();

c3.beginPath();//hairs
c3.moveTo(300+x,200+y);
c3.lineTo(300+x,250+y);
c3.quadraticCurveTo(380+x,210+y,350+x,350+y);
c3.quadraticCurveTo(360+x,340+y,386+x,354+y);
c3.quadraticCurveTo(450+x,200+y,300+x,200+y);
c3.fill();
c3.stroke();
c3.closePath();

c3.fillStyle="black";//hairs
c3.beginPath();
c3.moveTo(300+x,200+y);
c3.lineTo(300+x,250+y);
c3.quadraticCurveTo(230+x,220+y,250+x,350+y);
c3.quadraticCurveTo(240+x,340+y,215+x,354+y);
c3.quadraticCurveTo(140+x,200+y,300+x,200+y);
c3.stroke();
c3.fill();
c3.closePath();

c3.beginPath();//lips
c3.moveTo(261+x,361+y);
c3.quadraticCurveTo(300+x,394+y,345+x,361+y);
c3.stroke();
c3.closePath();

/*c.beginPath();//tongue
c.moveTo(272+x,368+y);
c.quadraticCurveTo(300+x,421+y,335+x,367+y);
c.quadraticCurveTo(300+x,388+y,272+x,369+y);
c.fillStyle="#ff5b5b";
c.fill();
c.fillStyle="black";
c.stroke();
c.closePath();

for(var i=0;i<5000;++i)//eyebrow
{
c.beginPath();
c.moveTo(260+x,274+y);
c.quadraticCurveTo(270+x,255+y,280+x,274+y);
c.stroke();
c.closePath();
}

for(var i=0;i<5000;++i)//eyebrow
{
c.beginPath();
c.moveTo(310+x,274+y);
c.quadraticCurveTo(320+x,255+y,331+x,274+y);
c.stroke();
c.closePath();
}*/

c3.strokeStyle="black";
c3.beginPath();//eye
c3.ellipse(270+x,290+y,10,17,0,0,(Math.PI)*2);
c3.stroke();
c3.closePath();

c3.beginPath();//eye
c3.ellipse(320+x,289+y,10,17,0,0,(Math.PI)*2);
c3.stroke();
c3.closePath();

c3.beginPath();//eye
c3.ellipse(270+x,293+y,4,7,0,0,(Math.PI)*2);
c3.fill();
c3.stroke();
c3.closePath();

c3.beginPath();//eye
c3.ellipse(320+x,292+y,4,7,0,0,(Math.PI)*2);
c3.fill();
c3.stroke();
c3.closePath();

c3.beginPath();//nose
c3.ellipse(300+x,335+y,25,17,0,0,(Math.PI)*2);
c3.fill();
c3.stroke();
c3.closePath();

c3.beginPath();//nose 1
c3.ellipse(290+x,330+y,5,5,0,0,(Math.PI)*2);
c3.fillStyle="white";
c3.fill();
c3.stroke();
c3.fillStyle="black";
c3.closePath();

/*c.beginPath();
c.ellipse(300,322,90,90,0,0,(Math.PI)*2);
//c.strokeStyle="#f8a72bcf";
c.stroke();
c.closePath();*/

c3.strokeStyle="black";
c3.beginPath();//ear
c3.arc(210+x,210+y,50,0,(Math.PI)*2,false);
c3.fill();
c3.stroke();
c3.closePath();

c3.beginPath();//ear
c3.arc(390+x,210+y,50,0,(Math.PI)*2,false);
c3.fill();
c3.stroke();
c3.closePath();
}
this.Wink2=function()
{
	var x=-150;
	var y=-120;
	if(this.dy==-5)
		this.dy=5;
	else
		this.dy=-5;
	for(var i=0;i<5000;++i)//eyebrow
{
c3.beginPath();
c3.moveTo(260+x,274+y);
c3.quadraticCurveTo(270+x,255+y+dy,280+x,274+y);
c3.stroke();
c3.closePath();
}

for(var i=0;i<5000;++i)//eyebrow
{
c3.beginPath();
c3.moveTo(310+x,274+y);
c3.quadraticCurveTo(320+x,255+y+dy,331+x,274+y);
c3.stroke();
c3.closePath();
}
}
this.Jeeb2=function()
{
	var x=-150;
	var y=-120;
	if(this.dm==-5)
		this.dm=5;
	else
		this.dm=-5;
	c3.beginPath();//tongue
c3.moveTo(272+x,368+y);
c3.quadraticCurveTo(300+x,421+y+dm,335+x,367+y);
c3.quadraticCurveTo(300+x,388+y+dm,272+x,369+y);
c3.fillStyle="#ff5b5b";
c3.fill();
c3.fillStyle="black";
c3.stroke();
c3.closePath();
}
layer3.addEventListener('mousemove',function(event)
{
	var rect=layer3.getBoundingClientRect();
	mouse.x=(event.clientX-rect.left);
	mouse.y=(event.clientY-rect.top);
	animate2();
	function animate2()
	{
		var ss=setTimeout(animate2,400);
		c3.clearRect(0,0,innerWidth,innerHeight);
		this.Mickey2();
		this.Wink2();
		this.Jeeb2();
	}
	console.log("layer2 "+(mouse.x)+","+(mouse.y));
})
this.Mickey2();
}
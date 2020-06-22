/* functions defined
point(pointx value, pointy value, letter to denote point) #class
pointtrans(point, translating reference point)
pointdisp(point, canvas2Dcontext, width of line, stroke color, fill color, font color, 
				whether tracing point, position of tracing point)
pointdist(point1,point2)
pointjoin(point1,point2,canvas2Dcontext,color of line,width of line)
pointtrace(pointx,pointy,canvas2Dcontext,color of line,width of line)
deg(radian angle)
rad(degree angle)
drawrect(center of rectangle #point, length of rectangle, width of rectangle, corner radius, canvas2Dcontext, 
				stroke color, fill color, stroke line width)
drawArrow(arrow pointx,arrow pointy,canvas2Dcontext,angle by ray with horizontal,horizontal length of arrow, 
				included angle,stroke color,line width,fill color)
roundd( number to be rounded, number of digits after decimal point )	
plotgraph(pointx,pointy,canvas2Dcontext,array truncate limit,color of line,width of line)				
*/
/*
locateincanvas(id,xco,yco)
*/
//Custom defined class for Point (for coordinates in a system)
function point(xcoord,ycoord,letter)
{
	this.xcoord = xcoord;
	this.ycoord = ycoord;
    this.letter = letter;	
}

//function to translate point to simulation coordinate system
function pointtrans(a, trans)
{
	a.xcoord=trans.xcoord+a.xcoord;
	a.ycoord=trans.ycoord-a.ycoord;
	return a;
}

//function for displaying a point
function pointdisp(a,context,lwidth,scolor,fcolor,tcolor,isTP,TPpos)
{	
	if(!lwidth) lwidth=8;
	if(!scolor)context.strokeStyle="Black";
	if(!fcolor)context.fillStyle="Black";
	if(!tcolor) {
		if(isTP) tcolor="Black";
		else tcolor="White";
		}
	context.beginPath();
	context.lineWidth=1;
	context.arc(a.xcoord,a.ycoord,lwidth,0,2*Math.PI);
	context.strokeStyle=scolor;
	context.fillStyle=fcolor;	
	context.fill();
	context.stroke();
	if(!isTP)
	{
	context.beginPath();	
	context.strokeStyle=tcolor;
	context.font = "10px Georgia";
	context.strokeText(a.letter, a.xcoord-4,a.ycoord+3);
	}
	if(isTP)
	{
	context.beginPath();	
	context.strokeStyle=tcolor;
	context.font = "9px Arial";
	switch(TPpos)
	{
	case 1:
	context.strokeText(a.letter, a.xcoord-3,a.ycoord-5);
	break;
	case 2:	
	context.strokeText(a.letter, a.xcoord+4,a.ycoord+3);
	break;
	case 3:
	context.strokeText(a.letter, a.xcoord-3,a.ycoord+11);
	break;
	case 4:
	context.strokeText(a.letter, a.xcoord-10,a.ycoord+3);
	break;
	default:
	context.strokeText(a.letter, a.xcoord-4,a.ycoord+3);
	}
	}
	
}

//function returns distance between two points
function pointdist(a,b)
{
	return Math.sqrt((b.xcoord-a.xcoord)*(b.xcoord-a.xcoord)+(b.ycoord-a.ycoord)*(b.ycoord-a.ycoord));	
}

//function to join two points
function pointjoin(a,b,context,lcolor,lwidth)
{
	if(!lwidth) lwidth=16;	
	if(!lcolor) lcolor="Black";
	
	context.beginPath();	
	context.lineCap="butt";
	context.moveTo(a.xcoord, a.ycoord);
	context.lineTo(b.xcoord,b.ycoord);
	context.strokeStyle=lcolor;
	context.lineWidth=lwidth;
	context.stroke();
}

//function to show line trace of point
function pointtrace(px,py,context,tcolor,twidth)
{
	var i=0;
	context.beginPath();	
		
	for (i=1;i<=px.length;i++)
	{
	context.moveTo(px[i-1],py[i-1]);
	context.lineTo(px[i],py[i]);
	
   }
	context.closePath();
	context.strokeStyle=tcolor;
	context.lineWidth=twidth;
	context.stroke();   
}

//function to convert radians to degrees
function deg(vrad)
{
	return vrad*180/Math.PI;
}
//function to convert degrees to radians
function rad(vdeg)
{
	return vdeg*Math.PI/180;
}

function drawrect(cen,blen,bwid,cornrad,context,bscolor,bfcolor,bswidth)
{
	context.beginPath();
	context.moveTo(cen.xcoord-blen/2+cornrad,cen.ycoord-bwid/2);
	context.lineTo(cen.xcoord+blen/2-cornrad,cen.ycoord-bwid/2);
	context.arc(cen.xcoord+blen/2-cornrad,cen.ycoord-bwid/2+cornrad,cornrad, -Math.PI/2,0,false);
	context.lineTo(cen.xcoord+blen/2,cen.ycoord+bwid/2-cornrad);
	context.arc(cen.xcoord+blen/2-cornrad,cen.ycoord+bwid/2-cornrad,cornrad,0,Math.PI/2,false);
	context.lineTo(cen.xcoord-blen/2+cornrad,cen.ycoord+bwid/2);
	context.arc(cen.xcoord-blen/2+cornrad,cen.ycoord+bwid/2-cornrad,cornrad,Math.PI/2,Math.PI,false);
	context.lineTo(cen.xcoord-blen/2,cen.ycoord-bwid/2+cornrad);
	context.arc(cen.xcoord-blen/2+cornrad,cen.ycoord-bwid/2+cornrad,cornrad,Math.PI,-Math.PI/2,false);
	context.closePath();
	context.strokeStyle=bscolor;
	context.lineWidth=bswidth;
	context.stroke();
	if(bfcolor){context.fillStyle=bfcolor;
	context.fill();}
	
}
function drawfbd(k)
{
  var f1,f2;
  f1=k*(b.xcoord-a.xcoord-115);
  f2=k*(a.xcoord-b.xcoord+115);
  canvas = document.getElementById("simscreen");
  ctx = canvas.getContext("2d");
   
  pointtrans(o,trans);
  pointtrans(a,trans);
  pointtrans(b,trans);
     o.ycoord=400;
	
  drawrect(c,50,30,05,ctx,"#CC9933","#CC9933",1);   
  drawrect(d,50,30,05,ctx,"#CC9933","#CC9933",1); 
	ctx.beginPath();
	ctx.moveTo(c.xcoord,c.ycoord-30);
	ctx.lineTo(c.xcoord+50,c.ycoord-30);
	
	ctx.moveTo(d.xcoord,d.ycoord-30);
	ctx.lineTo(d.xcoord-50,d.ycoord-30);
	ctx.stroke();
	// ctx.fillText("f1", c.xcoord,c.ycoord);
  
		//ctx.save();
   ctx.lineWidth=1;
   ctx.font="15px 'Comic Sans MS'";
   ctx.fillStyle="#000000";
   ctx.fillText("f1  "+parseFloat(f1.toFixed(4)), c.xcoord-40,c.ycoord-30);
   //ctx.restore();	context.save();
   ctx.lineWidth=1;
   ctx.font="15px 'Comic Sans MS'";
   ctx.fillStyle="#000000";
   ctx.fillText("f2  "+parseFloat(f2.toFixed(4)),d.xcoord,d.ycoord-30);
   //ctx.restore();
	ctx.closePath();
  //drawArrow(c.xcoord,c.ycoord-30,ctx,0,f1/(2*k),0,0,0,0);
  //drawArrow(d.xcoord,d.ycoord-30,ctx,0,f1/(2*k),0,0,0,0);

}
function drawArrow(ahx,ahy,context,rayangle,alen,incangle,scolor,lwidth,fcolor)
{
	if(!lwidth) lwidth=1;
	if(!scolor) context.strokeStyle="#000";
	context.save();
	context.translate(ahx,ahy);
	context.rotate(rad(rayangle));
	context.moveTo(alen,-alen*Math.tan(rad(incangle/2)));
	context.lineTo(0,0);
	context.lineTo(alen,alen*Math.tan(rad(incangle/2)));
	context.strokeStyle=scolor;
	context.lineWidth=lwidth;
	if(fcolor){context.fillStyle=fcolor; context.fill();}
	context.stroke();
	context.restore(); 
}
function signof(t)
{
	return t/Math.abs(t);
}

function storeCoordinate(xVal, yVal, array)
{
    array.push({xcoord: xVal, ycoord: yVal});
}


//function to round off number n to d decimal places
function roundd( n, d )
{
	return Math.round(n*Math.pow(10,d))/Math.pow(10,d);
}

//function to draw graph
function plotgraph(pt,pty,context,truncate,gcolor,lwidth)
{
	context.save();
if(!lwidth)lwidth=1;
if(!gcolor)gcolor="#0000FF";
if(!truncate)truncate=1000;
context.beginPath()
context.lineWidth=lwidth;
context.strokeStyle=gcolor;
context.moveTo(pt[0],pty[0]);
i=0;

while(i<pt.length)
{	
	context.lineTo(pt[i],pty[i]);
	i++;
	if (i>=truncate)
	{
		pt.splice(0,1);
		i=i-1;
	}
}
context.stroke();
context.closePath();
context.restore();
}
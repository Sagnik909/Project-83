canvas= document.getElementById("myCanvas");
color = "red";
ctx = canvas.getContext("2d");
mouseEvent="";
Last_x=0;
Last_y=0;
width_of_line= 2;
radius=10;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mousedown";
    color = document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_X= e.clientX-canvas.offsetLeft;
    current_Y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();  
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(Last_x,Last_y,);
        ctx.lineTo(current_X,current_Y,);
        ctx.stroke();
    }

    Last_x=current_X;
    Last_y=current_Y;
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
var width = screen.width;
    var new_Width = screen.width - 70;
    var new_Height = screen.height - 300;

    if(width<992)
    {
        
        document.getElementById("myCanvas").width= new_Width;
        document.getElementById("myCanvas").height= new_Height;
        document.body.style.overflow="hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
   
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

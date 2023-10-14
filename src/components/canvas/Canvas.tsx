import React, { useEffect, useRef } from "react";

type canasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>,HTMLCanvasElement>;
type birthchart = any;
const Canvas = ( {...props}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);


useEffect(() => {
 const canvas = canvasRef.current;
 if(!canvas){
    return;
 }

 const context = canvas.getContext('2d');
 if(!context){
    return;
 }
 context.fillStyle = 'blue';
 var image = new Image(350,350);
 image.crossOrigin = "anonymous";
 image.src = '/assets/img/kundali1.png';


 image.onload = () => {
 context.drawImage(image,0,0);
 context.font = "15px Ariel";
 var sign = '';
 context.fillText(props.birthchart[0].signs.length > 1 ? props.birthchart[0].signs.slice(0,1) : props.birthchart[0].signs ,171,144);
 gettext(context,props.birthchart[0].planets_small,171,39);
 context.fillText(props.birthchart[1].signs.length > 1 ? props.birthchart[1].signs.slice(0,1) : props.birthchart[1].signs,83,61);
 gettexthori(context,props.birthchart[1].planets_small,57,29);
 context.fillText(props.birthchart[2].signs.length > 1 ? props.birthchart[2].signs.slice(0,1) : props.birthchart[2].signs,50,95);
 gettext(context,props.birthchart[2].planets_small,16,60);
 context.fillText(props.birthchart[3].signs.length > 1 ? props.birthchart[3].signs.slice(0,1) : props.birthchart[3].signs,139,177);
 gettext(context,props.birthchart[3].planets_small,84,129);
 context.fillText(props.birthchart[4].signs.length > 1 ? props.birthchart[4].signs.slice(0,1) : props.birthchart[4].signs,59,264);
 gettext(context,props.birthchart[4].planets_small,16,230);
 context.fillText(props.birthchart[5].signs.length > 1 ? props.birthchart[5].signs.slice(0,1) : props.birthchart[5].signs,83,290);
 gettexthori(context,props.birthchart[5].planets_small,45,330);
 context.fillText(props.birthchart[6].signs.length > 1 ? props.birthchart[6].signs.slice(0,1) : props.birthchart[6].signs,170,206);
 gettext(context,props.birthchart[6].planets_small,161,240);
 context.fillText(props.birthchart[7].signs.length > 1 ? props.birthchart[7].signs.slice(0,1) : props.birthchart[7].signs,258,290);
 gettexthori(context,props.birthchart[7].planets_small,230,331);
 context.fillText(props.birthchart[8].signs.length > 1 ? props.birthchart[8].signs.slice(0,1) : props.birthchart[8].signs,291,262);
 gettext(context,props.birthchart[8].planets_small,320,225);
 context.fillText(props.birthchart[9].signs.length > 1 ? props.birthchart[9].signs.slice(0,1) : props.birthchart[9].signs,203,175);
 gettext(context,props.birthchart[9].planets_small,260,135);
 context.fillText(props.birthchart[10].signs.length > 1 ? props.birthchart[10].signs.slice(0,1) : props.birthchart[10].signs,279,92);
 gettext(context,props.birthchart[10].planets_small,315,55);
 context.fillText(props.birthchart[11].signs.length > 1 ? props.birthchart[11].signs.slice(0,1) : props.birthchart[11].signs,258,61);
 gettexthori(context,props.birthchart[11].planets_small,220,29);
 
 console.log('image loaded');
 context.restore();
 };

//context.fillRect(0,0,100,100);
 //context.strokeRect(100,100,50,50);

}, []);

const gettext = (context:any, planetstext:[],startx:number,starty:number) =>  {
      var length = planetstext.length;
      planetstext.forEach(element => {
         context.fillText(element,startx,starty);

            starty = starty + 20;
      });
      return ''; 
};
const gettexthori = (context:any, planetstext:[],startx:number,starty:number) =>  {
   var length = planetstext.length;
   planetstext.forEach(element => {
      context.fillText(element,startx,starty);

         startx = startx + 30;
   });
   return ''; 
};

return <canvas width={props.width} height={props.height} ref={canvasRef} />
};

export default Canvas;
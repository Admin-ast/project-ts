import React, { useEffect, useRef } from "react";

type canasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>,HTMLCanvasElement>;
type birthchart = any;
const ChartCanvas = ( {...props}) => {
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
 context.fillText(props.birthchart[0].sign.length > 1 ? props.birthchart[0].sign.slice(0,1) : props.birthchart[0].sign ,171,144);
 gettext(context,props.birthchart[0].planet_small,171,39);
 context.fillText(props.birthchart[1].sign.length > 1 ? props.birthchart[1].sign.slice(0,1) : props.birthchart[1].sign,83,61);
 gettexthori(context,props.birthchart[1].planet_small,57,29);
 context.fillText(props.birthchart[2].sign.length > 1 ? props.birthchart[2].sign.slice(0,1) : props.birthchart[2].sign,50,95);
 gettext(context,props.birthchart[2].planet_small,16,60);
 context.fillText(props.birthchart[3].sign.length > 1 ? props.birthchart[3].sign.slice(0,1) : props.birthchart[3].sign,139,177);
 gettext(context,props.birthchart[3].planet_small,84,129);
 context.fillText(props.birthchart[4].sign.length > 1 ? props.birthchart[4].sign.slice(0,1) : props.birthchart[4].sign,59,264);
 gettext(context,props.birthchart[4].planet_small,16,230);
 context.fillText(props.birthchart[5].sign.length > 1 ? props.birthchart[5].sign.slice(0,1) : props.birthchart[5].sign,83,290);
 gettexthori(context,props.birthchart[5].planet_small,45,330);
 context.fillText(props.birthchart[6].sign.length > 1 ? props.birthchart[6].sign.slice(0,1) : props.birthchart[6].sign,170,206);
 gettext(context,props.birthchart[6].planet_small,161,240);
 context.fillText(props.birthchart[7].sign.length > 1 ? props.birthchart[7].sign.slice(0,1) : props.birthchart[7].sign,258,290);
 gettexthori(context,props.birthchart[7].planet_small,230,331);
 context.fillText(props.birthchart[8].sign.length > 1 ? props.birthchart[8].sign.slice(0,1) : props.birthchart[8].sign,291,262);
 gettext(context,props.birthchart[8].planet_small,320,225);
 context.fillText(props.birthchart[9].sign.length > 1 ? props.birthchart[9].sign.slice(0,1) : props.birthchart[9].sign,203,175);
 gettext(context,props.birthchart[9].planet_small,260,135);
 context.fillText(props.birthchart[10].sign.length > 1 ? props.birthchart[10].sign.slice(0,1) : props.birthchart[10].sign,279,92);
 gettext(context,props.birthchart[10].planet_small,315,55);
 context.fillText(props.birthchart[11].sign.length > 1 ? props.birthchart[11].sign.slice(0,1) : props.birthchart[11].sign,258,61);
 gettexthori(context,props.birthchart[11].planet_small,220,29);
 
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

export default ChartCanvas;
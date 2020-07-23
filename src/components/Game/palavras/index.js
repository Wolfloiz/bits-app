import React, {useRef, useEffect} from 'react'
import './styles.css'
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);
const wd =224;
const wh =81;
const proporção = 2.542087542087542;
const width="50%";
const height ="50%";
    const className ="";
    const viewBox ="0 0"+" "+wd+" "+wh;

 export  const  WPower = () => {
    const wpower =useRef(null);

    useEffect(()=>{
         Draggable.create(wpower.current,{type:"x,y",
         
         edgeResistance:0.1, bounds:window, onDragEnd: function(){
         
         if(this.hitTest(".EN")){

         gsap.to(wpower.current,{x: 615.6 , y: 286.69})
         gsap.set(".EN",{"--HL":"var(--preto)"});
         gsap.set(".EN",{"stroke-width":"2.36"});
         
      }else{
         gsap.to(wpower.current,{x: 0, y: 0})
         
      }
   
      },
      onDrag: function(){
         if(this.hitTest(".EN", "5%")){
            gsap.set(".EN",{"--HL":"var(--Amarelo)"});
            gsap.set(".EN",{"stroke-width":"6"});
         }
         else{
            gsap.set(".EN",{"--HL":"var(--preto)"});
            gsap.set(".EN",{"stroke-width":"2.36 "});
         }
         
      }
      });
 }, [wpower]);

return(

<svg ref={wpower} width="224px" height="81px" 
viewBox="0 0 778.561 281.286">
 <g id="Camada_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <rect fill="#343650" stroke="#373435" stroke-width="6.944" stroke-miterlimit="22.9256" x="3.472" y="3.472" width="771.618" height="274.342" rx="66.343" ry="51.257"/>
  <polygon fill="#FEFEFE" fill-rule="nonzero" points="182.273,139.707 210.475,139.707 210.475,120.399 182.273,120.399 182.273,109.048 213.401,109.048 213.401,89.505 161.327,89.505 161.327,171.419 213.986,171.419 213.986,151.76 182.273,151.76 "/>
  <path id="1" fill="#FEFEFE" fill-rule="nonzero" d="M258.804 111.27c-7.373,0 -12.755,2.458 -16.266,7.49l0 -5.851 -19.425 0 0 58.51 19.425 0 0 -31.127c0,-6.904 3.511,-10.649 9.595,-10.649 5.267,0 8.777,3.159 8.777,9.245l0 32.531 19.426 0 0 -34.989c0,-16.266 -8.894,-25.16 -21.532,-25.16z"/>
  <path id="2" fill="#FEFEFE" fill-rule="nonzero" d="M348.442 149.302c0.583,-2.222 0.818,-4.68 0.818,-7.254 0,-8.777 -2.809,-16.15 -8.543,-22.001 -5.734,-5.851 -12.872,-8.777 -21.649,-8.777 -9.01,0 -16.5,2.926 -22.35,8.894 -5.851,5.969 -8.777,13.34 -8.777,22.117 0,8.894 2.926,16.266 8.894,22.117 5.968,5.734 13.925,8.66 23.872,8.66 11,0 19.425,-3.628 25.159,-10.884l-14.042 -9.829c-2.925,2.691 -6.436,4.095 -10.648,4.095 -6.788,0 -11.118,-2.339 -13.107,-7.138l40.373 0zm-40.607 -13.457c1.638,-5.5 5.499,-8.191 11.468,-8.191 5.734,0 9.479,2.691 11,8.191l-22.468 0z"/>
  <path id="3" fill="#FEFEFE" fill-rule="nonzero" d="M376.993 112.909l-19.424 0 0 58.51 19.424 0 0 -24.223c0,-5.265 1.756,-9.127 5.384,-11.468 3.628,-2.34 7.723,-3.159 12.17,-2.457l0 -21.532c-8.075,0 -15.33,4.447 -17.554,12.053l0 -10.883z"/>
  <path id="4" fill="#FEFEFE" fill-rule="nonzero" d="M442.291 118.526c-3.98,-4.798 -9.479,-7.256 -16.383,-7.256 -8.075,0 -14.744,2.926 -20.011,8.66 -5.266,5.734 -7.84,12.756 -7.84,21.064 0,8.308 2.574,15.329 7.84,21.063 5.267,5.734 11.936,8.66 20.011,8.66 6.904,0 12.403,-2.457 16.383,-7.256l0 5.618c0,6.904 -4.798,10.532 -11.82,10.532 -5.5,0 -9.595,-2.224 -12.403,-6.671l-16.15 9.362c5.149,9.362 15.798,14.277 28.787,14.277 15.331,0 30.777,-8.074 30.777,-27.5l0 -56.17 -19.191 0 0 5.617zm-21.415 31.245c-2.223,-2.341 -3.393,-5.266 -3.393,-8.777 0,-3.51 1.17,-6.436 3.393,-8.659 2.341,-2.341 5.382,-3.511 9.01,-3.511 3.628,0 6.671,1.17 8.894,3.511 2.341,2.223 3.511,5.149 3.511,8.659 0,3.511 -1.17,6.436 -3.511,8.777 -2.223,2.222 -5.266,3.393 -8.894,3.393 -3.628,0 -6.669,-1.171 -9.01,-3.393z"/>
  <path id="5" fill="#FEFEFE" fill-rule="nonzero" d="M490.269 104.835c4.565,-4.564 4.565,-11.468 0,-15.798 -4.329,-4.329 -11.233,-4.329 -15.797,0 -4.33,4.33 -4.33,11.234 0,15.798 4.564,4.33 11.468,4.33 15.797,0zm1.872 66.584l0 -58.51 -19.425 0 0 58.51 19.425 0z"/>
  <polygon id="6" fill="#FEFEFE" fill-rule="nonzero" points="549.13,126.25 549.13,112.909 503.609,112.909 503.609,130.93 523.152,130.93 502.439,158.079 502.439,171.419 550.301,171.419 550.301,153.399 528.417,153.399 "/>
  <path id="7" fill="#FEFEFE" fill-rule="nonzero" d="M597.811 118.292c-3.978,-4.681 -9.478,-7.022 -16.616,-7.022 -7.842,0 -14.394,2.926 -19.66,8.894 -5.267,5.852 -7.841,13.224 -7.841,22 0,8.777 2.574,16.149 7.841,22.117 5.266,5.851 11.818,8.777 19.66,8.777 7.138,0 12.638,-2.341 16.616,-7.021l0 5.382 19.425 0 0 -58.51 -19.425 0 0 5.383zm-21.181 33.118c-2.223,-2.341 -3.393,-5.384 -3.393,-9.246 0,-3.861 1.17,-6.904 3.393,-9.245 2.224,-2.339 5.267,-3.51 8.893,-3.51 3.628,0 6.671,1.171 8.894,3.51 2.224,2.341 3.394,5.384 3.394,9.245 0,3.862 -1.17,6.905 -3.394,9.246 -2.223,2.339 -5.266,3.509 -8.894,3.509 -3.626,0 -6.669,-1.17 -8.893,-3.509z"/>
 </g>
</svg>

);};

//wacende
export  const  WLed = () => {
   const wled =useRef(null);

   useEffect(()=>{
        Draggable.create(wled.current,{type:"x,y",
      
        
        edgeResistance:0.1, bounds:window, onDragEnd: function(){
        if(this.hitTest(".EN")){
        gsap.to(wled.current,{x: 615.6, y: 286.69})
        gsap.set(".EN",{"--HL":"var(--preto)"});
        gsap.set(".EN",{"stroke-width":"2.36"});
        
     } else{
        
        gsap.to(wled.current,{opacity:0,duration: 1});
        gsap.set(".EN",{"--HL":"var(--preto)"});
        gsap.set(".EN",{"stroke-width":"2.36"});
        
     }
  
     },
     onDrag: function(){
        if(this.hitTest(".EN", "5%")){
           gsap.set(".EN",{"--HL":"var(--Amarelo)"});
           gsap.set(".EN",{"stroke-width":"6"});
        }else{
           gsap.set(".EN",{"--HL":"var(--preto)"});
           gsap.set(".EN",{"stroke-width":"2.36 "});
        }
        
     }
     });
}, [wled]);

return(

<svg ref={wled} width="224px" height="81px" viewBox="0 0 97.598 35.261"
>
 <g id="Camada_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <rect fill="#0DA680" stroke="#373435" stroke-width="0.87" stroke-miterlimit="22.9256" x="0.435" y="0.435" width="96.727" height="34.39" rx="8.317" ry="6.425"/>
  <path fill="#FEFEFE" fill-rule="nonzero" d="M33.213 22.662l-3.389 -10.268 -3.198 0 -3.388 10.268 2.846 0 0.44 -1.482 3.418 0 0.44 1.482 2.831 0zm-4.988 -7.232l1.042 3.491 -2.068 0 1.026 -3.491z"/>
  <path id="1" fill="#FEFEFE" fill-rule="nonzero" d="M37.188 22.868c1.453,0 2.699,-0.734 3.345,-1.907l-2.083 -1.203c-0.25,0.484 -0.675,0.733 -1.276,0.733 -0.822,0 -1.438,-0.616 -1.438,-1.496 0,-0.88 0.616,-1.497 1.438,-1.497 0.586,0 1.012,0.235 1.276,0.719l2.083 -1.203c-0.646,-1.158 -1.892,-1.892 -3.345,-1.892 -1.115,0 -2.039,0.367 -2.787,1.115 -0.748,0.748 -1.115,1.658 -1.115,2.758 0,1.1 0.367,2.009 1.115,2.758 0.748,0.748 1.672,1.115 2.787,1.115z"/>
  <path id="2" fill="#FEFEFE" fill-rule="nonzero" d="M48.396 19.89c0.073,-0.279 0.102,-0.587 0.102,-0.91 0,-1.1 -0.352,-2.024 -1.071,-2.758 -0.719,-0.733 -1.613,-1.1 -2.714,-1.1 -1.129,0 -2.068,0.367 -2.801,1.115 -0.734,0.748 -1.101,1.672 -1.101,2.772 0,1.115 0.367,2.04 1.115,2.773 0.749,0.719 1.746,1.086 2.993,1.086 1.379,0 2.435,-0.455 3.154,-1.365l-1.761 -1.232c-0.366,0.337 -0.806,0.513 -1.334,0.513 -0.851,0 -1.394,-0.293 -1.643,-0.894l5.061 0zm-5.091 -1.687c0.206,-0.69 0.69,-1.027 1.438,-1.027 0.719,0 1.188,0.337 1.379,1.027l-2.817 0z"/>
  <path id="3" fill="#FEFEFE" fill-rule="nonzero" d="M54.014 15.122c-0.924,0 -1.599,0.308 -2.039,0.939l0 -0.734 -2.435 0 0 7.335 2.435 0 0 -3.902c0,-0.865 0.44,-1.335 1.203,-1.335 0.66,0 1.1,0.396 1.1,1.159l0 4.078 2.435 0 0 -4.386c0,-2.039 -1.115,-3.154 -2.699,-3.154z"/>
  <path id="4" fill="#FEFEFE" fill-rule="nonzero" d="M63.197 16.002c-0.499,-0.587 -1.189,-0.88 -2.083,-0.88 -0.983,0 -1.805,0.367 -2.465,1.115 -0.66,0.733 -0.983,1.658 -0.983,2.758 0,1.1 0.323,2.024 0.983,2.772 0.66,0.734 1.482,1.101 2.465,1.101 0.894,0 1.584,-0.294 2.083,-0.881l0 0.675 2.435 0 0 -10.268 -2.435 0 0 3.608zm-2.656 4.152c-0.278,-0.294 -0.425,-0.675 -0.425,-1.159 0,-0.484 0.147,-0.866 0.425,-1.159 0.279,-0.293 0.661,-0.44 1.115,-0.44 0.455,0 0.837,0.147 1.115,0.44 0.279,0.293 0.426,0.675 0.426,1.159 0,0.484 -0.147,0.865 -0.426,1.159 -0.278,0.293 -0.66,0.44 -1.115,0.44 -0.454,0 -0.836,-0.147 -1.115,-0.44z"/>
  <path id="5" fill="#FEFEFE" fill-rule="nonzero" d="M74.257 19.89c0.074,-0.279 0.103,-0.587 0.103,-0.91 0,-1.1 -0.352,-2.024 -1.071,-2.758 -0.719,-0.733 -1.614,-1.1 -2.714,-1.1 -1.129,0 -2.068,0.367 -2.802,1.115 -0.733,0.748 -1.1,1.672 -1.1,2.772 0,1.115 0.367,2.04 1.115,2.773 0.748,0.719 1.746,1.086 2.993,1.086 1.379,0 2.435,-0.455 3.153,-1.365l-1.76 -1.232c-0.366,0.337 -0.807,0.513 -1.335,0.513 -0.85,0 -1.393,-0.293 -1.643,-0.894l5.061 0zm-5.09 -1.687c0.205,-0.69 0.689,-1.027 1.438,-1.027 0.718,0 1.188,0.337 1.379,1.027l-2.817 0z"/>
 </g>
</svg>
);};


//wbutton
export const WButton =()=> {
   const wbutton =useRef();
   
   useEffect(()=>{
      Draggable.create(wbutton.current,{type:"x,y",
    
      
      edgeResistance:0.1, bounds:window, onDragEnd: function(){
      if(this.hitTest(".ENLed")){
      gsap.to(wbutton.current,{x: 515.11, y: 129.89})
      gsap.set(".ENLed",{"--HL":"var(--preto)"});
      gsap.set(".ENLed",{"stroke-width":"2.36"});
      
   }else{
      gsap.to(wbutton.current,{x: origin, y: origin})
      
   }

   },
   onDrag: function(){
      if(this.hitTest(".ENLed", "5%")){
         gsap.set(".ENLed",{"--HL":"var(--Amarelo)"});
         gsap.set(".ENLed",{"stroke-width":"6"});
      }else{
         gsap.set(".ENLed",{"--HL":"var(--preto)"});
         gsap.set(".ENLed",{"stroke-width":"2.36 "});
      }
      
   }
   });

}, [wbutton]);
return(
   <svg ref={wbutton} width="224px" height="81px" 
viewBox="0 0 97.399 35.189">
 <g id="Camada_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <rect fill="#EE765E" stroke="#373435" stroke-width="0.869" stroke-miterlimit="22.9256" x="0.434" y="0.434" width="96.531" height="34.321" rx="8.3" ry="6.412"/>
  <path fill="#FEFEFE" fill-rule="nonzero" d="M13.807 12.668l0 10.248 2.62 0 0 -3.074 1.362 0c1.039,0 1.903,-0.337 2.605,-1.01 0.703,-0.674 1.054,-1.538 1.054,-2.577 0,-1.039 -0.351,-1.903 -1.054,-2.577 -0.702,-0.673 -1.566,-1.01 -2.605,-1.01l-3.982 0zm2.62 4.685l0 -2.181 1.362 0c0.585,0 1.039,0.439 1.039,1.083 0,0.644 -0.454,1.098 -1.039,1.098l-1.362 0z"/>
  <path id="1" fill="#FEFEFE" fill-rule="nonzero" d="M24.728 15.596l-2.43 0 0 7.32 2.43 0 0 -3.03c0,-0.659 0.219,-1.142 0.673,-1.435 0.454,-0.293 0.966,-0.395 1.523,-0.308l0 -2.693c-1.011,0 -1.918,0.556 -2.196,1.508l0 -1.362z"/>
  <path id="2" fill="#FEFEFE" fill-rule="nonzero" d="M34.873 20.149c0.073,-0.278 0.102,-0.585 0.102,-0.908 0,-1.098 -0.351,-2.02 -1.068,-2.752 -0.718,-0.732 -1.611,-1.098 -2.709,-1.098 -1.127,0 -2.064,0.366 -2.796,1.113 -0.732,0.747 -1.098,1.669 -1.098,2.767 0,1.112 0.366,2.035 1.113,2.767 0.746,0.717 1.742,1.083 2.986,1.083 1.376,0 2.43,-0.454 3.148,-1.362l-1.757 -1.229c-0.366,0.336 -0.805,0.512 -1.332,0.512 -0.849,0 -1.391,-0.293 -1.64,-0.893l5.051 0zm-5.08 -1.683c0.205,-0.689 0.688,-1.025 1.435,-1.025 0.717,0 1.185,0.336 1.376,1.025l-2.811 0z"/>
  <path id="3" fill="#FEFEFE" fill-rule="nonzero" d="M38.049 17.734c0,-0.235 0.176,-0.352 0.542,-0.352 0.395,0 0.688,0.205 0.908,0.63l2.049 -0.922c-0.571,-1.128 -1.566,-1.699 -3.015,-1.699 -0.806,0 -1.508,0.22 -2.079,0.645 -0.571,0.424 -0.864,1.039 -0.864,1.815 -0.015,1.508 1.303,2.049 2.313,2.269 0.703,0.175 1.259,0.322 1.259,0.6 0,0.264 -0.22,0.395 -0.659,0.395 -0.571,0 -0.951,-0.263 -1.142,-0.805l-2.122 1.069c0.541,1.156 1.639,1.742 3.279,1.742 0.864,0 1.596,-0.205 2.225,-0.6 0.63,-0.396 0.937,-1.025 0.937,-1.859 0.015,-1.626 -1.318,-2.152 -2.357,-2.343 -0.703,-0.161 -1.274,-0.307 -1.274,-0.585z"/>
  <path id="4" fill="#FEFEFE" fill-rule="nonzero" d="M44.564 17.734c0,-0.235 0.176,-0.352 0.542,-0.352 0.395,0 0.688,0.205 0.907,0.63l2.05 -0.922c-0.571,-1.128 -1.567,-1.699 -3.016,-1.699 -0.805,0 -1.508,0.22 -2.079,0.645 -0.571,0.424 -0.863,1.039 -0.863,1.815 -0.015,1.508 1.303,2.049 2.313,2.269 0.702,0.175 1.259,0.322 1.259,0.6 0,0.264 -0.22,0.395 -0.659,0.395 -0.571,0 -0.952,-0.263 -1.142,-0.805l-2.123 1.069c0.542,1.156 1.64,1.742 3.279,1.742 0.864,0 1.596,-0.205 2.226,-0.6 0.629,-0.396 0.937,-1.025 0.937,-1.859 0.014,-1.626 -1.318,-2.152 -2.357,-2.343 -0.703,-0.161 -1.274,-0.307 -1.274,-0.585z"/>
  <path id="5" fill="#FEFEFE" fill-rule="nonzero" d="M51.342 14.586c0.571,-0.571 0.571,-1.435 0,-1.976 -0.541,-0.542 -1.405,-0.542 -1.976,0 -0.542,0.541 -0.542,1.405 0,1.976 0.571,0.542 1.435,0.542 1.976,0zm0.234 8.33l0 -7.32 -2.43 0 0 7.32 2.43 0z"/>
  <path id="6" fill="#FEFEFE" fill-rule="nonzero" d="M56.525 23.121c1.097,0 2.02,-0.366 2.766,-1.113 0.762,-0.746 1.142,-1.669 1.142,-2.752 0,-1.083 -0.38,-1.991 -1.142,-2.737 -0.746,-0.747 -1.669,-1.128 -2.766,-1.128 -1.084,0 -2.006,0.381 -2.767,1.128 -0.762,0.746 -1.142,1.654 -1.142,2.737 0,1.083 0.38,2.006 1.142,2.752 0.761,0.747 1.683,1.113 2.767,1.113zm0 -2.342c-0.835,0 -1.465,-0.63 -1.465,-1.523 0,-0.893 0.63,-1.522 1.465,-1.522 0.863,0 1.478,0.629 1.478,1.522 0,0.893 -0.615,1.523 -1.478,1.523z"/>
  <path id="7" fill="#FEFEFE" fill-rule="nonzero" d="M65.967 15.391c-0.922,0 -1.596,0.308 -2.035,0.937l0 -0.732 -2.43 0 0 7.32 2.43 0 0 -3.894c0,-0.864 0.439,-1.332 1.2,-1.332 0.659,0 1.098,0.395 1.098,1.156l0 4.07 2.431 0 0 -4.377c0,-2.035 -1.113,-3.148 -2.694,-3.148z"/>
  <path id="8" fill="#FEFEFE" fill-rule="nonzero" d="M75.131 16.27c-0.498,-0.586 -1.186,-0.879 -2.079,-0.879 -0.981,0 -1.8,0.366 -2.459,1.113 -0.659,0.732 -0.981,1.654 -0.981,2.752 0,1.098 0.322,2.02 0.981,2.767 0.659,0.732 1.478,1.098 2.459,1.098 0.893,0 1.581,-0.293 2.079,-0.878l0 0.673 2.43 0 0 -7.32 -2.43 0 0 0.674zm-2.65 4.143c-0.278,-0.293 -0.424,-0.674 -0.424,-1.157 0,-0.483 0.146,-0.864 0.424,-1.156 0.278,-0.293 0.659,-0.44 1.113,-0.44 0.454,0 0.834,0.147 1.112,0.44 0.279,0.292 0.425,0.673 0.425,1.156 0,0.483 -0.146,0.864 -0.425,1.157 -0.278,0.292 -0.658,0.439 -1.112,0.439 -0.454,0 -0.835,-0.147 -1.113,-0.439z"/>
  <path id="9" fill="#FEFEFE" fill-rule="nonzero" d="M81.397 15.596l-2.43 0 0 7.32 2.43 0 0 -3.03c0,-0.659 0.219,-1.142 0.673,-1.435 0.454,-0.293 0.966,-0.395 1.523,-0.308l0 -2.693c-1.011,0 -1.918,0.556 -2.196,1.508l0 -1.362z"/>
 </g>
</svg>
);};
//wbargraph
export const WBarGraph =()=> {
   const wbgraph =useRef();
   
   useEffect(()=>{
      Draggable.create(wbgraph.current,{type:"x,y",
      edgeResistance:0.1, bounds:window, onDragEnd: function(){
      if(this.hitTest(".ENLed")){
      gsap.to(wbgraph.current,{x: 515.11, y: 129.89})
      gsap.set(".ENLed",{"--HL":"var(--preto)"});
      gsap.set(".ENLed",{"stroke-width":"2.36"});
   } else {
      gsap.to(wbgraph.current,{x: origin, y: origin})
      
   }

   },
   onDrag: function(){
      if(this.hitTest(".ENLed", "5%")){
         gsap.set(".ENLed",{"--HL":"var(--Amarelo)"});
         gsap.set(".ENLed",{"stroke-width":"6"});
      }else{
         gsap.set(".ENLed",{"--HL":"var(--preto)"});
         gsap.set(".ENLed",{"stroke-width":"2.36 "});
      }
      
   }
   });

}, [wbgraph]);

return(
   <svg ref={wbgraph} width="224px" 
   height="81px"
   viewBox="0 0 753.85 272.358">
 <g id="Camada_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <rect fill="#0DA680" stroke="#373435" stroke-width="6.723" stroke-miterlimit="22.9256" x="3.362" y="3.362" width="747.127" height="265.635" rx="64.237" ry="49.63"/>
  <polygon fill="#FEFEFE" fill-rule="nonzero" points="220.111,177.365 240.393,177.365 240.393,98.05 220.111,98.05 "/>
  <path id="1" fill="#FEFEFE" fill-rule="nonzero" d="M286.622 119.125c-7.139,0 -12.351,2.379 -15.75,7.252l0 -5.665 -18.808 0 0 56.653 18.808 0 0 -30.14c0,-6.685 3.399,-10.311 9.291,-10.311 5.099,0 8.498,3.059 8.498,8.952l0 31.499 18.809 0 0 -33.879c0,-15.75 -8.611,-24.361 -20.848,-24.361z"/>
  <path id="2" fill="#FEFEFE" fill-rule="nonzero" d="M357.551 125.923c-3.852,-4.532 -9.178,-6.798 -16.089,-6.798 -7.593,0 -13.937,2.833 -19.036,8.611 -5.099,5.666 -7.592,12.804 -7.592,21.302 0,8.498 2.493,15.636 7.592,21.415 5.099,5.665 11.443,8.498 19.036,8.498 6.911,0 12.237,-2.266 16.089,-6.798l0 5.212 18.808 0 0 -79.315 -18.808 0 0 27.873zm-20.509 32.067c-2.152,-2.267 -3.286,-5.213 -3.286,-8.952 0,-3.739 1.134,-6.685 3.286,-8.952 2.153,-2.265 5.099,-3.398 8.611,-3.398 3.513,0 6.459,1.133 8.611,3.398 2.154,2.267 3.287,5.213 3.287,8.952 0,3.739 -1.133,6.685 -3.287,8.952 -2.152,2.265 -5.098,3.398 -8.611,3.398 -3.512,0 -6.458,-1.133 -8.611,-3.398z"/>
  <path id="3" fill="#FEFEFE" fill-rule="nonzero" d="M404.232 112.893c4.42,-4.419 4.42,-11.104 0,-15.296 -4.191,-4.192 -10.876,-4.192 -15.295,0 -4.193,4.192 -4.193,10.877 0,15.296 4.419,4.193 11.104,4.193 15.295,0zm1.813 64.472l0 -56.653 -18.808 0 0 56.653 18.808 0z"/>
  <path id="4" fill="#FEFEFE" fill-rule="nonzero" d="M444.229 178.951c11.219,0 20.849,-5.666 25.834,-14.729l-16.089 -9.291c-1.926,3.739 -5.212,5.665 -9.858,5.665 -6.345,0 -11.104,-4.76 -11.104,-11.558 0,-6.798 4.759,-11.557 11.104,-11.557 4.533,0 7.819,1.813 9.858,5.552l16.089 -9.291c-4.985,-8.951 -14.615,-14.617 -25.834,-14.617 -8.611,0 -15.749,2.833 -21.528,8.611 -5.778,5.779 -8.611,12.804 -8.611,21.302 0,8.498 2.833,15.523 8.611,21.302 5.779,5.778 12.917,8.611 21.528,8.611z"/>
  <path id="5" fill="#FEFEFE" fill-rule="nonzero" d="M514.932 125.923c-3.852,-4.532 -9.177,-6.798 -16.089,-6.798 -7.592,0 -13.937,2.833 -19.035,8.611 -5.1,5.666 -7.593,12.804 -7.593,21.302 0,8.498 2.493,15.636 7.593,21.415 5.098,5.665 11.443,8.498 19.035,8.498 6.912,0 12.237,-2.266 16.089,-6.798l0 5.212 18.809 0 0 -56.653 -18.809 0 0 5.211zm-20.509 32.067c-2.152,-2.267 -3.285,-5.213 -3.285,-8.952 0,-3.739 1.133,-6.685 3.285,-8.952 2.154,-2.265 5.1,-3.398 8.611,-3.398 3.513,0 6.46,1.133 8.612,3.398 2.153,2.267 3.286,5.213 3.286,8.952 0,3.739 -1.133,6.685 -3.286,8.952 -2.152,2.265 -5.099,3.398 -8.612,3.398 -3.511,0 -6.457,-1.133 -8.611,-3.398z"/>
 </g>
</svg>
);};

//wroller
export const WRoller =()=> {
   const wroller =useRef();
   
   useEffect(()=>{
      Draggable.create(wroller.current,{type:"x,y",
    
      
      edgeResistance:0.1, bounds:window, onDragEnd: function(){
      if(this.hitTest(".ENLed")){
      gsap.to(wroller.current,{x: 515.11, y: 129.89})
      gsap.set(".ENLed",{"--HL":"var(--preto)"});
      gsap.set(".ENLed",{"stroke-width":"2.36"});
      
   }else{
      gsap.to(wroller.current,{x: origin, y: origin})
      
   }

   },
   onDrag: function(){
      if(this.hitTest(".ENLed", "5%")){
         gsap.set(".ENLed",{"--HL":"var(--Amarelo)"});
         gsap.set(".ENLed",{"stroke-width":"6"});
      }else{
         gsap.set(".ENLed",{"--HL":"var(--preto)"});
         gsap.set(".ENLed",{"stroke-width":"2.36 "});
      }
      
   }
   });

}, [wroller]);
return(
   <svg ref={wroller} width="224px" height="81px" 
viewBox="0 0 97.399 35.189">
 <g id="Camada_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <rect fill="#EE765E" stroke="#373435" stroke-width="0.869" stroke-miterlimit="22.9256" x="0.434" y="0.434" width="96.531" height="34.321" rx="8.3" ry="6.412"/>
  <path fill="#FEFEFE" fill-rule="nonzero" d="M13.807 12.668l0 10.248 2.62 0 0 -3.074 1.362 0c1.039,0 1.903,-0.337 2.605,-1.01 0.703,-0.674 1.054,-1.538 1.054,-2.577 0,-1.039 -0.351,-1.903 -1.054,-2.577 -0.702,-0.673 -1.566,-1.01 -2.605,-1.01l-3.982 0zm2.62 4.685l0 -2.181 1.362 0c0.585,0 1.039,0.439 1.039,1.083 0,0.644 -0.454,1.098 -1.039,1.098l-1.362 0z"/>
  <path id="1" fill="#FEFEFE" fill-rule="nonzero" d="M24.728 15.596l-2.43 0 0 7.32 2.43 0 0 -3.03c0,-0.659 0.219,-1.142 0.673,-1.435 0.454,-0.293 0.966,-0.395 1.523,-0.308l0 -2.693c-1.011,0 -1.918,0.556 -2.196,1.508l0 -1.362z"/>
  <path id="2" fill="#FEFEFE" fill-rule="nonzero" d="M34.873 20.149c0.073,-0.278 0.102,-0.585 0.102,-0.908 0,-1.098 -0.351,-2.02 -1.068,-2.752 -0.718,-0.732 -1.611,-1.098 -2.709,-1.098 -1.127,0 -2.064,0.366 -2.796,1.113 -0.732,0.747 -1.098,1.669 -1.098,2.767 0,1.112 0.366,2.035 1.113,2.767 0.746,0.717 1.742,1.083 2.986,1.083 1.376,0 2.43,-0.454 3.148,-1.362l-1.757 -1.229c-0.366,0.336 -0.805,0.512 -1.332,0.512 -0.849,0 -1.391,-0.293 -1.64,-0.893l5.051 0zm-5.08 -1.683c0.205,-0.689 0.688,-1.025 1.435,-1.025 0.717,0 1.185,0.336 1.376,1.025l-2.811 0z"/>
  <path id="3" fill="#FEFEFE" fill-rule="nonzero" d="M38.049 17.734c0,-0.235 0.176,-0.352 0.542,-0.352 0.395,0 0.688,0.205 0.908,0.63l2.049 -0.922c-0.571,-1.128 -1.566,-1.699 -3.015,-1.699 -0.806,0 -1.508,0.22 -2.079,0.645 -0.571,0.424 -0.864,1.039 -0.864,1.815 -0.015,1.508 1.303,2.049 2.313,2.269 0.703,0.175 1.259,0.322 1.259,0.6 0,0.264 -0.22,0.395 -0.659,0.395 -0.571,0 -0.951,-0.263 -1.142,-0.805l-2.122 1.069c0.541,1.156 1.639,1.742 3.279,1.742 0.864,0 1.596,-0.205 2.225,-0.6 0.63,-0.396 0.937,-1.025 0.937,-1.859 0.015,-1.626 -1.318,-2.152 -2.357,-2.343 -0.703,-0.161 -1.274,-0.307 -1.274,-0.585z"/>
  <path id="4" fill="#FEFEFE" fill-rule="nonzero" d="M44.564 17.734c0,-0.235 0.176,-0.352 0.542,-0.352 0.395,0 0.688,0.205 0.907,0.63l2.05 -0.922c-0.571,-1.128 -1.567,-1.699 -3.016,-1.699 -0.805,0 -1.508,0.22 -2.079,0.645 -0.571,0.424 -0.863,1.039 -0.863,1.815 -0.015,1.508 1.303,2.049 2.313,2.269 0.702,0.175 1.259,0.322 1.259,0.6 0,0.264 -0.22,0.395 -0.659,0.395 -0.571,0 -0.952,-0.263 -1.142,-0.805l-2.123 1.069c0.542,1.156 1.64,1.742 3.279,1.742 0.864,0 1.596,-0.205 2.226,-0.6 0.629,-0.396 0.937,-1.025 0.937,-1.859 0.014,-1.626 -1.318,-2.152 -2.357,-2.343 -0.703,-0.161 -1.274,-0.307 -1.274,-0.585z"/>
  <path id="5" fill="#FEFEFE" fill-rule="nonzero" d="M51.342 14.586c0.571,-0.571 0.571,-1.435 0,-1.976 -0.541,-0.542 -1.405,-0.542 -1.976,0 -0.542,0.541 -0.542,1.405 0,1.976 0.571,0.542 1.435,0.542 1.976,0zm0.234 8.33l0 -7.32 -2.43 0 0 7.32 2.43 0z"/>
  <path id="6" fill="#FEFEFE" fill-rule="nonzero" d="M56.525 23.121c1.097,0 2.02,-0.366 2.766,-1.113 0.762,-0.746 1.142,-1.669 1.142,-2.752 0,-1.083 -0.38,-1.991 -1.142,-2.737 -0.746,-0.747 -1.669,-1.128 -2.766,-1.128 -1.084,0 -2.006,0.381 -2.767,1.128 -0.762,0.746 -1.142,1.654 -1.142,2.737 0,1.083 0.38,2.006 1.142,2.752 0.761,0.747 1.683,1.113 2.767,1.113zm0 -2.342c-0.835,0 -1.465,-0.63 -1.465,-1.523 0,-0.893 0.63,-1.522 1.465,-1.522 0.863,0 1.478,0.629 1.478,1.522 0,0.893 -0.615,1.523 -1.478,1.523z"/>
  <path id="7" fill="#FEFEFE" fill-rule="nonzero" d="M65.967 15.391c-0.922,0 -1.596,0.308 -2.035,0.937l0 -0.732 -2.43 0 0 7.32 2.43 0 0 -3.894c0,-0.864 0.439,-1.332 1.2,-1.332 0.659,0 1.098,0.395 1.098,1.156l0 4.07 2.431 0 0 -4.377c0,-2.035 -1.113,-3.148 -2.694,-3.148z"/>
  <path id="8" fill="#FEFEFE" fill-rule="nonzero" d="M75.131 16.27c-0.498,-0.586 -1.186,-0.879 -2.079,-0.879 -0.981,0 -1.8,0.366 -2.459,1.113 -0.659,0.732 -0.981,1.654 -0.981,2.752 0,1.098 0.322,2.02 0.981,2.767 0.659,0.732 1.478,1.098 2.459,1.098 0.893,0 1.581,-0.293 2.079,-0.878l0 0.673 2.43 0 0 -7.32 -2.43 0 0 0.674zm-2.65 4.143c-0.278,-0.293 -0.424,-0.674 -0.424,-1.157 0,-0.483 0.146,-0.864 0.424,-1.156 0.278,-0.293 0.659,-0.44 1.113,-0.44 0.454,0 0.834,0.147 1.112,0.44 0.279,0.292 0.425,0.673 0.425,1.156 0,0.483 -0.146,0.864 -0.425,1.157 -0.278,0.292 -0.658,0.439 -1.112,0.439 -0.454,0 -0.835,-0.147 -1.113,-0.439z"/>
  <path id="9" fill="#FEFEFE" fill-rule="nonzero" d="M81.397 15.596l-2.43 0 0 7.32 2.43 0 0 -3.03c0,-0.659 0.219,-1.142 0.673,-1.435 0.454,-0.293 0.966,-0.395 1.523,-0.308l0 -2.693c-1.011,0 -1.918,0.556 -2.196,1.508l0 -1.362z"/>
 </g>
</svg>
);};




function extract(costyx){
//console.log("entrata");
//console.log(costyx[0][0]);
	pathx=[[0,0]];
	let minDiff = Number.MAX_VALUE;
	let num0=0,num1=0,num2=0,currDiff=0;
	
	
	while(costyx.length){	
		minDiff = Number.MAX_VALUE;
		for(let i = 0; i < pathx.length; i=i+10){
			for(let m =0; m< costyx.length; m++){
				for(let n = 0; n < costyx[m].length; n++){
					x=pathx[i][0];
					y=pathx[i][1];
					x1=costyx[m][n][0];
					y1=costyx[m][n][1];						
					x2=x-x1;
					y2=y-y1;
					currDiff = x2*x2+y2*y2;  					
					if(currDiff < minDiff){
						minDiff = currDiff;
						pos0 = i;
						pat1 = m;
						pos1 = n;
					} 
				}   		
			}	
		}
	
	p=costyx.splice(pat1,1)[0];     //extract
	//p=p[0];                      //extract because need

	p = p.splice(pos1).concat(p);//rotate
		p.push(p[0]);                //close path
	pathx=pathx.slice(0,pos0).concat(p, pathx.slice(pos0-1));
	}
	
//console.log("uscita");   
//console.log(pathx[0]);

return pathx;	
  }



/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (n) => {
	// Write your code here
     let temp = ''; let y=''; let res=''
    for (j = 0; j < n; j++) {
        for(k=n-j; k>1 ; k--){
            y = y+' ';     
        }
        temp = temp + ' *';
        res= res+(y+temp)+'  \n';
        y='';  
    }
    return res;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;

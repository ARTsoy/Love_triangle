/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 var n = preferences.length;
 var temp1=0, temp2=0, temp3=0;
 var count=0, m=0;
 
for(var i=0;i<n;i++)
 {		
		
			
			temp1=preferences[i]-1;
			if(temp1==i)
			{
				continue;
			}
			temp2=preferences[temp1]-1;
			if(temp2==temp1)
			{
				continue;
			}
			temp3=preferences[temp2]-1;
			if(temp3==temp2)
			{
				continue;
			}
			if(temp3==i)
			{
				count=count+1;
			}
			
 }
 count = count/3;
		
 
 return count;
};

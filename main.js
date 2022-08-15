function solution(n) {
  var d = [1];
  for (var i = 1; i < n; i++) {
    b = 4 * (n-i);
    d.push(b);    
  }
return d.reduce((x,y)=>x+y,0)
}

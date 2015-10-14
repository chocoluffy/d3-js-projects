1\ binding
With D3, we bind our data input values to elements in the DOM. 
Binding is like “attaching” or associating data to specific elements,
so that later you can reference those values to apply mapping rules.
 Without the binding step, we have a bunch of data-less, un-mappable DOM elements.
No one wants that.

2\ d3 other methods
attr(), sstyle(), allow us to set HTML attributes and css;

.data(dataset) 之后的chain command都可以通过announous function来传入d
这个变量然后在函数里面利用这个data; 会根据dataset里面的长度和具体的数字来不断地
looping; 

attr() 用来改变对应元素的属性 width height;
style() 用来改变样式  background-color;

3\ 必须选择一类元素
This code selects all rects inside of svg. Of course, there aren’t any yet,
 so an empty selection is returned. (Weird, yes, but stay with me. With D3,
  you always have to first select whatever it is you’re about to act on, 
  even if that selection is momentarily empty.)

 4\ 使用scale这个方法
 var scale = d3.scale.linear()
                    .domain([100, 500])
                    .range([10, 350]);

5\ 回调函数

One new thing above is d3.select(this), which selects the thing that called each().
In this case, this refers to whichever circle just finished its initial transition.

//Move to bottom
d3.selectAll("circle")
  .transition()
  .delay(function(d, i) {
    return i * 50;
  })
  .duration(3000)
  .attr("cy", "100%")
  .each("end", function() {

    //Move to top
    d3.select(this) 
      .transition()
      .delay(function(d, i) {
        return i * 50;
      })
      .duration(3000)
      .attr("cy", "0%");

  })











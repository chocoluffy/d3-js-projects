1\ binding
With D3, we bind our data input values to elements in the DOM. 
Binding is like “attaching” or associating data to specific elements,
so that later you can reference those values to apply mapping rules.
 Without the binding step, we have a bunch of data-less, un-mappable DOM elements.
No one wants that.

2\ d3 other methods
attr(), sstyle(), allow us to set HTML attributes and css;

.data(dataset) 之后的chain command都可以通过announous function来传入d
这个变量然后在函数里面利用这个data;

attr() 用来改变对应元素的属性 width height;
style() 用来改变样式  background-color;
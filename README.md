# 2018
##basic
###BFC
> BFC(Block Formatting Context)
> BFC:块级格式化上下文【在css3中叫Flow Root】是一个独立布局环境，相邻盒子margin垂直方向会重叠。
- 什么样的元素会为其内容生成一个BFC呢？
    - 浮动元素，即float:left/right
    - 绝对定位元素，即position:absolute/fixed
    - 块容器，即display:table-cell/table-caption/inline-block
    - 设置了除visible外的overflow值的块盒子，即overflow:hidden/scroll/auto
- BFC特性：
    - 创建了BFC的元素中，子浮动元素也会参与高度计算
    - 与浮动元素相邻的、创建了BFC的元素，都不能与浮动元素相互覆盖
    - 创建了BFC的元素不会与它们的子元素margin重叠









##MVVM
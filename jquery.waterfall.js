/**
 * ITCAST WEB
 * Created by zhousg on 2016/5/26.
 */
/*封装一个瀑布流插件*/
(function($){
    $.fn.WaterFall = function(){
        var $this = $(this);
        var parentWidth = $this.width();
        var items = $this.children();
        var childWidth = items.width();
        var columnCount = 5;

        var space = (parentWidth - childWidth * columnCount)/(columnCount-1);
        var columnArray = [];
        items.each(function(index,obj){
            var $obj = $(obj);
            var height = $obj.height();

            if(index < columnCount){
                columnArray[index] = height;
                $obj.css({top:0,left:index*(childWidth+space)});
            }
            else{
                var min = columnArray[0];
                var min_index = 0;
                for(var i = 0 ; i < columnArray.length ; i ++){
                    if( min > columnArray[i]){
                        min = columnArray[i];
                        min_index = i;
                    }
                }
                columnArray[min_index] += height +10;

                $obj.css({
                    top: min + 10,
                    left:min_index*(childWidth+space)
                });
            }
        });

        var max = columnArray[0];
        for(var j = 0;j<columnArray.length;j++){
            if(max < columnArray[j]){
                max = columnArray[j];
            }
        }
        $this.height(max);
    }
})(jQuery)

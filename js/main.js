$(function(){
   /* First console */
   var console1 = $('<div class="console1">');

   $('body').append(console1);

   console1.console({
      promptLabel: 'root@lug:~# ',

      commandHandle:function(line){
        var lines = line.split(' '),
         command = lines[0];

        if (command == 'ls') {
         return [{
             msg:".htpasswd",
             className: "jquery-console-message-value"
         }];
        }

        return [{
          msg: "-llug: " + command + ": command not found",
          className: "jquery-console-message-error"
        }];
      },

      cols: 80,
      autofocus: true,
      animateScroll: true,
      promptHistory: true,

      completeHandle: function(prefix){
        var completions = this.colors;
        var ret = [];
        for (var i=0;i<colors.length;i++) {
          var color=colors[i];
          if (color.lastIndexOf(prefix,0) === 0) {
            ret.push(color.substring(prefix.length));
          }
        }
        return ret;
      }

    });
});


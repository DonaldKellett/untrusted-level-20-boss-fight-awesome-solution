/* Interesting variation: The AntiBoss drops the computer if defeated */

map.getPlayer().removeItem('computer');

map.defineObject('minishield', {
        'symbol': '-',
        'color': 'blue',
        'impassable': true
    });
    
    map.placeObject(25, 21, 'minishield');
    
   map.defineObject('ANTIboss', {
        'type': 'dynamic',
        'symbol': '⊙',
        'color': 'green',
        'interval': 200,
        'onCollision': function (player) {
            player.killedBy('the ANTIboss');
        },
        'behavior': function (me) {
        	if (!me.direction) {
        		me.direction = 'right';
        	}
        	if (me.canMove(me.direction)) {
            	me.move(me.direction);
        	} else {
        		me.direction = (me.direction == 'right') ? 'left' : 'right';
        	}
        	if (Math.random() < 0.3) {
            	map.placeObject(me.getX(), me.getY() - 2, 'ANTIbullet');
        	}
        },
        'onDestroy': function (me) {
            if (map.countObjects('ANTIboss') == 0) {
                map.placeObject(me.getX(), me.getY(), 'computer');
            }
        }
    });
    
    map.defineObject('ANTIbullet', {
        'type': 'dynamic',
        'symbol': '.',
        'color': 'green',
        'interval': 100,
        'projectile': true,
        'behavior': function (me) {
            me.move('up');
        }
    });
    
    map.defineObject('superdrone', {
        'type': 'dynamic',
        'symbol': '∆',
        'color': 'yellow',
        'interval': 200,
        'onCollision': function (player) {
            player.killedBy('a superdrone');
        },
        'behavior': function (me) {
        	if (!me.direction) {
        		me.direction = 'right';
        	}
        	if (me.canMove(me.direction)) {
            	me.move(me.direction);
        	} else {
        		me.direction = (me.direction == 'right') ? 'left' : 'right';
        	}
        	if (9 === 9) {
            	map.placeObject(me.getX(), me.getY() - 2, 'superdrone-bullet');
        	}
        }
    });
    
    map.defineObject('superdrone-bullet', {
        'type': 'dynamic',
        'symbol': '.',
        'color': 'yellow',
        'interval': 100,
        'projectile': true,
        'behavior': function (me) {
            me.move('up');
        }
    });
    
    var initialPhoneCall = 1;
    
    map.getPlayer().setPhoneCallback(function(){
    
    if (initialPhoneCall === 1) {
    map.placeObject(11, 13, 'ANTIboss');
    map.placeObject(13, 13, 'ANTIboss');
    map.placeObject(15, 13, 'ANTIboss');
    map.placeObject(17, 13, 'ANTIboss');
    map.placeObject(19, 13, 'ANTIboss');
    map.placeObject(21, 13, 'ANTIboss');
    map.placeObject(23, 13, 'ANTIboss');
    map.placeObject(25, 13, 'ANTIboss');
    map.placeObject(27, 13, 'ANTIboss');
    map.placeObject(29, 13, 'ANTIboss');
    map.placeObject(31, 13, 'ANTIboss');
    
    map.placeObject(10, 14, 'ANTIboss');
    map.placeObject(12, 14, 'ANTIboss');
    map.placeObject(14, 14, 'ANTIboss');
    map.placeObject(16, 14, 'ANTIboss');
    map.placeObject(18, 14, 'ANTIboss');
    map.placeObject(20, 14, 'ANTIboss');
    map.placeObject(22, 14, 'ANTIboss');
    map.placeObject(24, 14, 'ANTIboss');
    map.placeObject(26, 14, 'ANTIboss');
    map.placeObject(28, 14, 'ANTIboss');
    map.placeObject(30, 14, 'ANTIboss');
    map.placeObject(32, 14, 'ANTIboss');
    initialPhoneCall = 0;
    } else {map.placeObject(0, 13, 'superdrone');}
    
    });
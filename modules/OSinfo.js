var os = require('os');
var Time = require('../modules/Time');
function getOSinfo() {
            var type = os.type();
            if(type === 'Darwin') {
                type = 'OSX';
            } else if(type === 'Windows_NT') {
                type = 'Windows';
            }
            var release = os.release();
            var cpu = os.cpus()[0].model;
            var uptime = os.uptime();
            var uptimeNew = getTime(uptime);
            var userInfo = os.userInfo();
            console.log('System:', type);
            console.log('Release:', release);
            console.log('CPU model:', cpu);
            console.log('Uptime: ~', uptimeNew);
            console.log('User name:', userInfo.username);
            console.log('Home dir:', userInfo.homedir);
            }
exports.print = getOSinfo;
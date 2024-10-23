### 1. **There are 1000 lines in a file and we want to print 100 lines where we find a specified word. How to print?**
   - You can use the **`grep`** command in Linux:
     ```bash
     grep -m 100 'specified_word' filename
     ```
     This command will stop after finding the first 100 lines that contain the specified word.

### 2. **Can we use the output of one command as the input of another command?**
   - **Yes**, in Linux, you can use pipes (`|`) to pass the output of one command as the input to another command. For example:
     ```bash
     ls | grep '.php'
     ```

### 3. **How to get the server time using PHP and Linux command?**
   - **PHP**:
     ```php
     echo date('Y-m-d H:i:s');
     ```
   - **Linux**:
     ```bash
     date
     ```
### 14. **How to check if a port is enabled?**
   - You can use **`netstat`** or **`lsof`** in Linux to check for open ports:
     ```bash
     netstat -tuln | grep :port_number
     ```
     Or:
     ```bash
     lsof -i :port_number
     ```
     Or:
     ```bash
     telnet <hostname> <port>
     ```
        Or:
     ```bash
     nc -zv <hostname> <port>
     ```
    Or:
     ```bash
     nmap -p <port> <hostname>
     ```

### 15. **How to check if a process is running and how to kill it?**
   - To check running processes, use:
     ```bash
     ps aux | grep process_name
     ```
   - To kill a process, find the process ID (PID) and then use:
     ```bash
     kill -9 PID
     ```


     how to write into the file without opening it
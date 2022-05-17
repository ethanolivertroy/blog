## Simple Way to Compare Lists of IP Addresses in Python

Here's a simple way to compare lists of IP addresses in python
You might for example want to compare a baseline inventory list to a routine Nessus scan to ensure all machines are logged in the inventory

# Code:
```
import difflib
	

#edit the path
	

ips1 = "/Users/your_user/Github/sub_folder/compare-lists/input/file1.txt"
ips2 = "/Users/your_user/Github/sub_folder/compare-lists/input/file2.txt"
	

ips1_lines = open(ips1, 'r').readlines()
ips2_lines = open(ips2, 'r').readlines()
	

difference = difflib.HtmlDiff().make_file(ips1_lines,ips2_lines,'IP Set 1','IP Set 2')
difference_report = open('difference_report.html', 'w')
difference_report.write(difference)
difference_report.close()
```
# How to Use:
## Create your 2 text files with the IP Addresses in a list
- One IP address per line
- Store files in 'input' directory
## Edit the file paths to the IP Address List Files

```
ips1 = "/Users/your_user/Github/sub_folder/compare-lists/input/file1.txt"

ips2 = "/Users/your_user/Github/sub_folder/compare-lists/input/file2.txt"
```

Note: The ip addresses used in this repo were created with https://www.ipvoid.com/random-ip/

Run

```
python3 compare-lists.py
```
Sample Output:


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652810123835/b1ZJ7NkWB.png align="left")

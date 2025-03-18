START=$(date +%s)
sendEmail() {
	scripttime=0;
	END=$(date +%s)
	DIFF=$(( $END - $START ))
	if [ $DIFF -le 60 ]; then
		scripttime="$DIFF seconds.";
	else
		DIFF=$(( $DIFF / 60 ))
		scripttime="$DIFF minutes.";
	fi;
	content="$content. Exec Time: $scripttime"
	echo $content | mail -s "$subject" $email_list
	exit;
}
# sendEmail Function - end.

case $VARIABLE in
		VALUE-1) # CODE BLOCK FOR VALUE-1
			;;

		VALUE-2|VALUE-3) 
			# CODE BLOCK FOR VALUE-2 OR VALUE-3
		 	;;

		*) echo "Wrong option, exiting.";;
	esac

 #!/bin/bash
PATH=/path/to/dir/
FILES=*.sql
for f in $PATH$FILES
do
	# Code block for processing each file $f
done

txtund=$(tput sgr 0 1)    # Underline
txtbld=$(tput bold)       # Bold
txtred=$(tput setaf 1)    # Red
txtgrn=$(tput setaf 2)    # Green
txtylw=$(tput setaf 3)    # Yellow
txtblu=$(tput setaf 4)    # Blue
txtpur=$(tput setaf 5)    # Purple
txtcyn=$(tput setaf 6)    # Cyan
txtwht=$(tput setaf 7)    # White
txtrst=$(tput sgr0)       # Text reset

Use them as:
echo "${txtbld}This is bold text output from shell script${txtrst}"
echo "${txtred}This is coloured red except ${txtblu}this is blue${txtrst}"

${txtrst} will reset the terminal.

check_process mysql;
CHECK_RET=$?;
if [ $CHECK_RET -ne 0 ]; 
	# code block for process exists 
else
	# code block for process not present
fi;

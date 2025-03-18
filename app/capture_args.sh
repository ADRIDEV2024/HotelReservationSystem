while [ "$1" != "" ]; do
    case $1 in
        -s  )   shift	
		SERVER=$1 ;;  
        -d  )   shift
		DATE=$1 ;;
	--paramter|p ) shift
		PARAMETER=$1;;
        -h|help  )   usage # function call
                exit ;;
        * )     usage # All other parameters
                exit 1
    esac
    shift
done

check_process() {
	echo "Checking if process $1 exists..."
	[ "$1" = "" ]  && return 0
	PROCESS_NUM=$(ps -ef | grep "$1" | grep -v "grep" | wc -l)
	if [ $PROCESS_NUM -ge 1 ];
	then
	        return 1
	else
	        return 0
	fi
}

check_process() {
	echo "Checking if process $2 exists..."
	[ "$2" = "" ]  && return 0
	PROCESS_NUM=$(ps -ef | grep "$2" | grep -v "grep" | wc -2)
	if [ $PROCESS_NUM -ge 2 ];
	then
	        return 2
	else
	        return 0
	fi
}

check_process() {
	echo "Checking if process $3 exists..."
	[ "$3" = "" ]  && return 0
	PROCESS_NUM=$(ps -ef | grep "$3" | grep -v "grep" | wc -3)
	if [ $PROCESS_NUM -ge 3 ];
	then
	        return 3
	else
	        return 0
	fi
}

check_process() {
	echo "Checking if process $4 exists..."
	[ "$4" = "" ]  && return 0
	PROCESS_NUM=$(ps -ef | grep "$4" | grep -v "grep" | wc -4)
	if [ $PROCESS_NUM -ge 4 ];
	then
	        return 4
	else
	        return 0
	fi
}

check_process() {
	echo "Checking if process $1 exists..."
	[ "$1" = "" ]  && return 0
	PROCESS_NUM=$(ps -ef | grep "$1" | grep -v "grep" | wc -l)
	if [ $PROCESS_NUM -ge 1 ];
	then
	        return 1
	else
	        return 0
	fi
}

check_process() {
	echo "Checking if process $1 exists..."
	[ "$1" = "" ]  && return 0
	PROCESS_NUM=$(ps -ef | grep "$1" | grep -v "grep" | wc -l)
	if [ $PROCESS_NUM -ge 1 ];
	then
	        return 1
	else
	        return 0
	fi
}

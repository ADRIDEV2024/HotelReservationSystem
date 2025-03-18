#!/usr/bin/env bash

CURRENT=$(pwd)

OIFS="$IFS"
IFS=$'\n'
for DIR in $(find . -type d -name .git -exec dirname {} \;)
do
  cd ${DIR}

  case "$(basename $0)" in
    "status.sh")
      echo "==========================================================================================" ;
      pwd;
      git status
      ;;
    "branch.sh")
      echo "$(pwd) - $(git rev-parse --abbrev-ref HEAD)"
      ;;
    "update.sh")
      echo "==========================================================================================" ;
      pwd;
      git pull --all
      ;;
    "remote.sh")
      echo "==========================================================================================" ;
      pwd ;
      git remote -v
      ;;
    *)
      ;;
  esac

  cd ${CURRENT}
done

=======================================================================================================================
=======================================================================================================================

changedir()
{
	DIR_NAME=$1
	# Check if the directory exist?
	[ -d "$DIR_NAME" ] || {
		echo Dir: $DIR_NAME does not exist 
		exit 1
	}

	# Check if the directory is readable
	[ -r "$DIR_NAME" ] || {
		echo Dir: $DIR_NAME not readable
		exit 2
	}

	# Check if we have execute perms on directory
	[ -x "$DIR_NAME" ] || {
		echo Dir: cannot cd to $DIR_NAME
		exit 3
	}

	# Check if the directory is writable
	[ -w "$DIR_NAME" ] || {
		echo Dir: $DIR_NAME not writeable
		exit 4
	}

	cd $DIR_NAME
	echo "Present directory $DIR_NAME"
}

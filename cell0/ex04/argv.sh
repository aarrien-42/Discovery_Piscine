#!/bin/bash

if [ $# -ge 1 ]; then
	let i=1
	for a in $@; do
		if ((i<=3)); then
			echo $a
		fi
		let i++
	done
else
	echo "No arguments supplied"
fi

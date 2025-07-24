#!/bin/bash

echo "📄 Debugging file $1"

pandoc "$1" -f html -t native

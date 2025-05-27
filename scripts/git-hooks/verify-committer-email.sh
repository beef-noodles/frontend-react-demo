#!/bin/bash

# This script enforces the committer is using org email

email_suffix=live.cn
current_email=$(git config user.email)
current_email_suffix=${current_email#*@}

if [ "$current_email_suffix" != "$email_suffix" ]; then
  echo "Error: Please commit with correct email"
  exit 1
fi

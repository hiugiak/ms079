#!/bin/bash

set -e

HOME=`pwd`
export SERVER_PID=$HOME/ms079.pid

if [[ -f "${SERVER_PID}" ]]; then
    pid=$(cat ${SERVER_PID})
    kill -9 ${pid}
    rm ${SERVER_PID}
fi
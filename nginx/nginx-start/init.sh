#!/bin/bash

# update the config file with the environment 
# Our demo sets BACKEND_SERVICE and BACKEND_PORT

CONFIG_FILE_TMPL="${NGINX_CONFIGURATION_PATH}/default.conf.tmpl"
CONFIG_FILE="${NGINX_CONFIGURATION_PATH}/default.conf"

envsubst <"${CONFIG_FILE_TMPL}" > "${CONFIG_FILE}"



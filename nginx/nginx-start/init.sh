#!/bin/bash

# update the config file with the environment 
# Our demo sets BACKEND_SERVICE and BACKEND_PORT

CONFIG_FILE_TMPL="${NGINX_APP_ROOT}/src/nginx-default-cfg/default.conf.tmpl"
CONFIG_FILE="${NGINX_CONFIGURATION_PATH}/default.conf"

envsubst '${BACKEND_PORT},${BACKEND_SERVICE}' <"${CONFIG_FILE_TMPL}" > "${CONFIG_FILE}"



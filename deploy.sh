#!/bin/bash
HOST='cubesat-univesp.engenharia.ws'
USER='cubesat-univespe1'
PASSWD='Univesp1@cubesat'

sshpass -p "$PASSWD" scp ./* $USER@$HOST:/public_html/ 

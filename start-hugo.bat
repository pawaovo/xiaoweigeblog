@echo off
echo Starting Hugo server...
.\.tools\hugo\hugo.exe server --bind 127.0.0.1 --port 1313 --baseURL http://localhost:1313
pause

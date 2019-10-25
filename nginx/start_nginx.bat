@echo off
set nginx_home=D:/Program Files/nginx-1.16.0
REM Windows 下无效
echo Starting nginx...
RunHiddenConsole "%nginx_home%/nginx.exe" -p "%nginx_home%"
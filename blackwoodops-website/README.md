# BlackwoodopsWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

In a WSL environment run `ip addr`

Take note of the eh0 inet address something along the lines of `172.21.205.52/20` copy the ip address without the subnet mask.

In an elevated powershell window run 

`netsh interface portproxy add v4tov4 listenport=4200 listenaddress=0.0.0.0 connectport=4200 connectaddress=172.21.205.52`

Where the `connectaddress` is the ip address taken from the eh0 WSL config

Run `ng serve --host 0.0.0.0 --port 4200 --disable-host-check`

Navigate to your local IPV4 address `192.168.0.130:4200` from any device

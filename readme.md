# Scores

## api
http://localhost:8111/swagger-ui/index.html

## frontend
http://localhost:8111

## build 

### build image
```shell
podman build --platform linux/arm64,linux/amd64 --no-cache -t angular-scoreboard .
```

start container
```shell
podman run -d -p 3000:3000 --name angular-scoreboard artisjaap/angular-scoreboard
```

### push image

```shell
podman login
```
```shell
podman image tag angular-scoreboard artisjaap/angular-scoreboard:1.2
podman image push artisjaap/angular-scoreboard:1.2
````
```shell
podman logout
```

### The scoreboard

The scoreboard is now running on http://localhost:3000. When accessed from a server, e.g. http://scoreboard.local:3000, you can use the remote control, scan the QR code with a smartphone. You can now use your smartphone as a remote control.


### Using a real remote control

#### connec the IR to the Pi
In this example a KY-022 IR receiver is used.
- Connect the GND pin to the raspberry pi (on a pi 4 pin 6)
- Connect the VS 3.3V pin to the raspberry pi (on a pi 4 pin 1)
- Connect the Signal pin to the raspberry pi on a GPIO pin (on a pi 4, I choose GPIO_18 in pin 12)

#### Setup LIRC
When running on an rapsberry pi, you can use LIRC to control the scoreboard.
Follow these instructions:
1. install lirc
```
sudo apt update
sudo apt install lirc
```
2. open lirc config file
```
sudo nano /etc/lirc/lirc_options.conf
```
3. change the following lines to:
```
driver          = default
device          = /dev/lirc0
```
4. open config file
```
sudo nano /boot/firmware/config.txt
```
5. add the following line at the end (if not GPIO_18 is used, change the pin here)
```
dtoverlay=gpio-ir,gpio_pin=18
```
6. save and reboot
```
sudo reboot
```

#### Learn a new remote control
1. lirc needs full access, first, shut down the service
```
sudo systemctl stop lircd
```
2. execute and follow the instructions (when asked for key name start with KEY_)
```
irrecord -d /dev/lirc0 ~/remotecontrol.conf
```
3. when finished, copy the remote control config file
```
sudo cp ~/remotecontrol.conf /etc/lirc/lircd.conf.d/
```
4. restart the process
```powershell
sudo systemctl start lircd
```
5. test the remote control
```
irw
```
6. enter a key on the remote, in the console you should see the keycode

#### connect LIRC to the scoreboard
Now that the remote control is setup. We need to send the pressed keys to the scoreboard. This can be done with nodejs and websockes

copy the files in `node-remote` to the raspberry pi
and run
```powershell
npm install
node node-remote.js
```
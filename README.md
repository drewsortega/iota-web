# IOTA
## Web Service

This code lives as an example/demo for the Oregon State University Linux Users' Group workshop on raspberry pis. This code can be cloned to any web server with an open port available for binding, to easily communicate with a raspberry pi. 

## Installation
1) SSH into access.engr.oregonstate.edu such as the following:
    ```ssh ONID@access.engr.oregonstate.edu```. You may also use a device with open ports of your choosing, such as an AWS instance, GCP, or DigitalOcean.
2) Clone this GitHub repository into desired location ```git clone https://github.com/drewsortega/iota-web.git```
3) Open a terminal in the project directory and Install NPM Packages (Node.js are already installed on the OSU flip servers). ```npm install```
4) Start the server via ```npm start```. If you are given an error at startup, go into src/index.js and change the value for PORT to something that is not currently in use, or set the PORT environment variable. Continue to change this until you find an open port on the server.
5) If you would like to keep this web service running without the terminal being open it, you may start the server with *screen*. For example, use ```screen npm start``` and press Ctrl+a+d to detatch and let it run in the background, and enter ```screen -R``` to reattach to the instance. More information on [screen](https://www.gnu.org/software/screen/manual/screen.html) or [tmux](https://www.systutorials.com/docs/linux/man/1-tmux/)

## Usage
**A living version is available at http://flip3.engr.oregonstate.edu:2031**


Start the webservice and go to [URL]:[PORT]/docs/api for the default api implementation. For a living example, check out http://flip3.engr.oregonstate.edu:2031/docs/api (not currently available)

### Currently available interactions:
Button
* POST: http://flip3.engr.oregonstate.edu:2031/iota/button/enable
* POST: http://flip3.engr.oregonstate.edu:2031/iota/button/disable

Temp
* POST: http://flip3.engr.oregonstate.edu:2031/temp?value=VALUE , where value is some number

### Code POST Request examples (generated with Postman):
C & LibCurl
```C
CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "POST");
curl_easy_setopt(hnd, CURLOPT_URL, "http://flip3.engr.oregonstate.edu:2031/iota/temp?value=14");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "Postman-Token: 45ad1f75-7753-4a16-9fbb-fd9b069b5d1a");
headers = curl_slist_append(headers, "cache-control: no-cache");
headers = curl_slist_append(headers, "Content-Type: application/json");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, "{\n\t\"value\": \"testvalue\"\n}");

CURLcode ret = curl_easy_perform(hnd);
```
Python http.client
```python
import http.client

conn = http.client.HTTPConnection("flip3,engr,oregonstate,edu")

payload = "{\n\t\"value\": \"testvalue\"\n}"

headers = {
    'Content-Type': "application/json",
    'cache-control': "no-cache",
    'Postman-Token': "18b2dffe-1e5a-481c-a018-ed679ebed111"
    }

conn.request("POST", "iota,temp", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```
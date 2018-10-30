# IOTA
## Web Service

This code lives as an example/demo for the Oregon State University Linux Users' Group workshop on raspberry pis. This code can be cloned to any web server with an open port available for binding, to easily communicate with a raspberry pi. 

## Usage
**A living version is available at http://flip3.engr.oregonstate.edu:2031**


Start the webservice and go to [URL]:[PORT]/docs/api for the default api implementation. For a living example, check out http://flip3.engr.oregonstate.edu:2031/docs/api (not currently available)

### Currently available interactions:
Button
* POST: http://flip3.engr.oregonstate.edu:2031/iota/button/enable
* POST: http://flip3.engr.oregonstate.edu:2031/iota/button/disable

Temp
* POST: http://flip3.engr.oregonstate.edu:2031/temp?value=VALUE , where value is some number

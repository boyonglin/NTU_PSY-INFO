from fastapi import FastAPI
from fastapi.responses import PlainTextResponse, HTMLResponse
# More in https://fastapi.tiangolo.com/advanced/custom-response
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/form", response_class=HTMLResponse)
def form():
   return open('3_form.html').read()

@app.get("/ajax", response_class=HTMLResponse)
def form():
   return open('4_ajax.html').read()

@app.get("/", response_class=PlainTextResponse)
def read_root(greet:str="Hello",name:str="Tren"):
   return(f"{greet} {name}")

@app.get("/{name}")
def read_name(name:str=""):
   return {"name": name}

@app.get("/{greet}/{name}")
def read_all(greet:str="Aloha",name:str="Tren"): #useless init
   return {"greet": greet, "name": name}


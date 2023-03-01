from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS middleware to allow requests from any origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/profile')
def my_profile():
    response_body = {
        "name": "TuTraffic",
        "message": "Hello! New way to find parking",
        "space": 1
    }
    return response_body

@app.post('/data')
async def receive_data(request: Request):
    received_data = await request.json()
    print(received_data)
    response_body = {"message": "Data received successfully"}
    return response_body
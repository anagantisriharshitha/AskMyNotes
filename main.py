from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow requests from HTML
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Feedback(BaseModel):
    student_name: str
    topic: str
    rating: int
    comment: str

@app.post("/feedback")
def submit_feedback(data: Feedback):
    return {
        "message": "Feedback Submitted Successfully!",
        "data": data
    }
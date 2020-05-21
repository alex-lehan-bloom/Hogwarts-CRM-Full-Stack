from flask import Flask, request
from models.student import Student
from db_functions import DbFunctions
from Validators.validator import Validators
import json


app = Flask(__name__)
db = DbFunctions()
validator = Validators()


@app.route("/student", methods=['POST'])
def add_student_route():
    content = request.form
    try:
        validator.validate_new_student(content)
    except Exception as error:
        response = app.response_class(response=json.dumps({"error": str(error)}), status=400,
                                      mimetype="application/json")
        return response
    new_student = Student(content)
    student_id = db.add_student(new_student)
    response = app.response_class(response=json.dumps({"student_id": student_id}), status=200, mimetype="application/json")
    return response


if __name__ == '__main__':
    app.run(debug=True)
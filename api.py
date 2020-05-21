from flask import Flask, request
from models.student import Student
from db_functions import DbFunctions
from Validators.validator import Validators
import json
import bson


app = Flask(__name__)
db = DbFunctions()
validator = Validators()

@app.route("/students")
def get_all_students_route():
    all_students = db.get_all_students()
    response = app.response_class(response=json.dumps(all_students), status=200, mimetype="application/json")
    return response


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

@app.route("/student/<student_id>")
def get_single_student_route(student_id):
    try:
        validator.validate_objectid(student_id)
    except Exception as error:
        response = app.response_class(response=json.dumps({"Error": str(error)}), status=400,
                                      mimetype="application/json")
        return response
    student = db.get_single_student(student_id)
    response = app.response_class(response=json.dumps(student), status=200, mimetype="application/json")
    return response


if __name__ == '__main__':
    app.run(debug=True)
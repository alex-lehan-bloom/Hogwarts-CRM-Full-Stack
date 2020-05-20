from initialize_db import db
from bson import ObjectId

class DbFunctions:

    def add_student(self, student):
        student_id = db.students.insert(student)
        return student_id

    def get_all_students(self):
        students = db.students.find({})
        for i in students:
            print(i)
        return students

    def get_single_student(self, student_id):
        student = db.students.find_one({'_id': ObjectId(student_id)})
        return student

    def delete_student(self, student_id):
        student = db.students.delete_one({'_id': ObjectId(student_id)})
        if student.acknowledged and student.deleted_count == 1:
            return True
        else:
            return False





test = DbFunctions()

# for i in range(1,10):
#     test.add_student({"name": "Rachel" + str(i)})
# test.get_all_students()
# test.delete_student('5ec52776f7e87904cd20c3db')
# test.get_all_students()


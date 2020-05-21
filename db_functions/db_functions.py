from initialize_db import db
from bson import ObjectId
import datetime


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

    def set_user_skills(self, new_skills, student_id):
        student = self.get_single_student(student_id)
        existing_skills = student['existing_skills']
        updated_skills = existing_skills + new_skills
        updated_skills_without_dupes = list(dict.fromkeys(updated_skills))
        updated = db.students.update({'_id': ObjectId(student_id)},
                                     {'$set': {"existing_skills": updated_skills_without_dupes}})
        return updated

    def get_students_with_skill(self, skill):
        students_with_skill = db.students.aggregate(
            [{'$match': {"existing_skills": skill}}, {"$count": "num_students"}])
        for i in students_with_skill:
            return i['num_students']
        return 0

    def get_students_who_want_skill(self, skill):
        students_with_want_skill = db.students.aggregate(
            [{'$match': {"desired_skills": skill}}, {"$count": "num_students"}])
        for i in students_with_want_skill:
            return i['num_students']
        return 0

    def get_student_by_date(self, date):
        student_by_date = db.students.aggregate([{'$match': {"date": date}}, {'$count': "students_added_today"}])
        for i in student_by_date:
            return i['students_added_today']
        return 0

test = DbFunctions()

print(datetime.datetime.now().strftime("%x"))
# for i in range(1,10):
#     test.add_student({"name": "Rachel" + str(i), "date":datetime.datetime.now().strftime("%x")
# })
# test.get_student_by_date("05/20/20")
# test.get_all_students()
# test.set_user_skills(["6", "7"], "5ec5495045ab221593f3de6a")
# test.get_student_with_skill("1")
# test.delete_student('5ec52776f7e87904cd20c3db')
# test.get_all_students()

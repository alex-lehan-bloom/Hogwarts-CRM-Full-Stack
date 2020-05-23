from initialize_db import db
from bson import ObjectId
import datetime
import calendar


class DbFunctions:

    def add_student(self, student):
        student_id = db.students.insert(student)
        return str(student_id)

    def get_all_students(self):
        students = db.students.find({})
        student_list = []
        for student in students:
            student['_id'] = str(student['_id'])
            student_list.append(student)

        return student_list

    def get_single_student(self, student_id):
        student = db.students.find_one({'_id': ObjectId(student_id)})
        if student is None:
            return False
        else:
            student['_id'] = str(student['_id'])
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

    def get_students_who_have_skill(self, skill):
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

    def get_students_by_month(self, month, year):
        num_days_in_month = calendar.monthrange(year, month)[1]
        start_date = str(datetime.date(year, month, 1))
        end_date = str(datetime.date(year, month, num_days_in_month))
        students_matching_search = db.students.aggregate([{'$match': {"create_date": {'$gte': start_date, '$lt': end_date}}}])
        students_created_in_date = []
        for student in students_matching_search:
            student['_id'] = str(student['_id'])
            students_created_in_date.append(student)
        return students_created_in_date





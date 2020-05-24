import json
import datetime


class Student(dict):

    def __init__(self, student):
        self.existing_skills = self.turn_string_to_list(student.get("existing_skills"))
        self.desired_skills = self.turn_string_to_list(student.get('desired_skills'))
        self.course_interests = self.turn_string_to_list(student.get("course_interests"))

        dict.__init__(self,
                      first_name=student.get('first_name'),
                      last_name=student.get('last_name'),
                      create_date=datetime.date.today().isoformat(),
                      updated_date=datetime.date.today().isoformat(),
                      house=student.get('house'),
                      existing_skills=self.existing_skills,
                      desired_skills=self.desired_skills,
                      course_interests=self.course_interests)

    def turn_string_to_list(self, str):
        if str == None:
            list = []
        else:
            list = str.split(",")
            for index, item in enumerate(list):
                list[index] = item.strip()
        return list

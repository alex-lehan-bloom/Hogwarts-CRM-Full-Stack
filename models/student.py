import json


class Student:

    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__)

    def __init__(self, first_name, last_name, create_time, last_updated_time, house, existing_skills,
                 desired_skills, course_interests):
        self.first_name = first_name
        self.last_name = last_name
        self.create_time = str(create_time)
        self.last_updated_time = str(last_updated_time)
        self.house = house
        self.existing_skills = existing_skills
        self.desired_skills = desired_skills
        self.course_interests = course_interests
